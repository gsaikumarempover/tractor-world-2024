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
import Search from '@Images/compareTractorImg/search.svg';
import leftArrow from '@Images/compareTractorImg/leftArrow.svg';
import Modal from "@components/Modal";

export default function CompareTractor() {
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const modalShow = () => setShowModal(true);

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setIsMobile(window.innerWidth <= 768);
            const handleResize = () => {
                setIsMobile(window.innerWidth <= 768);
            };
            window.addEventListener('resize', handleResize);
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);

    const breadcrumbData = [
        { label: 'Home', link: '/' },
        { label: 'Campare Tractor', link: '#' },
    ];

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: !isMobile ? '40%' : '90%'
        },
    };

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

                    <div className='flex sm:items-start items-center gap-4 justify-between'>

                        <div className='text-center cursor-pointer' onClick={modalShow}>
                            <Image src={CompareImg} alt='compareImg' width={250} height={250} />
                        </div>

                        <div className='my-auto sm:w-[35px] h-auto w-[50px]'>
                            <Image src={vs} alt='vs' layout='responsive' />
                        </div>

                        <div className='text-center cursor-pointer'>
                            <Image src={CompareImg} alt='compareImg' width={250} height={250} />
                        </div>

                        <div className='my-auto sm:w-[35px] h-auto w-[50px]'>
                            <Image src={vs} alt='vs' layout='responsive' />
                        </div>

                        <div className='text-center cursor-pointer'>
                            <Image src={CompareImg} alt='compareImg' width={250} height={250} />
                        </div>

                    </div>

                    <div className='mt-4 w-full flex justify-end'>
                        <div className='sm:w-[15%] w-full'>
                            <Btn text={'COMPARE'} bgColor={true} disabled={true} />
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

                <Modal showModal={showModal} customStyles={customStyles} handleClose={handleClose} content={
                    <div className='flex sm:flex-row flex-col-reverse w-full'>
                        <div className='px-4 py-4 w-full'>
                            <div class="flex items-center gap-2">
                                <Image src={leftArrow} alt='leftArrow' width={15} height={15} className='cursor-pointer' onClick={handleClose} />
                                <p className='font-bold'>Select Brand</p>
                            </div>

                            <div className="relative w-full mt-4">
                                <input type="text" placeholder="Search Tractor Brand by Name" className="w-full rounded border-[1px] border-[#D0D0D0] py-2 pr-14" />
                                <div className="absolute top-[58%] transform -translate-y-1/2 right-2">
                                    <Image src={Search} alt="search" width={40} height={40} />
                                </div>
                            </div>

                            <div className='mt-3'>
                                <input type='radio' />
                                <label className="ml-2 text-medium">575 DI XP Plus</label>
                            </div>
                            <div className='mt-3'>
                                <input type='radio' />
                                <label className="ml-2 text-medium">575 DI XP Plus</label>
                            </div>

                            <div className='mt-3'>
                                <input type='radio' />
                                <label className="ml-2 text-medium">575 DI XP Plus</label>
                            </div>


                        </div>


                    </div>
                } />

            </Layout>
        </div>
    );
}
