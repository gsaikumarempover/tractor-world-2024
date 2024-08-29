import "../styles/globals.css"; 
import { getApolloClient } from "@service/apollo-client";
import { ApolloProvider } from '@apollo/client'; 
import { appWithTranslation } from 'next-i18next';
 
// Import translations 

function MyApp({ Component, pageProps }) {
 
  const client = getApolloClient();
 
  return ( 
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>  
  );
} 
  
export default appWithTranslation(MyApp);