import React, {useState, useEffect} from "react";
import Layout from "@components/Layout";
import Banner from "@components/Banner";
import Heading from "../../components/Heading";
import Image from "next/image";
import customerReview from "@Images/sellTractor/customer-review.svg";
import Market from "@Images/sellTractor/market.svg";
import Rupee from "@Images/sellTractor/rupee.svg";
import Certified from "@Images/sellTractor/certified.svg";
import Notifications from "@Images/sellTractor/notifications.svg";
import Support from "@Images/sellTractor/support.svg";
import BannerStrip from "../../components/BannerStrip";
import bannerImg from "@Images/sellTractor/engineering-excellence-banner.svg";
import mblBannerImg from "@Images/sellTractor/mblBanner.svg";


export default function SellTractor() {
  const breadcrumbData = [
    { label: 'Home', link: '/' },
    { label: 'Sell Tractor', link: '#' },
  ];
  const [isMobile, setIsMobile] = useState(false);


  const features = [
    {
      image: customerReview,
      alt: "customer-review",
      title: "Priority to Customers",
      description: "10 Lakh+ Monthly Users.",
    },
    {
      image: Market,
      alt: "market",
      title: "Fair Market Price",
      description: "Get a fair price for all the farm machines.",
    },
    {
      image: Rupee,
      alt: "rupee",
      title: "Free of Cost",
      description: "All services provided free of cost.",
    },
    {
      image: Certified,
      alt: "certified",
      title: "Genuine Buyers",
      description: "Here we provide genuine buyers.",
    },
    {
      image: Notifications,
      alt: "notifications",
      title: "Instant Notification",
      description: "Get immediate SMS notification on your phone.",
    },
    {
      image: Support,
      alt: "support",
      title: "Customer Support",
      description: "Call us at +91-97709-74974.",
    },
  ];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth <= 768); 
     const handleResize = () => {
       setIsMobile(window.innerWidth <= 768);
     }; 
     window.addEventListener('resize', handleResize); 
      return () => {
       window.removeEventListener('resize', handleResize);
     };
   }
 }, []);


  return (
    <div>
      <Layout currentPage={"sellTractor"}>
        <Banner
          breadcrumbs={breadcrumbData}
          heading={""}
          bannerImg={!isMobile ? bannerImg : mblBannerImg}
          BannerUnderlineImg={false} />

        <BannerStrip heading={'Sell Your Used Tractor'}
          content={
            <>
              <div>
                <form>
                  <div className='flex sm:flex-row flex-col gap-4 mt-4 items-end'>
                   
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
                    
                    <div className='sm:w-1/4 w-full'>
                      <label htmlFor="name" className="block mb-2">Name</label>
                      <input type="text" id="name" className="bg-white border 
                      border-gray-300 text-black rounded-md block w-full 
                        p-2.5 dark:bg-gray-700 dark:border-gray-600 
                       dark:placeholder-gray-400 dark:text-white" placeholder="Enter your Name" />
                    </div>

                    <div className='sm:w-1/4 w-full'>
                      <label htmlFor="number" className="block mb-2">Mobile Number</label>
                      <input type="number" id="name" className="bg-white border 
                      border-gray-300 text-black rounded-md block w-full 
                        p-2.5 dark:bg-gray-700 dark:border-gray-600 
                       dark:placeholder-gray-400 dark:text-white"
                        placeholder="Enter Your Mobile Number" />
                    </div>

                    <div className='sm:w-1/4 w-full'>
                      <div className='bg-secondaryColor px-2 py-3 text-white 
                        text-center rounded-md font-semibold cursor-pointer'>
                        Sell Now
                      </div>
                    </div>
                  </div>
                </form>

              </div>
              </>
          } />

        <div className="bg-white lg:px-14 md:px-6 sm:px-3 px-2 sm:pt-4 pt-2 py-3">
          <Heading heading={"Why Tractor World ?"} />

          <div className="">
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex-none md:flex-initial w-full md:w-auto card bg-[#F6F6F6] py-4">
                  <div className="grid items-center justify-center gap-2">
                    <Image
                      src={feature.image}
                      alt={feature.alt}
                      className="max-w-full h-auto"
                    />
                    <span className="text-base font-semibold text-center">{feature.title}</span>
                    <span className="text-base">{feature.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div> 
        
        </div>
        <div className="p-2 md:bg-transparent">
            <Heading
              heading={"Tractor World is best place to sell your tractor"}
            />
            {/* <div BannerUnderlineImg={true}> */}
            <div className="sm:text-base text-[13px]">
              <p className="my-1 font-bold text-black">
                Thinking to upgrade your old tractor with a new one?
              </p>

              <p className="my-1 font-bold text-black">
                Waiting for the best offers and schemes?
              </p>

              <p className="my-1 font-bold text-black">
                Have an used tractor to sell out?
              </p>
            </div>
            <p className="sm:text-medium text-[13px] my-2">
              If any of the above questions halt your moving eyeballs, then yes,
              you have come to the right place. Many questions, one answer –
              Tractor Junction. We at Tractor Junction know what does a tractor
              cost to you and how does it affect your daily lives. As famous
              agriculture researchers quote, Tractors do not come with glamorous
              features like any other automobile but for sure go out with a
              glamorous price. In simple words, a tractor that comes with a high
              resale value is more dependable than the ones which do not offer a
              good resale price. Tractor Junction works to make this price even
              better for you. If you want to sell your old tractor at the best
              price and ease then we have got you a simplified process that
              comforts you and does not hamper you in your daily lives. Register
              with us, submit your inquiry, post the update about your tractor
              and you are done, our highly trained tractor specialists quote the
              best price for your tractor and work to get hassle free buyers
              on-board. Selling an old tractor had never been this easy, with
              Tractor Junction your tractor loves you back the way you do.
            </p>
          </div>
      </Layout>
    </div>
  );
}
