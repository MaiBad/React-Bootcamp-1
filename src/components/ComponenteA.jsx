import React from 'react'
import Contact from '../models/contact.class';
import ContactComponent from './contact';

const ContactList = () => {

    const defaultContact = new Contact('Charles','Jeferson','cjeferson@hotmail.com',true);

    return (
        <div>
            <h1>Tus Contactos</h1>
            <ContactComponent contacto={defaultContact}></ContactComponent>
        </div>  
    )
}

export default ContactList
