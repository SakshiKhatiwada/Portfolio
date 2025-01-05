import { useEffect, useState } from 'react'
import { Navbar, Container,Nav } from 'react-bootstrap'
import logo from '../assets/logo.png'
import GitHubLogo from '../assets/Github.svg'
import LinkedInLogo from '../assets/img/nav-icon1.svg'
import FacebookLogo from '../assets/img/nav-icon2.svg'

const NavBar = () => {
    // state var
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    const onUpdateLink = ({value}) => {
        setActiveLink(value);
    }

    useEffect(()=>{
        const onScroll = () => {
            if (window.scrollY > 50)    //pixels
            {
                setScrolled(true);
            }
            else{
                setScrolled(false);
            }
        }

        window.addEventListener('scroll',onScroll);
       return window.removeEventListener('scroll',onScroll);
    },[])

    return (
        <Navbar expand='lg' className={ scrolled? "scrolled" : ""}>
            <Container className='navigation'>
                <Navbar.Brand href='#home'>
                    <img src={logo} alt="logo" className='logo-img'/>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls='basic-navbar-nav'>
                    <span className='navbar-toggler-icon'></span>
                </Navbar.Toggle>

                <Navbar.Collapse id='basic-navbar-nav'>

                    <Nav className='me-auto'>
                        <Nav.Link href='#home' className={activeLink === 'home' ? 'active navbar-link': "navbar-link"} onClick={()=> onUpdateLink('home')}>Home</Nav.Link>
                        <Nav.Link href='#skills' className={activeLink === 'skills' ? 'active navbar-link': "navbar-link"} onClick={()=> onUpdateLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href='#projects' className={activeLink === 'projects' ? 'active navbar-link': "navbar-link"} onClick={()=> onUpdateLink('projects')('projects')}>Projects</Nav.Link>
                    </Nav>

                    <span className='navbar-text'>
                        <div className='social-icon'>
                            <a href="https://github.com/SakshiKhatiwada" target='_blank'>
                                <img src={GitHubLogo} alt="GitHub" />
                            </a>
                            <a href="https://www.linkedin.com/in/sakshi-khatiwada/" target='_blank'>
                                <img src={LinkedInLogo} alt="LinkedIn" />
                            </a>
                            <a href="https://www.facebook.com/sakshikhatiwadask" target='_blank'>
                                <img src={FacebookLogo} alt="Facebook" />
                            </a>
                        </div>
                        <button className='vvd' onClick={()=> console.log('contact us form')}>
                            <span>Let&apos;s Connect</span>
                        </button>
                    </span>

                </Navbar.Collapse>

            </Container>
        </Navbar>
    )
}

export default NavBar