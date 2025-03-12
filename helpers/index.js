import dynamic from 'next/dynamic';

export async function getStaticProps({ locale }) {
  if (typeof window === 'undefined') {
    const { serverSideTranslations } = await import('next-i18next/serverSideTranslations');
    return {
      props: {
        ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  }

  return {
    props: {},
  };
}
