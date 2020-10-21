import { ADD } from '../actions/appActions';

export const validateAuthorMiddleware = store => next => action => {
    if (action.type === ADD && !action.payload.author.length) {
        return;
    }

    if (action.type === ADD && !action.payload.comment.length) {
        return;
    }
    
    next(action);
};