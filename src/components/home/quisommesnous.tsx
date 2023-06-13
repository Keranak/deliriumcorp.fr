import React from "react";
import Image from "next/image";

function  QuiSommesNous(){
    return(
        <section className="quiSommesNous whiteSection">
        <div className="container">
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
        </div>
      </section>
    )
}

export default QuiSommesNous