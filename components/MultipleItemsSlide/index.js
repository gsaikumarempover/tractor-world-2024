// components/SlickCarousel.js
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { useTranslation } from 'next-i18next';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 
const MultipleItemsSlide = ({ items,settings,id }) => {
    const { t } = useTranslation(); 
    return (
        <div className="slider-container mt-4 bg-white">
            <Slider {...settings} id={id}>
                {items}
            </Slider>

        </div>
    );
};

export default MultipleItemsSlide;
