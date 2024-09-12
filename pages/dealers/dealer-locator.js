import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "@components/Layout";
import Banner from "@components/Banner";
import Image from "next/image";
import Men from "@Images/men.svg";
import BrandImg from "@Images/dealerLocator/BrandImg.svg";
import LocationImg from "@Images/dealerLocator/LocationImg.svg";
import CallImg from "@Images/dealerLocator/callImg.svg";
import MailImg from "@Images/dealerLocator/mailImg.svg";
import Btn from "@components/Btn";
import bannerImg from "@Images/dealerLocator/dealerBanner.svg";
import { useRouter } from 'next/router';
import Leftarrow from '@Images/offers/leftarrow.svg';
import Rightarrow from '@Images/offers/rightarrow.svg';

export default function DealerLocator() {

  const router = useRouter();
  const breadcrumbData = [
    { label: 'Home', link: '/' },
    { label: 'DEALER LOCATOR', link: '#' },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


  // const handleAlldealers = () => {
  //   router.push('/dealers');
  // };


  const dealerData = [
    {
      dealerCardData: [
        {
          location: "Ram Motors, Chandrapur",
          brand: "Sonalika",
          address: "Opposite Government Engineering College",
          phone: "+91 95xxxxxx77",
          email: "Narayana@gmail.com",
          images: {
            men: Men,
            brand: BrandImg,
            location: LocationImg,
            call: CallImg,
            mail: MailImg
          }
        },
        {
          location: "Ram Motors, Chandrapur",
          brand: "Sonalika",
          address: "Opposite Government Engineering College",
          phone: "+91 95xxxxxx77",
          email: "Narayana@gmail.com",
          images: {
            men: Men,
            brand: BrandImg,
            location: LocationImg,
            call: CallImg,
            mail: MailImg
          }
        },
        {
          location: "Ram Motors, Chandrapur",
          brand: "Sonalika",
          address: "Opposite Government Engineering College",
          phone: "+91 95xxxxxx77",
          email: "Narayana@gmail.com",
          images: {
            men: Men,
            brand: BrandImg,
            location: LocationImg,
            call: CallImg,
            mail: MailImg
          }
        },
      ]
    },

    {
      dealerCardData: [
        {
          location: "Ram Motors, Chandrapur",
          brand: "Sonalika",
          address: "Opposite Government Engineering College",
          phone: "+91 95xxxxxx77",
          email: "Narayana@gmail.com",
          images: {
            men: Men,
            brand: BrandImg,
            location: LocationImg,
            call: CallImg,
            mail: MailImg
          }
        },
        {
          location: "Ram Motors, Chandrapur",
          brand: "Sonalika",
          address: "Opposite Government Engineering College",
          phone: "+91 95xxxxxx77",
          email: "Narayana@gmail.com",
          images: {
            men: Men,
            brand: BrandImg,
            location: LocationImg,
            call: CallImg,
            mail: MailImg
          }
        },
        {
          location: "Ram Motors, Chandrapur",
          brand: "Sonalika",
          address: "Opposite Government Engineering College",
          phone: "+91 95xxxxxx77",
          email: "Narayana@gmail.com",
          images: {
            men: Men,
            brand: BrandImg,
            location: LocationImg,
            call: CallImg,
            mail: MailImg
          }
        },
      ]
    },


  ];


  const CardsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(dealerData.length / CardsPerPage);

  const indexOfLastCard = currentPage * CardsPerPage;
  const indexOfFirstCard = indexOfLastCard - CardsPerPage;
  const currentCards = dealerData.slice(indexOfFirstCard, indexOfLastCard);


  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const handleNext = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));
  const handlePrev = () => setCurrentPage(prev => Math.max(prev - 1, 1));

  const renderPageNumbers = () => {
    let pages = [];
    const maxPagesToShow = 2;

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
    <Layout currentPage={'dealerLocator'}>
      <Banner
        breadcrumbs={breadcrumbData}
        heading={"DEALER LOCATOR "}
        bannerImg={bannerImg}
      />
      <div className="bg-white lg:px-14 md:px-6 sm:px-3 px-2 sm:pt-4 pt-2 my-3">
        <div className="bg-[#EFEDED] p-4">
          <div className="flex sm:flex-row flex-col gap-2">
            <div className="bg-white p-4 sm:w-[25%] w-full">
              <div>
                <p className="font-bold mb-3 text-[17px]">Search Nearest Dealer</p>
                <div className="mb-4">
                  <label className="form-label">State</label>
                  <select className="block w-full px-2 py-[7px] border 
                    border-gray-300 rounded-md text-[14px] text-[#B9B9B9] mt-2">
                    <option selected>Select State</option>
                    <option value="madhyaPradesh">Madhya Pradesh</option>
                    <option value="maharashtra">Maharashtra</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label className="form-label">District</label>
                  <select className="block w-full px-2 py-[7px] 
                     border border-gray-300 rounded-md  text-[14px] text-[#B9B9B9] mt-2">
                    <option selected>Select District</option>
                    <option value="bhopal">Bhopal</option>
                    <option value="alirajpur">Alirajpur</option>
                    <option value="barwani">Barwani</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label className="form-label">Tehsil or Taluka</label>
                  <select className="block w-full px-2 py-[7px] border border-gray-300 
                    rounded-md text-[14px] text-[#B9B9B9] mt-2">
                    <option value="" selected>Select Tehsil or Taluka</option>
                    <option value="Berasia">Berasia</option>
                    <option value="Huzur">Huzur</option>
                  </select>
                </div>
                <Btn text={"Find Dealer"} bgColor={true}  />

                <div>
                  <p className="font-bold py-3 text-black text-lg">Tractor Dealer List</p>
                </div>

                <div className="flex flex-col gap-3">
                  {dealerData.map((data, dealerDataIndex) => (
                    <div className="slider-container pb-4" key={dealerDataIndex}> 
                      <Slider {...settings}>
                        {data.dealerCardData.map((card, dealerCardDataIndex) => (
                          <div className="card bg-[#EEEEF0] mb-2" key={dealerCardDataIndex}>
                            <span className="w-full px-2 py-1 rounded-md inline-block cursor-pointer font-bold text-black text-sm" id="location-span">
                              {card.location}
                            </span>
                            <div className="bg-[#F6F6F6] pt-2">
                              <div className="flex gap-1 mb-2">
                                <div>
                                  <Image src={card.images.men} alt="men" />
                                </div>
                                <div>
                                  <div className="text-[11px]">
                                    <div className="flex gap-2 mb-1">
                                      <div className="w-[10%]">
                                        <Image src={card.images.brand} alt="BrandImg" />
                                      </div>
                                      <p className="w-[90%]">Brand - <b>{card.brand}</b></p>
                                    </div>

                                    <div className="flex gap-2 mb-1">
                                      <div className="w-[10%]">
                                        <Image src={card.images.location} alt="LocationImg" />
                                      </div>
                                      <p className="w-[90%]">{card.address}</p>
                                    </div>

                                    <div className="flex gap-2 mb-1">
                                      <div className="w-[10%]">
                                        <Image src={card.images.call} alt="callImg" />
                                      </div>
                                      <p className="w-[90%]">{card.phone}</p>
                                    </div>

                                    <div className="flex gap-2 mb-1">
                                      <div className="w-[10%]">
                                        <Image src={card.images.mail} alt="mailImg" />
                                      </div>
                                      <p className="w-[90%]">{card.email}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <Btn text={"Know More"} bgColor={true} />
                            </div>
                          </div>
                        ))}
                      </Slider>
                    </div> 
                  ))} 
                </div>

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
              
              </div>
            </div>

            <div className="bg-white p-4 sm:w-[75%] w-full">
              <iframe
                className="w-full sm:h-[100%] h-[60vh]"
                id="map"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38194496.11757613!2d68.147344015625!3d23.906486820399638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f8fb261d14dc7%3A0x4c7b1fb4b77b7e8f!2sIndia!5e0!3m2!1sen!2sin!4v1620772645379!5m2!1sen!2sin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
