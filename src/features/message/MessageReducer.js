import defaultState from '../../app/defaultState';

const messageReducer = (state, action) => {
    console.log(action)
    if (state === undefined) return defaultState
    switch (action.type) {
        case 'message/set':
            return {...state, message: action.payload}
        case 'message/unset':
            return {...state, message: null}
        default: return state;
    }
}

export default messageReducer;