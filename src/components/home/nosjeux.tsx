import React from "react";
import Image from "next/image";
import Link from "next/link";

function NosJeux(){
    return( 
      
      <section className="nosJeux whiteSection">
        
<div className="container principeJeux">
  <h1 className="sectionTitle">Nos Jeux</h1>
  <p>La Délirium corp, organisera le kidnapping de vos équipes à la sortie de vos bureaux. </p>
  <p>Malveillant et prêt a tout pour que vous ne sortiez jamais de notre antre, Délirium exploitera chaque peur, phobie et angoisse afin que votre équipe vole en éclat . </p>
  <p>L’adrénaline comme maître mot !</p>
</div>

<div className="cards">
  <article className="card toile">
    <h1 className="titleCard">LA TOILE INFINIE</h1>
    <p>Arachnophobe s’abstenir ! Lorsque vous pensez enfin être tiré de l’affaire le piège de la veuve se referme sur vous ! Survival game axé sur l’angoisse et les énigmes à timer.</p>
  </article>
  <article className="card maze">
    <h1 className="titleCard">Le Labyrinthe de L'Âme</h1>
    <p>Errez dans les méandres de l’âme torturée du grand savant de Delirium Corp. Entre souvenirs et visions du futur vous devrez discerner le vrai du faux. Survival game axé sur le paranormal et l’introspection du savant de notre équipe . </p>
  </article>
  <article className="card echo">
    <h1 className="titleCard">L'écho des failles</h1>
    <p>Voyagez entre nos différents jeux et tenter de trouver des indices pour résoudre notre plus grande énigme. Attention cependant, nous protégeons tout particulièrement  les failles. Survival axé sur la course poursuite, niveau confirmé.</p>
  </article>
</div>
      

      <p className="button">
        <Link href="/nos-jeux"> Tout découvrir </Link>
      </p>
    
    </section>
    )
}


export default NosJeux