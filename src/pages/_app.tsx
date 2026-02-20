import { ApolloProvider } from '@apollo/client';
import 'tailwindcss/tailwind.css';
import { TranslationProvider } from '../context/TranslationContext';
import { useApollo } from '../utils/apolloClient';

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <TranslationProvider>
        <Component {...pageProps} />
      </TranslationProvider>
    </ApolloProvider>
  );
}

export default MyApp;
