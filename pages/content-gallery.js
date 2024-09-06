import React, { useState } from "react";
import Layout from "@components/Layout";
import Banner from "@components/Banner";
import Image from "next/image";
import Heading from "@components/Heading";
import Gallery1 from '@Images/conentGallery/1.svg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MultipleItemsSlide from "../components/SingleItemsSlide";
import bannerImg from "@Images/sellTractor/engineering-excellence-banner.svg";
import Leftarrow from '@Images/offers/leftarrow.svg';
import Rightarrow from '@Images/offers/rightarrow.svg';

export default function ContentGallery() {
    const breadcrumbData = [
        { label: 'Home', link: '/' },
        { label: 'Content gallery', link: '#' },
    ];

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <Image src='/images/conentGallery/rightArrow.svg' width={60} height={60} className={'gallerynext-arrow'} alt='RightArrow' onClick={onClick}></Image>
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <Image src='/images/conentGallery/leftArrow.svg' width={60} height={60} className={'galleryprev-arrow'} alt='LeftArrow' onClick={onClick}></Image>
        );
    }
    const contentGallerysettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    const contentGalleryimages = [
        {
            image: Gallery1,
            name: "Sonalika Tractor",
        },
        {
            image: Gallery1,
            name: "Sonalika Tractor",
        },
        {
            image: Gallery1,
            name: "Sonalika Tractor",
        },
        {
            image: Gallery1,
            name: "Sonalika Tractor",
        },
    ];

    const contentGalleryitems = contentGalleryimages.map((src, index) => (
        <div key={index} className="relative">
            <Image src={src.image} width={1644} height={919} layout="responsive" alt={`Explore item ${index + 1}`} />
            <div className="absolute top-0 bg-primaryColor text-white px-2 uppercase text-[13px] py-1">{src.name}</div>
        </div>
    ));

    const galleryDetails = [
        {
            thumbnail: "/images/conentGallery/tractor1.svg",
            tractorname: "Sonalika Tractor",
            heading: "Popular Sonalika Tractor Series Price List 2024: Specifications & Mileage",
            date: "February 19, 2024",
            description: "The Sonalika Tractor Series is well-known worldwide for its advanced technology in agriculture. These tractors are tough and smart, helping farmers with tasks like plowing fields and moving heavy things…"
        },
        {
            thumbnail: "/images/conentGallery/tractor1.svg",
            tractorname: "Sonalika Tractor",
            heading: "Popular Sonalika Tractor Series Price List 2024: Specifications & Mileage",
            date: "February 19, 2024",
            description: "The Sonalika Tractor Series is well-known worldwide for its advanced technology in agriculture. These tractors are tough and smart, helping farmers with tasks like plowing fields and moving heavy things…"
        },
        {
            thumbnail: "/images/conentGallery/tractor1.svg",
            tractorname: "Sonalika Tractor",
            heading: "Popular Sonalika Tractor Series Price List 2024: Specifications & Mileage",
            date: "February 19, 2024",
            description: "The Sonalika Tractor Series is well-known worldwide for its advanced technology in agriculture. These tractors are tough and smart, helping farmers with tasks like plowing fields and moving heavy things…"
        },

        {
            thumbnail: "/images/conentGallery/tractor1.svg",
            tractorname: "Sonalika Tractor",
            heading: "Popular Sonalika Tractor Series Price List 2024: Specifications & Mileage",
            date: "February 19, 2024",
            description: "The Sonalika Tractor Series is well-known worldwide for its advanced technology in agriculture. These tractors are tough and smart, helping farmers with tasks like plowing fields and moving heavy things…"
        },

        {
            thumbnail: "/images/conentGallery/tractor1.svg",
            tractorname: "Sonalika Tractor",
            heading: "Popular Sonalika Tractor Series Price List 2024: Specifications & Mileage",
            date: "February 19, 2024",
            description: "The Sonalika Tractor Series is well-known worldwide for its advanced technology in agriculture. These tractors are tough and smart, helping farmers with tasks like plowing fields and moving heavy things…"
        },

        {
            thumbnail: "/images/conentGallery/tractor1.svg",
            tractorname: "Sonalika Tractor",
            heading: "Popular Sonalika Tractor Series Price List 2024: Specifications & Mileage",
            date: "February 19, 2024",
            description: "The Sonalika Tractor Series is well-known worldwide for its advanced technology in agriculture. These tractors are tough and smart, helping farmers with tasks like plowing fields and moving heavy things…"
        },

        {
            thumbnail: "/images/conentGallery/tractor1.svg",
            tractorname: "Sonalika Tractor",
            heading: "Popular Sonalika Tractor Series Price List 2024: Specifications & Mileage",
            date: "February 19, 2024",
            description: "The Sonalika Tractor Series is well-known worldwide for its advanced technology in agriculture. These tractors are tough and smart, helping farmers with tasks like plowing fields and moving heavy things…"
        },

        {
            thumbnail: "/images/conentGallery/tractor1.svg",
            tractorname: "Sonalika Tractor",
            heading: "Popular Sonalika Tractor Series Price List 2024: Specifications & Mileage",
            date: "February 19, 2024",
            description: "The Sonalika Tractor Series is well-known worldwide for its advanced technology in agriculture. These tractors are tough and smart, helping farmers with tasks like plowing fields and moving heavy things…"
        },

        {
            thumbnail: "/images/conentGallery/tractor1.svg",
            tractorname: "Sonalika Tractor",
            heading: "Popular Sonalika Tractor Series Price List 2024: Specifications & Mileage",
            date: "February 19, 2024",
            description: "The Sonalika Tractor Series is well-known worldwide for its advanced technology in agriculture. These tractors are tough and smart, helping farmers with tasks like plowing fields and moving heavy things…"
        },

        {
            thumbnail: "/images/conentGallery/tractor1.svg",
            tractorname: "Sonalika Tractor",
            heading: "Popular Sonalika Tractor Series Price List 2024: Specifications & Mileage",
            date: "February 19, 2024",
            description: "The Sonalika Tractor Series is well-known worldwide for its advanced technology in agriculture. These tractors are tough and smart, helping farmers with tasks like plowing fields and moving heavy things…"
        }, 

    ];

    const newUpdateDetails = [
        {
            thumbnail: "/images/conentGallery/videoThumbnail_one.svg",
            discription: "Bridgestone the agricultural tyre expert",
            alt: 'videoThumbnail'
        },
        {
            thumbnail: "/images/conentGallery/videoThumbnail_one.svg",
            discription: "Bridgestone the agricultural tyre expert",
            alt: 'videoThumbnail'
        },

        {
            thumbnail: "/images/conentGallery/videoThumbnail_one.svg",
            discription: "Bridgestone the agricultural tyre expert",
            alt: 'videoThumbnail'
        },

        {
            thumbnail: "/images/conentGallery/videoThumbnail_one.svg",
            discription: "Bridgestone the agricultural tyre expert",
            alt: 'videoThumbnail'
        },

    ];

    const CardsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(galleryDetails.length / CardsPerPage);

    const indexOfLastCard = currentPage * CardsPerPage;
    const indexOfFirstCard = indexOfLastCard - CardsPerPage;
    const currentCards = galleryDetails.slice(indexOfFirstCard, indexOfLastCard);


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
        <div>
            <Layout currentPage={"contentGallery"}>
                <Banner
                    breadcrumbs={breadcrumbData}
                    heading={""}
                    bannerImg={bannerImg}
                    BannerUnderlineImg={false} />

                <div className="bg-white lg:px-14 md:px-6 sm:px-3 px-2 sm:pt-4 pt-2 py-3">
                    <Heading heading={"Content Gallery"} />
                    <hr className="mt-2 mx-2"></hr>
                    <div className="mb-4 p-2">
                        <MultipleItemsSlide settings={contentGallerysettings} id={'contentGallery'} items={contentGalleryitems} />
                    </div>

                    <div className="bg-[#F3F3F4] sm:pt-3 pt-2 py-3 my-6"></div>

                    <div className="flex flex-col gap-3">
                        {currentCards.map((item, index) => (
                            <div className="border-b pb-3 p-1 relative" key={index}>
                                <div className="flex gap-3">
                                    <div className="sm:w-[350px] sm:h-[200px] w-[240px]">
                                        <Image
                                            src={item.thumbnail}
                                            layout="responsive"
                                            width={350}
                                            height={200}
                                            className="cursor-pointer"
                                            alt={item.tractorname}

                                        />
                                    </div>
                                    <div>
                                        <div className="bg-primaryColor inline-block sm:px-2 px-1 py-1 text-white w-auto font-semibold sm:text-base text-sm">{item.tractorname}</div>
                                        <div className="font-semibold py-2 sm:text-base text-[12px]">{item.heading}</div>
                                        <div className="sm:text-sm text-[10px] text-[#606C7E] uppercase font-bold flex sm:gap-2 gap-1 items-center">Tractor World
                                            <div className="sm:w-2 w-1 sm:h-2 h-1 bg-[#CCCCCC] rounded-full"></div>
                                            <span>{item.date}</span></div>
                                    </div>
                                </div>
                                <p className="sm:mt-0 mt-2 sm:text-base text-sm">{item.description}<span className="text-[#407BD2] sm:uppercase text-sm cursor-pointer">Read more »</span></p>
                            </div>
                        ))}
                        <div className="pagination my-4 flex justify-center items-center space-x-2">
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

                        {/* <p className="sm:mt-0 mt-2 sm:text-base text-sm">Farmtrac tractors simplify farming tasks through their efficient engines and consistent performance. They provide farmers with a dependable choice to increase their agricultural income. Utilising the popular Farmtrac tractor reduces.</p> */}
                    </div>
 

                    {/* ///new updates */}

                    <div className="mt-4">
                        <Heading heading={"New Updates"} />
                        <div className="overflow-x-auto sm:overflow-visible">
                            <div className="flex sm:grid sm:grid-cols-4 gap-8">
                                {newUpdateDetails.map((item, index) => (
                                    <div className="bg-[#6521780F] bg-opacity-20 overflow-hidden shadow-md flex-none w-80 sm:w-auto" key={index}>
                                        <Image src={item.thumbnail} width={344} height={200} className="w-[100%] cursor-pointer" alt={item.alt} />
                                        <div className="py-2 px-3">{item.discription}</div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>

                    <div className="mt-4">
                        <Heading heading={"Recent Posts"} />

                        <ul className="ml-4">
                            <li className="list-disc text-sm mb-2">Popular Sonalika Tractor Series Price List 2024 : Specifications & Mileage</li>
                            <li className="list-disc text-sm mb-2">Popular Swaraj Tractor Series Price List 2024: Specifications & Mileage</li>
                            <li className="list-disc text-sm mb-2">Most Popular Kubota Tractor Series in India 2024 : Price & Features</li>
                            <li className="list-disc text-sm mb-2">Top 5 Farmtrac 60 HP Tractors in India 2024 : Price & Features</li>
                            <li className="list-disc text-sm mb-2">What is Front Pto Tractor In India? Front PTO Types and Uses</li>
                        </ul>
                    </div>
                </div>

            </Layout>
        </div>
    );
}
