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

  const handleLanguage = () =>{
    setLanguageModalShow(true)
  }

  const handleLanguageModalClose = () =>{
    setLanguageModalShow(false)
  }

  const customStyles = {
    content: {
      top: '0',
      left: 'auto',
      right: 'auto',
      bottom: 'auto', 
      width: '100%'
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

  const customStylesForLanguage = {
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

          {/* //language modal from here */}
          <Modal
          showModal={languageModalShow} s
          customStyles={customStylesForLanguage} 
          handleClose={handleLanguageModalClose} 
          content={
          <div className='flex items-center sm:flex-row flex-col-reverse w-full'>
            <div className='px-4 py-10'>
              <p className='font-bold text-xl'>Select your preferred<br /> Language</p>
              <span className='mt-6 block text-sm'>Select Language</span>
              <div className='flex gap-4 my-4'>
                {languageMap.map((lang) => (
                  <div
                    key={lang.value}
                    className={`radio-group border-[1px] border-black px-2 py-1 rounded ${selectedLanguage === lang.value ? 'border-secondaryColor' : ''}`}
                  >
                    <input
                      type="radio"
                      name="language"
                      value={lang.value}
                      id={lang.value}
                      checked={selectedLanguage === lang.value}
                      onChange={handleLanguageChange}
                    />
                    <label htmlFor={lang.value} className={`ml-2 ${selectedLanguage === lang.value ? 'text-secondaryColor' : ''} font-medium`}>
                      {lang.label}
                    </label>
                  </div>
                ))}
              </div>

              <div>
                <Btn text={'Submit'} bgColor={true} onClick={handleSubmit} />
              </div>
            </div>
            <div className="sm:relative sm:w-[300px] sm:h-[300px] w-full h-auto">
              <Image
                src={languagePopupImg}
                layout='responsive'
                width={300}
                height={300}
                className='languagePopupImg'
                alt='languagePopupImg'
              />
            </div>
          </div>
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