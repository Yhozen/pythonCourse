import React from 'react'
import Clases, { listaClases } from './Clases'
import NotFound from './NotFound'

const DataFeededLesson = ({ match }) => {
  if (match.params.id <= listaClases.length) {
    return (
      <Clases clase={listaClases[match.params.id]} />
    )
  } else {
    return NotFound
  }
}

export default DataFeededLesson
