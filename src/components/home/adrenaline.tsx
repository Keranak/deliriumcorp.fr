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
        <figure><Image className="vague center" src="/vague.svg" alt="test" width={1980} height={100}/></figure>
      </section>
      
       
    )
}

export default Adrenaline