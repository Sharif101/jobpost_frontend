import { DefSessionStorage, GetSessionStorage, SetSessionStorage } from '../storage/session'

export const gatewayState = DefSessionStorage('gateway', { trx: '' })

export const gatewayReducer = (state, action) => {
    switch (action.type) {
        case 'get':
            SetSessionStorage('gateway', { trx: state.info })
            return JSON.parse(GetSessionStorage('gateway'))
        case 'set':
            SetSessionStorage('gateway', { trx: action.payload })
            return JSON.parse(GetSessionStorage('gateway'))
        case 'remove':
            SetSessionStorage('gateway', { trx: '' })
            return JSON.parse(GetSessionStorage('gateway'))
        default:
            return state
    }
}
