import React from "react";
import s from "./projects.module.scss";
import {Slider} from "@/component/slider/Slider";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRightLong} from "@fortawesome/free-solid-svg-icons/faArrowRightLong";

export const Projects = () => {
    const portfolio = [
        {
            name: 'Todolist',
            stack: ['TypeScript', 'Formik', 'React', 'Axios', 'RTK', 'MUI', 'Jest'],
            description: 'Task management application. Allows you to add, edit, mark tasks, as well as sort and prioritize them.',
            demo: 'https://todolist-six-opal.vercel.app/',
            github: 'https://github.com/web-serge/todolist',
            images: [
                {
                    id: 0,
                    value: 'welcome.png'
                },
                {
                    id: 1,
                    value: "todolist.png"
                },
                {
                    id: 2,
                    value: "slice-tests.png"
                },
                {
                    id: 3,
                    value: "api.png"
                }
            ]
        }
    ]

    return (
        <section className={s.projects} id='portfolio'>
            <div className={`${s.projects__container} wrapper`}>
                <h3>Quality Work</h3>
                <h2>My Projects</h2>
                <div className={s.projects__tabContent}>
                    {portfolio.map(el => {
                        return (
                            <React.Fragment key={el.name}>
                                <div style={{display: 'flex', gap: '1rem', flexDirection: 'column'}}>
                                    <h2>{el.name}</h2>
                                    <p>{el.description}</p>
                                    <ul style={{display: 'flex', gap: '1.5rem', flexWrap: 'wrap'}}>
                                        {el.stack.map(item => <li key={item}
                                                                  className={s.projects__stack}>#{item}</li>)}
                                    </ul>
                                    <div>
                                        <a href={el.demo} className={s.projects__link} target={'_blank'}>Watch demo <FontAwesomeIcon
                                            icon={faArrowRightLong}/></a>
                                        <a href={el.github} className={s.projects__link} target={'_blank'}>Github <FontAwesomeIcon
                                            icon={faArrowRightLong}/></a>
                                    </div>
                                </div>
                                <Slider data={el.images}/>
                            </React.Fragment>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};