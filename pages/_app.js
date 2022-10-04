import '../styles/globals.css';
import Head from 'next/head';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App({ Component, pageProps }) {
  return (
    <GoogleOAuthProvider>
      <Head>
        <title>Google connect</title>
      </Head>
      <Component {...pageProps} />
    </GoogleOAuthProvider>
  );
}

export default App;
