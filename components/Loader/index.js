import React from 'react'
import Image from 'next/image';

const Loader = () => {
    return (
        <>
            <div className="loader-overlay overlay">
                {/* <div className="loader"></div> */}
                <Image src="/images/loader.gif" width={100} height={100} />

            </div>
        </>
    )
}

export default Loader;
