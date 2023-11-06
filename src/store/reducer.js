export const initialState = {
    currentUser: null,
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'setInforUser':
            state.currentUser = action.payload;
            return state;
        case 'clearInforUser':
            state.currentUser = null;
            return state;
        default:
            throw new Error('Invalid action');
    }
}

export default reducer;