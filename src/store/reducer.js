export const initialState = {
    currentUser: {
        userName: '',
        firstName: '',
        lastName: '',
        token: '',
        message_error: ''
    },
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'start_login':
            return state;
        case 'login_success':
            return state;
        case 'login_failure':
            return state;
        case 'start_logout':
            return state;
        case 'logout_success':
            return state;
        case 'logout_failure':
            return state;
        default:
            throw new Error('Invalid action');
    }
}

export default reducer;