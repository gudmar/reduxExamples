import defaultState from '../../app/defaultState';

const ShoppingReducer = (state, action) => {
    if (state === undefined) return defaultState;
    switch (action.type) {
        case 'shopping/add':{
            return [...state, action.payload]
        }
        case 'shopping/pop':{
            if (state.length < 0) return state;
            let copyOfState = [...state];
            copyOfState.pop();
            return copyOfState;
        }
        case 'shopping/remove':{
            if (state.length < 0) return state;
            if (action.payload < 0) return state;
            if (action.payload >= state.length) return state;
            let copyOfState = [...state];
            copyOfState.splice(action.payload, 1);
            return copyOfState;
        }
        default: return state;
    }
}

export default ShoppingReducer;