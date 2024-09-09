import React, { useState } from "react";
import Layout from "@components/Layout";
import Banner from "@components/Banner";
import Btn from "@components/Btn";
import Image from "next/image";
import Table from "@components/Table";
import Heading from "@components/Heading";
import Tab from '@components/Tab';
import CompareImage from '@Images/liveInventory/compareImage.svg';
import BannerImg from '@Images/compareTractorImg/Compare_tractor_banner.svg';
import vs from '@Images/compareTractorImg/vs.svg';

export default function CompareTractorDetails() {
    const breadcrumbData = [
        { label: 'Home', link: '/' },
        { label: 'Compare Tractor', link: '#' },
    ];

    const images = [
        {
            name: "Mahindra 475 DI",
            emiStartsFrom: "EMI starts from ₹ 13,810*",
            price: "₹ 6.45 lac - 6.75 lac*",
            checkPrice: "Check Tractor Price",
            image: "/images/compareTractorImg/mahindra.svg"
        },
        {
            name: "Massey Ferguson 90 4WD",
            emiStartsFrom: "EMI starts from ₹ 24,055*",
            price: "₹ 11.24 lac - 11.55 lac*",
            checkPrice: "Check Tractor Price",
            image: "/images/compareTractorImg/massey.svg"
        },

        {
            name: "Massey Ferguson 90 4WD",
            emiStartsFrom: "EMI starts from ₹ 24,055*",
            price: "₹ 11.24 lac - 11.55 lac*",
            checkPrice: "Check Tractor Price",
            image: "/images/compareTractorImg/massey.svg"
        },


    ];

    // Specifications data
    const [engineData, setEngineData] = useState([
        {
            tablData: [
                { td: "Engine HP" },
                { td: "49 HP" },
                { td: "Torque" },
                { td: "150 Nm" }
            ]
        },
        {
            tablData: [
                { td: "RPM" },
                { td: "6000 RPM" },
                { td: "Fuel Type" },
                { td: "Diesel" }
            ]
        },
        {
            tablData: [
                { td: "Transmission" },
                { td: "Manual" },
                { td: "Drivetrain" },
                { td: "4WD" }
            ]
        }
    ]);


    const [steeringData, setSteeringData] = useState([
        { label: "Engine HP", value: "niharika" },
        { label: "PTO HP", value: "44.9 HP" },
        { label: "Wheel drive", value: "2WD" },
        { label: "Forward Gears", value: "2" },
        { label: "Reverse Gears", value: "2" },
        { label: "Brake Type", value: "Oil Immersed" },
        { label: "Price", value: "Check Price" },
    ]);
    // end Specifications

    const accordionData = [
        { id: 1, heading: "Engine", content: { data: engineData } },
        { id: 2, heading: "Transmission", content: { data: engineData } },
        { id: 3, heading: "Brakes", content: { data: engineData } },
        { id: 4, heading: "Steering", content: { data: engineData }, },
        { id: 5, heading: "Power Take Off", content: { data: steeringData }, },
        { id: 6, heading: "Fuel Tank", content: { data: steeringData }, },
        { id: 7, heading: "Dimensions And Weight Of Tractor", content: { data: steeringData }, },
        { id: 8, heading: "Hydraulics", content: { data: steeringData }, },
        { id: 9, heading: "Wheels And Tires", content: { data: steeringData }, },
        { id: 10, heading: "Other Information", content: { data: steeringData }, },
    ];

    // for accordion
    const [openAccordion, setOpenAccordion] = useState(1);
    const toggleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
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
                    heading={"Compare Tractor Details"}
                    bannerImg={BannerImg}
                />
                <div className="bg-white lg:px-14 md:px-6 sm:px-3 px-2 sm:pt-4 pt-2 py-3">

                    <div className="flex sm:flex-row flex-col gap-2 items-center justify-between">
                        {images.map((tractor, index) => (
                            <>

                                {index > 0 && (<div className="w-7 text-sm h-7 bg-secondaryColor flex leading-3
                                 text-white items-center justify-center rounded-full font-bold"> 
                                    <Image src={vs} alt='vs' />

                                </div>
                                )}

                                <div>
                                    <div key={index} className="bg-[#FBFBFB] shadow-lg">
                                        <Image src={tractor.image}
                                            alt="image"
                                            width={301}
                                            height={173}
                                        />
                                        <div className="p-4 bg-[#FBFBFB]">
                                            <h3 className="text-[14px]  text-[#000000]">{tractor.name}</h3>
                                            <p className="text-[14px]  text-secondaryColor mt-2">{tractor.emiStartsFrom}</p>
                                            <p className="text-[14px] text-[#000000]  mt-2">{tractor.price}</p>
                                            <p className="text-[14px] text-primaryColor  mt-2 inline-block">
                                                Enquire
                                            </p>
                                        </div>
                                    </div>
                                    <div className="my-4">
                                        <Btn text={'COMPARE'} bgColor={true} />
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>

                    <div
                        className="mt-4"
                        id="accordion-collapse"
                        data-accordion="collapse"
                    >
                        {accordionData.map((item) => (
                            <div key={item.id}>
                                <h2
                                    id={`accordion-collapse-heading-${item.id}`}
                                    className="mt-3"
                                >
                                    <button
                                        type="button"
                                        className="flex items-center justify-between w-full p-3
                                font-semibold rtl:text-right border bg-[#EEEEF0]
                                border-gray-200 focus:ring-4 focus:ring-gray-200
                                dark:focus:ring-gray-800 dark:border-gray-700
                                dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800
                                gap-3"
                                        onClick={() => toggleAccordion(item.id)}
                                        aria-expanded={openAccordion === item.id}
                                        aria-controls={`accordion-collapse-body-${item.id}`}
                                    >
                                        <span>{item.heading}</span>
                                        <svg
                                            data-accordion-icon
                                            className={`w-3 h-3 ${openAccordion === item.id ? "rotate-180" : ""
                                                } shrink-0`}
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 10 6"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 5 5 1 1 5"
                                            />
                                        </svg>
                                    </button>
                                </h2>

                                <div
                                    id={`accordion-collapse-body-${item.id}`}
                                    className={`${openAccordion === item.id ? "" : "hidden"}`}
                                    aria-labelledby={`accordion-collapse-heading-${item.id}`}
                                >
                                    <div className="border border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                                        <Table data={item.content.data} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="my-4">
                        <Heading heading={'Tractors in 2024'} />
                    </div>

                    <div className='flex sm:gap-4 gap-2 my-3 font-medium'>
                        <Tab id="oneData" activeTab={activeTab} onClick={handleTabClick}>
                            Popular</Tab>
                        <Tab id="twoData" activeTab={activeTab} onClick={handleTabClick}>Latest</Tab>
                        <Tab id="ThreeData" activeTab={activeTab} onClick={handleTabClick}>Upcoming</Tab>
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
                                                {/* <Btn className="uppercase" text={'COMPARE'} /> */}
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