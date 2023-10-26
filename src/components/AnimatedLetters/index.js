import './index.scss'

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  return (
    <span>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + idx} text-animate-hover`}>
          {char}
        </span>
      ))}
    </span>
  )
}

export default AnimatedLetters
