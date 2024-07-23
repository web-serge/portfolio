import s from './slider.module.scss'
import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons/faArrowRight";
import {createPortal} from "react-dom";

type Props = {
    data: { id: number, value: string }[]
}
export const Slider = ({data}: Props) => {
    const [isVisible, setIsVisible] = useState(false)
    const [mainImage, setMainImage] = useState(data[0])
    const [targetIndex, setTargetIndex] = useState(0)

    const handleNext = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        const index = targetIndex < data.length - 1 ? targetIndex + 1 : 0;
        setTargetIndex(index)
        setMainImage(data[index])
    }
    const handlePrev = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        const index = targetIndex <= data.length - 1 && targetIndex > 0 ? targetIndex - 1 : data.length - 1;
        setTargetIndex(index)
        setMainImage(data[index])
    }

    const handleMainImage = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        if (isVisible) {
            document.body.style.overflow = 'auto'
            setIsVisible(false)
        } else {
            document.body.style.overflow = 'hidden'
            setIsVisible(true)
        }
    }

    return (
        <div className={s.slider}>
            <div className={s.slider__mainImage}>
                <button className={s.slider__buttons} onClick={handlePrev}>
                    <FontAwesomeIcon icon={faArrowLeft}/>
                </button>
                <img src={mainImage.value}
                     alt={mainImage.value}
                     onClick={handleMainImage}
                     style={{cursor: 'zoom-in'}}
                />
                <button className={s.slider__buttons} onClick={handleNext}>
                    <FontAwesomeIcon icon={faArrowRight}/>
                </button>
            </div>
            <div className={s.slider__row}>
                {data.map((el, i) => {
                        const handleSmallImage = () => {
                            setTargetIndex(i)
                            setMainImage(data[i])
                        }
                        return (
                            <div key={i}>
                                <img className={mainImage.id == i ? s.slider__active : s.slider__noActive} src={el.value}
                                     onClick={handleSmallImage}
                                     onMouseOver={handleSmallImage}
                                     alt={el.value}
                                />
                            </div>
                        )
                    }
                )}
            </div>
            {isVisible && createPortal(<div className={s.modal} onClick={handleMainImage}>
                <button className={s.slider__buttons} onClick={handlePrev}>
                    <FontAwesomeIcon icon={faArrowLeft}/>
                </button>
                <img src={mainImage.value} alt={mainImage.value}/>
                <button className={s.slider__buttons} onClick={handleNext}>
                    <FontAwesomeIcon icon={faArrowRight}/>
                </button>
            </div>, document.body)}
        </div>
    );
};