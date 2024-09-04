import React, { useState } from 'react';
import NavBar from '@components/NavBar';
import Footer from '@components/Footer';
import Head from 'next/head';
import Modal from "@components/Modal";
import Image from 'next/image';
import Logo from '@Images/navbar/logo.svg';
import MblLogo from '@Images/navbar/mblLogo.svg'

const Layout = ({ children, currentPage }) => {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const customStyles = {
    content: {
      top: '0',
      left: 'auto',
      right: 'auto',
      bottom: 'auto', 
      width: '100%'
    },
  };

  return (
    <>
      <Head>
        <title>Tractor World</title>
        <meta name="description" content="This is a description of my page" />
      </Head>
      <div className='header'>
        <NavBar currentPage={currentPage} onClick={handleShow} />
      </div>
      <div className='main'>
        <main>
          {children}  
          
          <Modal customStyles={customStyles} showModal={showModal} handleClose={handleClose}
            content={
              <>
              <div className='sm:block hidden'>
                <Image src={Logo} alt="Tractor World Logo" /> 
                </div>

                <div className='sm:hidden block'>
                <Image src={MblLogo} alt="Tractor World Logo" /> 
                </div>
                
                <div className='px-4 py-10'> 
                  <div className='mx-auto flex flex-col gap-2 items-center justify-center'>
                    <p className='font-semibold'>What are you looking for ?</p>

                    <input type='text' placeholder='Start typing' className='border-b-[1px] border-[#000000] border-opacity-[10%] border-t-0 border-l-0 border-r-0'/>
                  </div>
                </div>
              </>
            }
          />
        </main>
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </>
  );
};

export default Layout;