import Gradient from '../components/gradient'
import Layout from '../layout'
import styles from './index.module.css'

const Home = () => {
  return (
    <Layout>
      
      <Gradient />
      <div className={`container ${styles.header}`}>
        <h2 className={styles.title}>Hi, I&apos;m Joe.</h2>
        <p className={styles.subtitle}>I&apos;m a frontend developer, skateboarder and self-proclaimed toastie aficionado.<br />This is my playground to write, try new things and show off pet projects.</p>
      </div>

    </Layout>
  )
}

export default Home;