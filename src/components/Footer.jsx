import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-6 text-center">
        <p className="text-lg font-semibold mb-4">Basti Ki Pathshala</p>
        <p className="text-gray-400 mb-6">&copy; 2025 Basti Ki Pathshala. All Rights Reserved.</p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-white transition duration-300"><FaFacebook size={24} /></a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300"><FaTwitter size={24} /></a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300"><FaInstagram size={24} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;