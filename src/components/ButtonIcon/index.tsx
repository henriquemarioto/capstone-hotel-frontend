import { ButtonHTMLAttributes, ReactNode } from 'react'
import { IconType } from 'react-icons'
import {Button} from './style'

interface ButtonIconProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    icon: IconType
    children?: ReactNode
}

const ButtonIcon = ({icon: Icon, children, ...rest}:ButtonIconProps) => {
    return (
        <Button {...rest}>
            <Icon />
            {children}
        </Button>
    )
}

export default ButtonIcon