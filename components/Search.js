import React, { useState } from 'react';
import Link from 'next/link'
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import { useStateContext } from '../context/StateContext';
import { client, urlFor } from '../app/lib/client';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Lógica para manejar la búsqueda
    console.log("Buscando:", searchQuery);
    // Aquí puedes implementar la lógica para buscar productos por nombre o título
  };

  return (
    <div className="absolute top-full right-0 mt-2 p-2 bg-white border rounded shadow-lg w-64">
      <input
        type="text"
        className="w-full p-2 border rounded"
        placeholder="Buscar por nombre o título..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button
        type="button"
        className="mt-2 w-full p-2 bg-blue-500 text-white rounded"
        onClick={handleSearch}
      >
        Buscar
      </button>
    </div>
  );
}

export default Search;