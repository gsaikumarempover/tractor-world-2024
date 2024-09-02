import Layout from "@components/Layout";
import { getLocaleProps } from "@utils";
import HomePage from './home';
import Modal from "@components/Modal";

export default function Home({ locale }) {
  return (
   
    <>
      <Layout currentPage={"home"}>
        <HomePage locale={locale} />
      </Layout>

      <Modal show={true} />
      </>

      );
}
      export async function getServerSideProps(context) { 
  return await getLocaleProps(context);
}