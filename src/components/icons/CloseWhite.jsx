import React from 'react'
import closeWhite from '../../assets/cerrarBlanco.png'

const CloseWhite = ({className, onClick}) => {
  return (
    <img src={closeWhite} onClick={onClick} className={className} alt="" />
  )
}

export default CloseWhite