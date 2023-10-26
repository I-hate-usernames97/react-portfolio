import { useEffect, useState } from 'react'
import LogoWhite from '../../assets/images/logo_white.png'
import AnimatedLetters from '../AnimatedLetters'
import { Link } from 'react-router-dom'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['C', 'h', 'r', 'i', 's', ' ', 'H', 'a', 'h', 'n']
  const jobArray = [ 'w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.', ]
    
    return (
        <div className="contaner home-page">
            <div className="taxt-zone">
                 
                <h1>
                <AnimatedLetters letterClass={letterClass} strArray={['H', 'i', ',']} idx={12} /> <br /> 
                <AnimatedLetters letterClass={letterClass} strArray={['I', "'", 'm', '']} idx={15} />


                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={17} />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={22} />
                </h1>
                <h2>Full Stack Developer / Java / JavaScript / React / SpringBoot / MySql / AngularJS </h2>
                
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
        </div>
    )
}
export default Home