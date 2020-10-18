import { ADD, EDIT, DELETE } from '../actions/appActions';

export const appReducer = (state = [], action) => {
    switch (action.type) {
        case ADD:
            return [...state, action.payload];
        case EDIT:
            return state.map(item => {
                if (item.id !== action.payload.id) {
                    return rate;
                }

                const { author, comment, rate } = action.payload;

                return ({
                    author,
                    comment,
                    id: item.id,
                    rate,
                })
            });
        case DELETE:
            return state.filter(item => item.id !== action.payload.id);
        default:
            console.warn('Brak akcji ' + action.type);
            return state;
    }    
}