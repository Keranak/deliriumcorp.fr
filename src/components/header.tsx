import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./navbar";


function Header(){
    return(<header>
        <h1 className="mainTitle" id="LogoDelirium"><a href="deliriumcorp.fr"></a><Image src="/LOGO_DELIRIUM.png" alt="Logo de delirium" width={529} height={144}/></h1>
        <Navbar/>
        
    </header> )}


export default Header;