

export function startLogin() {
    return {
        type: 'start_login',
    }
}
export function loginSuccess(data) {
    return {
        type: 'login_success',
        payload: data
    }
}
export function loginFailure(message) {
    return {
        type: 'login_failure',
        payload: message
    }
}
export function startlogout() {
    return {
        type: 'start_logout',
    }
}

export function logoutSuccess(data) {
    return {
        type: 'logout_success',
        payload: data
    }
}
export function logoutFailure(message) {
    return {
        type: 'logout_failure',
        payload: message
    }
}

