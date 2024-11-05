import React, {useState} from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { RiMenu2Fill } from "react-icons/ri";
import { IoIosClose } from "react-icons/io";

const Header = () => {
  const [showMenu, setShowMenu, isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  
  return ( 
    <header className='h-[7vh] lg:h-[10vh] text-red-50 py-4 px-10 flex items-center justify-between bg-blue-900 z-40'>
    {/* Menu */}
    <button 
      onClick={() => setShowMenu(!showMenu)} 
      className='lg-hidden text-2xl'
      >
        <div className='lg:hidden'>
        <RiMenu2Fill />
        </div>
    </button>
    <div className={`fixed left-0 bg-[#181A20] w-full h-full z-50 transition-all ${
        showMenu ? "top-0" : "-top-full"
    }`}
    >
    <button onClick={() => setShowMenu(!showMenu)}  className='text-3xl p-4'
    ><IoIosClose />
    </button>
    <ul className='nt-20'>
        <li>
            <a href="#" className="text-[#ES8D27] text-4xl block text-center p-4">
             Inicio
            </a>
        </li>
        <li>
            <a href="#" className='text-[#ES8D27] text-4xl block text-center p-4'
             >Productos
            </a>
        </li>
        <li>
            <a href="#" className='text-[#ES8D27] text-4xl block text-center p-4'
             >Sobre Nosotros
            </a>
        </li>   
    </ul>
    </div>
    <ul className='hidden lg:flex items-center gap-6 z-50'>
        <li>
            <a href="#" className="text-[#ES8D27] text-3xl font-semibold">
             Tienda Outlet
            </a>
        </li>
        <li>
            <a href="#" className="text-[#ES8D27] transition-colors">
             Inicio
            </a>
        </li>
        <li>
            <a href="#" className='hover:text-[#ES8D27] transition-colors'
             >Productos
            </a>
        </li>
        <li>
            <a href="#" className='hover:text-[#ES8D27] transition-colors'
             >Sobre Nosotros
            </a>
        </li>   
    </ul>
    {/*Segundo menu*/}
    <ul className='flex items-center gap-6 text-xl'>
    <li>
        <button onClick={toggleCart} className="hover:text-[#E5BD27] transition-colors">
            <FaShoppingCart className="text-3xl" />
        </button>
    </li>
</ul>


  </header>
 );
};

export default Header
