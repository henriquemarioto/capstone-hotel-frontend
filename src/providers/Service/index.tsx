import { createContext, ReactNode, useContext, useState } from "react";


interface ServiceProps {
    children: ReactNode
}

interface ServiceContextData {

}

const ServiceContext = createContext<ServiceContextData>({} as ServiceContextData)

const useService = () => {
    const context = useContext(ServiceContext)

    if (!context) {
        throw new Error ('teste')
    }

    return context
}

const ServiceProvider = ({children}: ServiceProps) => {
    return (
        <ServiceContext.Provider value={{}}>
            {children}
        </ServiceContext.Provider>
    )
}

export {ServiceProvider, useService}