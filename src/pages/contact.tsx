import Head from "next/head";
import Header from "../components/header";


export default function contact(){
    return <>
    <Head>Nous contacter - DeliriumCorp</Head>
    <Header/>
    <section className="container p-10 contactSection">
        <h1 className="sectionTitle contact">Nous contacter</h1>
        
        <a href="mailto:contactsaphiragency@gmail.com" target="_blank" className="button p-20 mailto" >Nous envoyer un mail</a>
        </section>
    </>
}