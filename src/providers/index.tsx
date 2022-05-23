import { ReactNode } from "react";
import { ServiceProvider } from "./Service"; 

interface AppProvider {
    children: ReactNode
}

const Provider = ({children}: AppProvider) => {
    return (
        <ServiceProvider>
            {children}
        </ServiceProvider>
    )
}

export default Provider