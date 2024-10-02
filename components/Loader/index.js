import React from 'react'
import Image from 'next/image';

const Loader = () => {
    return (
        <>
            <div className="loader-overlay overlay">
                {/* <div className="loader"></div> */}
                <Image src="/images/loader.gif" width={130} height={130} />

            </div>
        </>
    )
}

export default Loader;
