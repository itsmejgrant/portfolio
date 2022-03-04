import { useState, useEffect } from 'react'
import debounce from '../../utils/debounce'
import dynamic from 'next/dynamic';
import styles from './Header.module.css'

/**
 * Dynamic import due to being a browser-based library
 */
const TextLogo = dynamic(
  () => import('../TextScrambler'), 
  { ssr: false }
)

const Header = () => {
  const [textLogo, setTextLogo] = useState('Joe Grant');
  const [backToTop, setBackToTop] = useState('Back To Top');
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', debounce(() => {
      window.scrollY > 200 ? setIsScrolled(true) : setIsScrolled(false)
    }), 250)
  }, [])

  return (
    <>
      <header className={`container ${styles.header}`}>
        {! isScrolled && <h1 className={styles.title}>
          <TextLogo text={textLogo} setText={setTextLogo} />
        </h1>}
        {isScrolled && <a className={styles.title} href="#top"><TextLogo text={backToTop} setText={setBackToTop} /></a>}
        <nav className={styles.nav}>
          <ul>
            <li><a className={styles.link} href="#">Home</a></li>
            <li><a className={styles.link} href="#">About</a></li>
            <li><a className={styles.link} href="#">Blog</a></li>
          </ul> 
        </nav>
      </header>


    </>
  )
}

export default Header