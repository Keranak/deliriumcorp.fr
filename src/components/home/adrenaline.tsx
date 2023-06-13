import React from "react";
import Image from "next/image";


function Adrenaline() {
    return (
        <section className="bgBlack">
        <div className="container-adrenaline container">
          <aside className="aside">
            <div className="text-container text-adrenaline">
              <h3 className="h2 textWhite">Explorez l'adrénaline, renforcez vos liens.</h3>
              <p className="textWhite">Dépassez vos peurs et plongez dans nos palpitants survival game et testez vos limites !</p>
            </div>
            <div className="adrenaline-image-container">
              <Image src="/MASCOTTE_HEADER.png" alt="mascotte" width={175.35} height={197.73} />
            </div>
          </aside>
        </div>
        <Image className="vague" src="/vague.png" alt="vague" width={175.35} height={197.73} />
      </section>
      
       
    )
}

export default Adrenaline