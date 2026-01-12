import React from 'react'
import { words } from '../constants'
import Button from '../components/Button'
import HeroAnimation from '../components/HeroModel/HeroAnimation'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import AnimatedCounter from '../components/AnimatedCounter'
import { useDeviceCapabilities } from '../hooks/useDeviceCapabilities'

const hero = () => {
  const shouldLoadHeavyContent = useDeviceCapabilities()

  useGSAP(() => {
    gsap.fromTo('.hero-text h1',
      //h1 text starts from
      {
        y: 50,
        opacity: 0
      },
      //to
      {
        y: 0,
        opacity: 1,
        stagger: 0.8,
        duration: 2,
        ease: 'power2.inOut'
      },
    )
  })

  // Animate gradient flow on hero words
  useGSAP(() => {
    gsap.to('.gradient-word', {
      backgroundPosition: '100% 50%',
      duration: 2,
      ease: 'power2.inOut',
      repeat: -1,
      yoyo: true
    })
  })

  useGSAP(() => {
    gsap.fromTo('.pTextAnimation p',
      {
        left: 100,
        opacity: 0
      },
      {
        left: 0,
        opacity: 1,
        stagger: 0.8,
        duration: 4,
        ease: 'power2.inOut'
      },
    )
  })


  return (
    <section id="hero" className='relative overflow-hidden'>
      <div className='absolute top-0 left-0 z-0'>
        <img src="./images/bg.png" alt="background" />
      </div>

      <div className='hero-layout'>
        {/*Left content */}
        <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
            <div className='flex flex-col gap-7'>
                <div className='hero-text'>
                    <h1>
                        Shaping
                        {/**span that animates the icon with text */}
                        <span className='slide'>                        
                            <span className='wrapper'>
                                {words.map((word, index) =>(
                                    /**icon span */
                                  <span key={`${word.text}-${index}`} className='flex items-center md:gap-3 gap-1 pb-2'>
                                        <img 
                                          src={word.imgPath} 
                                          alt={word.text} 
                                          className='xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white'
                                        />
                                      
                                        <span
                                          className="gradient-word"
                                          style={{
                                            background: 'linear-gradient(90deg, #d90429, #8338ec, #7209b7, #d90429)',
                                            backgroundSize: '200% auto',
                                            backgroundPosition: '0% 50%',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            backgroundClip: 'text'
                                          }}
                                        >
                                          {word.text}
                                        </span>
                                    </span>
                                ))}
                            </span>
                        </span>
                    </h1>
                    <h1>into Real projects</h1>
                    <h1>and Delivering Excellence</h1>
                </div>

                <div className='pTextAnimation'>
                  <p className='text-white-40 md:text-xl relative z-10 pointer-events-none'>
                    Full-stack developer passionate about building scalable applications. 
                  </p>
                </div>

                {/**Button for navigation to workspace animation */}
                <Button 
                  className='md:w-80 md:h-16 w-60 h-12'
                  id='button'
                  text='See my work'
                />
            </div>
        </header>

        {/** Right 3d content */}
        <figure>
          <div className='hero-3d-layout'>
            {shouldLoadHeavyContent ? (
              <HeroAnimation />
            ) : (
              <img 
                src="/images/hero-room.png" 
                alt="Workspace" 
                className="w-full h-full object-contain"
              />
            )}
          </div>
          
        </figure> 
      </div>

      <AnimatedCounter />

    </section>
  )
}

export default hero
