import { useEffect, useRef }  from 'react'
import Scrambler from 'scrambling-text'

const TextScrambler = ({ text, setText }) => {
  const scramblerRef = useRef(new Scrambler());

  useEffect(() => {
    scramblerRef.current.scramble(text, setText)
  }, [setText])

  return (
    <>{text}</>
  )
}

export default TextScrambler