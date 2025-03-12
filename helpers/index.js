import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
 
export async function getLocaleProps(context) { 
  const locale = context.locale;   
  return {
    props: {
      locale 
    } 
  };
}
