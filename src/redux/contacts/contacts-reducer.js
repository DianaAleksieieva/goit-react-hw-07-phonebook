import actionTypes from './contacts-type'

export const contactListReducer = (state = [], { type, payload }) => {
    switch (type) {
        case actionTypes.ADDCONTACTS: 
            return  [...state, payload];
        case actionTypes.REMOVECONTACTS:
            return  (state.filter(contact => contact.id !== payload)) ;
        default: return state;
    }
};
export const filterReducer = (state = '', { type, payload }) => {
    switch (type) {
        case actionTypes.FILTERCONTACTS:
            return payload ;
        default: return state;
    }
};
