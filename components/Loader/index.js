import React from 'react'
import Image from 'next/image';

 const Loader = () => {
    return (
        <>
            <div className="loader-overlay overlay">
                {/* <div className="loader"></div> */}
                <Image src="/images/loaders/loader.gif" layout='fill'/>
                
            </div>
        </>
    )
}

export default Loader;
