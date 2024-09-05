import React from "react";
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
 
  
  const handleAlldealers = () => {
    router.push('/dealers');
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
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label className="form-label">District</label>
                  <select className="block w-full px-2 py-[7px] 
                     border border-gray-300 rounded-md  text-[14px] text-[#B9B9B9] mt-2">
                    <option selected>Select District</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label className="form-label">Tehsil or Taluka</label>
                  <select className="block w-full px-2 py-[7px] border border-gray-300 
                    rounded-md text-[14px] text-[#B9B9B9] mt-2">
                    <option selected>Select Tehsil or Taluka</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <Btn text={"Find Dealer"} bgColor={true} onClick={handleAlldealers}/>

                <div>
                  <p className="font-bold py-3 text-black text-lg">Tractor Dealer List</p>
                </div>

                <div className="slider-container pb-4">
                  <Slider {...settings}> 
                  
                    <div className="card bg-[#EEEEF0] mb-2">
                      <span className="w-full px-2 py-1 rounded-md inline-block cursor-pointer 
                    font-bold text-black text-sm" id="location-span">
                        Ram Motors, Chandrapur
                      </span> 
                      <div className="bg-[#F6F6F6] pt-2">
                        <div className="flex gap-1 mb-2">
                          <div className="">
                            <Image src={Men} alt="men" />
                          </div>
                          <div> 
                            <div className="text-[11px]">
                              <div className="flex gap-2 mb-1">
                                <div className="w-[10%]">
                                  <Image src={BrandImg} alt="BrandImg" />
                                </div>
                                <p className="w-[90%]">Brand - <b>Sonalika</b></p>
                              </div>

                              <div className="flex gap-2 mb-1">
                                <div className="w-[10%]">
                                  <Image src={LocationImg} alt="LocationImg" />
                                </div>
                                <p className="w-[90%]"> Opposite Government Engineering College </p>
                              </div>

                              <div className="flex gap-2 mb-1">
                                <div className="w-[10%]">
                                  <Image src={CallImg} alt="callImg" />
                                </div>
                                <p className="w-[90%]">+91 95xxxxxx77</p>
                              </div>

                              <div className="flex gap-2 mb-1">
                                <div className="w-[10%]">
                                  <Image src={MailImg} alt="men" />
                                </div>
                                <p className="w-[90%]">Narayana@gmail.com</p>
                              </div>
                            </div>
                          </div> 
                        </div>
                       <Btn text={" Talk To Dealer"} bgColor={true} /> 
                      </div> 
                     </div> 

                     <div className="card bg-[#EEEEF0] mb-2">
                      <span className="w-full px-2 py-1 rounded-md inline-block cursor-pointer 
                    font-bold text-black text-sm" id="location-span">
                        Ram Motors, Chandrapur
                      </span> 
                      <div className="bg-[#F6F6F6] pt-2">
                        <div className="flex gap-1 mb-2">
                          <div className="">
                            <Image src={Men} alt="men" />
                          </div>
                          <div> 
                            <div className="text-[11px]">
                              <div className="flex gap-2 mb-1">
                                <div className="w-[10%]">
                                  <Image src={BrandImg} alt="BrandImg" />
                                </div>
                                <p className="w-[90%]">Brand - <b>Sonalika</b></p>
                              </div>

                              <div className="flex gap-2 mb-1">
                                <div className="w-[10%]">
                                  <Image src={LocationImg} alt="LocationImg" />
                                </div>
                                <p className="w-[90%]"> Opposite Government Engineering College </p>
                              </div>

                              <div className="flex gap-2 mb-1">
                                <div className="w-[10%]">
                                  <Image src={CallImg} alt="callImg" />
                                </div>
                                <p className="w-[90%]">+91 95xxxxxx77</p>
                              </div>

                              <div className="flex gap-2 mb-1">
                                <div className="w-[10%]">
                                  <Image src={MailImg} alt="men" />
                                </div>
                                <p className="w-[90%]">Narayana@gmail.com</p>
                              </div>
                            </div>
                          </div> 
                        </div>
                       <Btn text={" Talk To Dealer"} bgColor={true} /> 
                      </div> 
                     </div>   
                    
                     <div className="card bg-[#EEEEF0] mb-2">
                      <span className="w-full px-2 py-1 rounded-md inline-block cursor-pointer 
                    font-bold text-black text-sm" id="location-span">
                        Ram Motors, Chandrapur
                      </span> 
                      <div className="bg-[#F6F6F6] pt-2">
                        <div className="flex gap-1 mb-2">
                          <div className="">
                            <Image src={Men} alt="men" />
                          </div>
                          <div> 
                            <div className="text-[11px]">
                              <div className="flex gap-2 mb-1">
                                <div className="w-[10%]">
                                  <Image src={BrandImg} alt="BrandImg" />
                                </div>
                                <p className="w-[90%]">Brand - <b>Sonalika</b></p>
                              </div>

                              <div className="flex gap-2 mb-1">
                                <div className="w-[10%]">
                                  <Image src={LocationImg} alt="LocationImg" />
                                </div>
                                <p className="w-[90%]"> Opposite Government Engineering College </p>
                              </div>

                              <div className="flex gap-2 mb-1">
                                <div className="w-[10%]">
                                  <Image src={CallImg} alt="callImg" />
                                </div>
                                <p className="w-[90%]">+91 95xxxxxx77</p>
                              </div>

                              <div className="flex gap-2 mb-1">
                                <div className="w-[10%]">
                                  <Image src={MailImg} alt="men" />
                                </div>
                                <p className="w-[90%]">Narayana@gmail.com</p>
                              </div>
                            </div>
                          </div> 
                        </div>
                       <Btn text={" Talk To Dealer"} bgColor={true} /> 
                      </div> 
                     </div> 
                     
                  </Slider>
                </div> 
                <div className="mt-2">
                   <Btn text={"View All"} bgColor={false}  onClick={handleAlldealers} />
                   </div>
               </div>
            </div>

            <div className="bg-white p-4 sm:w-[75%] w-full">
              <iframe
                className="w-full h-[100%]"
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
