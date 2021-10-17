import React, { useState  } from 'react'
import { Container} from './App.styled.jsx';
import Form  from './Form/Form';
import Filter  from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { useGetAllContactsQuery } from '../redux/contacts/contacts-slice'

export default function App() {
  const [filter, setFilter] = useState('');
  const { data } = useGetAllContactsQuery()
 
const changeFilter = event => {
    setFilter(event.currentTarget.value);
};
const findContact = () => {
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = data.filter(contacts =>
      contacts.name.toLowerCase().includes(normalizedFilter),
    );
    return filteredContacts
  };
  console.log(Filter.filter)
  return (
  
      <Container >
        <h2>PhoneBook</h2>
        <Form/>
        <h2>Contacts</h2>
        {data && <ContactList contacts={findContact()} />}
        <Filter value={filter}
        onChange={changeFilter} />
      </Container>
    )
}
