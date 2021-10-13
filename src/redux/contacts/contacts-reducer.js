import { AddContact, RemoveContact,FilterContact} from './contacts-action'
import { createReducer } from '@reduxjs/toolkit';

export const contactListReducer = createReducer([], {
    [AddContact]: (state, {payload}) => [...state, payload],
    [RemoveContact]: (state, {payload})=> state.filter(contact => contact.id !== payload),
})

export const filterReducer = createReducer('', {
    [FilterContact]: (_, {payload}) => payload,
})

