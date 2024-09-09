import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image'; 
import shareIcon from '@Images/tractordetails/shareIcon.svg';

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
                    <div className='relative'>
                        <Image width={519} height={397} src={baseUrl + "/slide01.svg"} className='detailsSlideImg' alt='slide01' />
                        <div className='absolute top-4 right-4'>
                            <Image src={shareIcon} alt="shareIcon" width={25} height={25} />
                        </div>
                    </div>
                    <div className='relative'>
                        <Image width={519} height={397} src={baseUrl + "/slide02.svg"} className='detailsSlideImg' alt='slide02 ' />
                        <div className='absolute top-4 right-4'>
                            <Image src={shareIcon} alt="shareIcon" width={25} height={25} />
                        </div>                    </div>
                    <div className='relative'>
                        <Image width={519} height={397} src={baseUrl + "/slide03.svg"} className='detailsSlideImg' alt='slide03' />
                        <div className='absolute top-4 right-4'>
                            <Image src={shareIcon} alt="shareIcon" width={25} height={25} />
                        </div>
                    </div>
                    <div className='relative'>
                        <Image width={519} height={397} src={baseUrl + "/slide04.svg"} className='detailsSlideImg' alt='slide04' />
                        <div className='absolute top-4 right-4'>
                            <Image src={shareIcon} alt="shareIcon" width={25} height={25} />
                        </div>
                    </div>
                </Slider>
            </div>

        </>
    )
}
