import { FaInstagram, FaYoutube, FaTiktok, FaLinkedin, FaFacebook } from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="waveTop">
      <section id='bottom'>

      
      <div className="container logoFooter">
        <Image
          className="max-w-full"
          src="/LOGO_DELIRIUM.png"
          alt="logo"
          width={142}
          height={247}/>
          </div>
          <section>
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
              <a href="/politics">Politique de confidentialité</a>
              </li>
              <li>
              <a href="/mentions-legales">Mentions Légales</a>
              </li>
          </ul>
          </section>
          <section>
          <li>
              <a href="/signin">Connexion</a>
              </li>
            <li>
              <a href="/signup">Inscription</a>
              </li>
          

          <ul id="socials" className="horizontal-icons">
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
</section>
</section>

        </footer>
  );
};

export default Footer;
