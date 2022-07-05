import React, { useState } from 'react';
import MainSectionText from './MainSectionText';
import ImageContainer from './ImageContainer';
import { imageSlider } from '../constant/imageslider.js';


{/* <ImageContainer imageLink={firstNft} />
                <ImageContainer imageLink={secondNft} />
                <ImageContainer imageLink={thirdNft} />
                <ImageContainer imageLink={fifthNft} /> */}

const CAROUSEL_VALUE = 3;

const MainSection = () => {

    const [currentIndex, setCurrentIndex] = useState(CAROUSEL_VALUE);
    const [translateValue, setTranslateValue] = useState(0);

    // const goToPrevSlide = () => {
    //     if (currentIndex === CAROUSEL_VALUE) return;
    //     setTranslateValue(prev => prev - (25 * 1));
    //     setCurrentIndex(prev => prev - 1);
    // }

    // const goToNextSlide = () => {
    //     if (currentIndex === products.length - 1) return;
    //     setTranslateValue(prev => prev + (25 * 1));
    //     setCurrentIndex(prev => prev + 1);
    // }

    return (
        <div className="border">
            <div>
                <MainSectionText />
                <div className="flex flex-row items-center border h-fit relative">
                    <div className="flex flex-row items-center justify-between relative overflow-x-hidden">
                        <div 
                        // drag="x"
                        // dragConstraints={{ left: 0, right: 0 }}
                        // dragElastic={0.5}
                        // dragMomentum={false}
                        // dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
                        className={`flex flex-row w-full space-x-3.5`}
                        // style={{
                        //     display: "flex",
                        //     transform: `translateX(-${
                        //         translateValue
                        //     }%)`,
                        //     transition: "transform ease-out 0.5s",
                        // }} 
                    >
                        {
                            imageSlider && imageSlider.map((images, index) => {
                                return (
                                    <div key={index} className="flex w-full min-w-[260px]">
                                        <ImageContainer props={images} />
                                    </div>
                                )
                            })
                        }
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainSection