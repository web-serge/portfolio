import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './button.module.scss'

export type PropsButton<T extends ElementType = 'button'> = {
    as?: T
    fullWidth?: boolean
    variant?: 'primary' | 'secondary' | 'success'
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>({
                                                             as,
                                                             className,
                                                             fullWidth,
                                                             variant = 'primary',
                                                             ...rest
                                                         }: PropsButton<T>) => {
    const Component = as ?? 'button'

    return (
        <Component
            className={`${s.button} ${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`}
            {...rest}
        />
    )
}
