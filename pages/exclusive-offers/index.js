import React, { useState } from 'react';
import Image from 'next/image';
import Banner from "@components/Banner";
import Layout from "@components/Layout";
import Tractor1 from '@Images/offers/1.svg';
import Leftarrow from '@Images/offers/leftarrow.svg';
import Rightarrow from '@Images/offers/rightarrow.svg';
import bannerImg from '@Images/sellTractor/engineering-excellence-banner.svg';

export default function ExclusiveOffers() {
    const breadcrumbData = [
        { label: 'Home', link: '/' },
        { label: 'Offers', link: '#' },
    ];

    // Sample card data (replace with your actual data)
    const cardData = [
        {
            id: 1,
            imageSrc: Tractor1,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        },
        {
            id: 2,
            imageSrc: Tractor1,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            id: 3,
            imageSrc: Tractor1,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            id: 4,
            imageSrc: Tractor1,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            id: 5,
            imageSrc: Tractor1,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            id: 6,
            imageSrc: Tractor1,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            id: 1,
            imageSrc: Tractor1,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            id: 1,
            imageSrc: Tractor1,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            id: 1,
            imageSrc: Tractor1,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            id: 1,
            imageSrc: Tractor1,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            id: 1,
            imageSrc: Tractor1,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            id: 1,
            imageSrc: Tractor1,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            id: 1,
            imageSrc: Tractor1,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            id: 1,
            imageSrc: Tractor1,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            id: 1,
            imageSrc: Tractor1,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            id: 1,
            imageSrc: Tractor1,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            id: 1,
            imageSrc: Tractor1,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            id: 1,
            imageSrc: Tractor1,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            id: 1,
            imageSrc: Tractor1,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            id: 1,
            imageSrc: Tractor1,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            id: 1,
            imageSrc: Tractor1,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            id: 1,
            imageSrc: Tractor1,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            id: 1,
            imageSrc: Tractor1,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            id: 1,
            imageSrc: Tractor1,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            id: 1,
            imageSrc: Tractor1,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            id: 1,
            imageSrc: Tractor1,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            id: 1,
            imageSrc: Tractor1,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            id: 1,
            imageSrc: Tractor1,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            id: 1,
            imageSrc: Tractor1,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            id: 1,
            imageSrc: Tractor1,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            id: 1,
            imageSrc: Tractor1,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            id: 1,
            imageSrc: Tractor1,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            id: 1,
            imageSrc: Tractor1,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            id: 1,
            imageSrc: Tractor1,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            id: 1,
            imageSrc: Tractor1,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            id: 1,
            imageSrc: Tractor1,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            id: 1,
            imageSrc: Tractor1,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            id: 1,
            imageSrc: Tractor1,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            id: 1,
            imageSrc: Tractor1,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            id: 1,
            imageSrc: Tractor1,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            id: 1,
            imageSrc: Tractor1,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            id: 1,
            imageSrc: Tractor1,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            id: 1,
            imageSrc: Tractor1,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            id: 1,
            imageSrc: Tractor1,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            id: 1,
            imageSrc: Tractor1,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            id: 1,
            imageSrc: Tractor1,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            id: 1,
            imageSrc: Tractor1,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            id: 1,
            imageSrc: Tractor1,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            id: 1,
            imageSrc: Tractor1,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        },
        {
            imageSrc: Tractor1,
            id: 2,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        },
        {
            imageSrc: Tractor1,
            id: 3,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        },
        {
            imageSrc: Tractor1,
            id: 4,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        },
        {
            imageSrc: Tractor1,
            id: 5,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        },
        {
            imageSrc: Tractor1,
            id: 6,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        },
        {
            imageSrc: Tractor1,
            id: 7,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        },
        {
            imageSrc: Tractor1,
            id: 8,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        },
        {
            imageSrc: Tractor1,
            id: 9,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        },
        {
            imageSrc: Tractor1,
            id: 10,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        },
        {
            imageSrc: Tractor1,
            id: 11,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        },
        {
            imageSrc: Tractor1,
            id: 12,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        },
        {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        },
        {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, 
        {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        },
         {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        },
         {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, 
        {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, 
        {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, 
        {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        },
         {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        },
         {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, 
        {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        },
         {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, 
        {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, 
        {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        },
         {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        },
         {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        },
         {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        },
         {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, 
        {
            imageSrc: Tractor1,
            id: 13,
            title: "Heavy Duty Dhamaka Returns-Sonalika",
            startDate: "14 Apr, 2024"
        }, 
    ];

    const CardsPerPage = 9;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(cardData.length / CardsPerPage);

    const indexOfLastCard = currentPage * CardsPerPage;
    const indexOfFirstCard = indexOfLastCard - CardsPerPage;
    const currentCards = cardData.slice(indexOfFirstCard, indexOfLastCard);


    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const handleNext = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));
    const handlePrev = () => setCurrentPage(prev => Math.max(prev - 1, 1));

    const renderPageNumbers = () => {
        let pages = [];
        const maxPagesToShow = 5;

        if (totalPages <= maxPagesToShow) {
            pages = Array.from({ length: totalPages }, (_, i) => i + 1);
        } else {
            if (currentPage <= 3) {
                pages = [1, 2, 3, 4, 5];
            } else if (currentPage > totalPages - 3) {
                pages = [totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
            } else {
                pages = [currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2];
            }
        }

        return (
            <>
                {currentPage > 3 && totalPages > maxPagesToShow && (
                    <>
                        <li className="cursor-pointer border px-4 py-2 font-bold" onClick={() => paginate(1)}>1</li>
                        <li>...</li>
                    </>
                )}
                {pages.map(page => (
                    <li key={page} className={`cursor-pointer border px-4 py-2 ${page === currentPage ?
                        'font-bold bg-secondaryColor text-white' : 'font-bold'}`} onClick={() => paginate(page)}>
                        {page}
                    </li>
                ))}
                {currentPage < totalPages - 2 && totalPages > maxPagesToShow && (
                    <>
                        <li>...</li>
                        <li className="cursor-pointer border px-4 py-2 font-bold" onClick={() => paginate(totalPages)}>{totalPages}</li>
                    </>
                )}
            </>
        );
    };

    return (
        <Layout currentPage={"offers"}>
            <Banner
                breadcrumbs={breadcrumbData}
                heading={"Exclusive Offers"}
                bannerImg={bannerImg}
            />
            <div className='bg-white lg:px-14 md:px-6 sm:px-3 px-2 sm:pt-4 pt-2 py-3'>
                <div className='grid sm:grid-cols-3 gap-4'>
                    {currentCards.map((card, index) => (
                        <div key={index} className="gap-4 bg-white border-[#D9D9D9] border-[1px] overflow-hidden shadow-lg">
                            <div className="relative">
                                <Image className="w-full" src={card.imageSrc} alt="cardImage" layout="responsive" width={100} height={70} />
                            </div>
                            <div className="xl:px-6 lg:px-4 sm:px-2 px-4 pt-1">
                                <div className="ellipsis font-bold xl:text-lg md:text-[16px] sm:text-[14px] text-base tractorTitle">
                                    {card.title}
                                </div>
                                <p className='py-1 text-[14px]'>Starts From : {card.startDate}</p>
                            </div>
                            <div className='border-t-[1px] border-[#D9D9D9] relative bottom-0'>
                                <div className="m-[1px] xl:px-6 px-4 pt-4 pb-2 bg-secondaryColor cursor-pointer">
                                    <span className="flex items-center gap-1 font-semibold text-white mr-2 mb-2 text-base justify-center">
                                        Check For Details
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="pagination mt-4 flex justify-center items-center space-x-2">
                    <button onClick={handlePrev} className="border px-4 py-2 cursor-pointer" disabled={currentPage === 1}>
                        <Image src={Leftarrow} alt='left' />
                        {/* &lt; */}
                    </button>
                    <ul className="flex space-x-2 sm:overflow-y-visible overflow-y-auto">
                        {renderPageNumbers()}
                    </ul>
                    <button onClick={handleNext} className="border px-4 py-2 cursor-pointer" disabled={currentPage === totalPages}>
                        <Image src={Rightarrow} alt='right' />
                        {/* &gt; */}
                    </button>
                </div>
            </div>
        </Layout>
    );
}
