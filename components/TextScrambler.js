import { useState, useEffect, useRef }  from 'react'
import Scrambler from 'scrambling-text'

const TextScrambler = ({ text, setText, styles }) => {
  const scramblerRef = useRef(new Scrambler());
  const [text, setText] = useState('halfcab');

  useEffect(() => {
    scramblerRef.current.scramble(text, setText)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <h1 className={styles}>{text}</h1>
  )
}

export default TextScrambler