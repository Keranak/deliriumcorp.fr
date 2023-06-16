import { FaInstagram, FaYoutube, FaTiktok, FaLinkedin, FaFacebook } from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="waveTop">
      <section id='bottom' className="flex justify-center items-center flex-col">
        <div className="container logoFooter">
          <Image
            className="max-w-full"
            src="/LOGO_DELIRIUM.png"
            alt="logo"
            width={142}
            height={247}
          />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 w-auto p-4'>
          <div className='w-full'>
            <ul id="links" className="text-lg">
              <li>
                <a href="#top" title='Accueil'>Accueil</a>
              </li>
              <li>
                <a href="/apropos" title='À propos'>À propos</a>
              </li>
              <li>
                <a href="/contact" title='Contact'>Contact</a>
              </li>
              <li>
                <a href="/politics" title='Politique de confidentialité'>Politique de confidentialité</a>
              </li>
              <li>
                <a href="/mentions-legales" title='Mentions Légales'>Mentions Légales</a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="text-lg">
              <li>
                <a href="/signin">Connexion</a>
              </li>
              <li>
                <a href="/signup">Inscription</a>
              </li>
            </ul>
            <ul id="socials" className="horizontal-icons flex justify-center text-3xl">
          <li>
            <a href="https://www.instagram.com/delirium.corp/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
              <FaYoutube />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/profile.php?id=100093210124644" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/d%C3%A9lirium-corp/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
              <FaLinkedin />
            </a>
          </li>
        </ul>
          </div>
        </div>
       
      </section>
    </footer>
  );
};

export default Footer;
