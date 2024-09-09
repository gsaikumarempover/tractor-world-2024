import React, { useState, useRef, useEffect } from 'react'
import Layout from "@components/Layout";
import Banner from "@components/Banner";
import Image from "next/image";
import Heading from "../components/Heading";
import Tab from '@components/Tab';
import CompareImage from '@Images/liveInventory/compareImage.svg';
import Btn from '@components/Btn';
import BannerImg from '@Images/compareTractorImg/Compare_tractor_banner.svg';
import CompareImg from '@Images/compareTractorImg/compareImg.svg';
import vs from '@Images/compareTractorImg/vs.svg';


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
                    bannerImg={BannerImg}
                />

                <div className="bg-white mb-3 lg:px-14 md:px-6 sm:px-3 px-2 sm:pt-4 pt-2 py-3">
                    <Heading heading={'Compare Tractors'} />

                    <div className='flex items-center gap-4 justify-between'>
                        <div className='text-center cursor-pointer'>
                            <Image src={CompareImg} alt='compareImg' />
                            <p className='mt-1 sm:font-semibold sm:text-base text-sm'>Select Tractor</p>
                        </div>


                        <div>
                            <Image src={vs} alt='vs' />
                        </div>

                        <div className='text-center cursor-pointer'>
                            <Image src={CompareImg} alt='compareImg' />
                            <p className='mt-1 sm:font-semibold sm:text-base text-sm'>Select Tractor</p>
                        </div>


                        <div>
                            <Image src={vs} alt='vs' />
                        </div>

                        <div className='text-center cursor-pointer'>
                            <Image src={CompareImg} alt='compareImg' />
                            <p className='mt-1 sm:font-semibold sm:text-base text-sm'>Select Tractor</p>
                        </div>




                    </div>

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

                    <div className="">
                        <div className='grid sm:grid-cols-3 grid-cols-1 xl:gap-8 gap-4'>
                            {Object.keys(compareTractorData).map((key) =>
                                activeTab === key ? (
                                    <>
                                        {compareTractorData[key].map((item, index) => (
                                            <div key={index} className=' shadow p-2 overflow-hidden flex-none'>
                                                <Image src={CompareImage} alt='compareImage' layout='responsive' />
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


                </div>

            </Layout>
        </div>
    );
}
