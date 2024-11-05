import React from 'react'

const Card = (props) => {

    const {img, title, category, price} = props

  return (
    <div className=' bg-blue-900 p-6 rounded-2xl flex flex-col gap-2 w-full lg:w-auto'>
      <img 
      src={img}
      className='rounded-2xl w-60 h-60 object-cover' alt="" 
      />
      <h1 className="text-xl text-white">{title}</h1>
      <span className='text-gray-400'>{category}</span>
      <div className='flex items-center gap-4'>
        <h5 className='text-2xl text-white'>${price}</h5>
        <button 
         type='submit' 
         className='bg-blue-500 text-white font-bolt rounded-full w-full p-3'
         >
            Agregar al Carro
        </button>
      </div>
    </div>
  );   
};

export default Card;
