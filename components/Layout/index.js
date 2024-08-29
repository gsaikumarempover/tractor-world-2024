import NavBar from '@components/NavBar';
import Footer from '@components/Footer';
import Head from 'next/head';

const Layout = ({ children, currentPage }) => {

  return (
    <>
      <Head>
        <title>Tractor World</title>
        <meta name="description" content="This is a description of my page" />
      </Head>
      <div className='header'>
        <NavBar currentPage={currentPage} />
      </div>
      <div className='main'>
        <main>{children}</main>
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </>
  );
};

export default Layout;