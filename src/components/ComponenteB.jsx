import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Contact from '../models/contact.class'

const ContactComponent = ({contacto}) => {
  
  const [estado, setEstado] = useState(contacto.conectado)
  
  return (
    <div>
        <h4>Nombre: {contacto.nombre}</h4>
        <h4>Apellido: {contacto.apellido}</h4>
        <h4>Email: {contacto.email}</h4>
        <h4>Conectado: {estado ? 'Contacto En Línea' : 'Contacto no disponible'}</h4>
        <button onClick={()=>setEstado(!estado)}>{estado ? 'Desconectar' : 'Conectar'}</button>
    </div>
  )
}

ContactComponent.propTypes = {
  contacto : PropTypes.instanceOf(Contact)
}

export default ContactComponent
