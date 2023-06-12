import Head from 'next/head';
import { siteConfig } from '@/config';
import DefaultLayout from '@/components/DefaultLayout';
import HeroA from '@/components/Home/Hero';
import AboutA from '@/components/Home/About';
import NewsletterFormA from '@/components/Home/Newsletter';
import LaunchA from '@/components/Home/Launch';
import SocialA from '@/components/Home/Social';
import HeroB from '@/components/HomeB/Hero';
import AboutB from '@/components/HomeB/About';
import NewsletterFormB from '@/components/HomeB/Newsletter';
import LaunchB from '@/components/HomeB/Launch';
import SocialB from '@/components/HomeB/Social';
import Soluce from '@/components/HomeB/Soluce';

export default function Home() {
  const [version, setVersion] = useState(null);

  const determineVersion = () => {
    let randomNumber = Math.random(); // Génère un nombre aléatoire entre 0 (inclus) et 1 (exclus)
    let selectedVersion;

    if (randomNumber < 0.5) {
      selectedVersion = 'A';
      window._paq.push(['AbTesting::enter', {experiment: 'Landing-page', 'variation': 'VersionA'}]);
    } else {
      selectedVersion = 'B';
      window._paq.push(['AbTesting::enter', {experiment: 'Landing-page', 'variation': 'VersionB'}]);
    }

    setVersion(selectedVersion);
  }

  useEffect(() => {
    determineVersion();
  }, []);

  return (
    <>
      <Head>
        <title>{siteConfig.name}</title>
      </Head>
      <DefaultLayout>
        {version === 'A' ? (
          <>
            <HeroA />
            <AboutA />
            <LaunchA />
            <NewsletterFormA />
            <SocialA />
          </>
        ) : (
          <>
            <HeroB />
            <AboutB />
            <Soluce />
            <LaunchB />
            <NewsletterFormB />
            <SocialB />
          </>
        )}
      </DefaultLayout>
    </>
  );
}