import React, { useState, useEffect } from "react";
import Layout from "@components/Layout";
import Banner from "@components/Banner";
import Btn from '@components/Btn';
import Image from "next/image";
import DefaultTractor from "@Images/default_tractor.svg";
import Heading from "@components/Heading";
import Leftarrow from '@Images/offers/leftarrow.svg';
import Rightarrow from '@Images/offers/rightarrow.svg';
import bannerImg from "@Images/inventory/inventory-banner.svg";
import filterIcon from '@Images/inventory/filterIcon.svg'
import sortIcon from '@Images/inventory/sortIcon.svg'
import Crossmark from '@Images/inventory/closeIcon.svg';
import mapIcon from '@Images/inventory/mapIcon.svg';
import Modal from "@components/Modal";
import Tab from "@components/Tab";
import listView from "@Images/inventory/listView.svg";
import listActiveView from "@Images/inventory/listActiveView.svg";
import gridActiveView from "@Images/inventory/gridActiveView.svg";
import gridView from "@Images/inventory/gridView.svg";

export default function Inventory() {
  //// apply,reset btns active 
  const [resetBgColor, setResetBgColor] = useState(false);
  const [applyBgColor, setApplyBgColor] = useState(true);

  ///// for collpase
  const [showStates, setShowStates] = useState({
    showBrands: true,
    showHps: false,
    showPrices: false
  });

  ///breadcrumbs data
  const breadcrumbData = [
    { label: "Home", link: "/" },
    { label: "Inventory", link: "#" },
  ];

  //filters data
  const filters = [
    {
      "title": "Brand",
      "showKey": "showBrands",
      "options": [
        { "label": "Mahindra (10)", "value": "mahindra" },
        { "label": "John Deere (5)", "value": "john_deere_1" },
        { "label": "John Deere (5)", "value": "john_deere_2" },
        { "label": "John Deere (5)", "value": "john_deere_3" },
        { "label": "John Deere (5)", "value": "john_deere_4" }
      ]
    },
    {
      "title": "HP",
      "showKey": "showHps",
      "options": [
        { "label": "21 HP - 30 HP", "value": "21_30_hp" },
        { "label": "31 HP - 40 HP", "value": "31_40_hp" },
        { "label": "41 HP - 50 HP", "value": "41_50_hp" },
        { "label": "51 HP - 60 HP", "value": "51_60_hp" }
      ]
    },
    {
      "title": "Price",
      "showKey": "showPrices",
      "options": [
        { "label": "5 Lakh - 6 Lakh", "value": "5_6_lakh" },
        { "label": "6 Lakh - 7 Lakh", "value": "6_7_lakh" },
        { "label": "7 Lakh - 9 Lakh", "value": "7_9_lakh" },
        { "label": "Above 11 Lakh", "value": "above_11_lakh" }
      ]
    }
  ]

  ////for filters collpase
  const onToggle = (key) => {
    setShowStates((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  ////apply, reset btn click functionality
  const handleResetClick = () => {
    setResetBgColor(true);
    setApplyBgColor(false);
    clearSelectedValues();
  };

  const handleApplyClick = () => {
    setApplyBgColor(true);
    setResetBgColor(false);
  };

  const clearSelectedValues = () => {
    const radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach((radio) => (radio.checked = false));
  };


  const PopularTractors = [

    {
      "certified": true,
      "price": "₹984006",
      "title": "Mahindra Oja 2127",
      "features": [
        { "icon": "/images/time.svg", "text": "50 hrs" },
        { "icon": "/images/wheel.svg", "text": "2WD" },
        { "icon": "/images/hp.svg", "text": "49 HP" },
        { "icon": "/images/mapIcon.svg", "text": "Mumbai" }
      ]
    },
    {
      "certified": true,
      "price": "₹984006",
      "title": "Mahindra Oja 2127",
      "features": [
        { "icon": "/images/time.svg", "text": "50 hrs" },
        { "icon": "/images/wheel.svg", "text": "2WD" },
        { "icon": "/images/hp.svg", "text": "49 HP" },
        { "icon": "/images/mapIcon.svg", "text": "Mumbai" }
      ]
    },
    {
      "certified": true,
      "price": "₹984006",
      "title": "Mahindra Oja 2127",
      "features": [
        { "icon": "/images/time.svg", "text": "50 hrs" },
        { "icon": "/images/wheel.svg", "text": "2WD" },
        { "icon": "/images/hp.svg", "text": "49 HP" },
        { "icon": "/images/mapIcon.svg", "text": "Mumbai" }
      ]
    },
    {
      "certified": true,
      "price": "₹984006",
      "title": "Mahindra Oja 2124",
      "features": [
        { "icon": "/images/time.svg", "text": "50 hrs" },
        { "icon": "/images/wheel.svg", "text": "2WD" },
        { "icon": "/images/hp.svg", "text": "49 HP" },
        { "icon": "/images/mapIcon.svg", "text": "Mumbai" }
      ]
    },
    {
      "certified": true,
      "price": "₹984006",
      "title": "Mahindra Oja 2127",
      "features": [
        { "icon": "/images/time.svg", "text": "50 hrs" },
        { "icon": "/images/wheel.svg", "text": "2WD" },
        { "icon": "/images/hp.svg", "text": "49 HP" },
        { "icon": "/images/mapIcon.svg", "text": "Mumbai" }
      ]
    },
    {
      "certified": true,
      "price": "₹984006",
      "title": "Mahindra Oja 2127",
      "features": [
        { "icon": "/images/time.svg", "text": "50 hrs" },
        { "icon": "/images/wheel.svg", "text": "2WD" },
        { "icon": "/images/hp.svg", "text": "49 HP" },
        { "icon": "/images/mapIcon.svg", "text": "Mumbai" }
      ]
    },
    {
      "certified": true,
      "price": "₹984006",
      "title": "Mahindra Oja 2127",
      "features": [
        { "icon": "/images/time.svg", "text": "50 hrs" },
        { "icon": "/images/wheel.svg", "text": "2WD" },
        { "icon": "/images/hp.svg", "text": "49 HP" },
        { "icon": "/images/mapIcon.svg", "text": "Mumbai" }
      ]
    },
    {
      "certified": true,
      "price": "₹984006",
      "title": "Mahindra Oja 2127",
      "features": [
        { "icon": "/images/time.svg", "text": "50 hrs" },
        { "icon": "/images/wheel.svg", "text": "2WD" },
        { "icon": "/images/hp.svg", "text": "49 HP" },
        { "icon": "/images/mapIcon.svg", "text": "Mumbai" }
      ]
    },
    {
      "certified": true,
      "price": "₹984006",
      "title": "Mahindra Oja 2127",
      "features": [
        { "icon": "/images/time.svg", "text": "50 hrs" },
        { "icon": "/images/wheel.svg", "text": "2WD" },
        { "icon": "/images/hp.svg", "text": "49 HP" },
        { "icon": "/images/mapIcon.svg", "text": "Mumbai" }
      ]
    },
    {
      "certified": true,
      "price": "₹984006",
      "title": "Mahindra Oja 2127",
      "features": [
        { "icon": "/images/time.svg", "text": "50 hrs" },
        { "icon": "/images/wheel.svg", "text": "2WD" },
        { "icon": "/images/hp.svg", "text": "49 HP" },
        { "icon": "/images/mapIcon.svg", "text": "Mumbai" }
      ]
    },
    {
      "certified": true,
      "price": "₹984006",
      "title": "Mahindra Oja 2127",
      "features": [
        { "icon": "/images/time.svg", "text": "50 hrs" },
        { "icon": "/images/wheel.svg", "text": "2WD" },
        { "icon": "/images/hp.svg", "text": "49 HP" },
        { "icon": "/images/mapIcon.svg", "text": "Mumbai" }
      ]
    },
    {
      "certified": true,
      "price": "₹984006",
      "title": "Mahindra Oja 2127",
      "features": [
        { "icon": "/images/time.svg", "text": "50 hrs" },
        { "icon": "/images/wheel.svg", "text": "2WD" },
        { "icon": "/images/hp.svg", "text": "49 HP" },
        { "icon": "/images/mapIcon.svg", "text": "Mumbai" }
      ]
    }
  ]

  const CardsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(PopularTractors.length / CardsPerPage);

  const indexOfLastCard = currentPage * CardsPerPage;
  const indexOfFirstCard = indexOfLastCard - CardsPerPage;
  const currentCards = PopularTractors.slice(indexOfFirstCard, indexOfLastCard);


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

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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

  const [showFilter, setShowFilter] = useState(false);

  const isShowFilter = () => {
    setShowFilter(true);
  };

  const isHideFilter = () => {
    setShowFilter(false);
  };

  const [showModal, setShowModal] = useState(false);

  const isShowSorting = () => {
    setShowModal(true);
  }

  const handleClose = () => {
    setShowModal(false);
  }

  const customStyles = {
    content: {
      top: 'auto',
      left: 'auto',
      right: 'auto',
      bottom: '0',
      width: '100%',
      borderTopLeftRadius: '15px',
      borderTopRightRadius: '15px',
      backgroundColor: 'rgba(255, 255, 255, 0)',
      border: 'none',
    },
  };

  const [activeTab, setActiveTab] = useState("gridData");
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div>
      <div className={`${showFilter ? 'overlay' : 'hidden'}`}></div>

      <Layout>
        <Banner
          breadcrumbs={breadcrumbData}
          heading={"Live Inventory - June 2024"}
          bannerImg={bannerImg}
        />

        {isVisible && (
          <div className='sm:hidden block'>
            <div className='fixed bottom-0 w-full z-40
           bg-white rounded-tl-3xl rounded-tr-3xl text-secondaryColor'>
              <div className='flex text-[15px] p-3'>
                <div className='text-center border-r border-[#F37021] border-opacity-25 w-1/2' onClick={isShowFilter}>
                  <Image src={filterIcon} alt="filterIcon" width={25} height={25} />
                  <p>Filter</p>
                </div>

                <div className='text-center w-1/2' onClick={isShowSorting}>
                  <Image src={sortIcon} alt="sortIcon" width={25} height={25} />
                  <p>Sort</p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className={`${showFilter ? 'sm:hidden block' : 'hidden'} transition-max-height duration-300 
        ease-in-out w-full  sm:w-auto`} id="navbar-default">
          <div className="sm:w-auto w-[312px]
         sm:bg-transparent z-50 sm:relative flex fixed top-0 sm:pb-4 sm:pt-4 Navbar">


            <div className="px-4 py-4 sm:h-auto h-screen bg-white">

              <div className="flex">
                <div className="w-1/2">
                  <Btn text={'Reset'} bgColor={resetBgColor}
                    roundednone={true} onClick={handleResetClick} />
                </div>
                <div className="w-1/2">
                  <Btn text={'Apply Filter'} bgColor={applyBgColor} roundednone={true} onClick={handleApplyClick} />
                </div>
              </div>

              <div className="mt-2 w-full">
                <div className="w-full flex">
                  <input type="search" placeholder="Type Here"
                    className="border-secondaryColor border-r-0 w-full" />
                  <Image src="/images/inventory/searchicon.svg" width={85} height={75} alt="SearchIcon" className="w-[48px]" />
                </div>
              </div>

              <div className="border mt-4 bg-white">
                {filters.map((filter) => (
                  <div key={filter.title}>
                    <div
                      className="bg-[#EEEEEE] cursor-pointer m-[2px] font-semibold p-2 flex items-center justify-between"
                      onClick={() => onToggle(filter.showKey)}
                    >
                      <div>{filter.title}</div>
                      <div>
                        {showStates[filter.showKey] ? (
                          <svg
                            data-accordion-icon
                            className="w-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 12h14"
                            />
                          </svg>
                        ) : (
                          <svg
                            data-accordion-icon
                            className="w-3 h-3 rotate-180"
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
                        )}
                      </div>
                    </div>
                    {showStates[filter.showKey] && (
                      <div className="p-2 flex flex-col w-full gap-2">
                        {filter.options.map((option, index) => (
                          <div key={index}>
                            <input type="radio" name={filter.title.toLowerCase()} value={option.value} />
                            <label className="ml-2">{option.label}</label>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>


            </div>

            <div className="right-0 top-0 z-50 pt-4 pl-2">
              <Image src={Crossmark} width={35} height={35} onClick={isHideFilter} alt="Crossmark" />
            </div>
          </div>
        </div>

        <div className="bg-white lg:px-14 md:px-6 sm:px-3 px-2 sm:pt-4 pt-2 my-3">
          <div className="flex sm:flex-row flex-col gap-2">

            <div className="relative w-full sm:hidden block">
              <input type="text" placeholder="search..." className="w-full rounded border-[1px] px-8 border-[#D0D0D0] py-3" />
              <div className="absolute top-[55%] transform -translate-y-1/2 left-2">
                <Image src={mapIcon} alt="search" width={22} height={22} />
              </div>

              <div className="absolute top-1/2 transform -translate-y-1/2 right-2">
                <span className="text-sm text-secondaryColor cursor-pointer font-medium">Edit</span>
              </div>
            </div>


            <div className="bg-[#F6F6F6] p-4 sm:w-[25%] w-full sm:block hidden">

              <div className="flex">
                <div className="w-1/2">
                  <Btn text={'Reset'} bgColor={resetBgColor}
                    roundednone={true} onClick={handleResetClick} />
                </div>
                <div className="w-1/2">
                  <Btn text={'Apply Filter'} bgColor={applyBgColor} roundednone={true} onClick={handleApplyClick} />
                </div>
              </div>

              <div className="mt-2 w-full">
                <div className="w-full flex">
                  <input type="search" placeholder="Type Here"
                    className="border-secondaryColor border-r-0 w-full" />
                  <Image src="/images/inventory/searchicon.svg" width={85} height={75} alt="SearchIcon" className="w-[48px]" />
                </div>
              </div>

              <div className="border mt-4 bg-white">
                {filters.map((filter) => (
                  <div key={filter.title}>
                    <div
                      className="bg-[#EEEEEE] cursor-pointer m-[2px] font-semibold p-2 flex items-center justify-between"
                      onClick={() => onToggle(filter.showKey)}
                    >
                      <div>{filter.title}</div>
                      <div>
                        {showStates[filter.showKey] ? (
                          <svg
                            data-accordion-icon
                            className="w-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 12h14"
                            />
                          </svg>
                        ) : (
                          <svg
                            data-accordion-icon
                            className="w-3 h-3 rotate-180"
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
                        )}
                      </div>
                    </div>
                    {showStates[filter.showKey] && (
                      <div className="p-2 flex flex-col w-full gap-2">
                        {filter.options.map((option, index) => (
                          <div key={index}>
                            <input type="radio" name={filter.title.toLowerCase()} value={option.value} />
                            <label className="ml-2">{option.label}</label>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="sm:w-[75%] w-full">
              <div className="flex justify-between items-center">
                <div className="w-auto">
                  <Heading heading={'Popular Tractors'} />
                </div>

                <div className="sm:hidden flex">

                  <Tab id="listData" image={true} activeTab={activeTab} onClick={handleTabClick}>
                    {activeTab === "listData" ? <Image src={listActiveView} alt="listActiveView" /> : <Image src={listView} alt="listView" />}
                  </Tab>

                  <Tab id="gridData" image={true} activeTab={activeTab} onClick={handleTabClick}>
                    {activeTab === "gridData" ? <Image src={gridActiveView} alt="gridActiveView" /> : <Image src={gridView} alt="gridView" />}

                  </Tab>
                </div>

              </div>

              <div className="sm:hidden block">
                {activeTab == 'gridData' && (
                  <div className="">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
                      {
                        currentCards.slice(0, 3).map((item, idx) => (
                          <div
                            key={idx}
                            className="gap-4 bg-white border-[#D9D9D9] border-[1px] overflow-hidden shadow-lg flex-none"
                          >
                            <div className="relative">
                              <Image
                                className="w-full"
                                src={DefaultTractor}
                                alt="cardImage"
                                layout="responsive"
                                width={100}
                                height={70}
                              />
                              {item.certified && (
                                <div className="bg-secondaryColor px-2 text-white text-sm absolute top-4 left-4 uppercase font-medium border-gradient">
                                  CERTIFIED
                                </div>
                              )}
                              <div className="bg-black font-semibold text-white w-auto px-2 py-1 float-right">
                                {item.price}
                              </div>
                            </div>
                            <div className="xl:px-4 bg-[#eeeeee] lg:px-2 sm:px-2 px-2 pt-1 h-24">
                              <div className="font-bold xl:text-lg md:text-[16px] sm:text-[14px] text-base tractorTitle">
                                {item.title}
                              </div>
                              <div className="flex items-center xl:text-base lg:text-sm sm:text-sm text-base my-3">
                                {item.features.map((feature, fIdx) => (
                                  <div
                                    key={fIdx}
                                    className={`flex gap-1 h-[14px] items-center border-r-[1px] border-black ${fIdx > 0 ? 'px-[6px]' : 'pr-[6px]'}`}
                                  >
                                    <Image src={feature.icon} alt={feature.icon} width={10} height={10} />
                                    <span>{feature.text}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div className="border-t-[1px] border-[#D9D9D9] relative bottom-0">
                              <div className="m-[1px] xl:px-6 px-4 pt-4 pb-2 bg-secondaryColor cursor-pointer">
                                <span className="flex items-center gap-1 font-semibold text-white mr-2 mb-2 text-base justify-center">
                                  <Image src='/images/phnIcon.svg' width={15} height={15} className="w-4 mr-1" alt="phnIcon" /> Interested{" "}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))
                      }
                    </div>
                  </div>
                )}

                {activeTab == 'listData' && (
                  <div className="">
                    <div className="grid grid-cols-1 gap-4 my-6">
                      {
                        currentCards.slice(0, 3).map((item, idx) => (
                          <div
                            key={idx}
                            className="gap-4 bg-white border-[#D9D9D9] border-[1px] overflow-hidden shadow-lg flex-none">

                            <div className="flex">
                              <div className="w-1/2 relative">
                                <Image
                                  className="w-full"
                                  src={DefaultTractor}
                                  alt="cardImage"
                                  layout="responsive"
                                  width={100}
                                  height={100} />

                                {item.certified && (
                                  <div className="bg-secondaryColor px-2
                                   text-white text-sm absolute top-2 left-2 uppercase font-medium border-gradient">
                                    CERTIFIED
                                  </div>
                                )}
                              </div>
                              <div className="w-1/2">

                                <div className="p-2">

                                  <div className="font-bold xl:text-lg md:text-[16px] sm:text-[14px] text-base tractorTitle">
                                    {item.title}
                                  </div>

                                  <div className="bg-black font-semibold text-white w-max px-2 py-1 mt-2">
                                    {item.price}
                                  </div>

                                  <div className="flex items-center xl:text-base lg:text-sm sm:text-sm text-[0.7rem] my-3">
                                    {item.features.slice(0, -1).map((feature, fIdx) => (
                                      <div
                                        key={fIdx}
                                        className={`flex gap-1 items-center border-r-[1px] border-black ${fIdx > 0 ? 'px-[6px]' : 'pr-[6px]'}`}
                                      >
                                        <div className="w-2 h-2 sm:w-3 sm:h-3">
                                          <Image
                                            src={feature.icon}
                                            alt={feature.icon}
                                            layout="responsive"
                                            width={2}
                                            height={2}
                                          />
                                        </div>
                                        <span>{feature.text}</span>
                                      </div>
                                    ))}
                                  </div>

                                  {item.features.slice(-1).map((feature, fIdx) => (
                                    <>                    
                                    <div className="flex items-center xl:text-base lg:text-sm sm:text-sm text-[0.7rem] my-3">
                                      <div
                                        key={fIdx}
                                        className={`flex gap-1 items-center ${fIdx > 0 ? 'px-[6px]' : 'pr-[6px]'}`}>
                                        <div className="w-3 h-3 sm:w-3 sm:h-3">
                                          <Image
                                            src={feature.icon}
                                            alt={feature.icon}
                                            layout="responsive"
                                            width={2}
                                            height={2}
                                          />
                                        </div>
                                        <span>{feature.text}</span>
                                      </div>
                                    </div>
                                      <div className="cursor-pointer">
                                        <span className="flex items-center gap-1 font-semibold text-secondaryColor text-sm">
                                          {/* Wrapping the Image component for responsive styling */}
                                          <div className="w-3 h-3 sm:w-3 sm:h-3 mr-1">
                                            <Image
                                              src="/images/inventory/ActiveCallIcon.svg"
                                              alt="phnIcon"
                                              layout="responsive"
                                              width={2}
                                              height={2}
                                            />
                                          </div>
                                          Interested{" "}
                                        </span>
                                      </div>

                                    </>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))
                      }
                    </div>
                  </div>
                )}
              </div>

              <div className="sm:block hidden">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
                  {
                    currentCards.slice(0, 3).map((item, idx) => (
                      <div
                        key={idx}
                        className="gap-4 bg-white border-[#D9D9D9] border-[1px] overflow-hidden shadow-lg flex-none"
                      >
                        <div className="relative">
                          <Image
                            className="w-full"
                            src={DefaultTractor}
                            alt="cardImage"
                            layout="responsive"
                            width={100}
                            height={70}
                          />
                          {item.certified && (
                            <div className="bg-secondaryColor px-2 text-white text-sm absolute top-4 left-4 uppercase font-medium border-gradient">
                              CERTIFIED
                            </div>
                          )}
                          <div className="bg-black font-semibold text-white w-auto px-2 py-1 float-right">
                            {item.price}
                          </div>
                        </div>
                        <div className="xl:px-4 sm:bg-white bg-[#eeeeee] lg:px-2 sm:px-2 px-2 pt-1 h-24">
                          <div className="font-bold xl:text-lg md:text-[16px] sm:text-[14px] text-base tractorTitle">
                            {item.title}
                          </div>
                          <div className="flex items-center xl:text-base lg:text-sm sm:text-sm text-base my-3">
                            {item.features.map((feature, fIdx) => (
                              <div
                                key={fIdx}
                                className={`flex gap-1 h-[14px] items-center border-r-[1px] border-black ${fIdx > 0 ? 'px-[6px]' : 'pr-[6px]'}`}
                              >
                                <Image src={feature.icon} alt={feature.icon} width={10} height={10} />
                                <span>{feature.text}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="border-t-[1px] border-[#D9D9D9] relative bottom-0">
                          <div className="m-[1px] xl:px-6 px-4 pt-4 pb-2 bg-secondaryColor cursor-pointer">
                            <span className="flex items-center gap-1 font-semibold text-white mr-2 mb-2 text-base justify-center">
                              <Image src='/images/phnIcon.svg' width={15} height={15} className="w-4 mr-1" alt="phnIcon" /> Interested{" "}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>

              <Heading heading={'Tractors by Brands '} viewButton={false} />

              <div className="grid sm:grid-cols-6 grid-cols-3 sm:gap-6 gap-4">
                <Image width={100} height={100} layout="responsive" src="/images/about/brands/mahindra.svg" alt="mahindra" className="w-full cursor-pointer" />
                <Image width={100} height={100} layout="responsive" src="/images/about/brands/swaraj.svg" alt="swaraj" className="w-full cursor-pointer" />
                <Image width={100} height={100} layout="responsive" src="/images/about/brands/elcher.svg" alt="Elcher" className="w-full cursor-pointer" />
                <Image width={100} height={100} layout="responsive" src="/images/about/brands/masseyFerguson.svg" alt="masseyFerguson" className="w-full cursor-pointer" />
                <Image width={100} height={100} layout="responsive" src="/images/about/brands/tillersTractors.svg" alt="tillersTractors" className="w-full cursor-pointer" />
                <Image width={100} height={100} layout="responsive" src="/images/about/brands/escorts.svg" alt="escorts" className="w-full cursor-pointer" />
                <Image width={100} height={100} layout="responsive" src="/images/about/brands/kartar.svg" alt="kartar" className="w-full cursor-pointer" />
                <Image width={100} height={100} layout="responsive" src="/images/about/brands/captain.svg" alt="captain" className="w-full cursor-pointer" />
                <Image width={100} height={100} layout="responsive" src="/images/about/brands/preet.svg" alt="preet" className="w-full cursor-pointer" />
                <Image width={100} height={100} layout="responsive" src="/images/about/brands/forceMotors.svg" alt="forceMotors" className="w-full cursor-pointer" />
                <Image width={100} height={100} layout="responsive" src="/images/about/brands/aceTractors.svg" alt="aceTractors" className="w-full cursor-pointer" />
                <Image width={100} height={100} layout="responsive" src="/images/about/brands/autonxt.svg" alt="autonxt" className="w-full cursor-pointer" />
              </div>

              <div className="my-4 sm:hidden block">
                <Btn text={'view all'} />
              </div>

              <div className="sm:block hidden">
                <div className="grid sm:grid-cols-3 grid-cols-1 gap-4 my-6">

                  {
                    currentCards.slice(3).map((item, idx) => (
                      <div
                        key={idx}
                        className="gap-4 bg-white border-[#D9D9D9] border-[1px] overflow-hidden shadow-lg flex-none w-80 sm:w-auto"
                      >
                        <div className="relative">
                          <Image
                            className="w-full"
                            src={DefaultTractor}
                            alt="cardImage"
                            layout="responsive"
                            width={100}
                            height={70}
                          />
                          {item.certified && (
                            <div className="bg-secondaryColor px-2 text-white text-sm absolute top-4 left-4 uppercase font-medium border-gradient">
                              CERTIFIED
                            </div>
                          )}
                          <div className="bg-black font-semibold text-white w-auto px-2 py-1 float-right">
                            {item.price}
                          </div>
                        </div>
                        <div className="xl:px-4  sm:bg-white bg-[#eeeeee] lg:px-2 sm:px-2 px-2 pt-1 h-24">
                          <div className="font-bold xl:text-lg md:text-[16px] sm:text-[14px] text-base tractorTitle">
                            {item.title}
                          </div>
                          <div className="flex items-center xl:text-base lg:text-sm sm:text-sm text-base my-3">
                            {item.features.map((feature, fIdx) => (
                              <div
                                key={fIdx}
                                className={`flex gap-1 h-[14px] items-center border-r-[1px] border-black ${fIdx > 0 ? 'px-[6px]' : 'pr-[6px]'}`}
                              >
                                <Image src={feature.icon} alt={feature.icon} width={10} height={10} />
                                <span>{feature.text}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="border-t-[1px] border-[#D9D9D9] relative bottom-0">
                          <div className="m-[1px] xl:px-6 px-4 pt-4 pb-2 bg-secondaryColor cursor-pointer">
                            <span className="flex items-center gap-1 font-semibold text-white mr-2 mb-2 text-base justify-center">
                              <Image src='/images/phnIcon.svg' width={15} height={15} className="w-4 mr-1" alt="phnIcon" /> Interested{" "}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))
                  }

                </div>
              </div>

              <div className="sm:hidden block">
                {activeTab == 'gridData' && (
                  <div className="">
                    <div className="grid grid-cols-1 gap-4 my-6">
                      {
                        currentCards.slice(3).map((item, idx) => (
                          <div
                            key={idx}
                            className="gap-4 bg-white border-[#D9D9D9] border-[1px] overflow-hidden shadow-lg flex-none"
                          >
                            <div className="relative">
                              <Image
                                className="w-full"
                                src={DefaultTractor}
                                alt="cardImage"
                                layout="responsive"
                                width={100}
                                height={70}
                              />
                              {item.certified && (
                                <div className="bg-secondaryColor px-2 text-white text-sm absolute top-4 left-4 uppercase font-medium border-gradient">
                                  CERTIFIED
                                </div>
                              )}
                              <div className="bg-black font-semibold text-white w-auto px-2 py-1 float-right">
                                {item.price}
                              </div>
                            </div>
                            <div className="xl:px-4 lg:px-2 sm:px-2 px-2 pt-1 h-24">
                              <div className="font-bold xl:text-lg md:text-[16px] sm:text-[14px] text-base tractorTitle">
                                {item.title}
                              </div>
                              <div className="flex items-center xl:text-base lg:text-sm sm:text-sm text-base my-3">
                                {item.features.map((feature, fIdx) => (
                                  <div
                                    key={fIdx}
                                    className={`flex gap-1 h-[14px] items-center border-r-[1px] border-black ${fIdx > 0 ? 'px-[6px]' : 'pr-[6px]'}`}
                                  >
                                    <Image src={feature.icon} alt={feature.icon} width={10} height={10} />
                                    <span>{feature.text}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div className="border-t-[1px] border-[#D9D9D9] relative bottom-0">
                              <div className="m-[1px] xl:px-6 px-4 pt-4 pb-2 bg-secondaryColor cursor-pointer">
                                <span className="flex items-center gap-1 font-semibold text-white mr-2 mb-2 text-base justify-center">
                                  <Image src='/images/phnIcon.svg' width={15} height={15} className="w-4 mr-1" alt="phnIcon" /> Interested{" "}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))
                      }

                    </div>
                  </div>
                )}
                {activeTab == 'listData' && (
                   <div className="grid grid-cols-1 gap-4 my-6">
                   {
                     currentCards.slice(0, 3).map((item, idx) => (
                      <div className="">
                    <div className="grid grid-cols-1 gap-4 my-6">
                      {
                        currentCards.slice(0, 3).map((item, idx) => (
                          <div
                            key={idx}
                            className="gap-4 bg-white border-[#D9D9D9] border-[1px] overflow-hidden shadow-lg flex-none">

                            <div className="flex">
                              <div className="w-1/2 relative">
                                <Image
                                  className="w-full"
                                  src={DefaultTractor}
                                  alt="cardImage"
                                  layout="responsive"
                                  width={100}
                                  height={100} />

                                {item.certified && (
                                  <div className="bg-secondaryColor px-2
                                   text-white text-sm absolute top-2 left-2 uppercase font-medium border-gradient">
                                    CERTIFIED
                                  </div>
                                )}
                              </div>
                              <div className="w-1/2">

                                <div className="p-2">

                                  <div className="font-bold xl:text-lg md:text-[16px] sm:text-[14px] text-base tractorTitle">
                                    {item.title}
                                  </div>

                                  <div className="bg-black font-semibold text-white w-max px-2 py-1 mt-2">
                                    {item.price}
                                  </div>

                                  <div className="flex items-center xl:text-base lg:text-sm sm:text-sm text-[0.7rem] my-3">
                                    {item.features.slice(0, -1).map((feature, fIdx) => (
                                      <div
                                        key={fIdx}
                                        className={`flex gap-1 items-center border-r-[1px] border-black ${fIdx > 0 ? 'px-[6px]' : 'pr-[6px]'}`}
                                      >
                                        <div className="w-2 h-2 sm:w-3 sm:h-3">
                                          <Image
                                            src={feature.icon}
                                            alt={feature.icon}
                                            layout="responsive"
                                            width={2}
                                            height={2}
                                          />
                                        </div>
                                        <span>{feature.text}</span>
                                      </div>
                                    ))}
                                  </div>

                                  {item.features.slice(-1).map((feature, fIdx) => (
                                    <>                    
                                    <div className="flex items-center xl:text-base lg:text-sm sm:text-sm text-[0.7rem] my-3">
                                      <div
                                        key={fIdx}
                                        className={`flex gap-1 items-center ${fIdx > 0 ? 'px-[6px]' : 'pr-[6px]'}`}>
                                        <div className="w-3 h-3 sm:w-3 sm:h-3">
                                          <Image
                                            src={feature.icon}
                                            alt={feature.icon}
                                            layout="responsive"
                                            width={2}
                                            height={2}
                                          />
                                        </div>
                                        <span>{feature.text}</span>
                                      </div>
                                    </div>
                                      <div className="cursor-pointer">
                                        <span className="flex items-center gap-1 font-semibold text-secondaryColor text-sm">
                                          {/* Wrapping the Image component for responsive styling */}
                                          <div className="w-3 h-3 sm:w-3 sm:h-3 mr-1">
                                            <Image
                                              src="/images/inventory/ActiveCallIcon.svg"
                                              alt="phnIcon"
                                              layout="responsive"
                                              width={2}
                                              height={2}
                                            />
                                          </div>
                                          Interested{" "}
                                        </span>
                                      </div>

                                    </>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))
                      }
                    </div>
                  </div>
                     ))
                   }
                 </div>
                )}
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

              {/* <div className="overflow-x-auto sm:overflow-visible"> 
              <div className="flex sm:grid sm:grid-cols-2 gap-4"> 
                <Image src="/images/banner2.svg" width={708} height={366} className="flex-none w-80 sm:w-auto" alt="banner1" />
                <Image src="/images/banner2.svg" width={708} height={366} className="flex-none w-80 sm:w-auto" alt="banner2" />  
              </div>
              </div> */}
            </div>
          </div>
        </div>
      </Layout>

      <Modal
        CloseIconShow={false}
        showModal={showModal}
        customStyles={customStyles}
        handleClose={handleClose}
        content={
          <>
            <div className="block mb-4 text-center mx-auto" onClick={handleClose} >
              <Image
                src={Crossmark}
                width={35}
                height={35}
                alt="Close Icon"
                className="cursor-pointer"
              />
            </div>

            {/* Modal Content */}
            <div className="rounded-tl-[20px] rounded-tr-[20px] bg-white py-10 px-4 flex flex-col items-center sm:flex-row sm:items-start">
              <div className="text-xl">
                <p className="font-bold">Price - High to Low</p>
                <p className="font-bold mt-6">Price - Low to High</p>
              </div>
            </div>
          </>
        }
      />

    </div>
  );
}
