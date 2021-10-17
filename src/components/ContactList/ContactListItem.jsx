import React from 'react';
import { P, DeleteButton } from '../App.styled.jsx';
import { useDeleteContactMutation } from '../../redux/contacts/contacts-slice'

const ContactListItem = ({contact }) => {
    const [deleteContact, { isLoading: isDeleting },] = useDeleteContactMutation()
    return (
    <li key={contact.id}>
             <P>{contact.name}:</P> <P>{contact.number}</P>
        <DeleteButton
          type="button"
          onClick={() => deleteContact(contact.id)}> {isDeleting ? 'Deleting...': 'Delete'}
        </DeleteButton>
      </li>
    )
    };

export default ContactListItem;