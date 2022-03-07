import { useEffect, useRef } from 'react'
import gsap from 'gsap';
import styles from './Gradient.module.css';

const Gradient = () => {
  const gradientRef = useRef(null);

  useEffect(() => {
    const gradientsElements = gradientRef.current.querySelectorAll('[data-gradient]');
    const gradients = gsap.utils.toArray(gradientsElements);
    
    gradients.forEach(gradient => {
      gsap.to(gradient, {
        duration: () => gsap.utils.random(15, 20),
        x:() => gsap.utils.random(-300, 300),
        y:() => gsap.utils.random(-300, 300),
        rotate: () => gsap.utils.random(0, 180),
        repeatRefresh: true,
        repeat: -1
      })
    })
  }, [])

  return (
    <div ref={gradientRef} className={styles.gradientWrapper}>
      <div data-gradient className={styles.gradientOne}></div>
      <div data-gradient className={styles.gradientTwo}></div>
      <div data-gradient className={styles.ball}></div>
    </div>
  )
}

export default Gradient