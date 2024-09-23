import React, { useState, useRef, useEffect } from 'react'
import Banner from '@components/Banner';
import Layout from '@components/Layout';
import InventoryCarousel from '@components/InventoryCarousel';
import Image from 'next/image';
import Heading from '@components/Heading';
import Btn from '@components/Btn';
import Warranty from '@Images/home/warranty.svg';
import EasyEMI from '@Images/home/easyEMI.svg';
import Documenting from '@Images/home/documenting.svg';
import Finance from '@Images/home/finance.svg';
import WhyChoose from '@Images/home/whyChoose.svg';
import CompareImage from '@Images/liveInventory/compareImage.svg';
import bannerImg from '@Images/liveInventory/banner.svg';
import { useRouter } from 'next/router'; 
import Tab from '@components/Tab';


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <Image src='images/slickslider/right_arrow.svg' width={100} height={100} className={'custom-arrow next-arrow'} alt='RightArrow' onClick={onClick}></Image>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <Image src='images/slickslider/left_arrow.svg' width={100} height={100} className={'custom-arrow prev-arrow'} alt='LeftArrow' onClick={onClick}></Image>
    );
}

export default function TractorDetails({ locale }) {

    const [isMobile, setIsMobile] = useState(false); 
    const router = useRouter();

    const handleCompareAll = () => {
        router.push('/compare-tractors');
    };

    const handleLocateDealer = () => {
        router.push('/dealer-locator');
    };
    
    const handleEnquiry = () => {
        router.push('/contact-us');
    };  
    

    const breadcrumbData = [
        { label: 'Home', link: '/' },
        { label: 'Tractor Brand', link: '/inventory' },
    ];

    //   Features data
    const features = [
        {
            src: '/images/liveInventory/features/cylinder.svg',
            alt: 'Cylinder',
            title: 'No. of Cylinder',
            description: '4'
        },
        {
            src: '/images/liveInventory/features/liftingCapacity.svg',
            alt: 'Lifting Capacity',
            title: 'Lifting Capacity',
            description: '1850 Kg'
        },
        {
            src: '/images/liveInventory/features/warranty.svg',
            alt: 'Warranty',
            title: 'Warranty',
            description: '2000 hr/2 year'
        },
        {
            src: '/images/liveInventory/features/gearBox.svg',
            alt: 'Gear Box',
            title: 'Gear Box',
            description: '8 Forward + 2 Reverse'
        },
        {
            src: '/images/liveInventory/features/clutch.svg',
            alt: 'Clutch',
            title: 'Clutch',
            description: 'Single / Double Clutch'
        },
        {
            src: '/images/liveInventory/features/steering.svg',
            alt: 'Steering',
            title: 'Steering',
            description: 'Power / Mechanical'
        }
    ];

    // tractor data
    const [tractorData, setTractorData] = useState([
        { label: 'Engine HP', value: '49 HP' },
        { label: 'PTO HP', value: '44.9 HP' },
        { label: 'Wheel drive', value: '2WD' },
        { label: 'Forward Gears', value: '2' },
        { label: 'Reverse Gears', value: '2' },
        { label: 'Brake Type', value: 'Oil Immersed' },
        { label: 'Price', value: 'Check Price', isLink: true },
    ]);

    // Specifications data
    const [engineData, setEngineData] = useState([
        { label: 'Engine HP', value: '49 HP' },
        { label: 'PTO HP', value: '44.9 HP' },
        { label: 'Wheel drive', value: '2WD' },
        { label: 'Forward Gears', value: '2' },
        { label: 'Reverse Gears', value: '2' },
        { label: 'Brake Type', value: 'Oil Immersed' },
        { label: 'Price', value: 'Check Price' },
    ]);

    const [steeringData, setSteeringData] = useState([
        { label: 'Engine HP', value: 'niharika' },
        { label: 'PTO HP', value: '44.9 HP' },
        { label: 'Wheel drive', value: '2WD' },
        { label: 'Forward Gears', value: '2' },
        { label: 'Reverse Gears', value: '2' },
        { label: 'Brake Type', value: 'Oil Immersed' },
        { label: 'Price', value: 'Check Price' },
    ]);
    // end Specifications

    // compare data
    const compareData = [
        {
            brand1: 'New Holland',
            model1: '3630 TX Super',
            brand2: 'Mahindra',
            model2: '3630 TX Super',
        },
        {
            brand1: 'New Holland',
            model1: '3630 TX Super',
            brand2: 'Mahindra',
            model2: '3630 TX Super',
        },
        {
            brand1: 'New Holland',
            model1: '3630 TX Super',
            brand2: 'Mahindra',
            model2: '3630 TX Super',
        },
        {
            brand1: 'New Holland',
            model1: '3630 TX Super',
            brand2: 'Mahindra',
            model2: '3630 TX Super',
        },
        // Add more objects as needed
    ];

    const WhyChooseItems = [
        { src: Warranty, alt: "choose1", label: "Warranty" },
        { src: EasyEMI, alt: "EasyEMI", label: "Easy EMi & Pricing" },
        { src: Documenting, alt: "Documenting", label: "Documenting" },
        { src: Finance, alt: "Finance", label: "Mahendra Financing" }
    ];

    const [activeTab, setActiveTab] = useState("oneData");
    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    // for accordion 
    const [openAccordion, setOpenAccordion] = useState(null);
    const toggleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    // accordionData
    const accordionData = [
        { id: 1, heading: 'ENGINE', content: { data: engineData } },
        { id: 2, heading: 'TRANSMISSION (GEARBOX)', content: { data: engineData } },
        { id: 3, heading: 'BRAKES', content: { data: engineData } },
        { id: 4, heading: 'STEERING', content: { data: steeringData } },
        { id: 5, heading: 'POWER TAKE OFF', content: { data: steeringData } },
    ];

    // for range 
    const rangeInputRef = useRef(null);
    useEffect(() => {
        const rangeInput = rangeInputRef.current;
        const updateRange = (rangeInput) => {
            const value = rangeInput.value;
            const min = rangeInput.min;
            const max = rangeInput.max;
            const percentage = ((value - min) / (max - min)) * 100;
            rangeInput.style.background = `linear-gradient(to right, #F37021 0%, #F37021 ${percentage}%, #d1d1d1 ${percentage}%, #d1d1d1 100%)`;
        };

        rangeInput.addEventListener('input', () => updateRange(rangeInput));

        // Initialize the range input background on component mount
        updateRange(rangeInput);

        return () => {
            rangeInput.removeEventListener('input', () => updateRange(rangeInput));
        };
    }, []);

    // buttons data
    const buttonValues = [12, 24, 36, 48, 60, 72, 84];


    const slickSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToScroll: 1,
        adaptiveHeight: true,
        nextArrow: !isMobile ? <SampleNextArrow /> : null,
        prevArrow: !isMobile ? <SamplePrevArrow /> : null,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


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

    // const language = locale.toUpperCase();
    // const { loading, error, data } = useQuery(GET_LIVE_INVENTORY, {
    //     variables: { lang: language },
    // });

    // if (loading) return <p>Loading Live Inventory...</p>;
    // if (error) return <p>Error: {error.message}</p>;


    // const SimilarTractorsData = data.allLiveInventory.edges.map(({ node }) => ({
    //     title: node.title,
    //     price: node.liveInventoryData.maxPrice,
    //     hours: node.liveInventoryData.engineHours,
    //     driveType: node.liveInventoryData.driveType,
    //     enginePower: node.liveInventoryData.enginePower // Assuming hp is similar to driveType; adjust if needed
    // }));

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


    return (
        <Layout>
            {/* banner sec */}
            <Banner breadcrumbs={breadcrumbData}
                bannerImg={bannerImg}
                heading={'Tractor Details'} />



            {/* slide sec */}
            <div className='lg:px-14 md:px-6 sm:px-3 px-2 sm:pt-4 pt-4 sm:pb-8 py-2
             bg-white w-full flex sm:flex-row flex-col gap-4'>

                <div className='sm:hidden block'>
                    <Heading heading={'Tractor Details'} />
                </div>

                {/* slide */}
                <div className='sm:w-1/2 w-full border'>
                    <InventoryCarousel />
                </div>

                <div className='sm:w-1/2 w-full'>
                    <div className=''>
                        <div className='pl-2'>
                            <div className='mb-2'>UID - TJN185041 | Report Problem</div>
                            <div className='font-bold uppercase sm:text-xl text-lg mb-1'>Mahindra Arjun 555 DI
                                <span className="bg-secondaryColor px-2 ml-3 py-1 text-white text-sm uppercase
                                 font-semibold border-gradient">
                                    CERTIFIED
                                </span></div>


                            <span className="bg-primaryColor my-4 inline-block px-2 py-1 text-white w-auto
                                 font-semibold rounded-sm cursor-pointer" onClick={handleLocateDealer}>
                                Dealer Location
                            </span>

                            <span className="bg-secondaryColor ml-2 my-4 inline-block px-2 py-1 text-white w-auto
                                 font-semibold rounded-sm cursor-pointer" onClick={handleCompareAll}>
                                Compare Tractor
                            </span>

                            <div className='mb-3 cursor-pointer flex gap-2 text-secondaryColor
                                 rounded-sm w-full'>
                                <Image src='/images/Tractordetails/editIcon.svg' width={10} height={10}
                                    className='w-3' alt='Tractordetails/editIcon' />Change Tractor</div>


                            <div className='mb-3 cursor-pointer flex gap-2 w-full'>
                                <Image src='/images/Tractordetails/primaymapIcon.svg' width={10} height={10} className='w-3' alt='Tractordetails/primaymapIcon' />
                                Beed, Maharashtra</div>

                            <div className='font-bold text-xl mb-1'>₹ 9,84,000 <span className="line-through text-sm opacity-[30%]"> ₹ 10,84,000 </span></div>

                            <div className="">EMI starts at <span className="text-secondaryColor"> ₹ 3,657/month</span> </div>

                            <div className='sm:w-1/2 w-full my-4'>
                                <Btn text={"Enquiry"} bgColor={true} onClick={handleEnquiry} />
                            </div>
                            {/* <div className='flex items-center gap-2'>
                                <div className='mt-[2px]'>
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <span className='mr-1'>
                                            <Image key={i} src={Star} alt="Star" />
                                        </span>
                                    ))}
                                </div>
                                <div className='bg-secondaryColor px-3 rounded-sm text-sm text-white'>
                                    Rate This Tractor</div>

                                <div className='bg-primaryColor px-2 rounded-sm text-sm text-white'>
                                    Compare</div>
                            </div> */}
                        </div>
                        {/* table sec */}
                        {/* <div className="relative overflow-x-auto sm:mt-2">
                            <Table data={tractorData} />
                        </div> */}
                    </div>

                    {/* <div className='sm:flex hidden mt-4 gap-2'>
                        <div className='w-1/2'>
                            <Btn text={"Enquiry"} bgColor={true} />
                        </div>
                        <div className='w-1/2'>
                            <Btn text={"Share"} bgColor={false} />
                        </div>
                    </div> */}
                </div>
            </div>

            {/* Features sec */}
            <div className='bg-[#F3F3F4]'>
                <div className='lg:px-14 md:px-6 sm:px-3 px-2 sm:pt-4 pt-4 sm:pb-8 py-2'>

                    <Heading heading={'Mahindra Arjun 555 DI Features'} />
                    <div className='py-3 sm:mt-5 mt-1 grid md:grid-cols-6 sm:grid-cols-3 
                    grid-cols-2 sm:gap-4 gap-8'>
                        {features.map((feature, index) => (
                            <div key={index} className='features-shadow text-sm bg-white pb-1 pt-6 px-2 rounded-md text-center relative'>
                                <div className='absolute top-[-30px] left-1/2 transform -translate-x-1/2'>
                                    <Image src={feature.src}
                                        alt={feature.alt}
                                        width={60}
                                        height={60}
                                        className='tractorsFeatures' />
                                </div>
                                <p className='font-bold uppercase mt-5'>{feature.title}</p>
                                <span>{feature.description}</span>
                            </div>
                        ))}
                    </div>
                    {/* <div className='sm:w-1/4 w-full m-auto mt-2'>
                        <Btn text={'View Latest Offers'} bgColor={true} />
                    </div> */}
                </div>
            </div>

            {/* specification sec */}
            {/* <div className='bg-white lg:px-14 md:px-6 sm:px-3 px-2 sm:pt-4 pt-4 sm:pb-8 py-2'>
                <Heading heading={'Mahindra Arjun 555 DI Full Specifications'} />

                <div className="mt-4" id="accordion-collapse" data-accordion="collapse">
                    {accordionData.map((item) => (
                        <div key={item.id}>

                            <h2 id={`accordion-collapse-heading-${item.id}`} className="mt-3">
                                <button type="button"
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
                                        className={`w-3 h-3 ${openAccordion === item.id ? 'rotate-180' : ''} shrink-0`}
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
                                className={`${openAccordion === item.id ? '' : 'hidden'}`}
                                aria-labelledby={`accordion-collapse-heading-${item.id}`}
                            >
                                <div className="border border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                                    <Table data={item.content.data} />
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div> */}

            {/* emi sec */}
            <div className='bg-white lg:px-14 md:px-6 sm:px-3 px-2 sm:pt-4 pt-4 sm:pb-8 py-2'>

                <Heading heading={'Calculate Mahindra Arjun 555 DI EMI'} />
                <div className='bg-[#F6F6F6] px-3 py-6 mt-3 flex sm:flex-row flex-col gap-4'>

                    <div className='sm:w-1/2 w-full'>
                        <label htmlFor="downPayment" className="form-label">Down Payment</label>
                        <input type="range" className="w-full" min="0" max="780000"
                            step="1000" ref={rangeInputRef} id="downPayment" />

                        <div className="flex justify-between mt-3">
                            <span>₹0</span>
                            <span className="slider-value" id="downPaymentValue">₹7,80,000</span>
                        </div>

                        <div className='my-3'>Loan Period (Months)</div>

                        <div className="grid grid-cols-7 rounded-md shadow-sm" role="group">
                            {buttonValues.map((value, index) => {
                                const isFirst = index === 0;
                                const isLast = index === buttonValues.length - 1;
                                return (
                                    <button
                                        key={value}
                                        type="button"
                                        className={`sm:px-6 sm:py-3 py-2 font-medium text-gray-900 bg-[#F0F0F0] ${isFirst ? 'rounded-tl-md rounded-bl-md' : ''
                                            } ${isLast ? 'rounded-tr-md rounded-br-md' : ''} hover:rounded-md focus:rounded-md focus:bg-secondaryColor hover:bg-secondaryColor hover:text-white focus:z-10 focus:ring-2 focus:ring-secondaryColor focus:text-white dark:bg-secondaryColor dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-secondaryColor dark:focus:ring-secondaryColor dark:focus:text-white`}
                                    >
                                        {value}
                                    </button>
                                );
                            })}
                        </div>

                        <div className='mt-4'>
                            <Btn bgColor={true} text={'View Loan Offers'} />
                        </div>

                    </div>

                    <div className='w-1/2'>need to update</div>
                </div>
            </div>

            {/* why choose us */}
            <div className="lg:px-14 md:px-6 sm:px-3 px-2 sm:py-4 py-2 relative bg-white mt-3">
                <Heading heading={'Why Choose Us'} viewButton={false} />
                <div className="flex md:flex-row flex-col justify-between md:gap-16 gap-4 mt-4">
                    <div className="md:w-[40%]">
                        <div className='font-bold text-lg'>
                            Over 15,000+ Deals<br />
                            Tractor World Is The Best Choice</div>
                        <p className='mt-2 text-[.9rem]'>
                            Kiusmod tempor incididunt ut labore sed dolore magna aliquay enim
                            ad minim veniam quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea reprehen deritin voluptate.</p>
                    </div>
                    <div className='absolute sm:top-[-85px] right-0 bottom-[-80px]'>
                        <Image src={WhyChoose} alt='WhyChoose' width={400} height={400}
                            className='whychooseImg' />
                    </div>
                </div>
                <div className='sm:mt-10 mt-2'>
                    <div className="grid md:grid-cols-4 grid-cols-2 md:gap-6 gap-2 w-full relative
                     z-10 sm:pb-0 pb-16">
                        {WhyChooseItems.map((item, index) => (
                            <div key={index}>
                                <div className="bg-white overflow-hidden flex justify-center 
                                shadow-custom-medium px-4 sm:pb-9 py-2 flex-col items-center">
                                    <div>
                                        <Image src={item.src} alt={item.alt} className="chooseImg" />
                                    </div>
                                    <p className="text-center font-bold xl:text-xl lg:text-lg 
                                    md:text-base sm:text-base text-[0.85rem]">
                                        {item.label}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Similar Tractors */}
            <div className="lg:px-14 md:px-6 sm:px-3 px-2 sm:pt-4 pt-4 sm:pb-8 py-2 bg-white ">
                <Heading heading={'Similar Tractors'} viewButton={true} className='mt-8' />

                {/* <div className="SimilarTractors relative" id="similarTractorsSlide">
                    <SlickCarousel settings={slickSettings} items={SimilarTractorsData} />
                    <Btn text={'View all'} viewAll={true} />
                </div> */}
            </div>


            {/* Compare To Buy The Right Tractor sec */}
            <div className="lg:px-14 md:px-6 sm:px-3 px-2 sm:py-4 py-2 bg-white mt-3">
                <div className="font-bold xl:text-xl lg:text-lg md:text-base text-xl">
                    <p className="mb-[-5px]">Compare To Buy The Right Tractor</p>
                </div>

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
                    <div className=' grid sm:grid-cols-3 grid-cols-1 xl:gap-8 gap-4'>
                        {Object.keys(compareTractorData).map((key) =>
                            activeTab === key ? (
                                <>
                                    {compareTractorData[key].map((item, index) => (
                                        <div key={index} className='overflow-hidden w-full flex-none'>
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
                </div>
            </div>

            <div className='justify-center flex my-4'>
                <Btn text={'View all tractor comparisons'} bgColor={true}
                />
            </div>



            {/* Tractor World Recommendations sec */}
            {/* <div className='bg-white lg:px-14 md:px-6 sm:px-3 px-2 sm:pt-4 pt-4 sm:pb-8 py-2'>
                <Heading heading={'Tractor World Recommendations'} />
                 <LiveInventoryContainer locale={locale} /> 
            </div> */}

            {/* Compare sec */}
            {/* <div id="compareTractor" className='bg-white lg:px-14 md:px-6 sm:px-3 px-2 sm:pt-4 pt-4 sm:pb-8 py-2'>
                <Heading heading={'Compare Mahindra Arjun 555 DI'} />
                <div className='grid sm:grid-cols-4 grid-cols-1 gap-6 mb-5'>
                    {compareData.map((item, index) => (
                        <div key={index}>
                            <Image src={CompareImage} alt='compareImage' />
                            <div className='flex justify-between px-3 mb-3'>
                                <div>
                                    <div>{item.brand1}</div>
                                    <div className='font-semibold my-1'>{item.model1}</div>
                                    <div className='text-[#0080E2] underline cursor-pointer'>Check Price</div>
                                </div>
                                <div>
                                    <div>{item.brand2}</div>
                                    <div className='font-semibold my-1'>{item.model2}</div>
                                    <div className='text-[#0080E2] underline cursor-pointer'>Check Price</div>
                                </div>
                            </div>
                            <Btn text={'COMPARE'} />
                        </div>
                    ))}
                </div>
                <div className='sm:w-1/4 w-full m-auto'>
                    <Btn text={'View All Compare Tractors'} bgColor={true} />
                </div>
            </div> */}
        </Layout>
    )
}