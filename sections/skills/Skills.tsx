import s from './skills.module.scss'
import ts from '../../public/skills/typescript.svg'
import css from '../../public/skills/css.svg'
import figma from '../../public/skills/figma.svg'
import github from '../../public/skills/github.svg'
import html from '../../public/skills/html.svg'
import next from '../../public/skills/nextjs.svg'
import js from '../../public/skills/javascript.svg'
import sass from '../../public/skills/sass.svg'
import rest from '../../public/skills/rest-api.svg'
import redux from '../../public/skills/redux.svg'
import react from '../../public/skills/react-js.svg'
import jira from '../../public/skills/jira.svg'
import styled from '../../public/skills/styled-components.svg'
import mui from '../../public/skills/MUI.svg'
import jest from '../../public/skills/jest-js.svg'
import Image from "next/image";
import animation from './lottie-skills.json'
import {useLottie} from "lottie-react";

export const Skills = () => {
    const skills = [
        {title: 'HTML', img: html},
        {title: 'JavaScript', img: js},
        {title: 'TypeScript', img: ts},
        {title: 'React', img: react},
        {title: 'Redux', img: redux},
        {title: 'Jest', img: jest},
        {title: 'Rest API', img: rest},
        {title: 'Next', img: next},
        {title: 'CSS', img: css},
        {title: 'SASS', img: sass},
        {title: 'Figma', img: figma},
        {title: 'Github', img: github},
        {title: 'Jira', img: jira},
        {title: 'MUI', img: mui},
        {title: 'Styled', img: styled},
    ]

    const options = {
        animationData: animation,
        loop: true,
        autoplay: true,
    };
    const {View} = useLottie(options);

    return (
        <section>
            <div className={`wrapper ${s.skills}`}>
                <div className={s.skills__animation}>
                    {View}
                </div>
                <div className={s.skills__box}>
                    <h3>Skills</h3>
                    <h2>I have a vast experience in the following web technologies</h2>
                    <div className={s.skills__items}>
                        {skills.map(el => {
                            return (
                                <div key={el.title} className={s.skills__item}>
                                    <Image src={el.img} alt={el.title}/>
                                    <h6>{el.title}</h6>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};