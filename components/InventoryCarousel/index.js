import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

export default function InventoryCarousel() {
    const baseUrl = 'images/liveInventory'
    const settings = {
        customPaging: function (i) {
            return (
                <a>
                    <Image className='w-full' src={`${baseUrl}/slide0${i + 1}.svg`} alt='liveInventory' />
                </a>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>
            <div className="slider-container" id="inventoryCarousel">
                <Slider {...settings}>
                    <div>
                        <Image src={baseUrl + "/slide01.svg"} className='d-block mx-auto mt-4 mb-[6.3rem]' alt='slide01' />
                    </div>
                    <div>
                        <Image src={baseUrl + "/slide02.svg"} className='d-block mx-auto mt-4 mb-[6.3rem]' alt='slide02 ' />
                    </div>
                    <div>
                        <Image src={baseUrl + "/slide03.svg"} className='d-block mx-auto mt-4 mb-[6.3rem]' alt='slide03' />
                    </div>
                    <div>
                        <Image src={baseUrl + "/slide04.svg"} className='d-block mx-auto mt-4 mb-[6.3rem]' alt='slide04' />
                    </div>
                </Slider>
            </div>

        </>
    )
}
