import { Html, Head, Main, NextScript } from 'next/document'
import Footer from '@/src/components/footer'
import React from 'react'





export default function Document() {

  return (
    <Html lang="fr">
      <Head>
        <meta name="description" content="La Délirium corp, organisera le kidnapping de vos équipes à la sortie de vos bureaux. Malveillant et prêt a tout pour que vous ne sortiez jamais de notre antre, Délirium exploitera chaque peur, phobie et angoisse afin que votre équipe vole en éclat . L’adrénaline comme maître mot !" />
        <meta name="keywords" content="team building, escape, game, escape room, escape room paris, team building paris, team building 91, team building essonne, team building 91, team building 92, team building hauts de seine, team building 75, team building paris, team building 77, team building seine et marne, team building 78, team building yvelines, team building 93, team building seine saint denis, team building 94, team building 95 " />
        <meta name="author" content="La Delirium Corp" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />

      </Head>
      <body>
        <Main />
        <NextScript />
        <Footer />
      </body>
    
    </Html>
  )
}