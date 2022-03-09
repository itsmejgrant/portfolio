import { useTheme } from 'next-themes'
import styles from './ThemeToggle.module.css'
import SunIcon from './SunIcon'
import MoonIcon from './MoonIcon'
import useLoaded from '../hooks/useLoaded'

const ThemeToggle = () => {
  const { theme, setTheme} = useTheme();
  const loaded = useLoaded();

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  return (
   <button className={styles.button} onClick={toggleTheme}>
    {theme === 'light' && loaded &&  <SunIcon />}
    {theme === 'dark' && loaded &&  <MoonIcon />}
   </button>
  )
}

export default ThemeToggle