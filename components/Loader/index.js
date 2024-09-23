import React from 'react'
import Image from 'next/image';

 const Loader = () => {
    return (
        <>
            <div className="loader-overlay overlay">
                {/* <div className="loader"></div> */}
                <Image src="/images/loader.gif" width={150} height={150}/>
                
            </div>
        </>
    )
}

export default Loader;
