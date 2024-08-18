import React from 'react';
import '../app/globals.css';
import { Layout } from '../components';
/*import { Layout } from '../components/Layout';*/
/*import { Layout } from '../components';
import '../styles/globals.css';
import { StateContext } from '../context/StateContext';*/
import { StateContext } from '../context/StateContext';

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  )
}

/*
function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  )
}
*/
export default MyApp