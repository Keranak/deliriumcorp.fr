import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return(
    

    <main>
      <section className="bgBlack">
      <h3 className='h3 textWhite'>Explorez l'adrénaline, renforcez vos liens.</h3>
      <p className='textWhite'>Dépassez vos peurs et plongez dans nos palpitants survival
      game et testez vos limites !</p>
      <aside>
        <Image src="/MASCOTTE_HEADER.png" alt="mascotte" width={175.35} height={197.73} />
      </aside>
          
      </section>

      <section className="quiSommesNous whiteSection">
      <figure className='vague'> </figure>

        <Image src="/QUI-SOMMES-NOUS.png" alt="qui sommes nous ?" width={142.51} height={247} className='center'/>
        <div className="text">
          <p>
          Delirium Corp, une entreprise énigmatique, se distinguait par son objectif audacieux : repousser les limites de l'expérience humaine à travers des aventures extrêmes.
          </p>
          <p>
          L’entreprise était devenu synonyme d'adrénaline, de camaraderie et de transformation, attirant les aventuriers et les équipes désireux de découvrir un monde où la réalité et l'imaginaire se confondent.
          </p>
        </div>

        <div className='Video'>
          <figure>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/9No-FiEInLA" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </figure>
        </div>
      </section>

      <section className="nosJeux">
        <Image src="/NOS_JEUX.png" alt="nos jeux" width={142.51} height={247} className='center'/>
        <div className="text">
          <p>La Délirium corp, organisera le kidnapping de vos équipes à la sortie de vos bureaux. </p>
          <p>Malveillant et prêt a tout pour que vous ne sortiez jamais de notre antre, Délirium exploitera chaque peur, phobie et angoisse afin que votre équipe vole en éclat . </p>
          <p>L’adrénaline comme maître mot !</p>
          </div>


          <div className="cards">
            <div className="card">
              <h5 className="CardTitle">La toile Infinie</h5>
              <p className="CardText">
              Arachnophobe s’abstenir ! Lorsque vous pensez enfin être tiré de l’affaire le piège de la veuve se referme sur vous ! Survival game axé sur l’angoisse et les énigmes à timer.
              </p>
              <Image src="/TETE_1-LaToileInfinie.png" alt="toile infinie" width={142.51} height={247} className='center'/>
            </div>
          </div>

          <div className="cards">
            <div className="card">
              <h5 className="CardTitle">Le labyrinthe de l'âme</h5>
              <p className="CardText">
              Errez dans les méandres de l’âme torturée du grand savant de Delirium Corp. Entre souvenirs et visions du futur vous devrez discerner le vrai du faux. Survival game axé sur le paranormal et l’introspection du savant de notre équipe . 
              </p>
              <Image src="/TETE_2-Le_labyrinthe-de-l-ame.png" alt="labyrinthe de l'âme" width={142.51} height={247} className='center'/>
            </div>
          </div>

          <div className="cards">
            <div className="card">
              <h5 className="CardTitle">L'écho des failles</h5>
              <p className="CardText">
              Voyagez entre nos différents jeux et tenter de trouver des indices pour résoudre notre plus grande énigme. Attention cependant, nous protégeons tout particulièrement  les failles. Survival axé sur la course poursuite, niveau confirmé.
              </p>
              <Image src="/TETE_3-L_echo_des_Failles.png" alt="labyrinthe de l'âme" width={142.51} height={247} className='center'/>
            </div>
          </div>


          <button>
            <Link href="/nos-jeux"> Tout découvrir </Link>
          </button>

        </section>

        <section className="slideComments whiteSection">
          <Image src="/LES_SURVIVANTS.png" alt="avis" width={142.51} height={247} className='center'/>
          {/*Slider des avis laissé par les clients*/}
          <div className="slide">
            <div className="slideContent">
              <div className="slideText">
                <p className="slideText">Une très belle expérience qui a soudé l’équipe ! On a observé une belle cohésion.</p>
                <p className="slideText">Enora JOHNSON</p>
              </div>
              <div className="slideText">
                <p className="slideText">Une très belle expérience qui a soudé l’équipe ! On a observé une belle cohésion.</p>
                <p className="slideText">Enora JOHNSON</p>
              </div>
              <div className="slideText">
                <p className="slideText">Une très belle expérience qui a soudé l’équipe ! On a observé une belle cohésion.</p>
                <p className="slideText">Enora JOHNSON</p>
              </div>

            </div>
          </div>
          
        </section>




      
    </main>
  )
}
