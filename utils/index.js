import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useDispatch } from 'react-redux';
import { setAddressData } from '../store/slices/userDataSlice';
import { useEffect } from 'react';

export async function getLocaleProps(context) { 
  const locale = context.locale;   
  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale, [
        'common' 
      ])),
    } 
  };
}


