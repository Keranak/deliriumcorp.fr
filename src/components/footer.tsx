import { FaInstagram, FaYoutube, FaTiktok, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 waveTop">
      <div className="container mx-auto flex flex-col sm:flex-row justify-center items-center logoFooter">
        <Image
          className="max-w-full"
          src="/LOGO_DELIRIUM.png"
          alt="logo"
          width={142.51}
          height={247}/>
          </div>

          <ul id="links">
            <li>
              <a href="#top">Accueil</a>
            </li>
            <li>
              <a href="/apropos">À propos</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
              </li>
            <li>
              <a href="/signin">Connexion</a>
              </li>
            <li>
              <a href="/signup">Inscription</a>
              </li>
              <li>
              <a href="/politics">Politique de confidentialité</a>
              </li>
              <li>
              <a href="/mentions-legales">Mentions Légales</a>
              </li>
          </ul>

          <ul id="socials" className="horizontal-icons">
  <li>
    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
      <FaInstagram />
    </a>
  </li>
  <li>
    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
      <FaYoutube />
    </a>
  </li>
  <li>
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
    <div className='mascotteFooter'/>

        </footer>
  );
};

export default Footer;
