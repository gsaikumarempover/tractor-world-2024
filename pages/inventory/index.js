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
import { GET_ALL_BRANDS,customImageLoader,GET_LIVE_INVENTORY,HP_OPTIONS,PRICE_OPTIONS } from "@utils/constants"; 
import { useQuery } from '@apollo/client'; 
import { getLocaleProps } from "@helpers";
import { useTranslation } from 'next-i18next'; 
import { useRouter } from 'next/router';
import Pagination from "@components/Pagination";
import { GET_ALL_POPULAR_BRANDS } from "@utils/constants";
import { useDispatch, useSelector } from 'react-redux';
import {GET_ALL_STATES} from "@utils/constants";
import Link from "next/link";

export default function Inventory({locale}) {
  //// apply,reset btns active 
  const { t } = useTranslation();  
  // Use Next.js router to redirect to the dynamic page
  const router = useRouter(); 
  const [showFilter, setShowFilter] = useState(false); 
  const [resetBgColor, setResetBgColor] = useState(false);
  const [applyBgColor, setApplyBgColor] = useState(true);
  const currentLanguage = locale; 
  const language = locale?.toUpperCase(); 
  
  //get serach value
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [liveInventoryFilters, setliveInventoryFilters] = useState([]); 
  const [searchQuery, setSearchQuery] = useState(''); 
  const [brandsLogos , setBrandLogos]=useState([]);
  const [PopularTractors , setPopularTractorsData]=useState([]);
  const state = useSelector((state) => state.user.addressData.state);
  const city = useSelector((state) => state.user.addressData.city); 
  const [locationDetails , setLocationDetails]=useState(''); 
  const [stateList, setStateList] = useState([]);   
  const { loading, error, data } = useQuery(GET_ALL_STATES);  

  useEffect(() => {
    if (state && city) {
      setLocationDetails(`${city}, ${state}`);
    }
  }, [state, city]); // Only re-run effect when `state` or `city` changes

  const [filters, setFilters] = useState([
    {
      title: "Brand",
      showKey: "showBrands",
      options: [] // To be populated with API response
    },
    {
      title: "HP",
      showKey: "showHps",
      options:HP_OPTIONS
    },
    {
      title: "Price",
      showKey: "showPrices",
      options:PRICE_OPTIONS
    }
  ]); 

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
 
  ////for filters collpase
  const onToggle = (key) => {
    setShowStates((prev) => ({ ...prev, [key]: !prev[key] }));
  };
 
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
  
  ////apply, reset btn click functionality
  const handleResetClick = () => {
    setResetBgColor(true);
    setApplyBgColor(false);
    clearSelectedValues(); 
    setliveInventoryFilters(['', '', '']);
  };

  const handleApplyClick = () => {
    // Set background color states
    setApplyBgColor(true);
    setResetBgColor(false);

    // Capture selected radio button values
    const radios = document.querySelectorAll('input[type="radio"]');
    const selectedValues = [];

    let selectedBrandSlug = ''; // Initialize an empty variable for storing the slug

    radios.forEach((radio) => {
      debugger;
      if (radio.checked) {
        selectedValues.push(radio.value);  // Collect the checked radio values

        // Assuming the radio value holds the slug for the brand
        if (radio.name === 'brand') { // Adjust the 'brand' field according to your form name
          selectedBrandSlug = radio.value; // Get the selected brand slug
        }
      }
    });

    // Check if filters have actually changed before updating the state
    if (JSON.stringify(selectedValues) !== JSON.stringify(liveInventoryFilters)) {
      setliveInventoryFilters(selectedValues); // Update state if filters are different
    }

    if (selectedBrandSlug) {
      router.push(`/inventory/${selectedBrandSlug}`); // Redirect to the dynamic slug page
    }
  };

  const clearSelectedValues = () => {
    const radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach((radio) => (radio.checked = false));
  };
  
  //all brands 
  const { data: brandsData, loading: brandsLoading, error: brandsError } = useQuery(GET_ALL_BRANDS);
  useEffect(() => {
  if (brandsData && brandsData.brandsmodels && liveInventoryData && liveInventoryData.allLiveInventory) {
    // Map the API response to the options for the "Brand" filter
    const brandOptions = brandsData.brandsmodels.edges.map(({ node }) => {
      const modelsString = node.brandmodelFields.models;
      const modelCount = modelsString.split(',').length;
      
      // Count the number of live inventory items that match the brand's slug
      const liveInventoryCount = liveInventoryData.allLiveInventory.edges.filter(({ node: inventoryNode }) => 
        inventoryNode.liveInventoryData.brandSlug === node.slug // Assuming brandSlug field exists in live inventory data
      ).length;

      return {
        label: `${node.brandmodelFields.brand} (${liveInventoryCount})`, // Use live inventory count for the label
        value: node.slug, // Slugify the brand name
      };
    }); 
    // Update the filters state with the brand options
    setFilters(prevFilters =>
      prevFilters.map(filter =>
        filter.title === "Brand" ? { ...filter, options: brandOptions } : filter
      )
    );
  }
}, [brandsData, liveInventoryData]);


///get popular brands 
const { data: PopularBrandsData, loading: PopularBrandsLoading, error: PopularBrandsError } = useQuery(GET_ALL_POPULAR_BRANDS);
useEffect(() => {
  if (PopularBrandsData && PopularBrandsData.brandsmodels) { 
    // Extract all brand logos into a separate array
    const logos = PopularBrandsData.brandsmodels.edges.map(({ node }) => node.brandmodelFields.brandLogo);
    setBrandLogos(logos); 
  }
}, [PopularBrandsData]);


  // Filter brands whenever the search query changes
  useEffect(() => {
    //  debugger;
      if (brandsData && brandsData.brandsmodels) {
        debugger;
        const filtered = brandsData.brandsmodels.edges.filter(({ node }) =>
          node.brandmodelFields.brand.toLowerCase().includes(searchQuery.toLowerCase())
        ).map(({ node }) => {
          const modelsString = node.brandmodelFields.models;
          const modelCount = modelsString.split(',').length;
          return {
            label: `${node.brandmodelFields.brand} (${modelCount})`,
            value:node.slug
          };
        });
  
        setFilters(prevFilters =>
          prevFilters.map(filter => 
            filter.title === "Brand" ? { ...filter, options: filtered } : filter
          )
        );
      }
    }, [searchQuery, brandsData]);
    

  //live inventory  fetching and execution

  const { data: liveInventoryData, loading: inventoryLoading, error: inventoryError,fetchMore} = useQuery(GET_LIVE_INVENTORY, {
    variables: 
    { lang: language,
      first: 9,
      after: null
    },
    notifyOnNetworkStatusChange: true
  });
  
  
  //pagination

  const CardsPerPage = 9;

  const [currentPage, setCurrentPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [endCursor, setEndCursor] = useState(null);  
  const totalPages = Math.ceil(10); 

  const indexOfLastCard = currentPage * CardsPerPage;
  const indexOfFirstCard = indexOfLastCard - CardsPerPage;
  const currentCards = PopularTractors.slice(indexOfFirstCard, indexOfLastCard);  

  console.log("currentPage"+currentPage+" -----------"+JSON.stringify(currentCards));

  const paginate = (pageNumber) => {
    fetchInventory(pageNumber);
  };
  const handleNext = () => {
    debugger;
    if (hasNextPage) {
      fetchInventory(currentPage + 1);
    }
  }; 
  const handlePrev = () => {
    if (currentPage > 1) {
      fetchInventory(currentPage - 1);
    }
  };
 
  // Function to fetch more data based on the page number 

  const fetchInventory = async (pageNumber) => {
    debugger;
    try {
      const result = await fetchMore({
        variables: {
          first: CardsPerPage,
          after: endCursor,  // Fetch from the current end cursor
        },
        updateQuery: (prevResult, { fetchMoreResult }) => {
          debugger;
          if (!fetchMoreResult) return prevResult;  // No more data to fetch
          
          return {
            ...prevResult,
            allLiveInventory: {
              ...fetchMoreResult.allLiveInventory,  // Replace the entire allLiveInventory object
              edges: [
                ...fetchMoreResult.allLiveInventory.edges,  // Only keep the fresh data
              ],
            },
          };
        },
      });
  
      setHasNextPage(result.data.allLiveInventory.pageInfo.hasNextPage);
      setEndCursor(result.data.allLiveInventory.pageInfo.endCursor);
  
    } catch (error) {
      console.error('Error fetching more data:', error);
    }
  };
    
  useEffect(() => {

    if (liveInventoryData && liveInventoryData.allLiveInventory) {
      debugger;
      
     const PopularTractorsList = liveInventoryData.allLiveInventory.edges.map(({ node }) => { 
        return {
          certified: node.liveInventoryData.isVerified,
          title: node.title,
          price: node.liveInventoryData.maxPrice,
          imageLink: DefaultTractor,
          features: [
            { icon: "/images/time.svg", text: `${node.liveInventoryData.engineHours}` },
            { icon: "/images/wheel.svg", text: node.liveInventoryData.driveType },
            { icon: "/images/hp.svg", text: `${node.liveInventoryData.enginePower}` },
            { icon: "/images/mapIcon.svg", text: node.liveInventoryData.district }
          ],
          slug: node.slug,
          id: node.id
        };
      });
  
     // Append new tractors to the existing list
     setPopularTractorsData(PopularTractorsList); 
     setEndCursor(liveInventoryData.allLiveInventory.pageInfo.endCursor);
     setHasNextPage(liveInventoryData.allLiveInventory.pageInfo.hasNextPage);

    }
  }, [liveInventoryData])
 
  ///fliter the tractors 
  useEffect(() => {
    if (!liveInventoryFilters.length || !PopularTractors.length) {
      return; // Early exit if filters or data is not available
    }

  
    const filteredTractors = PopularTractors.filter(tractor => {
 
      const [brandFilter, hpFilter, priceFilter] = liveInventoryFilters;
  
      const tractorHP = parseInt(tractor.features.find(f => f.text.includes("HP")).text); // Extract HP
      const tractorPrice = parseInt(tractor.price); // Convert price to number
  
      // If priceFilter is defined, split it into min and max range; otherwise set defaults
      const priceRange = priceFilter
        ? priceFilter.split("_").map(price => Number(price.replace("lakh", '')) * 100000)
        : [0, Number.MAX_VALUE]; // Default range if priceFilter is undefined
  
      // Build the filtering conditions, only applying filters that are defined
      const isBrandMatch = brandFilter ? tractor.title.toLowerCase().includes(brandFilter.toLowerCase()) : true;
      const isHPMatch = hpFilter
        ? tractorHP >= parseInt(hpFilter.split("_")[0]) && tractorHP <= parseInt(hpFilter.split("_")[1])
        : true;
      const isPriceMatch = tractorPrice >= priceRange[0] && tractorPrice <= priceRange[1];
  
      return isBrandMatch && isHPMatch && isPriceMatch;
    });
  
    setPopularTractorsData(filteredTractors); // Only update if the filtered data has changed
  }, [liveInventoryFilters, PopularTractors]); // Ensure dependencies are correctly set
   

  //get states list 
  useEffect(() => {
    // Fetch data from API when component mounts
    if (data && data.allStateTowns) {
      const fetchedStates = data.allStateTowns.edges.map(({ node }) => ({
        state: node.stateTownList.state,
        id: node.id,
      }));
      setStateList(fetchedStates); // Update state with fetched data
    }
  }, [data]); // Trigger this effect when `data` changes


  if (brandsLoading || inventoryLoading) return <p>Loading...</p>;
  if (brandsError || inventoryError) return <p>Error: {brandsError?.message || inventoryError.message}</p>;
    
  return (
    <div>
      <div className={`${showFilter ? 'overlay sm:hidden block' : 'hidden'}`}></div>

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
          <div className="sm:w-auto w-[312px] sm:h-auto max-h-max min-h-screen h-screen
         sm:bg-transparent z-[99] sm:relative flex fixed top-0 sm:pb-4 sm:pt-4 Navbar">


            <div className="px-4 py-4 min-h-screen max-h-fit h-fit bg-white">

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
                    <input 
                      type="search"
                      placeholder="Type Here"
                      className="border-secondaryColor border-r-0 w-full"
                      value={searchQuery} // Bind the input value to searchQuery state
                      onChange={(e) => setSearchQuery(e.target.value)} // Update searchQuery on input change
                    /> 
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

            <label className="mb-1 sm:hidden block">Your Location</label>
            {/* <div className="relative w-full sm:hidden block">
              <input type="text" placeholder="search..." className="w-full rounded border-[1px] px-8 border-[#D0D0D0] py-3" />
              <div className="absolute top-[55%] transform -translate-y-1/2 left-2">
                <Image src={mapIcon} alt="search" width={22} height={22} />
              </div>

              <div className="absolute top-1/2 transform -translate-y-1/2 right-2">
                <span className="text-sm text-secondaryColor cursor-pointer font-medium">Edit</span>
              </div>
            </div> */}

                  <div className="relative w-full sm:hidden block">
                    <div className="absolute top-[55%] transform -translate-y-1/2 left-2">
                        <Image src={mapIcon} alt="search" width={22} height={22} />
                      </div>
                      <select
                        id="location"
                        className="bg-white border border-gray-300
                                      text-black rounded-md  block w-full 
                                        p-2.5 dark:bg-gray-700 dark:border-gray-600 
                                     dark:placeholder-gray-400 dark:text-white  px-8"
                      >
                        <option value="" hidden>{locationDetails}</option> 
                        {stateList.map((item, index) => {
                          return (
                            <option key={index} value={item.state}>
                              {item.state}
                            </option>
                          );
                        })}
                      </select> 
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
                    className="border-secondaryColor border-r-0 w-full" 
                    value={searchQuery} // Bind the input value to searchQuery state
                    onChange={(e) => setSearchQuery(e.target.value)} // Update searchQuery on input change
                    />
                  <Image src="/images/inventory/searchicon.svg" width={85} height={75} alt="SearchIcon" className="w-[48px]"  />
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
                    {activeTab === "listData" ? <Image src={listActiveView} alt="listActiveView" width={50} height={50} /> : <Image src={listView} alt="listView" width={50} height={50} />}
                  </Tab>

                  <Tab id="gridData" image={true} activeTab={activeTab} onClick={handleTabClick}>
                    {activeTab === "gridData" ? <Image src={gridActiveView} alt="gridActiveView" width={50} height={50} /> : <Image src={gridView} alt="gridView" width={50} height={50} />}

                  </Tab>
                </div>

                <div className="sm:flex hidden items-center gap-3">
                  <div>
                    {/* <label className="mb-1 block text-sm">Your Location</label> */}
                    {/* <div className="relative w-full">
                      <input type="text" placeholder="search your location..." className="w-full rounded border-[1px] px-8 border-[#D0D0D0] sm:py-2 py-3" />
                      <div className="absolute top-[55%] transform -translate-y-1/2 left-2">
                        <Image src={mapIcon} alt="search" width={22} height={22} />
                      </div>

                      <div className="absolute top-1/2 transform -translate-y-1/2 right-2">
                        <span className="text-sm text-secondaryColor cursor-pointer font-medium">Edit</span>
                      </div>
                    </div> */}
                   <div className="relative w-full">
                    <div className="absolute top-[55%] transform -translate-y-1/2 left-2">
                        <Image src={mapIcon} alt="search" width={22} height={22} />
                      </div>
                      <select
                        id="location"
                        className="bg-white border border-gray-300
                                      text-black rounded-md  block w-full 
                                        p-2.5 dark:bg-gray-700 dark:border-gray-600 
                                     dark:placeholder-gray-400 dark:text-white  px-8"
                      >
                        <option value="" hidden>{locationDetails}</option>
                        {stateList.map((item, index) => {
                          return (
                            <option key={index} value={item.state}>
                              {item.state}
                            </option>
                          );
                        })} 
                      </select> 
                      </div>
                  </div>

                  {/* <div>  
                  <select className="block w-full px-2 py-[7px]   rounded border-[1px] border-[#D0D0D0]  text-[14px] text-secondaryColor">
                    <option selected value="">Tractor Sort By</option>
                    <option value="hightolow">Price - High to Low</option>
                    <option value="lowtohigh">Price - Low to High</option>
                   </select>
                  </div> */}

                </div>

              </div>
{/* 
              <p>mobile</p> */}
              <div className="sm:hidden block">
                {activeTab == 'gridData' && (
                  <div className="">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
                      {
                        currentCards.slice(0, 3).map((item, idx) => ( 
                          
                          <Link  key={idx} className="tractor-details-info cursor-pointer" to={`tractor-details/${item.slug}`} >
                           
                          <div
                            key={idx}
                            className="gap-4 bg-white border-[#D9D9D9] border-[1px] overflow-hidden shadow-lg flex-none cursor-pointer"
                          >
                          
                            <div className="relative">
                              <Image
                                className="w-full"
                                src={item.imageLink}
                                alt="cardImage"
                                layout="responsive"
                                width={100}
                                height={70}
                              />
                              {item.isVerified && (
                                <div className="bg-secondaryColor px-2 text-white text-sm absolute top-4 left-4 uppercase font-medium border-gradient">
                                   {item.price}
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
                                    className={`flex gap-1 h-[14px] items-center  ${fIdx > 0 ? 'px-[6px]  border-black border-r-[1px]' : 'pr-[6px]'}`}
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
                          </Link>
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

                          
                          <Link  key={idx} className="tractor-details-info cursor-pointer" href={`tractor-details/${item.slug}`} >
                          
                          <div
                            key={idx}
                            className="gap-4 bg-white border-[#D9D9D9] border-[1px] overflow-hidden shadow-lg flex-none  cursor-pointer"> 
                            <div className="flex">
                              <div className="w-[40%] relative">
                                <div className="w-full h-[175px]"> 
                                 <Image
                                    className="w-full h-[600px]"
                                    src={DefaultTractor}
                                    height={600}                                
                                    alt="cardImage"
                                    layout="responsive"
                                  /> 
                                  </div>

                                {item.certified && (
                                  <div className="bg-secondaryColor px-2
                                   text-white text-sm absolute top-2 left-2 uppercase font-medium border-gradient">
                                    CERTIFIED
                                  </div>
                                )}
                              </div>
                              <div className="w-[60%]">

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
                          </Link>

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
                        className="gap-4 bg-white border-[#D9D9D9] border-[1px] overflow-hidden shadow-lg flex-none cursor-pointer"
                      >
                          
                        <Link className="tractor-details-info cursor-pointer" href={`tractor-details/${item.slug}`} > 
                        <div className="wholeCard cursor-pointer">
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
                        </div>
                        </Link>  
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
                {brandsLogos.slice(0, 12).map((brandlogo, index) => (
                  <div className="w-full cursor-pointer border shadow p-4" key={index}>
                    <Image 
                      loader={customImageLoader} 
                      width={50} 
                      height={50} 
                      layout="responsive" 
                      src={brandlogo} 
                      alt={`brand-logo-${index}`} 
                      className="w-full cursor-pointer" 
                    />
                  </div>
                ))}
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
                      <Link className="tractor-details-info cursor-pointer" href={`tractor-details/${item.slug}`} > 
                        <div className="wholeCard cursor-pointer">
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
                        </div>
                        </Link>
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
                  <div className="">
                    <div className="grid grid-cols-1 gap-4 my-6">
                      {
                        currentCards.slice(3).map((item, idx) => (
                          <div
                            key={idx}
                            className="gap-4 bg-white border-[#D9D9D9] border-[1px] overflow-hidden shadow-lg flex-none">

                            <div className="flex">
                              <div className="w-[40%] relative">
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
                              <div className="w-[60%]">

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

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={paginate}
                hasNextPage={hasNextPage}
                handleNext={handleNext}
                handlePrev={handlePrev}
              />

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
                <p className="font-bold text-medium">Price - High to Low</p>
                <p className="font-bold mt-6 text-medium">Price - Low to High</p>
              </div>
            </div>
          </>
        }
      /> 
    </div>
  );
}

export async function getServerSideProps(context) {
  return await getLocaleProps(context);
}