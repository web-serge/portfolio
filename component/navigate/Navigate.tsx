import s from './navigate.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAddressCard} from "@fortawesome/free-solid-svg-icons/faAddressCard";
import {faBriefcase} from "@fortawesome/free-solid-svg-icons/faBriefcase";
import {faPhoneVolume} from "@fortawesome/free-solid-svg-icons/faPhoneVolume";
import {faLinkedinIn} from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons/faWhatsapp";
import {faTelegram} from "@fortawesome/free-brands-svg-icons/faTelegram";
import React from "react";
import logo from '../../public/logo.svg'
import Image from "next/image";
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";

export const Navigate = () => {
    const socials = [
        {
            title: 'telegram',
            icon: <FontAwesomeIcon icon={faTelegram} color={'#55acee'}/>,
            href: 'https://t.me/web_serge',
        },
        {
            title: 'whatsapp',
            icon: <FontAwesomeIcon icon={faWhatsapp} color={'#25d366'}/>,
            href: 'https://wa.me/+79996243090',
        },
        {
            title: 'linkedin',
            icon: <FontAwesomeIcon icon={faLinkedinIn} color={'#0077b5'}/>,
            href: 'https://ru.linkedin.com/in/sergey-churekov-93b469213',
        },
        {
            title: 'Github',
            icon: <FontAwesomeIcon icon={faGithub} color={'black'}/>,
            href: 'https://github.com/web-serge',
        },
    ]
    const navigations = [
        {
            title: 'about',
            href: '#about',
            icon: <FontAwesomeIcon icon={faAddressCard}/>,
            color: '#ff5353'
        },
        {
            title: 'portfolio',
            href: '#portfolio',
            icon: <FontAwesomeIcon icon={faBriefcase}/>,
            color: '#20cae5'
        },
        {
            title: 'contact',
            href: '#contact',
            icon: <FontAwesomeIcon icon={faPhoneVolume}/>,
            color: '#ff754a'
        },
    ]

    return (
        <nav className={s.navigation}>
            <a href={"#welcome"}>
                <Image src={logo} alt={'logo'} width={150}/>
            </a>
            <ul>
                {navigations.map(nav => {
                    return (
                        <li key={nav.title} color={nav.color}>
                            <a href={nav.href} style={{color: nav.color}}>
                                {nav.icon}
                                <h6>{nav.title}</h6>
                            </a>
                        </li>
                    )
                })}
            </ul>
            <small className={s.followUs}>Follow Us</small>
            <ul>
                {socials.map(link => {
                    return (
                        <li key={link.title}>
                            <a href={link.href} target={'_blank'}>
                                {link.icon}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}


