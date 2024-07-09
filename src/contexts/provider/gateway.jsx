import { useReducer } from 'react'
import { gatewayReducer, gatewayState } from '../reducer/gateway'
import { Gateway } from '../context'

export const GatewayProvider = ({ children }) => {
    const [stateGateway, dispatchGateway] = useReducer(gatewayReducer, gatewayState)

    return <Gateway.Provider value={{ stateGateway, dispatchGateway }}>{children}</Gateway.Provider>
}
