import React, { useState } from 'react'
import Modal from 'react-modal';
import Image from 'next/image'; 
import CloseIcon from '@Images/CloseIcon.svg';


export default function ModalComponent({ showModal, handleClose, content }) {


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

     return (
        <div>
            <Modal
                isOpen={showModal}
                style={customStyles}
                contentLabel="languageSelectionModal">
                <button className='absolute right-2 top-2 z-50' onClick={handleClose}>
                    <Image src={CloseIcon} alt='closeIcon' width={19} height={19} /> 
                </button>
                <div className='w-full'>
                   {content}
                </div>
            </Modal>
        </div>
    )
}
