
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import LeftArrow from '@Images/slickslider/left_arrow.svg';
import RightArrow from '@Images/slickslider/right_arrow.svg';
import { useQuery } from "@apollo/client";
import { GET_LIVE_INVENTORY } from "@utils/constants";
import SlickCarousel from '@components/SlickCarousel';
import Btn from '@components/Btn';
import { useTranslation } from 'next-i18next';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Image src='/images/slickslider/right_arrow.svg'  width={50} height={50}  className={'custom-arrow next-arrow'} alt='RightArrow' onClick={onClick}></Image>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Image src='/images/slickslider/left_arrow.svg'  width={50} height={50} className={'custom-arrow prev-arrow'} alt='LeftArrow' onClick={onClick}></Image>
  );
}

const LiveInventoryContainer = ({ locale }) => {

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
    enginePower: node.liveInventoryData.enginePower // Assuming hp is similar to driveType; adjust if needed
  }));

  const slickSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    autoplay: true,
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

  return (
    <div className="liveInventoryData relative" id="inventorySlide">
      <SlickCarousel settings={slickSettings} items={liveInventoryData} />
      <Btn text={'View all'} viewAll={true} />
    </div>
  );
};
export default LiveInventoryContainer;


