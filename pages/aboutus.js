import React from "react";
import Image from "next/image";
import Layout from '@components/Layout';
import Banner from '@components/Banner';
import Heading from '@components/Heading';
import TractorInfo from "@components/TractorInfo";
import RentalSteps from '@Images/about/rentalSteps.svg';
import Btn from '@components/Btn';

export default function about() {
  const breadcrumbData = [
    { label: 'Home', link: '/' },
    { label: 'About Us', link: '#' },
  ];
  return (

    <Layout currentPage={"about"}>
      <Banner breadcrumbs={breadcrumbData} bannerImg={'images/liveInventory/banner.svg'} heading={'About Us'} />

      {/* tractor info sec */}
      <TractorInfo infoImg={'images/about/tractor.svg'}
        title={'We bring you to the future'}
        heading={'Tractor World'}
        infoText={'Tractor world is a fully vertically integrated company, with expertise in design, development and manufacture of the full spectrum of automotive components, aggregates and vehicles.'}
      />

      {/*Tractors Dealers by Brands sec*/}
      <div className="bg-white mt-4 lg:px-14 md:px-6 sm:px-3 px-2 sm:pt-4 pt-4 sm:pb-8 py-2">
        <Heading heading={'Tractors Dealers by Brands '} viewButton={true} />
        <form className="sm:block hidden">
          <div className='flex sm:flex-row flex-col gap-4 mt-4 items-end'>
            <div className='sm:w-1/4 w-full'>
              <label htmlFor="Brand" className="block mb-2">Brand</label>
              <select id="Brand" className="bg-white border 
                    border-gray-300 text-black rounded-md  block w-full 
                     p-2.5 dark:bg-gray-700 dark:border-gray-600 
                     dark:placeholder-gray-400 dark:text-white 
                     ">
                <option selected>Select Your Brand</option>

              </select>
            </div>


            <div className='sm:w-1/4 w-full'>
              <label htmlFor="Brand" className="block mb-2">State</label>
              <select id="Brand" className="bg-white border 
                    border-gray-300 text-black rounded-md  block w-full 
                     p-2.5 dark:bg-gray-700 dark:border-gray-600 
                     dark:placeholder-gray-400 dark:text-white">
                <option selected>Select Your State</option>

              </select>
            </div>


            <div className='sm:w-1/4 w-full'>
              <label htmlFor="Brand" className="block mb-2">District</label>
              <select id="Brand" className="bg-white border 
                    border-gray-300 text-black rounded-md  block w-full 
                     p-2.5 dark:bg-gray-700 dark:border-gray-600 
                     dark:placeholder-gray-400 dark:text-white 
                     ">
                <option selected>Select Your District</option>

              </select>
            </div>





            <div className='sm:w-1/4 w-full'>
              <div className='bg-secondaryColor px-2 py-3 text-white text-center
              rounded-md font-semibold cursor-pointer'>Find Dealer</div>
            </div>
          </div>
        </form>
        <div className="grid sm:grid-cols-6 grid-cols-3 sm:gap-6 gap-4 mt-6">
          <img src="images/about/brands/mahindra.svg" alt="mahindra" className="w-full" />
          <img src="images/about/brands/swaraj.svg" alt="swaraj" className="w-full" />
          <img src="images/about/brands/elcher.svg" alt="Elcher" className="w-full" />
          <img src="images/about/brands/masseyFerguson.svg" alt="masseyFerguson" className="w-full" />
          <img src="images/about/brands/tillersTractors.svg" alt="tillersTractors" className="w-full" />
          <img src="images/about/brands/escorts.svg" alt="escorts" className="w-full" />
          <img src="images/about/brands/kartar.svg" alt="kartar" className="w-full" />
          <img src="images/about/brands/captain.svg" alt="captain" className="w-full" />
          <img src="images/about/brands/preet.svg" alt="preet" className="w-full" />
          <img src="images/about/brands/forceMotors.svg" alt="forceMotors" className="w-full" />
          <img src="images/about/brands/aceTractors.svg" alt="aceTractors" className="w-full" />
          <img src="images/about/brands/autonxt.svg" alt="autonxt" className="w-full" />
        </div>
        <div className="my-4 sm:hidden block">
          <Btn text={'view all'} />
        </div>
      </div>

      {/*rental steps sec */}
      <div className="bg-white my-4 lg:px-14 md:px-6 sm:px-3 px-2 sm:pt-4 pt-4">
        <p className="text-[#888888] text-sm mb-3">We Promise To Find You The Right Equipment</p>
        <Heading heading={'Get Your Rentals In Easy Steps'} />
        <div className="image-wrapper overflow-x-auto">
          <img src='images/about/rentalSteps.svg' alt="rentalSteps" className="w-full" />
        </div>
       </div>

    </Layout >
  )
}
