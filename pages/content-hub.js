import React from "react";
import Layout from "@components/Layout";
import Banner from "@components/Banner";
import Image from "next/image";
import bannerImg from '@Images/contentHub/banner.svg';

export default function ContentHUb() {
    const breadcrumbData = [
        { label: 'Home', link: '/' },
        { label: 'Content Hub', link: '#' },
    ];

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

                    <div className="flex flex-col gap-3">

                        {videos.map((video, index) => (
                            <div className="border p-1 relative" key={index}>
                                <div className="flex gap-3 sm:items-center items-start">
                                    <Image
                                        src={video.thumbnail}
                                        className="cursor-pointer sm:w-24 w-20"
                                        alt="videoThumbnail"
                                        width={100}
                                        height={100}
                                    />
                                    <div>
                                        <div className="font-semibold py-2 sm:text-base text-[14px]">{video.name}</div>
                                        <div className="sm:text-base text-[14px]">{video.description}</div>
                                    </div>
                                </div>
                                <div className="absolute top-2 right-3 sm:text-base text-sm">{video.date}</div>
                            </div>
                        ))}

                    </div>

                </div>
            </Layout>
        </div>
    );
}
