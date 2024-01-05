import { useEffect, useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate')

 useEffect(() => {
    setTimeout(() => {
    setLetterClass('text-animate-hover');
  }, 3500);
}, []);

const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4hw0nkx', 'react-portfolio', form.current, '_MSo9EQ70rgRXg1X7')
    .then(
      () => {
        alert('Message successfully sent!')
        window.location.reload(false)
      },
      () => {
        alert('Failed to send the message, please try again')
      }
    )
}


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
            <form ref={form} onSubmit={sendEmail}>
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
