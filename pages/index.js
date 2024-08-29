import Layout from "@components/Layout"; 
import { getLocaleProps } from "@utils"; 
import HomePage from './home';
 
export default function Home({locale}) { 
  return (
   
    <Layout currentPage={"home"}> 
        <HomePage locale={locale}/>
    </Layout>
   );
} 
export async function getServerSideProps(context) { 
  return await getLocaleProps(context);
}