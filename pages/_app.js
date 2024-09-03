import "../styles/globals.css"; 
import { getApolloClient } from "@service/apollo-client";
import { ApolloProvider } from '@apollo/client'; 
import { appWithTranslation } from 'next-i18next';
import { Provider } from "react-redux";
import { persistor, store } from "../store";
import { PersistGate } from "redux-persist/integration/react";
 
// Import translations 

function MyApp({ Component, pageProps }) {
 
  const client = getApolloClient();
  return ( 
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
      </PersistGate>
    </Provider>  
  );
} 
  
export default appWithTranslation(MyApp);