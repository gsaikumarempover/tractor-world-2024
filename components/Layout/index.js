import React, { useState } from 'react';
import NavBar from '@components/NavBar';
import Footer from '@components/Footer';
import Head from 'next/head';
import Modal from "@components/Modal";
import Image from 'next/image';
import Logo from '@Images/navbar/logo.svg';
import MblLogo from '@Images/navbar/mblLogo.svg'
import Btn from '@components/Btn';
import languagePopupImg from '@Images/languagePopup.svg';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';



const Layout = ({ children, currentPage }) => {
  const [showModal, setShowModal] = useState(false);
  const [languageModalShow, setLanguageModalShow] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const router = useRouter();
  const { i18n } = useTranslation();

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleLanguage = () => {
    setLanguageModalShow(true)
  }

  const handleLanguageModalClose = () => {
    setLanguageModalShow(false)
  }

  const customStyles = {
    content: {
      top: '0',
      left: 'auto',
      right: 'auto',
      bottom: 'auto',
      width: '100%',
      borderBottomLeftRadius: '15px',
      borderBottomRightRadius: '15px',
    },
  };

  const languageMap = [
    { label: "English", value: "en" },
    { label: "Hindi", value: "hi" },
    { label: "Marathi", value: "mr" },
  ]


  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const handleSubmit = () => {
    const newLocale = selectedLanguage;
    i18n.changeLanguage(newLocale);
    router.push(router.asPath, router.asPath, { locale: newLocale });
    setLanguageModalShow(false);
  };



  return (
    <>
      <Head>
        <title>Tractor World</title>
        <meta name="description" content="This is a description of my page" />
      </Head>
      <div className='header'>
        <NavBar currentPage={currentPage} onClick={handleShow} onClickForLanguage={handleLanguage} />
      </div>
      <div className='main'>
        <main>
          {children}
          <Modal customStyles={customStyles} showModal={showModal} handleClose={handleClose}
            content={
              <>
                <div className='sm:block hidden'>
                  <Image src={Logo} alt="Tractor World Logo" width={60} height={60} />
                </div>

                <div className='sm:hidden block mt-2 ml-3'>
                  <Image src={MblLogo} alt="Tractor World Logo" width={50} height={50} />
                </div>

                <div className='px-4 sm:py-10 pt-4 pb-8'>
                  <div className='mx-auto flex flex-col gap-2 sm:items-center sm:justify-center text-lg'>
                    <p className='font-semibold'>What are you looking for ?</p>
                    <input type='text' placeholder='Start typing' className='border-b-[1px] border-[#000000] border-opacity-[10%] border-t-0 border-l-0 border-r-0' />
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