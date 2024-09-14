import React, { useState,useEffect } from "react";
import Layout from "@components/Layout";
import Banner from "@components/Banner";
import Image from "next/image";
import BannerStrip from "@components/BannerStrip";
import bannerImg from '@Images/home/enquiryBanner.svg';
import CallIcon from '@Images/CallIcon.svg';
import enquirywebBanner from '@Images/home/enquirywebBanner.svg';
import WhyChoose from '@Images/home/whyChoose.svg';
import Link from "next/link";

export default function Enquiry() {
    const breadcrumbData = [
        { label: "Home", link: "/" },
        { label: "Enquiry", link: "#" },
    ];

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
            // alert(isMobile)// Adjust the breakpoint as needed
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isMobile]); // Empty dependency array ensures useEffect runs only once after initial render


    const handleApplyNow = (event) => {
        event.preventDefault();

        const formElement = document.getElementById("applyForm");
        if (formElement instanceof HTMLFormElement) {
            const inputs = formElement.querySelectorAll("input");
            let formIsValid = true;
            inputs.forEach((input) => {
                if (!input.value.trim()) {
                    formIsValid = false;
                    input.classList.add("error");
                } else {
                    input.classList.remove("error");
                }
            });

            if (formIsValid) {
                formElement.reset();
                alert("Successfully applied for loan!");
            } else {
                alert("Please fill all required fields.");
            }
        } else {
            console.error("Form element not found or invalid type.");
        }
    };

    return (

        <Layout currentPage={'enquiry'}>
            <div>
                <Banner
                    breadcrumbs={breadcrumbData}
                    heading={""}
                    bannerImg={isMobile?bannerImg:enquirywebBanner}
                    BannerUnderlineImg={false} 
                    text={'Tractor or implement prices shown on any external website are not  approved or authorized by Tractor World Tractors. Please submit your details  or contact your nearest authorized Mahindra dealership to get the best  price in your location.'}
                />
                <div className="bg-white"></div>
                <BannerStrip
                    isEnquiry={true}
                    heading={"Share Your Details To Get Tractor Prices"}
                    content={
                        <>
                            <div>
                                <form id="applyForm" onSubmit={handleApplyNow}>
                                    <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-x-20 sm:gap-y-6 gap-4 mt-4 items-end">


                                        <div className="w-full">
                                            <label htmlFor="name" className="block mb-2">
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                className="bg-white border 
                      border-gray-300 text-black rounded-md block w-full 
                        p-2.5 dark:bg-gray-700 dark:border-gray-600 
                       dark:placeholder-gray-400 dark:text-white"
                                                placeholder="Enter your Name"
                                            />
                                        </div>

                                        <div className="w-full">
                                            <label htmlFor="number" className="block mb-2">
                                                Mobile Number
                                            </label>
                                            <input
                                                type="number"
                                                id="name"
                                                className="bg-white border 
                      border-gray-300 text-black rounded-md block w-full 
                        p-2.5 dark:bg-gray-700 dark:border-gray-600 
                       dark:placeholder-gray-400 dark:text-white"
                                                placeholder="Enter Your Mobile Number"
                                            />
                                        </div>

                                        <div className="w-full">
                                            <label htmlFor="location" className="block mb-2">
                                                Select Budget
                                            </label>
                                            <select
                                                id="location"
                                                className="bg-white border border-gray-300
                                      text-black rounded-md  block w-full 
                                        p-2.5 dark:bg-gray-700 dark:border-gray-600 
                                     dark:placeholder-gray-400 dark:text-white"
                                            >
                                                <option value="">Select Budget</option>
                                                <option value="0_3">0 Lakh - 3 Lakh</option>
                                                <option value="3_5">3 Lakh - 5 Lakh</option>
                                                <option value="5_7">5 Lakh - 7 Lakh</option>
                                                <option value="7_10">7 Lakh - 10 Lakh</option>
                                                <option value=">10">Above 10 Lakh</option>
                                            </select>
                                        </div>

                                        <div className="w-full">
                                            <label htmlFor="location" className="block mb-2">
                                                Select Location
                                            </label>
                                            <select
                                                id="location"
                                                className="bg-white border border-gray-300
                                      text-black rounded-md  block w-full 
                                        p-2.5 dark:bg-gray-700 dark:border-gray-600 
                                     dark:placeholder-gray-400 dark:text-white"
                                            >
                                                <option value="">Select Your Location</option>
                                                <option value="madhyaPradesh">Madhya Pradesh</option>
                                                <option value="maharashtra">Maharashtra</option>
                                            </select>
                                        </div> 
                                    </div>

                                    
                                    <div className="w-full flex gap-2 mt-6">
                                            <input type="checkbox" className="mt-1" />
                                            <label htmlFor="location" className="block mb-2 mt-0">
                                                By clicking “Get Price”, I agree to be  contacted
                                                by Tractor world associates regarding my
                                                interest via phone call, WhatsApp or any other medium.
                                            </label>
                                        </div>


                                    <div className="w-full flex justify-center mt-6">
                                        <button type="submit"
                                            className="bg-secondaryColor px-2 py-3 text-white 
                        text-center rounded-md sm:w-1/2 w-full font-semibold cursor-pointer"
                                        >
                                            Get Price
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </>
                    }
                />
            </div>

            <div className="bg-white pb-6 lg:px-14 md:px-6 sm:px-3 px-2 sm:pt-4 pt-2 my-3 sm:h-auto h-24">
                <div className="relative px-4 sm:flex justify-center">
                    <div>
                    <div className="flex gap-4 items-center">
                        <Image src={CallIcon} alt="phone" width={40} height={40} />
                        <p className="text-medium">For more information call us<br></br>
                            on our Toll-Free Number:</p>
                    </div>
                    <p className="text-primaryColor">24*7 <Link href="tel:18006669999">1800 666 9999</Link></p>

                    </div>
                    <div className="sm:relative absolute sm:right-[67px] right-[-4px] top-[-8px] sm:w-[200px] w-[160px]">
                        <Image src={WhyChoose} alt="whyChoose" layout="responsive" />
                    </div>
                </div>

            </div>
        </Layout>
    );
}
