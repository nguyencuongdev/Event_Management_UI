export function setInforUser(data) {
    return {
        type: 'setInforUser',
        payload: data,
    }
}
export function clearInforUser() {
    return {
        type: 'clearInforUser',
    }
}

export function storeRegistedEvent(data) {
    return {
        type: 'storeRegistedEvent',
        payload: data,
    }
}

export function clearRegistedEvent() {
    return {
        type: 'storeRegistedEvent',
    }
}

