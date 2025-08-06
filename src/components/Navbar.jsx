import { useState } from 'react';
import { FaChild, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About Us' },
    { href: '#volunteer', label: 'Volunteer' },
    
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-14 py-3 flex justify-between  items-center">
        <a href="#home" className="flex items-center space-x-2">
        <img className='w-20 h-20' src ="https://bastikipathshala.org/wp-content/uploads/2024/02/Basti_Ki_Pathshala-_Official_Logo-removebg-preview.png"></img>
        </a>
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-gray-600 hover:text-orange-500 transition duration-300">
              {link.label}
            </a>
          ))}
          
          <a href="#donate" className="bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-orange-600 transition duration-300">
            Donate Now
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none">
            {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-gray-50">
                {link.label}
              </a>
            ))}
             
              <a href="#donate" onClick={() => setIsOpen(false)} className="block w-full text-left bg-orange-500 text-white mt-2 py-2 px-3 rounded-md hover:bg-orange-600 transition duration-300">
                Donate Now
              </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;