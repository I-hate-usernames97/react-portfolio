import { useEffect, useState } from 'react'

import './index.scss'
import AnimatedLetters from '../AnimatedLetters'


const About = () => {

      const [letterClass, setLetterClass] = useState('text-animate')

        useEffect(() => {
             setTimeout(() => {
             setLetterClass('text-animate-hover')
            }, 3000)
        }, [])


    return(
        <div className='container about-page'>
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p>
                    I'm a very ambitious Full Stack developer looking for a role in an
                    established IT company with the opportunity to work with the latest
                    technologies on challenging and diverse projects.
                </p>
                <p>
                    I'm quiet confident, naturally curious, and perpetually working on
                    improving my chops one design problem at a time.
                </p>

            </div>
            
        </div>
    )
}

export default About