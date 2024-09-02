import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

export default function InventoryCarousel() {
    const baseUrl = '/images/liveInventory'
    const settings = {
        customPaging: function (i) {
            return (
                <a>
                    <Image className='w-full' layout='responsive' width={100} height={100} src={`${baseUrl}/slide0${i + 1}.svg`} alt='liveInventory' />
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
                        <Image width={100} height={100} layout='responsive' src={baseUrl + "/slide01.svg"} className='detailsSlideImg' alt='slide01' />
                    </div>
                    <div>
                        <Image width={100} height={100} layout='responsive' src={baseUrl + "/slide02.svg"} className='detailsSlideImg' alt='slide02 ' />
                    </div>
                    <div>
                        <Image width={100} height={100} layout='responsive' src={baseUrl + "/slide03.svg"} className='detailsSlideImg' alt='slide03' />
                    </div>
                    <div>
                        <Image width={100} height={100} layout='responsive' src={baseUrl + "/slide04.svg"} className='detailsSlideImg' alt='slide04' />
                    </div>
                </Slider>
            </div>

        </>
    )
}
