import { FaInstagram, FaYoutube, FaTiktok, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col sm:flex-row justify-center items-center">
        <Image
          className="max-w-full"
          src="/LOGO_DELIRIUM.png"
          alt="logo"
          width={142.51}
          height={247}
        />
<nav className="ml-6">
  <ul className="flex flex-col sm:flex-row">
    <li className="my-2 sm:mr-4 sm:my-0">
      <a href="/" className="text-gray-300 hover:text-white">
        Accueil
      </a>
    </li>
    <li className="my-2 sm:mr-4 sm:my-0">
      <a href="/connexion" className="text-gray-300 hover:text-white">
        Connexion
      </a>
    </li>
    <li className="my-2 sm:mr-4 sm:my-0">
      <a href="/inscription" className="text-gray-300 hover:text-white">
        Inscription
      </a>
    </li>
    <li className="my-2 sm:mr-4 sm:my-0">
      <a href="/contact" className="text-gray-300 hover:text-white">
        Contact
      </a>
    </li>
    <li className="my-2 sm:my-0">
      <a href="/apropos" className="text-gray-300 hover:text-white">
        À propos de nous
      </a>
    </li>
  </ul>
</nav>

        <br />
        <div className="ml-6">
          <ul className="flex">
            <li className="mr-2">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <FaInstagram />
              </a>
            </li>
            <li className="mr-2">
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <FaYoutube />
              </a>
            </li>
            <li className="mr-2">
              <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <FaTiktok />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
