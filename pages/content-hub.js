import React, { useState } from "react";
import Layout from "@components/Layout";
import Banner from "@components/Banner";
import Btn from "@components/Btn";
import Image from "next/image";
import bannerImg from '@Images/contentHub/banner.svg';
import Tab from '@components/Tab';

export default function ContentHUb() {
    const breadcrumbData = [
        { label: 'Home', link: '/' },
        { label: 'Content Hub', link: '#' },
    ];

    const [activeTab, setActiveTab] = useState("videoData");
    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };


    const videos = [
        {
            name: "Mr. Chari",
            description: "Rising from financial hardships to owning multiple tractors",
            date: "09-July-2024, 12:00 PM",
            thumbnail: "/images/contentHub/videoThumbnail.svg"
        },
        {
            name: "Mr. Chari",
            description: "Rising from financial hardships to owning multiple tractors",
            date: "09-July-2024, 12:00 PM",
            thumbnail: "/images/contentHub/videoThumbnail.svg"
        },
        {
            name: "Mr. Chari",
            description: "Rising from financial hardships to owning multiple tractors",
            date: "09-July-2024, 12:00 PM",
            thumbnail: "/images/contentHub/videoThumbnail.svg"
        },
        {
            name: "Mr. Chari",
            description: "Rising from financial hardships to owning multiple tractors",
            date: "09-July-2024, 12:00 PM",
            thumbnail: "/images/contentHub/videoThumbnail.svg"
        },
        {
            name: "Mr. Chari",
            description: "Rising from financial hardships to owning multiple tractors",
            date: "09-July-2024, 12:00 PM",
            thumbnail: "/images/contentHub/videoThumbnail.svg"
        },
        {
            name: "Mr. Chari",
            description: "Rising from financial hardships to owning multiple tractors",
            date: "09-July-2024, 12:00 PM",
            thumbnail: "/images/contentHub/videoThumbnail.svg"
        }
    ];


    return (
        <div>
            <Layout currentPage={"ContentHub"}>
                <Banner
                    breadcrumbs={breadcrumbData}
                    heading={"Content Hub"}
                    bannerImg={bannerImg}
                />

                <div className="bg-white lg:px-14 md:px-6 sm:px-3 px-2 sm:pt-4 pt-2 py-3">
                    <div className="flex sm:gap-4 gap-2 mb-4 justify-center">
                        <div className="sm:w-1/4 w-1/2">
                            <Tab id="videoData" image={true} activeTab={activeTab} onClick={handleTabClick}>
                                {activeTab === "videoData" ? <div className="text-base"> <Btn text={"Videos"} bgColor={true} /></div> :<div className="text-base"> <Btn text={"Videos"} bgColor={false} /></div>}
                            </Tab>
                        </div>
                        <div className="sm:w-1/4 w-1/2">

                            <Tab id="blogData" image={true} activeTab={activeTab} onClick={handleTabClick}>
                                {activeTab === "blogData" ?  <div className="text-base"><Btn text={"Blog"} bgColor={true} /></div> :<div className="text-base">  <Btn text={"Blog"} bgColor={false} /></div>}
                            </Tab>
                        </div>
                    </div>

                    {activeTab == 'videoData' && (

                        <div className="flex flex-col gap-3">

                            {videos.map((video, index) => (
                                <div className="border p-1 relative" key={index}>
                                    <div className="flex gap-3 sm:items-center items-start">
                                        <Image
                                            src={video.thumbnail}
                                            className="cursor-pointer sm:w-24 w-20"
                                            alt="videoThumbnail"
                                            width={300}
                                            height={300}
                                        />
                                        <div>
                                    <div className="sm:text-base text-sm text-right">{video.date}</div>

                                            <div className="font-semibold py-2 sm:text-base text-[14px]">{video.name}</div>
                                            <div className="sm:text-base text-[14px]">{video.description}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>

                    )}


                    {activeTab == 'blogData' && (
                        <p>blogData</p>
                    )}

                </div>
            </Layout>
        </div>
    );
}
