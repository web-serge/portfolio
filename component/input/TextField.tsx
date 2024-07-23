import s from './text.field.module.scss'
import {InputHTMLAttributes} from "react";


interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export const TextField = ({...rest}: Props) => {
    return (
        <input {...rest} className={s.input}>
        </input>
    );
};