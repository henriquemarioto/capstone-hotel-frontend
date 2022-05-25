import { ReactNode } from "react"
import { Container } from "./style"

interface Props {
    children: ReactNode
}

const Margin = ({children}: Props) => {
    return <Container>{children}</Container>
}

export default Margin