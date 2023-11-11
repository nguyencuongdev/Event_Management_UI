export const initialState = {
    currentUser: null,
    registedEvents: []
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'setInforUser':
            state.currentUser = action.payload;
            return state;
        case 'clearInforUser':
            state.currentUser = null;
            return state;
        case 'storeRegistedEvent':
            state.registedEvents = action.payload;
            return state;
        case 'clearRegistedEvents':
            state.registedEvents = null;
            return state;
        case 'addRegistedEvent':
            console.log(action.payload);
            state.registedEvents.push(action.payload);
            return state;
        default:
            throw new Error('Invalid action');
    }
}

export default reducer;