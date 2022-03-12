import styles from './index.module.css'
import CallToActionLink from '../components/cta-link'

const Home = () => {
  return (
      <div className='container section'>
        <h2 className={styles.title}>Hi, I&apos;m Joe.</h2>
        <p>I&apos;m a Perth-based Web Developer building sites under the name <strong>halfcab</strong>.</p>
        <p>I focus on hand-crafting <em>unique, fast &amp; secure</em> websites for small-medium sized businesses and guarantee you&apos;ll end up with a product that you (and Google) will love.</p>
        <p>Designing smaller sites with a minimal aesthetic is an absolute joy. They are elegant in their design and simple enough for even the least tech-savvy users to navigate. In fact, I love designing these sites so much that I&apos;ve built my whole business around it!</p>
        <div className={styles.buttonWrapper}>
          <CallToActionLink label='Ready to get started?' url="#" />
        </div>
      </div>
  )
}

export default Home;