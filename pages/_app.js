import React from 'react';
import '../app/globals.css';
import { Layout } from '../components';
//import { Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css'; // Importa el CSS necesario para react-toastify
import { ToastContainer  } from 'react-toastify';
/*import { Layout } from '../components/Layout';*/
/*import { Layout } from '../components';
import '../styles/globals.css';
import { StateContext } from '../context/StateContext';*/
import { StateContext } from '../context/StateContext';

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
      <ToastContainer
          position="top-center"   // Posición de la notificación
          autoClose={3500}        // Tiempo antes de que la notificación se cierre automáticamente
          hideProgressBar={false} // Mostrar la barra de progreso
          newestOnTop={false}     // Mostrar las notificaciones más nuevas arriba
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"           // Tema claro o oscuro
        />
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