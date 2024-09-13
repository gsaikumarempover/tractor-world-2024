import React, { useState } from "react";
import Layout from "@components/Layout";
import Banner from "@components/Banner";
import Image from "next/image";
import BannerStrip from "@components/BannerStrip";
import bannerImg from '@Images/sellTractor/engineering-excellence-banner.svg';
import CallIcon from '@Images/CallIcon.svg';
export default function Enquiry() {
    const breadcrumbData = [
        { label: "Home", link: "/" },
        { label: "Enquiry", link: "#" },
    ];

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
                    bannerImg={bannerImg}
                    BannerUnderlineImg={false}
                />
<div className="bg-white"></div>
                <BannerStrip
                    heading={"Share Your Details To Get Tractor Prices"}
                    content={
                        <>
                            <div>
                                <form id="applyForm" onSubmit={handleApplyNow}>
                                    <div className="flex sm:flex-row flex-col gap-4 mt-4 items-end">


                                        <div className="sm:w-1/4 w-full">
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

                                        <div className="sm:w-1/4 w-full">
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

                                        <div className="sm:w-1/4 w-full">
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

                                        <div className="sm:w-1/4 w-full">
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

                                        <div className="sm:w-1/4 w-full flex gap-2"> 
                                            <input type="checkbox" className="mt-1" />
                                            <label htmlFor="location" className="block mb-2 mt-0">
                                                By clicking “Get Price”, I agree to be  contacted
                                                by Tractor world associates regarding my
                                                interest via phone call, WhatsApp or any other medium.
                                            </label>
                                        </div> 

                                        <div className="sm:w-1/4 w-full">
                                            <button type="submit"
                                                className="bg-secondaryColor px-2 py-3 text-white 
                        text-center rounded-md w-full font-semibold cursor-pointer"
                                            >
                                                Apply Now
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </>
                    }
                />
                </div>

                <div className="bg-white lg:px-14 md:px-6 sm:px-3 px-2 sm:pt-4 pt-2 my-3">
                  
                  <div className="flex">
                   <Image src={CallIcon} alt="phone" /> <p>For more information call us
                    on our Toll-Free Number:</p>  
                  </div> 
                </div>
            </Layout>
     );
}
