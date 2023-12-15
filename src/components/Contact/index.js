import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate')

 useEffect(() => {
    setTimeout(() => {
    setLetterClass('text-animate-hover');
  }, 3500);
}, []);

  return (
    <>
     <div className="contaner contact-page">
        <div className="text-zone">
            <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            dfasfhwsdf.khajsmhdnx;.fhahsNUIldzhjx,fn.cbaniuslHjz
          </p>

          <div className='contact-form'>
            <form>
                <ul>
                    <li className='half'>
                        <input type='text' name='name' placeholder='Name' required />
                    </li>
                    <li className='half'>
                        <input type='email' name='email' placeholder='Email' required />
                    </li>
                     <li>
                        <input type='text' name='subjet' placeholder='Subjet' required />
                    </li>
                    <li>
                        <textarea placeholder='Message' name='message' required></textarea>
                    </li>
                    <li>
                      <input type='submit' className='flat-button' value="SEND" />
                    </li>
                </ul>
            </form>
          </div>

        </div>
     </div>
     <Loader type='pacman' />
     </>
  )
}

export default Contact
