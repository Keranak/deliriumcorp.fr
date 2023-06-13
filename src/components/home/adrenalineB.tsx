import React from "react";
import Image from "next/image";


function AdrenalineB() {
    return (
        <section className="bgBlack">
        <div className="container">
      <h3 className='h3 textWhite'>Explorez l'adrénaline, renforcez vos liens.</h3>
      
      <aside>
      <p className='textWhite'>Dépassez vos peurs et plongez dans nos palpitants survival
      game et testez vos limites !</p>
        <Image src="/MASCOTTE_HEADER.png" alt="mascotte" width={175.35} height={197.73} />
      </aside>
      </div>   
      </section>
    )
}

export default AdrenalineB