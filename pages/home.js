import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import CardImage from '@Images/card1.svg';
import Heading from "@components/Heading";
import BuyTractors from '@Images/home/buytractors.svg';
import SellTractors from '@Images/home/SellTractors.svg';
import Loan from '@Images/home/Loan.svg';
import LocateDealer from '@Images/home/locateDealer.svg';
import ContentHub from '@Images/home/ContentHub.svg';
import Compare from '@Images/home/compare.svg';
import WhyChoose from '@Images/home/whyChoose.svg';
import { ReadMore } from '@components/ReadMore';
import LiveInventoryContainer from '@components/LiveInventory';
import Warranty from '@Images/home/warranty.svg';
import EasyEMI from '@Images/home/easyEMI.svg';
import Documenting from '@Images/home/documenting.svg';
import Finance from '@Images/home/finance.svg';
import Call from '@Images/home/call.svg';
import Share from '@Images/home/share.svg';
import Thumb from '@Images/home/thumb.svg';
import Tractor from '@Images/home/tractor.svg';
import homeIcon from '@Images/footer/homeIcon.svg'
import callIcon from '@Images/footer/callIcon.svg'
import enquiryIcon from '@Images/footer/enquiryIcon.svg'
import shareIcon from '@Images/footer/shareIcon.svg'
import Btn from '@components/Btn';
import Tab from '@components/Tab';
import CompareImage from '@Images/liveInventory/compareImage.svg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MultipleItemsSlide from "../components/SingleItemsSlide";
import Link from 'next/link';
import { useQuery } from "@apollo/client";
import { HOME_SLIDERS, GET_ALL_TESTIMONIALS, GET_ALL_CONTENT_GALLERY } from "@utils/constants";

