import React, { useState, useRef, useEffect } from 'react'
import Layout from "@components/Layout";
import Banner from "@components/Banner";
import Image from "next/image";
import Heading from "../components/Heading";
import Tab from '@components/Tab';
import CompareImage from '@Images/liveInventory/compareImage.svg';
import Btn from '@components/Btn';


export default function CompareTractor() {
    const breadcrumbData = [
        { label: 'Home', link: '/' },
        { label: 'Campare Tractor', link: '#' },
    ];

    const compareTractorData = {

        oneData: [

            {
                brand1: 'Mahindra 475 DI',
                brand2: 'Kubota MU401 2WD',
                brand1hrs: '50 hrs',
                brand2hrs: '50 hrs',
                brand1price: '₹ 6.45-6.75 Lakh*',
                brand2price: '₹ 8.30-8.40 Lakh*'
            },
            {
                brand1: 'Mahindra 475 DI',
                brand2: 'Kubota MU401 2WD',
                brand1hrs: '50 hrs',
                brand2hrs: '50 hrs',
                brand1price: '₹ 6.45-6.75 Lakh*',
                brand2price: '₹ 8.30-8.40 Lakh*'
            },
            {
                brand1: 'Mahindra 475 DI',
                brand2: 'Kubota MU401 2WD',
                brand1hrs: '50 hrs',
                brand2hrs: '50 hrs',
                brand1price: '₹ 6.45-6.75 Lakh*',
                brand2price: '₹ 8.30-8.40 Lakh*'
            },
        ],

        twoData: [

            {
                brand1: 'Mahindra 475 DI',
                brand2: 'Kubota MU401 2WD',
                brand1hrs: '50 hrs',
                brand2hrs: '50 hrs',
                brand1price: '₹ 6.45-6.75 Lakh*',
                brand2price: '₹ 8.30-8.40 Lakh*'
            },
            {
                brand1: 'Mahindra 475 DI',
                brand2: 'Kubota MU401 2WD',
                brand1hrs: '50 hrs',
                brand2hrs: '50 hrs',
                brand1price: '₹ 6.45-6.75 Lakh*',
                brand2price: '₹ 8.30-8.40 Lakh*'
            },
            {
                brand1: 'Mahindra 475 DI',
                brand2: 'Kubota MU401 2WD',
                brand1hrs: '50 hrs',
                brand2hrs: '50 hrs',
                brand1price: '₹ 6.45-6.75 Lakh*',
                brand2price: '₹ 8.30-8.40 Lakh*'
            },
        ],

        ThreeData: [

            {
                brand1: 'Mahindra 475 DI',
                brand2: 'Kubota MU401 2WD',
                brand1hrs: '50 hrs',
                brand2hrs: '50 hrs',
                brand1price: '₹ 6.45-6.75 Lakh*',
                brand2price: '₹ 8.30-8.40 Lakh*'
            },
            {
                brand1: 'Mahindra 475 DI',
                brand2: 'Kubota MU401 2WD',
                brand1hrs: '50 hrs',
                brand2hrs: '50 hrs',
                brand1price: '₹ 6.45-6.75 Lakh*',
                brand2price: '₹ 8.30-8.40 Lakh*'
            },
            {
                brand1: 'Mahindra 475 DI',
                brand2: 'Kubota MU401 2WD',
                brand1hrs: '50 hrs',
                brand2hrs: '50 hrs',
                brand1price: '₹ 6.45-6.75 Lakh*',
                brand2price: '₹ 8.30-8.40 Lakh*'
            },
        ],

        FourData: [

            {
                brand1: 'Mahindra 475 DI',
                brand2: 'Kubota MU401 2WD',
                brand1hrs: '50 hrs',
                brand2hrs: '50 hrs',
                brand1price: '₹ 6.45-6.75 Lakh*',
                brand2price: '₹ 8.30-8.40 Lakh*'
            },
            {
                brand1: 'Mahindra 475 DI',
                brand2: 'Kubota MU401 2WD',
                brand1hrs: '50 hrs',
                brand2hrs: '50 hrs',
                brand1price: '₹ 6.45-6.75 Lakh*',
                brand2price: '₹ 8.30-8.40 Lakh*'
            },
            {
                brand1: 'Mahindra 475 DI',
                brand2: 'Kubota MU401 2WD',
                brand1hrs: '50 hrs',
                brand2hrs: '50 hrs',
                brand1price: '₹ 6.45-6.75 Lakh*',
                brand2price: '₹ 8.30-8.40 Lakh*'
            },
        ],

        FifthData: [

            {
                brand1: 'Mahindra 475 DI',
                brand2: 'Kubota MU401 2WD',
                brand1hrs: '50 hrs',
                brand2hrs: '50 hrs',
                brand1price: '₹ 6.45-6.75 Lakh*',
                brand2price: '₹ 8.30-8.40 Lakh*'
            },
            {
                brand1: 'Mahindra 475 DI',
                brand2: 'Kubota MU401 2WD',
                brand1hrs: '50 hrs',
                brand2hrs: '50 hrs',
                brand1price: '₹ 6.45-6.75 Lakh*',
                brand2price: '₹ 8.30-8.40 Lakh*'
            },
            {
                brand1: 'Mahindra 475 DI',
                brand2: 'Kubota MU401 2WD',
                brand1hrs: '50 hrs',
                brand2hrs: '50 hrs',
                brand1price: '₹ 6.45-6.75 Lakh*',
                brand2price: '₹ 8.30-8.40 Lakh*'
            },
        ],

        SixthData: [

            {
                brand1: 'Mahindra 475 DI',
                brand2: 'Kubota MU401 2WD',
                brand1hrs: '50 hrs',
                brand2hrs: '50 hrs',
                brand1price: '₹ 6.45-6.75 Lakh*',
                brand2price: '₹ 8.30-8.40 Lakh*'
            },
            {
                brand1: 'Mahindra 475 DI',
                brand2: 'Kubota MU401 2WD',
                brand1hrs: '50 hrs',
                brand2hrs: '50 hrs',
                brand1price: '₹ 6.45-6.75 Lakh*',
                brand2price: '₹ 8.30-8.40 Lakh*'
            },
            {
                brand1: 'Mahindra 475 DI',
                brand2: 'Kubota MU401 2WD',
                brand1hrs: '50 hrs',
                brand2hrs: '50 hrs',
                brand1price: '₹ 6.45-6.75 Lakh*',
                brand2price: '₹ 8.30-8.40 Lakh*'
            },

        ]
    };

    const [activeTab, setActiveTab] = useState("oneData");
    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };


    return (
        <div>
            <Layout currentPage={"compare"}>
                <Banner
                    breadcrumbs={breadcrumbData}
                    heading={"Compare Tractors"}
                    bannerImg={"images/compareTractorImg/Compare tractor banner.svg"}
                />

                <div className="bg-white mb-3 lg:px-14 md:px-6 sm:px-3 px-2 sm:pt-4 pt-2 py-3">
                    <Heading heading={'Compare Tractors'} />

                </div>

                <div className="bg-white mb-3 lg:px-14 md:px-6 sm:px-3 px-2 sm:pt-4 pt-2 py-3">
                    <Heading heading={'Compare To Buy The Right Tractor'} />

                    <div className='flex sm:gap-4 gap-2 my-3 font-medium'>
                        <Tab id="oneData" activeTab={activeTab} onClick={handleTabClick}>
                            Under 20 HP</Tab>
                        <Tab id="twoData" activeTab={activeTab} onClick={handleTabClick}>21 - 30 HP</Tab>
                        <Tab id="ThreeData" activeTab={activeTab} onClick={handleTabClick}>31 - 40 HP</Tab>
                        <Tab id="FourData" activeTab={activeTab} onClick={handleTabClick}>41 - 45 HP</Tab>
                        <Tab id="FifthData" activeTab={activeTab} onClick={handleTabClick}>46 - 50 HP</Tab>
                        <Tab id="SixthData" activeTab={activeTab} onClick={handleTabClick}>Above 50 HP</Tab>
                    </div>

                    <div className="overflow-x-auto sm:overflow-visible">
                        <div className='flex sm:grid sm:grid-cols-3 xl:gap-8 gap-4'>
                            {Object.keys(compareTractorData).map((key) =>
                                activeTab === key ? (
                                    <>
                                        {compareTractorData[key].map((item, index) => (
                                            <div key={index} className=' shadow p-2 overflow-hidden flex-none w-80 sm:w-auto'>
                                                <Image src={CompareImage} alt='compareImage' />
                                                <div className='flex justify-between px-3 mb-3'>
                                                    <div>
                                                        <div>{item.brand1}</div>
                                                        <div className='font-semibold my-1'>{item.brand1hrs}</div>
                                                        <div className='font-semibold my-1'>{item.brand1price}</div>

                                                    </div>
                                                    <div>
                                                        <div>{item.brand2}</div>
                                                        <div className='font-semibold my-1'>{item.brand2hrs}</div>
                                                        <div className='font-semibold my-1'>{item.brand2price}</div>

                                                    </div>
                                                </div> 
                                                <Btn className="uppercase" text={'COMPARE'} />
                                            </div>
                                        ))}

                                    </>
                                ) : null
                            )} 
                        </div>

                        <div className='flex justify-center my-6'> 
                            <Btn text={'View all tractor comparisons'} bgColor={true} />
                            </div>
                    </div>

                    <div className='my-4'>
                        <Heading heading={'About Compare Tractors'} />
                        <p className="text-[14px] mb-3">Tractorworld.com is a one-stop authentic online destination where you can compare a variety of Tractors and Farm Implements. All top tractor brands are available here including Mahindra, John Deere, Escorts, Sonalika, Eicher, TAFE, New Holland and many more. The information displayed on Tractor Junction is believed to be accurate, unbiased and correct. Choose at least two tractors as per your choice to compare based on their specifications, features, mileage, Price, overall performance and warranty. All Indian Farmers can easily compare tractors of distinct varieties just in a few clicks. Tractorworld brings a welfare opportunity to compare tractor price in India. This allows farmers from every region to compare tractors in India.</p>
                         <p className="text-[14px] mb-3">Tractorworld provides the most comprehensive tractor comparison tool in India on which you can select at least two or more tractors of your choice for comparison. This online platform provides all the useful guidelines for tractor comparison India. Tractorworld always works to empower Indian farmers with a new tractor compare section.</p>
                         <p className="text-[14px] mb-3">Compare tractor prices in India, specifications, warranty and many more at one place and then select your dream tractor. For Further more inquiries stay tuned with Tractorworld.</p>
                    </div>

                </div>

            </Layout>
        </div>
    );
}
