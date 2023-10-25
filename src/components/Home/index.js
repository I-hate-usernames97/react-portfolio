import LogoWhite from '../../assets/images/logo_white.png'
import { Link } from 'react-router-dom'
import './index.scss'

const Home = () => {
    return (
        <div className="contaner home-page">
            <div className="taxt-zone">
                <h1>Hi, <br /> I'm
                <img src={LogoWhite} alt='developer' />
                ris Hahn
                <br />
                web developer
                </h1>
                <h2>Full Stack Developer / Java / JavaScript </h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    )
}
export default Home