import React, { useState } from 'react';
import { HiCurrencyDollar } from "react-icons/hi";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { CiFilter } from "react-icons/ci";

const Sidebar = () => {
   const [showSidebar, setShowSidebar] = useState(false);
   return (
  <>
  <div className='{}`w-[80%] fixed lg:static top-0 ${showSidebar ? "left-0 : "left-full"} left-full lg:w-80 h-full overflow-y-scroll text-white'>
    {/*Buscador */}
    <div className=' bg-blue-900 rounded-2xl p-4 mb-4'>
      <h4 className='mb-4 text-white text-lg'>Categorias</h4>
      <div className='flex flex-col gap-2'>
      <div className='flex items-center gap-2'>
        <input type="checkbox" id='Masculino'/>
        <label htmlFor='Masculino'>Masculino</label>
      </div>
      <div className='flex items-center gap-2'>
        <input type="checkbox" id='Femenino'/>
        <label htmlFor='Femenino'>Femenino</label>
      </div>
      <div className='flex items-center gap-2'>
        <input type="checkbox" id='Niño'/>
        <label htmlFor='Niño'>Niño</label>
      </div>
      <div className='flex items-center gap-2'>
        <input type="checkbox" id='Niña'/>
        <label htmlFor='Niña'>Niña</label>
      </div>
      <div className='flex items-center gap-2'>
        <input type="checkbox" id='Calcetines'/>
        <label htmlFor='Calcetines'>Calcetines</label>
      </div>
      <div className='flex items-center gap-2'>
        <input type="checkbox" id='Calzado'/>
        <label htmlFor='Calzado'>Calzado</label>
      </div>
    </div>
    <h4 className='my-4 text-white text-lg'>Marcas</h4>
    <div className="flex flex-col gap-2">
    <div className='flex items-center gap-2'>
        <input type="checkbox" id='Nike'/>
        <label htmlFor='Nike'>Nike</label>
      </div>
      <div className='flex items-center gap-2'>
        <input type="checkbox" id='Adidas'/>
        <label htmlFor='Adidas'>Adidas</label>
      </div>
      <div className='flex items-center gap-2'>
        <input type="checkbox" id='Jordan'/>
        <label htmlFor='Jordan'>Jordan</label>
      </div>
      <div className='flex items-center gap-2'>
        <input type="checkbox" id='Adidas'/>
        <label htmlFor='Adidas'>Fila</label>
      </div>
      <div className='flex items-center gap-2'>
        <input type="checkbox" id='Jordan'/>
        <label htmlFor='Jordan'>Puma</label>
      </div>
    </div>
    <h4 className='my-4 text-white text-lg'>Precio</h4>
     <form className='flex flex-col gap-8'>
        <div className='flex items.center justify-between gap-4'>
        <div className='relative'>
            <HiCurrencyDollar className='rounded-xl bg-black absolute left-2 top-1/2 -translate-y-1/2'/>
            <input
            type='number'
            className='bg-blue-500 py-2 pl-8 pr-4 rounded-xl outline-none w-full'
            />
         </div>
        </div>
        <button 
         type='submit' 
         className='bg-blue-500 text-white font-bolt rounded-full w-full p-3'
         >
            Aplicar Filtro
        </button>
    </form>
   </div>
      <ul className='flex items-center justify-between'>
        <li>
            <a href="https://www.facebook.com/" className='text-2xl'>
               <FaFacebook /> 
            </a>
        </li>
        <li>
            <a href="https://chat.whatsapp.com/BbRtIfwLTch0mKpjxBacBA" className='text-2xl'>
               <FaWhatsapp /> 
            </a>
        </li>
        <li>
            <a href="https://x.com/home?lang=es" className='text-2xl'>
               <FaSquareXTwitter /> 
            </a>
        </li>
        <li>
            <a href="https://www.instagram.com/" className='text-2xl'>
               <FaInstagram /> 
            </a>
        </li>
      </ul>

  </div>
  <button 
  onClick={() => setShowSidebar(!showSidebar)} 
  className='lg:hidden fixed bottom-4 right-4 text-white bg-blue-900 p-4 rounded-full text-lg z-40'>
    <CiFilter />
    </button>
  </>
  );
};

export default Sidebar
