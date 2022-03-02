import { useState, useEffect } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [logo, setLogo] = useState('Joe Grant');

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={`container ${styles.header}`}>
        <h1 className={styles.title}>{logo}</h1>
        <nav className={styles.nav}>
          <ul>
            <li>Blog</li>
            <li>Packages</li>
            <li>Github</li>
          </ul>
        </nav>
      </header>


    </>
  )
}
