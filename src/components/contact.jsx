import React from 'react'
import PropTypes from 'prop-types'
import Contact from '../models/contact.class'

const ContactComponent = ({contacto}) => {
  return (
    <div>
        <h4>Nombre: {contacto.nombre}</h4>
        <h4>Apellido: {contacto.apellido}</h4>
        <h4>Email: {contacto.email}</h4>
        <h4>Conectado: {contacto.conectado ? 'Contacto En Línea' : 'Contacto no disponible'}</h4>
    </div>
  )
}

ContactComponent.propTypes = {
  contacto : PropTypes.instanceOf(Contact)
}

export default ContactComponent