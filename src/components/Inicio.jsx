import React from 'react'
import {useParams} from 'react-router-dom'

const Inicio = () => {

    const {nombre} = useParams()
  return (
    <div>Bienvenido al inicio {nombre}</div>
  )
}

export default Inicio

