import React from 'react'
import Clases, { listaClases } from './Clases'
// import { Redirect } from 'react-router-dom'
import NotFound from './NotFound'

const DataFeededLesson = ({ match }) => {
  if (match.params.id <= listaClases.length && match.params.id >= 0) {
    return (
      <Clases clase={listaClases[match.params.id]} />
    )
  } else {
    return (
      <NotFound />
    )
  }
}

export default DataFeededLesson
