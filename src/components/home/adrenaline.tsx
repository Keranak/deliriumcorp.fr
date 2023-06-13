import React from "react";
import Image from "next/image";


function Adrenaline() {
    return (
        <section className="bgBlack">
        <div className="container">
      <aside>
      <h3 className='h3 textWhite'>Explorez l'adrénaline, renforcez vos liens.</h3>
      <p className='textWhite'>Dépassez vos peurs et plongez dans nos palpitants survival
      game et testez vos limites !</p>
        <Image src="/MASCOTTE_HEADER.png" alt="mascotte" width={175.35} height={197.73} />
      </aside>
      </div>   
      </section>
    )
}

export default Adrenaline