export default function HomePage({ locale }) {
    const [isMobile, setIsMobile] = useState(false);
    const [activeTab, setActiveTab] = useState("oneData");
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const router = useRouter();
    const language = locale?.toUpperCase();


    useEffect(() => {
        //moble web devide
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

    useEffect(() => {
        const handleScroll = () => {
            if (typeof window !== 'undefined') {
                if (window.scrollY > lastScrollY) {
                    // Scrolling down
                    setIsVisible(false);
                } else {
                    // Scrolling up
                    setIsVisible(true);
                }
                setLastScrollY(window.scrollY);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, [lastScrollY]);


    const { data: bannersData, loading: bannersLoading, error: bannersError } = useQuery(HOME_SLIDERS, {
        variables: { lang: language },
    });

    const { data: testmonialsData, loading: testmonialsLoading, error: testmonialsError } = useQuery(GET_ALL_TESTIMONIALS, {
        variables: { lang: language },
    });

    const { data: contentGalleryData, loading: contentGalleryLoading, error: contentGalleryError } = useQuery(GET_ALL_CONTENT_GALLERY, {
        variables: { lang: language },
    });


    if (bannersLoading || testmonialsLoading || contentGalleryLoading) return <p>Loading...</p>;
    if (bannersError || testmonialsError || contentGalleryError) return <p>Error: {bannersError?.message || testmonialsError.message || contentGalleryError.message}</p>;

    const homeBannerSlides = bannersData.homeSliders.nodes.map(node => {
        const desktopUrl = node.homesliders.sliderimage.node.mediaItemUrl;
        const mobileUrl = node.homesliders.mobilesliderimage.node.mediaItemUrl;
        return { desktopUrl, mobileUrl };
    });

    const testimonialSlides = testmonialsData.allTestimonial.nodes.map(node => {
        const testimonialDesktopUrl = node.testimonials.tesimonialImage.node.mediaItemUrl;
        const testimonialDescription = node.testimonials.description;
        const testimonialVideoUrl = node.testimonials.videoUrl;
        return { testimonialDesktopUrl, testimonialDescription, testimonialVideoUrl };
    });

    // const contentGalleryDataContent = contentGalleryData.contentgallerys.nodes.map(node => {
    //     const galleryImg = node.contentGalleryFields.image.node.mediaItemUrl;
    //     return { galleryImg }; 
    //  })

    const handleCompareAll = () => {
        router.push('/compare-tractors');
    };

    const handleAllExclusiveOffers = () => {
        router.push('/exclusive-offers');
    };

    const handleAllLiveInventory = () => {
        router.push('/inventory');
    };

    const handleAllContentHub = () => {
        router.push('/content-hub');
    };

    const handleShareClick = () => {
        const message = encodeURIComponent("Check out Tractor World! https://tractor-world-2024.vercel.app/");
        const whatsappURL = `https://api.whatsapp.com/send?text=${message}`;
        window.open(whatsappURL, '_blank');
    };

    const WhyChooseItems = [
        { src: Warranty, alt: "choose1", label: "Warranty" },
        { src: EasyEMI, alt: "EasyEMI", label: "Easy EMi & Pricing" },
        { src: Documenting, alt: "Documenting", label: "Documenting" },
        { src: Finance, alt: "Finance", label: "Mahendra Financing" }
    ];

    const exploreimages = [
        {
            image: BuyTractors,
            url: '/inventory'
        },
        {
            image: SellTractors,
            url: '/sell-tractor'
        },
        {
            image: Compare,
            url: '/compare-tractors'
        },
        {
            image: LocateDealer,
            url: '/dealer-locator'
        },
        {
            image: Loan,
            url: '/loan'
        },
        {
            image: ContentHub,
            url: '/content-hub'
        },
    ];

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
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

    const contentGallerysettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
    };

    const bannerGalleryitems = homeBannerSlides.map((src, index) => (
        <div key={index} className="relative sm:w-[1921] sm:h-[629] w-[750] h-[387] overflow-hidden">
            <Image width={isMobile ? 750 : 1921} height={isMobile ? 387 : 629}
                className="w-full h-full" src={isMobile ? src.mobileUrl : src.desktopUrl} layout="responsive" alt={`Banner${index + 1}`} />
        </div>
    ));

    const testimonialsGalleryItems = testimonialSlides.map((image, index) => (
        <div key={index} className="relative">
            <div className='sm:w-[1921] sm:h-[734] w-[750] h-[387] overflow-hidden'>
                <Image width={1920} height={734} className="w-full h-full"
                    src={image.testimonialDesktopUrl} layout='responsive' alt={`Testimonial Image ${index + 1}`} />
            </div>
            <p className='z-40 absolute sm:top-14 top-6 sm:text-base text-sm sm:left-14 left-3
                    text-white sm:w-[300px] w-[247px] font-bold testimonials'>
                {image.testimonialDescription}
            </p>

            <Link href={image.testimonialVideoUrl}>
                <div className='z-40 cursor-pointer absolute sm:bottom-8 bottom-4 sm:left-14 left-3
                   bg-primaryColor sm:px-3 sm:py-2 py-1 px-2 font-semibold text-white sm:text-base text-[14px]'>Watch Video</div>
            </Link>
        </div >
    ))

    const cardData = [
        {
            id: 1,
            image: CardImage, // Replace with actual image path
            title: "Tips For Renting The Right Forklift For Next Project",
            date: "March 16, 2024",
            category: "Construction Insight"
        },
        {
            id: 2,
            image: CardImage, // Replace with actual image path
            title: "How to Choose the Best Equipment for Construction",
            date: "March 17, 2024",
            category: "Construction Insight"
        },
        {
            id: 3,
            image: CardImage, // Replace with actual image path
            title: "Safety Tips When Operating Heavy Machinery",
            date: "March 18, 2024",
            category: "Construction Insight"
        }
    ];


    return (
        <>
            {/* Home SLider */}

            <div className='relative'>

                <MultipleItemsSlide settings={contentGallerysettings} id={'bannerGallery'} items={bannerGalleryitems} />

                <div className=" sm:flex hidden fixed z-[99] top-1/2 right-0 transform -translate-y-1/2  flex-col items-center justify-center rounded-md shadow-sm" role="group">

                    <button type="button" className="p-3 w-[50px] bg-white border-t-[1px] border-l-[1px] border-primaryColor">
                        <Link href="tel:18006669999"><Image src={Call} alt='call' className='w-full' /></Link>
                    </button>

                    <button type="button" className="p-3 w-[50px] bg-white border-t-[1px] border-l-[1px] border-primaryColor">
                        <Image src={Tractor} alt='tractor' className='w-full' />
                    </button>

                    <button type="button" className="p-3 w-[50px] bg-white border-t-[1px] border-l-[1px] border-primaryColor">
                        <Image src={Thumb} alt='thumb' className='w-full' />
                    </button>

                    <button type="button" className="p-3 w-[50px] bg-white border-t-[1px] border-l-[1px] border-b-[1px] border-primaryColor" onClick={handleShareClick}>
                        <Image src={Share} alt='Share' className='w-full' />
                    </button>

                </div>

            </div>

            {isVisible && (
                <div className='sm:hidden block'>
                    <div className='fixed bottom-0 w-full z-40
           bg-secondaryColor rounded-tl-2xl rounded-tr-2xl text-white'>
                        <div className='flex text-[15px]'>
                            <div className='text-center border-r border-[#FFFFFF] border-opacity-25 px-4 py-3 w-1/4'>
                                <Image src={homeIcon} alt="homeIcon" width={20} height={20} />
                                <p>Home</p>
                            </div>

                            <div className='text-center border-r border-[#FFFFFF] border-opacity-25 px-4 py-3 w-1/4'>
                                <Image src={callIcon} alt="callIcon" width={20} height={20} />
                                <p>Call</p>
                            </div>

                            <div className='text-center border-r border-[#FFFFFF] border-opacity-25 px-4 py-3 w-1/4'>
                                <Image src={enquiryIcon} alt="enquiryIcon" width={20} height={20} />
                                <p>Enquiry</p>
                            </div>

                            <div className='text-center px-4 py-3 w-1/4'>
                                <Image src={shareIcon} alt="shareIcon" width={20} height={20} />
                                <p>Share</p>
                            </div>


                        </div>
                    </div>
                </div>
            )}

            {/* Explore Tractor World  */}
            < div className="lg:px-14 md:px-6 sm:px-3 px-2 mb-3 pt-4 bg-white " >
                <Heading heading={'Explore Tractor World'} viewButton={false} />
                <div className='grid sm:grid-cols-6 gap-4 grid-cols-3 pb-4'>
                    {exploreimages.map((item, index) => (
                        <a href={item.url} key={index}>
                            <Image src={item.image} className='cursor-pointer' alt={`Explore item ${index + 1}`} />
                        </a>
                    ))
                    }
                </div>

            </div >

            {/* Live Inventory */}
            < div className="lg:px-14 md:px-6 sm:px-3 px-2 sm:pt-4 pt-4 sm:pb-8 py-2 bg-white " >
                <Heading heading={'Live Inventory'} viewButton={true} onClick={handleAllLiveInventory} className='mt-8' />
                <LiveInventoryContainer locale={locale} />
            </div >

            {/* why choose us */}
            < div className="lg:px-14 md:px-6 sm:px-3 px-2 sm:py-4 py-2 relative bg-white mt-3" >
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
            </div >

            {/* Compare To Buy The Right Tractor sec */}
            < div className="lg:px-14 md:px-6 sm:px-3 px-2 sm:py-4 py-2 bg-white mt-3" >
                <div className="font-bold xl:text-xl lg:text-lg md:text-base text-xl">
                    <p className="mb-[-5px]">Compare To Buy The Right Tractor</p>
                </div>

                <div className='flex sm:gap-4 gap-2 my-3 font-medium relative z-20'>
                    <Tab id="oneData" activeTab={activeTab} onClick={handleTabClick}>
                        Under 20 HP</Tab>
                    <Tab id="twoData" activeTab={activeTab} onClick={handleTabClick}>21 - 30 HP</Tab>
                    <Tab id="ThreeData" activeTab={activeTab} onClick={handleTabClick}>31 - 40 HP</Tab>
                    <Tab id="FourData" activeTab={activeTab} onClick={handleTabClick}>41 - 45 HP</Tab>
                    <Tab id="FifthData" activeTab={activeTab} onClick={handleTabClick}>46 - 50 HP</Tab>
                    <Tab id="SixthData" activeTab={activeTab} onClick={handleTabClick}>Above 50 HP</Tab>
                </div>

                <div className="">
                    <div className='grid sm:grid-cols-3 xl:gap-8 gap-4'>
                        {Object.keys(compareTractorData).map((key) =>
                            activeTab === key ? (
                                <>
                                    {compareTractorData[key].map((item, index) => (
                                        <div key={index} className='overflow-hidden flex-none'>
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

                <div className='justify-center flex mt-2'>
                    <Btn text={'View all tractor comparisons'} onClick={handleCompareAll} bgColor={true}
                    />
                </div>
            </div>

            {/*testimonials */}
            <div id="testimonials">
                <div className="lg:px-14 md:px-6 sm:px-3 px-2 sm:pt-4 pt-2 my-3">
                    <Heading heading={'Testimonials'} viewButton={true} />
                </div>

                <div className="mb-4">
                    <MultipleItemsSlide settings={contentGallerysettings} id={'testimonialsGallery'} items={testimonialsGalleryItems} />
                </div>
            </div>

            {/*Content Gallery */}
            <div className="lg:px-14 md:px-6 sm:px-3 px-2 sm:py-4 py-2" style={{
                backgroundImage: `url('/images/exclusiveOffersBG.svg')`,
                backgroundPosition: 'right',
                backgroundRepeat: 'no-repeat'
            }}>

                <Heading heading={'Content Gallery'} viewButton={true} onClick={handleAllExclusiveOffers} />

                <div className="">
                    <div className="grid sm:grid-cols-3 grid-cols-1 xl:gap-8 gap-4 mt-4">

                        {cardData.map((card,index) => (
                            <div key={index} className="bg-white overflow-hidden shadow-lg flex-none m-4">
                                <div className="relative">
                                    <Image
                                        className="w-full"
                                        src={card.image}
                                        alt={`Image for ${card.index+1}`}
                                        layout="responsive"
                                        width={100}
                                        height={70}
                                    />
                                    <div className="bg-white px-4 py-2 text-black text-sm absolute top-4 right-4 uppercase font-bold">
                                        {card.category}
                                    </div>
                                </div>
                                <div className="xl:px-6 lg:px-4 sm:px-2 px-4 py-4">
                                    <div className="mb-2 font-bold lg:w-[250px] md:w-[250px] sm:w-[215px] w-[250px]">
                                        {card.title}
                                    </div>
                                    <p>{card.date}</p>
                                </div>
                                <ReadMore />
                            </div>
                        ))}

                    </div>
                </div>

                <div className='mt-4'>
                    <Btn text={'View all'} viewAll={true} />
                </div>
            </div>

            {/* Latest News & Updates */}
            <div className="lg:px-14 md:px-6 sm:px-3 px-2 sm:py-4 py-2">
                <Heading heading={'Latest News & Updates'} viewButton={true} onClick={handleAllContentHub} />

                <div className="">
                    <div className="grid sm:grid-cols-3 grid-cols-1 xl:gap-8 gap-4 mt-4">
                        <div className="bg-white overflow-hidden shadow-lg flex-none">
                            <div className="relative">
                                <Image className="w-full" src={CardImage} alt="cardImage" layout="responsive" width={100} height={70} />
                                <div className="bg-white px-4 py-2 text-black text-sm absolute top-4 right-4 uppercase font-bold">
                                    Heavy Equipments
                                </div>
                            </div>
                            <div className="xl:px-6 lg:px-4 sm:px-2 px-4 py-4">
                                <div className="mb-4 font-bold">March 16, 2024</div>
                                <div className="font-bold xl:text-xl md:text-lg sm:text-[17px] text-xl mb-2 lg:w-[250px] md:w-[250px] sm:w-[215px] w-[250px]">
                                    Difference Between Telescopic & Articulating Boomlift
                                </div>
                                <p className="text-grayColor xl:text-base lg:text-sm sm:text-sm text-base">
                                    Magna aliqua umt enimd mini venia quis ulamco aliquip commodo cons equat duis aute irue…
                                </p>
                            </div>
                            <ReadMore />
                        </div>

                        <div className="bg-white overflow-hidden shadow-lg flex-none">
                            <div className="relative">
                                <Image className="w-full" src={CardImage} alt="cardImage" layout="responsive" width={100} height={70} />
                                <div className="bg-white px-4 py-2 text-black text-sm absolute top-4 right-4 uppercase font-bold">
                                    Heavy Equipments
                                </div>
                            </div>
                            <div className="xl:px-6 lg:px-4 sm:px-2 px-4 py-4">
                                <div className="mb-4 font-bold">March 16, 2024</div>
                                <div className="font-bold xl:text-xl md:text-lg sm:text-[17px] text-xl mb-2 lg:w-[250px] md:w-[250px] sm:w-[215px] w-[250px]">
                                    Difference Between Telescopic & Articulating Boomlift
                                </div>
                                <p className="text-grayColor xl:text-base lg:text-sm sm:text-sm text-base">
                                    Magna aliqua umt enimd mini venia quis ulamco aliquip commodo cons equat duis aute irue…
                                </p>
                            </div>
                            <ReadMore />
                        </div>

                        <div className="bg-white overflow-hidden shadow-lg flex-none">
                            <div className="relative">
                                <Image className="w-full" src={CardImage} alt="cardImage" layout="responsive" width={100} height={70} />
                                <div className="bg-white px-4 py-2 text-black text-sm absolute top-4 right-4 uppercase font-bold">
                                    Heavy Equipments
                                </div>
                            </div>
                            <div className="xl:px-6 lg:px-4 sm:px-2 px-4 py-4">
                                <div className="mb-4 font-bold">March 16, 2024</div>
                                <div className="font-bold xl:text-xl md:text-lg sm:text-[17px] text-xl mb-2 lg:w-[250px] md:w-[250px] sm:w-[215px] w-[250px]">
                                    Difference Between Telescopic & Articulating Boomlift
                                </div>
                                <p className="text-grayColor xl:text-base lg:text-sm sm:text-sm text-base">
                                    Magna aliqua umt enimd mini venia quis ulamco aliquip commodo cons equat duis aute irue…
                                </p>
                            </div>
                            <ReadMore />
                        </div>
                    </div>
                </div>

                <div className='mt-4'>
                    <Btn text={'View all'} viewAll={true} />
                </div>

            </div>
        </>

    )
}
