
import Link from 'next/link' //here we can jump to different pages!!
import Head from 'next/head' //changes the metadata of our app
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
  <div className={styles.container}>
    <Head>
      <title>Coinfetch</title>

        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet"/>

        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300&family=Roboto+Slab:wght@500&display=swap" rel="stylesheet"/> 
    </Head>


    <div className={styles.logo}>
      <h1>Coinfetch</h1>
    </div>
  
    <div className={styles.contentContainer}>
          <h2 className={styles.homePageDescription}> Follow the latest USD cotations of the main cryptocurrencies today </h2>
     
          <Link href="/cryptos">
                <h3>Go !</h3>
          </Link>
        
    </div>
  </div>

  );
}
