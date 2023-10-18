import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'


const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt='Logo' />
            <img className='sub-logo' src={LogoSubtitle} alt='sloboan' />
        </Link>
        <nav>
            <NavLink exact='true' activeclassname='active' to="/">
                <FontAwesomeIcon icon={faHome} color="#b1b1b1" />
            </NavLink>
            <NavLink exact='true' activeclassname='active' className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#b1b1b1" />
            </NavLink>
            <NavLink exact='true' activeclassname='active' className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#b1b1b1" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/christopher-john-hahn/'>
                    <FontAwesomeIcon icon={faLinkedinIn} color="#b1b1b1" />
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='https://github.com/I-hate-usernames97'>
                    <FontAwesomeIcon icon={faGithub} color="#b1b1b1" />
                </a>
            </li>
        </ul>
    </div>
)


export default Sidebar