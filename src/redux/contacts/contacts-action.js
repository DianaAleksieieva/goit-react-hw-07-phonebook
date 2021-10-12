import { v4 as uuidv4 } from 'uuid';
import actionTypes from './contacts-type'

export const AddContact = ({ name, number }) => ({
    type: actionTypes.ADDCONTACTS,
    payload: { name,number, id:uuidv4() },
})
export const RemoveContact = id => ({
    type: actionTypes.REMOVECONTACTS,
    payload: id ,
})
export const FilterContact = filter => ({
    type: actionTypes.FILTERCONTACTS,
    payload: filter  
})
