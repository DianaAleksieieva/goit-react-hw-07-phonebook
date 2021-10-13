import React from 'react';
import { useDispatch } from 'react-redux';
import { FilterContact } from '../../redux/contacts/contacts-action.js'

export default function Filter() {
  const dispatch = useDispatch()
  const changeFilter = event => {
    dispatch(FilterContact(event.currentTarget.value))
  }
    return <>
    <label>
      <h3>Find contact by Name</h3>
      <input type="text" onChange={changeFilter} />
    </label> </>
}