import { useEffect, useRef }  from 'react'
import Scrambler from 'scrambling-text'

const TextScrambler = ({ text = 'test', setText }) => {
  const scramblerRef = useRef(new Scrambler());

  useEffect(() => {
    scramblerRef.current.scramble(text, setText)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>{text}</>
  )
}

export default TextScrambler