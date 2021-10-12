import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {contactListReducer,filterReducer} from './contacts/contacts-reducer'

const rootReduser = combineReducers({
    contactList: contactListReducer,
    filter:filterReducer
})

const store = createStore(rootReduser, composeWithDevTools());
export default store;
