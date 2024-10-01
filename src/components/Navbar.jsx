import React from 'react';

const Navbar = () => {
  return (
    <nav className='bg-gray-800 text-white px-8 md:px-16 lg:px-24'>
      <div className='container py-2 flex justify-center md:justify-between items-center'>
        <div className='text-2xl font-bold hidden md:inline transform transition-transform duration-300 hover:scale-105 hover:text-gray-300'>
          Pedro Gutierre
        </div>
        <div className='space-x-6'>
          <a href="#home" className='hover:text-gray-400'>Home</a>
          <a href="#about" className='hover:text-gray-400'>Sobre mim</a>
          <a href="#service" className='hover:text-gray-400'>Serviços</a>
          <a href="#project" className='hover:text-gray-400'>Projetos</a>
          <a href="#contact" className='hover:text-gray-400'>Contato</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
