import s from './contact.module.scss'
import {ContactForm} from "@/features/contact/contact.form";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhoneVolume} from "@fortawesome/free-solid-svg-icons/faPhoneVolume";
import {faEnvelopeCircleCheck} from "@fortawesome/free-solid-svg-icons/faEnvelopeCircleCheck";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons/faLocationDot";

export const Contact = () => {
    const contacts = [
        {icon: faPhoneVolume, contact: '+79996243090', href: 'tel:+79996243090', subtitle: 'Call Me', color: '#0dcaf0'},
        {
            icon: faEnvelopeCircleCheck,
            contact: 'web_serge@outlook.com',
            href: 'mailto:web_serge@outlook.com',
            subtitle: 'Email Me',
            color: '#9acd32'
        },
        {
            icon: faLocationDot,
            contact: 'Volgograd, Russia',
            href: 'https://maps.app.goo.gl/AfqSLq9xtJa2hrXN9',
            subtitle: 'Location',
            color: '#ff6347'
        },
    ]

    return (
        <section className={s.contact} id='contact'>
            <div className={`${s.contact__container} wrapper`}>
                <h2>Contact Me</h2>
                <ContactForm/>
                <div className={s.contact__items}>
                    {contacts.map(c => (
                        <a key={c.href} href={c.href} target={'_blank'}>
                            <FontAwesomeIcon icon={c.icon} color={c.color}/>
                            <h3>{c.subtitle}</h3>
                            {c.contact}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};