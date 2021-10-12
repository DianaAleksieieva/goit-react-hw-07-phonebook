
import { v4 as uuidv4 } from 'uuid';
export const AddContact = ({ name, number }) => ({
    type: 'AddContact',
    payload: { name,number, id:uuidv4() },
})
export const RemoveContact = id => ({
    type: 'RemoveContact',
    payload: id ,
    
})
export const FilterContact = filter => ({
    type: 'FilterContact',
    payload: filter
    
})

export const showContacts = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_FILTERED: 'SHOW_FILTERED',
}