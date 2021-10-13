import { persistStore, persistReducer } from 'redux-persist'
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { contactListReducer, filterReducer } from './contacts/contacts-reducer'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'contacts',
    storage,
  blacklist: ['filter']
}
const rootReducer = combineReducers({
    contactList: contactListReducer,
    filter:filterReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    devTools:process.env.NODE_ENV === 'development',
});

let persistor = persistStore(store)
 
export default { store, persistor};
