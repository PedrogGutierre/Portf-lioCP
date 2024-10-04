import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='bg-gray-800 text-white px-8 md:px-16 lg:px-24'>
      <div className='container py-2 flex justify-center md:justify-between items-center'>
        <div className='text-2xl font-bold hidden md:inline transform transition-transform duration-300 hover:scale-105 hover:text-gray-300'>
          Pedro Gutierre
        </div>
        <div className='space-x-6'>
          <Link to="/" className='hover:text-gray-400'>Home</Link>
          <Link to="/about" className='hover:text-gray-400'>Sobre mim</Link>
          <Link to="/service" className='hover:text-gray-400'>Serviços</Link>
          <Link to="/projects" className='hover:text-gray-400'>Projetos</Link>
          <Link to="/contact" className='hover:text-gray-400'>Contato</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
