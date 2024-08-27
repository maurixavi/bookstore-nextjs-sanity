import React from 'react';
import Link from 'next/link';
import { SiTicktick } from 'react-icons/si';
import { BsBagCheckFill } from 'react-icons/bs';

const Success = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      {/* Icono de éxito */}
      <BsBagCheckFill size={100} className="text-green-600 mt-8" />

      {/* Mensaje de éxito */}
      <h1 className="text-2xl font-bold text-gray-700 mt-8">¡Pago completado con éxito!</h1>
      <p className="mt-4 text-gray-600">Gracias por tu compra.</p>

      {/* Botón para volver al inicio */}
      <Link href="/">
        <button 
          type="button" 
          className="border-2 border-zinc-900 bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-semibold py-2 px-6 tracking-wide mt-8 uppercase">
          Continuar Comprando
        </button>
      </Link>
    </div>
  );
};

export default Success;
