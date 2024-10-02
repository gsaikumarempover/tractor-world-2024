import React, { useEffect, useState } from "react";
import Layout from "@components/Layout";
import Banner from "@components/Banner";
import Heading from "@components/Heading";
import Image from "next/image";
import personalInfo from "@Images/newTractorLoan/personal-info.svg";
import OfferIcon from "@Images/newTractorLoan/offer-icon.svg";
import HassleFree from "@Images/newTractorLoan/hassle-free-icon.svg";
import BankIcon from "@Images/newTractorLoan/bank-icon.svg";
import MahindraFinance from "@Images/bank/mahindraFinance.svg";
import CanaraBank from "@Images/bank/canaraBank.svg";
import Yesbank from "@Images/bank/yesbank.svg";
import Axis from "@Images/bank/axis.svg";
import videoThumbnail from "@Images/loan/videoThumbnail.svg";
import BannerStrip from "@components/BannerStrip";
import bannerImg from '@Images/sellTractor/engineering-excellence-banner.svg';
import { useQuery } from '@apollo/client';  
import {GET_ALL_STATES} from "@utils/constants";
 
export default function ApplyNewTractorLoan() {

  const breadcrumbData = [
    { label: "Home", link: "/" },
    { label: "Loan", link: "#" },
  ];

  
  function TractorLoanEMIContent() {
    return <div>
      <p>A Tractor Loan EMI (Equated Monthly Instalment) is the monthly payment you make until your tractor loan is fully repaid. This amount comprises both the principal loan amount and the interest accrued.</p>
      <div className="grid sm:grid-cols-4 grid-cols-1 mt-2 gap-2">
        <div className="border cursor-pointer">
          <Image src={videoThumbnail} alt="videoThumbnail" layout="responsive" />
        </div>
        <div className="border cursor-pointer">
          <Image src={videoThumbnail} alt="videoThumbnail" layout="responsive" />
        </div>
        <div className="border cursor-pointer">
          <Image src={videoThumbnail} alt="videoThumbnail" layout="responsive" />
        </div>
        <div className="border cursor-pointer">
          <Image src={videoThumbnail} alt="videoThumbnail" layout="responsive" />
        </div>

      </div>
    </div>;
  }

  // end Specifications 
  const accordionData = [
    { id: 1, heading: "Tractor Loan EMI: What Is It?", content: TractorLoanEMIContent(), },
    { id: 2, heading: "Tractor Loan EMI: How Is It Calculated?", content: TractorLoanEMIContent(), },
    { id: 3, heading: "Benefits of Using a Tractor Loan EMI Calculator", content: TractorLoanEMIContent(), },
    { id: 4, heading: "How to Use Mahindra Finance Tractor Loan EMI Calculator?", content: TractorLoanEMIContent(), },
    { id: 5, heading: "Loan Eligibility", content: TractorLoanEMIContent(), },
    { id: 6, heading: "Loan Documents", content: TractorLoanEMIContent(), },
    { id: 7, heading: "Interest Rate All Bank 2024", content: TractorLoanEMIContent(), },
    { id: 8, heading: "Why Is Tractor World Best For Tractor Loans?", content: TractorLoanEMIContent(), },
    { id: 9, heading: "Get your Tractor Loan from leading lenders today!", content: TractorLoanEMIContent(), },

  ];

  // for accordion
  const [openAccordion, setOpenAccordion] = useState(1);
  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const bankImgs = [
    {
      src: MahindraFinance,
      alt: "mahindraFinance"
    },
    {
      src: CanaraBank,
      alt: "canaraBank"
    },
    {
      src: Yesbank,
      alt: "Yesbank"
    },
    {
      src: Axis,
      alt: "axis"
    },
    {
      src: MahindraFinance,
      alt: "mahindraFinance"
    },
    {
      src: CanaraBank,
      alt: "canaraBank"
    },
    {
      src: Yesbank,
      alt: "Yesbank"
    },
    {
      src: Axis,
      alt: "axis"
    }
  ];

  /// Tractor Loan Interest Rate Comparison
  const loanInterest = [
    {
      "bank": "ICICI Bank",
      "interestRate": "13% p.a. to 22% p.a.",
      "finance": "As per terms and conditions",
      "tenure": "Up to 5 years"
    },
    {
      "bank": "State Bank of India",
      "interestRate": "9.00% p.a. - 10.25% p.a.",
      "finance": "Up to 100% finance",
      "tenure": "Up to 5 years"
    },
    {
      "bank": "HDFC Bank",
      "interestRate": "12.57% p.a. to 23.26% p.a.*",
      "finance": "Up to 90% finance",
      "tenure": "12 months to 84 months"
    },
    {
      "bank": "Poonawalla Fincorp",
      "interestRate": "16% p.a. to 20% p.a.",
      "finance": "Up to 90% - 95% finance",
      "tenure": "According to bank"
    }
  ]

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
    <div>
      <Layout currentPage={'loan'}>
        <Banner
          breadcrumbs={breadcrumbData}
          heading={""}
          bannerImg={bannerImg}
          BannerUnderlineImg={false}
        />

        <BannerStrip
          heading={"Apply for Loan"}
          content={
            <>
              <div>
                <form id="applyForm" onSubmit={handleApplyNow}>
                  <div className="flex sm:flex-row flex-col gap-4 mt-4 items-end">
                    {/* <div className="sm:w-1/4 w-full">
                      <label htmlFor="location" className="block mb-2">
                        State
                      </label>
                      <select
                        id="location"
                        className="bg-white border border-gray-300
                                      text-black rounded-md  block w-full 
                                        p-2.5 dark:bg-gray-700 dark:border-gray-600 
                                     dark:placeholder-gray-400 dark:text-white"
                      >
                        <option value="" hidden>Select State</option>
                        {stateList.map((item, index) => {
                          return (
                            <option key={index} value={item.state}>
                              {item.state}
                            </option>
                          );
                        })}
                      </select>
                    </div>

                    <div className="sm:w-1/4 w-full">
                      <label htmlFor="location" className="block mb-2">
                        District
                      </label>
                      <select
                        id="location"
                        className="bg-white border border-gray-300
                                      text-black rounded-md  block w-full 
                                        p-2.5 dark:bg-gray-700 dark:border-gray-600 
                                     dark:placeholder-gray-400 dark:text-white"
                      >
                        <option value="" hidden>Select District</option>
                        {stateList.map((item, index) => {
                          return (
                            <option key={index} value={item.state}>
                              {item.state}
                            </option>
                          );
                        })}
                      </select>
                    </div>

                    <div className="sm:w-1/4 w-full">
                      <label htmlFor="location" className="block mb-2">
                      Tehsil or Taluka
                      </label>
                      <select
                        id="location"
                        className="bg-white border border-gray-300
                                      text-black rounded-md  block w-full 
                                        p-2.5 dark:bg-gray-700 dark:border-gray-600 
                                     dark:placeholder-gray-400 dark:text-white"
                      >
                        <option value="" hidden>Select Tehsil or Taluka</option>
                        {stateList.map((item, index) => {
                          return (
                            <option key={index} value={item.state}>
                              {item.state}
                            </option>
                          );
                        })}
                      </select>
                    </div> */}

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
                      <label className="form-label">State</label>
                      <select className="block w-full px-2 py-[7px] border 
                    border-gray-300 rounded-md text-[14px] text-[#B9B9B9] mt-2">
                        <option selected>Select State</option>
                        <option value="madhyaPradesh">Madhya Pradesh</option>
                        <option value="maharashtra">Maharashtra</option>
                      </select>
                    </div>

                    <div className="sm:w-1/4 w-full">
                      <label className="form-label">District</label>
                      <select className="block w-full px-2 py-[7px] 
                     border border-gray-300 rounded-md  text-[14px] text-[#B9B9B9] mt-2">
                        <option selected>Select District</option>
                        <option value="bhopal">Bhopal</option>
                        <option value="alirajpur">Alirajpur</option>
                        <option value="barwani">Barwani</option>
                      </select>
                    </div>

                    <div className="sm:w-1/4 w-full">
                      <label className="form-label">Tehsil or Taluka</label>
                      <select className="block w-full px-2 py-[7px] border border-gray-300 
                    rounded-md text-[14px] text-[#B9B9B9] mt-2">
                        <option value="" selected>Select Tehsil or Taluka</option>
                        <option value="Berasia">Berasia</option>
                        <option value="Huzur">Huzur</option>
                      </select>
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

        <div className="bg-white lg:px-14 md:px-6 sm:px-3 px-2 sm:pt-4 pt-2 my-3">
          <Heading
            heading={"New Tractor Loan in 4 Steps"}
            BannerUnderlineImg={false}
          />
          <span className="text-sm text-[#333333]">
            Get New tractor loan quickly by these 4 steps.
          </span>

          <div className="grid sm:grid-cols-4 grid-cols-2 gap-4 mt-10">
            <div>
              <div className="grid items-center justify-center gap-2">
                <Image
                  src={personalInfo}
                  alt="personal-info"
                  className="max-w-full h-auto"
                  width={120}
                  height={120}
                />
                <span className="sm:text-medium text-sm text-center">
                  Fill the Form <br />
                  These details make the
                  <br /> process quick.{" "}
                </span>
              </div>
            </div>

            <div>
              <div className="grid items-center justify-center gap-2">
                <Image
                  src={OfferIcon}
                  alt="offer-icon"
                  className="max-w-full h-auto" width={120}
                  height={120}
                />
                <span className="sm:text-medium text-medium text-center">
                  Compare Offers
                  <br />
                  Choose the best loan offer
                  <br /> for you.{" "}
                </span>
              </div>
            </div>

            <div>
              <div className="grid items-center justify-center gap-2">
                <Image
                  src={HassleFree}
                  alt="hassle-free-icon"
                  className="max-w-full h-auto" width={120}
                  height={120}
                />
                <span className="sm:text-medium text-sm text-center">
                  Instant Approval
                  <br /> Get immediate approval from <br />
                  the bank.{" "}
                </span>
              </div>
            </div>

            <div>
              <div className="grid items-center justify-center gap-2">
                <Image
                  src={BankIcon}
                  alt="bank-icon"
                  className="max-w-full h-auto" width={120}
                  height={120}
                />
                <span className="sm:text-medium text-sm text-center">
                  Money in your Account
                  <br /> You can get instant money in an
                  <br /> account.{" "}
                </span>
              </div>
            </div>

          </div>

          <div className="py-4">
            <Heading
              heading={"  Tractor Loan Translates to a New Way Of Farming!"}
              BannerUnderlineImg={false}
            />
            <p className="text-sm">
              Tractors are essential tools for farmers, aiding in various tasks, from planting seeds to transporting harvested crops. For many
              small-scale farmers in India, purchasing a tractor can be financially challenging. Tractor loans or finances become a crucial
              solution in such situations. Tractor loans fall under the agricultural loan category and are provided by leading banks, government financial bodies, and non-banking financial companies (NBFCs). These loans facilitate the easy acquisition of new and mini.  Individuals or groups can apply, and repayment, managed through equated monthly instalments (EMIs), can be collective or individual within the group. Before buying a tractor for your farm, knowing the interest rates on tractor loans from various banks is vital. This helps you make an informed decision and find the best financing option for your agricultural investment. Compare rates
              to find the most suitable choice. Also, the Tractor Loan EMI Calculator tool is a perfect way to calculate your tractor loan EMI.            {/* <span className="cursor-pointer text-secondaryColor block">Read More..</span> */}
            </p>
          </div>

          <p>EMI cal</p>

          <div className="overflow-x-auto sm:overflow-visible">
            <div className="py-4 grid sm:grid-cols-8 grid-cols-4 gap-3">

              {bankImgs.map((image, index) => (
                <Image
                  key={index}
                  src={image.src}
                  className="cursor-pointer"
                  alt={image.alt}
                />
              ))}
            </div>
          </div>

          <div className="py-4">
            <Heading
              heading={"Tractor Loan Interest Rate Comparison"}
              BannerUnderlineImg={false}
            />

            <span className="text-sm">
              Compare the new tractor loan interest rate below.
            </span>
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
                    className="flex justify-between w-full p-3 font-semibold text-left border bg-[#EEEEF0]
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
                    {/* <Table data={item.content.data} /> */}
                    <div className="p-3">
                      {item.content}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* </div> */}
        </div>
      </Layout>
    </div>
  );
}
