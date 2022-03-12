import Link from "next/link"
import styles from './CallToActionLink.module.css'

const CallToActionLink = ({ label, url }) => {
  return (
    <span className={styles.link}>
      <Link href={url}>
          {label}
      </Link>
    </span>
  )
}

export default CallToActionLink