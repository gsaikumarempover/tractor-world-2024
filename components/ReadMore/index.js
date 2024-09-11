import React from 'react';
import CardArrow from '@Images/cardArrow.svg';
import Image from 'next/image';

export const ReadMore = ({onClick}) => {
    return (
        <>
            <div className="xl:px-6 px-4 py-4 border-t-2 cursor-pointer" onClick={onClick}>
                <span className="flex items-center gap-1 text-sm font-semibold
                                text-secondaryColor mr-2">Read More
                    <Image src={CardArrow} width={17} alt='CardArrow-image' /> </span>
            </div>
        </>
    )
}
