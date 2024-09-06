
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import LeftArrow from '@Images/slickslider/left_arrow.svg';
import RightArrow from '@Images/slickslider/right_arrow.svg';
import { useQuery } from "@apollo/client";
import { GET_LIVE_INVENTORY } from "@utils/constants";
import SlickCarousel from '@components/SlickCarousel';
import Btn from '@components/Btn';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import DefaultTractor from '@Images/default_tractor.svg';
import Time from '@Images/time.svg';
import HP from '@Images/hp.svg';
import Wheel from '@Images/wheel.svg';
import Link from 'next/link';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Image src='/images/slickslider/right_arrow.svg' layout='intrinsic' width={50} height={50} className={'custom-arrow next-arrow'} alt='RightArrow' onClick={onClick}></Image>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Image src='/images/slickslider/left_arrow.svg' width={50} height={50} className={'custom-arrow prev-arrow'} alt='LeftArrow' onClick={onClick}></Image>
  );
}

const LiveInventoryContainer = ({ locale }) => {
  const { t } = useTranslation();
  const CheckTractorDetails = t('CheckTractorDetails');

  const router = useRouter();

  const [isMobile, setIsMobile] = useState(false);

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

  const language = locale?.toUpperCase();
  const { loading, error, data } = useQuery(GET_LIVE_INVENTORY, {
    variables: { lang: language },
  });

  if (loading) return <p>Loading Live Inventory...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const liveInventoryData = data.allLiveInventory.edges.map(({ node }) => ({
    title: node.title,
    price: node.liveInventoryData.maxPrice,
    hours: node.liveInventoryData.engineHours,
    driveType: node.liveInventoryData.driveType,
    enginePower: node.liveInventoryData.enginePower,
    slug: node.slug,
    id: node.id
  }));

  const slickSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    autoplay: false,
    autoplaySpeed: 1000,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: !isMobile ? <SampleNextArrow /> : null,
    prevArrow: !isMobile ? <SamplePrevArrow /> : null,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const handleAllLiveInventory = () => {
    router.push('/inventory');
  };

  return (
    <>
      <div className='sm:block hidden'>
        <div className="liveInventoryData relative" id="inventorySlide">
          <SlickCarousel settings={slickSettings} items={liveInventoryData} />
        </div>
      </div>

      <div className='sm:hidden block'>
        <div className='grid grid-cols-1 gap-3'> 
          {liveInventoryData.slice(0, 5).map((item, index) => (
            <div key={index} className="gap-4 bg-white border-[#D9D9D9] border-[1px]
           overflow-hidden shadow-lg">
              <div className="relative">
                <Image className="w-full" src={DefaultTractor} alt="cardImage" layout="responsive" width={100} height={70} />
                <div className="bg-secondaryColor px-2  text-white text-sm absolute top-4 left-4
               uppercase font-medium border-gradient">
                  CERTIFIED
                </div>
                {item.price && (<div className='bg-black font-semibold text-white w-auto px-2 py-1 float-right'>
                  ₹{item.price}
                </div>
                )}
              </div>
              <div className="xl:px-6 lg:px-4 sm:px-2 px-4 pt-1 h-28">
                <div className="font-bold xl:text-lg md:text-[16px] sm:text-[14px] text-base tractorTitle">
                  {item.title}
                </div>
                <div className="flex items-center xl:text-base lg:text-sm sm:text-sm text-base my-3">
                  {item.hours && (<div className='flex gap-1 h-[14px] items-center border-r-[1px] border-black pr-2'>
                    <Image src={Time} alt='Time'></Image> {item.hours} hrs
                  </div>
                  )}
                  {item.driveType && (<div className='pl-2 flex gap-1 h-[14px] items-center border-r-[1px] border-black pr-2'>
                    <Image src={Wheel} alt='Wheel'></Image> {item.driveType}
                  </div>
                  )}
                  {item.enginePower && (<div className='pl-2 flex gap-1 h-[14px] items-center pr-2'>
                    <Image src={HP} alt='HP'></Image> {item.enginePower}
                  </div>
                  )}
                </div>
              </div>
              <Link href={'/tractor-details/?id=' + item.id + "&s=" + item.slug}>
                <div className='border-t-[1px] border-[#D9D9D9] relative bottom-0'>
                  <div className="m-[1px] xl:px-6 px-4 pt-4 pb-2 bg-secondaryColor cursor-pointer">
                    <span className="flex items-center gap-1 font-semibold text-white mr-2 mb-2 text-base justify-center">{CheckTractorDetails}</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div> 

        <Btn text={'View all'} viewAll={true} onClick={handleAllLiveInventory} />
      </div>
    </>
  );
};
export default LiveInventoryContainer;


