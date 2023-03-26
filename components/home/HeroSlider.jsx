import {BsChevronCompactLeft, BsChevronCompactRight} from "react-icons/bs";
import {RxDotFilled} from "react-icons/rx";
import React from "react";

const HeroSlider = ({index, onNextSlideClick, onPrevSlideClick, onGotoSlideClick, slides}) => {
    return (
        <div className={`max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group`}>
            <div style={{backgroundImage: `url(${slides[index].url})`}}
                 className={`w-full h-full rounded-2xl bg-center bg-cover duration-500`}>
            </div>

            <div
                onClick={onPrevSlideClick}
                className={`hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer`}>
                <BsChevronCompactLeft size={30}/>
            </div>

            <div
                onClick={onNextSlideClick}
                className={`hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer`}>
                <BsChevronCompactRight size={30}/>
            </div>

            <div className={`flex top-4 justify-center py-2`}>
                {
                    slides.map((slide, slideIndex) => (
                        <div key={slide.id} onClick={() => onGotoSlideClick(slideIndex)}
                             className={`text-2xl cursor-pointer`}><RxDotFilled/></div>
                    ))
                }
            </div>
        </div>
    )
}
export default HeroSlider