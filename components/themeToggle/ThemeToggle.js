import { useTheme } from 'next-themes'
import styles from './ThemeToggle.module.css'
import SunIcon from './SunIcon'
import MoonIcon from './MoonIcon'

const ThemeToggle = () => {
  const { theme, setTheme} = useTheme();

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  return (
   <button className={styles.button} onClick={toggleTheme}>
    {theme === 'light' ? <MoonIcon /> : <SunIcon />}
   </button>
  )
}

export default ThemeToggle