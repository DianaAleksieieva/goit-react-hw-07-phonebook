import React from 'react';
import { Container} from './App.styled.jsx';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { RemoveContact } from '../redux/contacts/contacts-action.js'
import { useSelector, useDispatch } from 'react-redux';

export default function App() {
  const dispatch = useDispatch()
  const contacts = useSelector((state) => state.contactList)
  const filter = useSelector((state) => state.filter)

  const deleteContact = id => {
    dispatch(RemoveContact(id))
  }

  const findContact = () => {
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contacts =>
      contacts.name.toLowerCase().includes(normalizedFilter),
    );
    return filteredContacts
  };
  
    return (
      <Container >
        <h2>PhoneBook</h2>
        <Form/>
        <h2>Contacts</h2>
        <ContactList contacts={findContact()} deleteContact={deleteContact} />
        <Filter/>
      </Container>
    )
}
