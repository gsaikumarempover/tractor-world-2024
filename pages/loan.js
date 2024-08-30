import React, { useState } from "react";
import Layout from "@components/Layout";
import Banner from "@components/Banner";
import Heading from "../components/Heading";
import Image from "next/image";
import personalInfo from "@Images/newTractorLoan/personal-info.svg";
import OfferIcon from "@Images/newTractorLoan/offer-icon.svg";
import HassleFree from "@Images/newTractorLoan/hassle-free-icon.svg";
import BankIcon from "@Images/newTractorLoan/bank-icon.svg";
import MahindraFinance from "@Images/bank/mahindraFinance.svg";
import CanaraBank from "@Images/bank/canaraBank.svg";
import Yesbank from "@Images/bank/yesbank.svg";
import Axis from "@Images/bank/axis.svg";
import Table from "@components/Table";
import BannerStrip from "../components/BannerStrip";
import bannerImg from '@Images/sellTractor/engineering-excellence-banner.svg';
export default function ApplyNewTractorLoan() {
  const breadcrumbData = [
    { label: "Home", link: "/" },
    { label: "Loan", link: "#" },
  ];

  // Specifications data
  const [engineData, setEngineData] = useState([
    {
      tablData: [
        { td: "Engine HP" },
        { td: "49 HP" },
      ]
    },
    {
      tablData: [
        { td: "Engine HP" },
        { td: "49 HP" },
      ]
    },
    {
      tablData: [
        { td: "Engine HP" },
        { td: "49 HP" },
      ]
    },
    {
      tablData: [
        { td: "Engine HP" },
        { td: "49 HP" },
      ]
    },
    // { label: "", value: "49 HP" },
    // { label: "PTO HP", value: "44.9 HP" },
    // { label: "Wheel drive", value: "2WD" },
    // { label: "Forward Gears", value: "2" },
    // { label: "Reverse Gears", value: "2" },
    // { label: "Brake Type", value: "Oil Immersed" },
    // { label: "Price", value: "Check Price" },
  ]);

  const [steeringData, setSteeringData] = useState([
    {
      tablData: [
        { td: "Engine HP" },
        { td: "49 HP" },
      ]
    },
    {
      tablData: [
        { td: "Engine HP" },
        { td: "49 HP" },
      ]
    },
    {
      tablData: [
        { td: "Engine HP" },
        { td: "49 HP" },
      ]
    },
    {
      tablData: [
        { td: "Engine HP" },
        { td: "49 HP" },
      ]
    },
  ]);
  // end Specifications

  const accordionData = [
    { id: 1, heading: "New Tractor Loan Eligibility", content: { data: engineData } },
    { id: 2, heading: "BRAKES", content: { data: engineData } },
    { id: 3, heading: "TRACTOR LOAN DOCUMENTS", content: { data: engineData } },
    { id: 4, heading: "TRACTOR LOAN INTEREST RATE ALL BANK 2024", content: { data: engineData }, },
    { id: 5, heading: "WHY IS TRACTOR WORLD BEST FOR TRACTOR LOANS?", content: { data: steeringData }, },
    { id: 6, heading: "GET YOUR TRACTOR LOAN FROM LEADING LENDERS TODAY!", content: { data: steeringData }, },
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
          heading={"Apply for New Tractor Loan"}
          content={
            <>
              <div>
                <form>
                  <div className="flex sm:flex-row flex-col gap-4 mt-4 items-end">
                    <div className="sm:w-1/4 w-full">
                      <label htmlFor="location" className="block mb-2">
                        Location
                      </label>
                      <select
                        id="location"
                        className="bg-white border border-gray-300
                                      text-black rounded-md  block w-full 
                                        p-2.5 dark:bg-gray-700 dark:border-gray-600 
                                     dark:placeholder-gray-400 dark:text-white"
                      >
                        <option>Select Your Location</option>
                      </select>
                    </div>

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
                      <div
                        className="bg-secondaryColor px-2 py-3 text-white 
                        text-center rounded-md font-semibold cursor-pointer"
                      >
                        Sell Now
                      </div>
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
                />
                <span className="text-sm text-center">
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
                  className="max-w-full h-auto"
                />
                <span className="text-sm text-center">
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
                  className="max-w-full h-auto"
                />
                <span className="text-sm text-center">
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
                  className="max-w-full h-auto"
                />
                <span className="text-sm text-center">
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
              to find the most suitable choice. Also, the Tractor Loan EMI Calculator tool is a perfect way to calculate your tractor loan EMI.
            </p>
          </div>

          <div className="overflow-x-auto sm:overflow-visible">
            <div className="py-4 flex sm:grid sm:grid-cols-8 gap-3">

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

          <table className="min-w-full border border-gray-300">
            <thead className=" bg-[#EEEEF0]">
              <tr>
                <th className="px-4 py-2 border border-gray-300 text-left">
                  Bank Name
                </th>
                <th className="px-4 py-2 border border-gray-300 text-left">
                  Interest Rate
                </th>
                <th className="px-4 py-2 border border-gray-300 text-left">
                  Loan Amount
                </th>
                <th className="px-4 py-2 border border-gray-300 text-left">
                  Loan Tenure
                </th>
              </tr>
            </thead>

            <tbody>
              {loanInterest.map((row, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 border border-gray-300 text-sm">{row.bank}</td>
                  <td className="px-4 py-2 border border-gray-300 text-sm">{row.interestRate}</td>
                  <td className="px-4 py-2 border border-gray-300 text-sm">{row.finance}</td>
                  <td className="px-4 py-2 border border-gray-300 text-sm">{row.tenure}</td>
                </tr>
              ))}

            </tbody>
          </table>
          {/* 
          <div className="py-4 ">
            <h6 className="font-bold bg-[#DEE2E6] text-sm p-2 border border-gray-200">
              NEW TRACTOR LOAN ELIGIBILITY
            </h6>
            <div className=" border border-gray-200">
              <span className="text-sm ml-2">
                Check down below eligibility for a new tractor loan.
              </span>
              <ul className="text-sm list-disc pl-5 ml-8">
                <li>Minimum Age: 18 years</li>
                <li>Income Proof and Minimum Land Holding of 2 Acres</li>
                <li>Maximum Age: 65 Years</li>
              </ul>
            </div>
          </div> */}

          {/* <div className="bg-white lg:px-14 md:px-6 sm:px-3 px-2 sm:pt-4 pt-4  py-2"> */}
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
          {/* </div> */}
        </div>
      </Layout>
    </div>
  );
}
