import Head from "next/head";
import Header from "../components/header";


export default function contact(){
    return <>
        <h1 className="AdrenalineTitle">Nous contacter</h1>
        
        <a href="mailto:contactsaphiragency@gmail.com" target="_blank" className="button" >Nous envoyer un mail</a>

    </>
}