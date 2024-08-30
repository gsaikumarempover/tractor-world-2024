import React from 'react';
import Image from 'next/image';
import BannerUnderline from '@Images/bannerUnderline.svg'

export default function Banner({breadcrumbs, bannerImg, heading,BannerUnderlineImg = true }) {
    return (
        <>
            <div className='bg-secondaryColor text-[14px] uppercase px-2 py-3 text-center text-white font-bold'>
                {breadcrumbs.map((breadcrumb, index) => (
                    <span key={index} className='font-bold'>
                        <a href={breadcrumb.link} className='text-white'>
                            {breadcrumb.label}
                        </a>
                        {index < breadcrumbs.length - 1 && ' • '}
                    </span>
                ))}
            </div>
            <div className='relative'>
                <Image src={bannerImg}  layout="responsive" className='mt-[-1px] w-full' alt='banner-image'/>
                <div className='absolute top-4 left-14 text-white font-semibold text-xl'>
                    {heading}
                    {BannerUnderlineImg && (
                        <div>
                            <Image src={BannerUnderline} layout="responsive"  alt='banner-underline'/>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
