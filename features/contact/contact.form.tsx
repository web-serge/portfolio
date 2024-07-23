import s from './contact.form.module.scss'
import {ElementRef, useRef, useState} from "react";
import emailjs from '@emailjs/browser';
import {TextField} from "@/component/input/TextField";
import {Button} from "@/component/button/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons/faPaperPlane";
import {faSpinner} from "@fortawesome/free-solid-svg-icons/faSpinner";
import {faCheck} from "@fortawesome/free-solid-svg-icons/faCheck";

export const ContactForm = () => {
    const formRef = useRef<ElementRef<'form'>>(null);
    const [submit, setSubmit] = useState(false)
    const [buttonText, setButtonText] = useState<'Submit' | 'Success'>('Submit')

    const sendEmail = (e: any) => {
        setSubmit(true)
        e.preventDefault();
        if (!formRef.current) return
        emailjs.sendForm('service_waovfet', 'template_iio3jpm', formRef.current, '0JnnOcAZwZanj7KRz')
            .then((result) => {
            }, (error) => {
            })
            .finally(() => {
                setSubmit(false)
                setButtonText(prev => 'Success')
                setTimeout(() => {
                    setButtonText('Submit')
                }, 2000)
            })
        e.target.reset()
    };

    return (
        <form ref={formRef} onSubmit={sendEmail} className={s.form}>
            <TextField placeholder='First name*' name={'user_name'} required/>
            <TextField placeholder='Last name' name={'last_name'}/>
            <TextField placeholder='Email*' name={'user_email'} type={'email'} required/>
            <TextField placeholder='Subject' name={'subject'}/>
            <textarea placeholder='Message*' name='message' required/>
            {!submit && <Button variant={buttonText === 'Success' ? 'success' : 'primary'}>
                {buttonText === 'Submit' ?
                    <>
                        <span>{buttonText}</span>
                        <span>{buttonText} <FontAwesomeIcon icon={faPaperPlane}/></span>
                    </>
                    :
                    <span>{buttonText} <FontAwesomeIcon icon={faCheck} bounce/></span>
                }
            </Button>}
            {submit && <Button disabled>
                <FontAwesomeIcon icon={faSpinner} spin/>
            </Button>}
        </form>
    );
};