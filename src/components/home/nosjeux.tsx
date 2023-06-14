import React from "react";
import Image from "next/image";
import Link from "next/link";

function NosJeux(){
    return( <section className="nosJeux">
    <div className="container">
    <Image src="/NOS_JEUX.png" alt="nos jeux" width={142.51} height={247} className='center titleImage'/>
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


      <button className="button">
        <Link href="/nos-jeux"> Tout découvrir </Link>
      </button>
    </div>
    </section>
    )
}


export default NosJeux