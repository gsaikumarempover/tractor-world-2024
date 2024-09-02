import React, { useState } from 'react'
import Modal from 'react-modal';
import Image from 'next/image';
import languagePopupImg from '@Images/languagePopup.svg';
import Btn from '@components/Btn';


export default function ModalComponent({ show }) {


    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    const [showModal, setShowModal] = useState(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className='bg-[pink]'>
            <Modal
                isOpen={showModal}
                style={customStyles}
                contentLabel="Example Modal">
                <button className='absolute right-0'>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 18L18 6M6 6l12 12" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
                <div>
                    <div className='flex'>
                        <div className='p-4'>
                            <p className='font-bold xl:text-xl lg:text-lg md:text-base'>Select your preferred Language</p>

                            <span className='my-4 block'>Select Language</span>

                            <div className='flex gap-4 my-4'>
                                <div className='border-[1px] border-secondaryColor px-2 py-1 rounded'>
                                    <input type="radio" name="language" value="hindi" />
                                    <label className="ml-2">Englidh</label>
                                </div>

                                <div className='border-[1px] border-secondaryColor px-2 py-1 rounded'>
                                    <input type="radio" name="language" value="hindi" />
                                    <label className="ml-2">Hindi</label>
                                </div>

                                <div className='border-[1px] border-secondaryColor px-2 py-1 rounded'>
                                    <input type="radio" name="language" value="hindi" />
                                    <label className="ml-2">Marathi</label>
                                </div>

                            </div>


                            <div>

                                <Btn text={'Submit'} bgColor={true} />


                            </div>

                        </div>
                        <div className=''>
                            <Image src={languagePopupImg} width={200} height={200} /></div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}
