import { useTheme } from 'next-themes'
import styles from './ThemeToggle.module.css'

const ThemeToggle = () => {
  const { theme, setTheme} = useTheme();

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  return (
    <button onClick={toggleTheme}>Theme is {theme}</button>
  )
}

export default ThemeToggle