import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { expCards } from '../constants/index.js'
import GlowCard from '../components/GlowCard.jsx'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
    useGSAP(() => {
        gsap.utils.toArray('.timeline-card').forEach((card) => {
            gsap.from(card, {
                xPercent: -100,
                opacity: 0,
                transformOrigin: 'left left',
                duration: 1,
                ease: 'power2.inOut',
                scrollTrigger: {
                    trigger: card,
                    start: 'top 80%'
                }
            })
        })

        gsap.to('.timeline', {
            transformOrigin: 'bottom bottom',
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: '.timeline',
                start: 'top center',
                end: '50% center',
                onUpdate: (self) => {
                    gsap.to('.timeline', {
                        scaleY: 1 - self.progress
                    })
                }
            }
        })

        gsap.utils.toArray('.expText').forEach((text) => {
            gsap.from(text, {
                xPercent: 0,
                opacity: 0,
                duration: 1,
                ease: 'power2.inOut',
                scrollTrigger: {
                    trigger: text,
                    start: 'top 60%'
                }
            })
        })

    }, []);

    // Animate gradient flow on experience section titles
    useGSAP(() => {
        gsap.to('.gradient-exp-title', {
            backgroundPosition: '200% 50%',
            duration: 6,
            ease: 'power2.inOut',
            repeat: -1,
            yoyo: true
        })
    })


  return (
    <section className="w-full md:mt-40 mt-20 section-padding xl:px-0" id='experience'>
        <div className="w-full h-full md:px-20 px-5">
            <TitleHeader 
                title="Professional Work Experience" 
                sub={'\u{1F4BC} My Career Overview'}  
            />

            <div className="mt-32 relative">
                <div className="relative z-50 xl:space-y-32 space-y-10">
                    {expCards.map((card, index) => (
                        <div className="exp-card-wrapper" key={card.title} >
                            <div className="xl:w-2/6">
                                <GlowCard card={card} index={index}>
                                    <div>
                                        <img src={card.imgPath} alt={card.title} style={{ transform: `scale(${card.imgScale || 1})` }} />
                                    </div>
                                </GlowCard>
                            </div>

                            <div className="xl:w-4/6">
                                <div className="flex items-start">
                                    <div className="timeline-wrapper">
                                        <div className="timeline" />
                                        <div className="gradient-line w-1 h-full" />
                                    </div>

                                    <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative, z-20">
                                        <div className="timeline-logo">
                                            <img src={card.logoPath} alt="logo" />
                                        </div>

                                        <div>
                                            <h1
                                                className="font-semibold text-3xl gradient-exp-title"
                                                style={{
                                                    background: 'linear-gradient(90deg, #90e950ff, #9983b6ff, #62e0ff, #6d45ce)',
                                                    backgroundSize: '200% auto',
                                                    backgroundPosition: '0% 50%',
                                                    WebkitBackgroundClip: 'text',
                                                    WebkitTextFillColor: 'transparent',
                                                    backgroundClip: 'text'
                                                }}
                                            >
                                                {card.title}
                                            </h1>
                                            <p className="my-5 text-white-50">
                                                {card.date}
                                            </p>

                                            <p className="text-[#839cb5] italic">
                                                Responsibilities
                                            </p> 

                                            <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                                                {card.responsibilities.map((responsibility) => (
                                                    <li className="text-lg" key={responsibility}>
                                                        {responsibility}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    </section>
  )
}

export default ExperienceSection
