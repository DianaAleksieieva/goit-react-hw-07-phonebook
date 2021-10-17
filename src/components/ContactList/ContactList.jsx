import React from 'react';
import { ContactStyledList } from '../App.styled.jsx';
import ContactListItem from './ContactListItem'

const ContactList = ({ contacts, deleteContact, deleting }) => (
  <ContactStyledList>
    {contacts.map((contact) => (
      <ContactListItem key={contact.id} contact={contact}/>
    ))}
  </ContactStyledList>
);

export default ContactList;