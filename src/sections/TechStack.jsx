import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { techStackIcons, techStackImgs } from '../constants'
import TechIcon from '../components/Models/TechLogos/TechIcon'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useDeviceCapabilities } from '../hooks/useDeviceCapabilities'

gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
    const shouldLoadHeavyContent = useDeviceCapabilities()

    useGSAP(() => {
        gsap.fromTo('.tech-card', {
            y:50,
            opacity:0
        },
        {
            y:0,
            opacity: 1,
            duration: 1,
            ease: 'power2.inOut',
            stagger: 0.2,
            scrollTrigger: {
                trigger: '#skills',
                start: 'top center'
            }
        }
    )
    })
  return (
    <div id="skills" className="flex-center section-padding">
        <div className="w-full h-full md:px-10 px-5">
            <TitleHeader 
                title="My Toolkit"
                sub="🛠️ The expertise behind every project. "
            />

            <div className="tech-grid">
                {techStackIcons.map((icon) => (
                    <div key={icon.name} className='card-border tech-card overflow-hidden group xl:rounded-full rounded-lg'>
                        <div className="tech-card-animated-bg" />
                        <div className="tech-card-content">
                            <div className="tech-icon-wrapper">
                                {shouldLoadHeavyContent ? (
                                  <TechIcon model={icon} />
                                ) : (
                                  <img 
                                    src={techStackImgs.find(img => img.name === icon.name)?.imgPath || icon.imgPath} 
                                    alt={icon.name} 
                                    className="w-full h-full object-contain p-8"
                                  />
                                )}
                            </div>

                            <div className="padding-x w-full">
                                <p>{icon.name}</p>
                            </div>
                        </div>
                    </div>
                ))}

              

        </div>
        </div>

    </div>
  )
}

export default TechStack