import React, { useState, useContext } from 'react'
import createPersistedState from 'use-persisted-state'
import { database } from '../../firebase'
import { Store } from '../../Store'
import { Controlled as CodeMirror } from 'react-codemirror2'

import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/python/python'
import 'codemirror/mode/javascript/javascript'
import './clases.css'

const Clases = (props) => {
  const useTextState = createPersistedState(`state-clase-${props.clase.n}`)
  const { state: { user } } = useContext(Store)
  const [ compiled, setCompiled ] = useState('')
  const [ textValue, setTextValue ] = useTextState('')

  const hecho = () => {
    let nameRef = database.ref().child('vistos').child(user.uid)
    let n = props.clase.n
    nameRef.on('value', snapshot => {
      let data = snapshot.val()
      if (data) {
        if (!data.includes(n)) {
          data.push(n)
          nameRef.set(data)
        }
      } else {
        nameRef.set([n])
      }
    })
  }

  const outputFunction = text => setCompiled(prevOutput => prevOutput + text)
  
  const handleSubmit = async (event) => {
    event.preventDefault()
    setCompiled(prevOutput => '')
  
    await import(
      /* webpackChunkName: "skulpt", webpackPreload: true */
      '../../lib/skulpt.min.js'
    )
    await import(
      /* webpackChunkName: "skulpt-stdlib", webpackPrefetch: true */
      '../../lib/skulpt-stdlib'
    )
    const { Sk } = window
    function builtinRead (x) {
      if (Sk.builtinFiles === undefined || Sk.builtinFiles['files'][x] === undefined) {
        throw Error('File not found:')
      } else {
        return Sk.builtinFiles['files'][x]
      }
    }
    Sk.configure({ output: outputFunction, read: builtinRead })
    var myPromise = Sk.misceval.asyncToPromise(function () {
      return Sk.importMainWithBody('<stdin>', false, textValue, true)
    })
    myPromise.then((mod) => {

    },
    (err) => {
      setCompiled(err.toString())
    })
  }

  const CodeMirrorConfig = {
    // theme: 'material',
    lineNumbers: true
  }
  return (
    <div className='row' onSubmit={handleSubmit}>
      <div className='col s4'>
        <h5>{props.clase.title}</h5>
        <div className='texto-clases'>
          <pre >{props.clase.text}</pre>
        </div>
      </div>
      <form className='col s4'>
        <div className='row' style={{marginTop: '3px'}}>
          <CodeMirror
            value={textValue}
            options={CodeMirrorConfig}
            onBeforeChange={(editor, data, value) => {
              setTextValue(value)
            }}
            onChange={(editor, data, value) => {
            }}
          />
        </div>
        <button className='waves-effect waves-light btn' type='submit' value='Submit' >COMPILAR</button>
        {user && (<button className='waves-effect waves-light btn' onClick={hecho} >HECHO </button>)}
      </form>
      <div className='col s4 console' >
        <h5>OUTPUT</h5>
        <div id='console'>
          {compiled}
        </div>
      </div>
    </div>
  )
}

export default Clases
