import React, { useState } from 'react'
import Layout from "@components/Layout";
import { getLocaleProps } from "@utils";
import HomePage from './home';
import Image from 'next/image';
import languagePopupImg from '@Images/languagePopup.svg';
import Btn from '@components/Btn';
import Modal from "@components/Modal";

export default function Home({ locale }) {
  const [showModal, setShowModal] = useState(true);
  const handleClose = () => setShowModal(false);

  const [selectedLanguage, setSelectedLanguage] = useState('');

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

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

    <>
      <Layout currentPage={"home"}>
        <HomePage locale={locale} />
      </Layout>

      <Modal showModal={showModal} customStyles={customStyles} handleClose={handleClose} content={
        <div className='flex items-center sm:flex-row flex-col-reverse w-full'>
          <div className='px-4 py-10'>
            <p className='font-bold  text-xl'>Select your preferred<br></br> Language</p>
            <span className='mt-6 block text-sm'>Select Language</span>
            <div className='flex gap-4 my-4'>
              <div className={`radio-group border-[1px] border-black px-2 py-1 rounded ${selectedLanguage === 'english' ? 'border-secondaryColor' : ''}`}>
                <input
                  type="radio"
                  name="language"
                  value="english"
                  id="english"
                  className=""
                  onChange={handleLanguageChange}
                />
                <label htmlFor="english" className={`ml-2 ${selectedLanguage === 'english' ? 'text-secondaryColor' : ''} font-medium`}>
                  English
                </label>
              </div>

              <div className={`radio-group border-[1px] border-black px-2 py-1 rounded ${selectedLanguage === 'hindi' ? 'border-secondaryColor' : ''}`}>
                <input
                  type="radio"
                  name="language"
                  value="hindi"
                  id="hindi"
                  className=""
                  onChange={handleLanguageChange}
                />
                <label htmlFor="hindi" className={`ml-2 ${selectedLanguage === 'hindi' ? 'text-secondaryColor' : ''} font-medium`}>
                  Hindi
                </label>
              </div>

              <div className={`radio-group border-[1px] border-black px-2 py-1 rounded ${selectedLanguage === 'marathi' ? 'border-secondaryColor' : ''}`}>
                <input
                  type="radio"
                  name="language"
                  value="marathi"
                  id="marathi"
                  className=""
                  onChange={handleLanguageChange}
                />
                <label htmlFor="marathi" className={`ml-2 ${selectedLanguage === 'marathi' ? 'text-secondaryColor' : ''} font-medium`}>
                  Marathi
                </label>
              </div>
            </div>

            <div>
              <Btn text={'Submit'} bgColor={true} />
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
      } />
    </>

  );
}
export async function getServerSideProps(context) {
  return await getLocaleProps(context);
}