import React, { useEffect, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { navLinks } from '../constants'

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [hovered, setHovered] = useState(null);

    //checking if page is scrolled
    useEffect(() => {
        const handleScroll = () =>{
            const isScrolled = window.scrollY > 10;
            setScrolled(true);
        }
        //adding the event to the page
        window.addEventListener('scroll', handleScroll);
        //removing the event
        return () => window.removeEventListener('scroll',handleScroll);

    }, [])

    // Animate navbar logo gradient using GSAP
    useGSAP(() => {
        gsap.to('.logo-flow', {
            backgroundPosition: '200% 50%',
            duration: 20,
            ease: 'power2.inOut',
            repeat: -1,
            yoyo: true
        })
    })

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
        <div className="inner">
            <a 
                href="#hero" 
                className="logo logo-flow"
                style={{
                    background: 'linear-gradient(90deg, #d90429, #8338ec, #7209b7, #d90429)',
                    backgroundSize: '200% auto',
                    backgroundPosition: '0% 50%',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}
            >
                Ntwari Regan
            </a>

                        <nav className="desktop">
                                <ul>
                                        {navLinks.map(({link, name}) =>(
                                                <li
                                                    key={name}
                                                    className='group'
                                                    onMouseEnter={() => setHovered(name)}
                                                    onMouseLeave={() => setHovered(null)}
                                                >
                                                        <a href={link}>
                                                                <span
                                                                    style={hovered === name ? {
                                                                        background: 'linear-gradient(135deg, #d90429, #8338ec, #7209b7)',
                                                                        backgroundSize: '200% auto',
                                                                        backgroundPosition: '0% 50%',
                                                                        WebkitBackgroundClip: 'text',
                                                                        WebkitTextFillColor: 'transparent',
                                                                        backgroundClip: 'text',
                                                                        transition: 'background 0.3s'
                                                                    } : {
                                                                        color: 'white',
                                                                        transition: 'color 0.3s'
                                                                    }}
                                                                >
                                                                    {name}
                                                                </span>
                                                                <span
                                                                    className="underline"
                                                                    style={hovered === name ? {
                                                                        background: 'linear-gradient(135deg, #d90429, #8338ec, #7209b7, #90e950ff)',
                                                                        backgroundSize: '200% auto',
                                                                        backgroundPosition: '0% 50%'
                                                                    } : {
                                                                        background: 'white'
                                                                    }}
                                                                />
                                                        </a>
                                                </li>
                                        ))}
                                </ul>
                        </nav>

            <a href="#contact" className="contact-btn group">
                <div 
                    className="inner" 
                    style={{ 
                        backgroundColor: '#282732',
                        transition: 'background-color 0.3s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#4b4b55ff'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#282732'}
                >
                    <span
                        style={{
                            background: 'linear-gradient(135deg, #d90429, #8338ec, #7209b7)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            transition: 'background 0.3s',
                        }}
                    >
                        Contact Me
                    </span>
                </div>
            </a>

        </div>

    </header>
  )
}

export default NavBar
