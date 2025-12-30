import gsap from 'gsap';
import React, { useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';


gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
    //pointers to the section
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);
  
    useGSAP(() => {
        //grouping projects to anmate
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current];
        
        projects.forEach((card,index) => {
            gsap.fromTo(
                card,
                {
                    y: 50,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom-=100'
                    }
                }
            )
        })


        //adding a fade to the entire section
        gsap.fromTo(sectionRef.current,
            {
                opacity: 0
            }, 
            {
                opacity: 1,
                duration: 1.5
            }
        )
    }, []);

  return (
    <section id="work" ref={sectionRef} className='app-showcase'>
      <div className="w-full">
        <div className="showcaselayout">
            {/**LEFT CONTENT */}
            <div className="first-project-wrapper" ref={project1Ref}>
                {/**IMAGE WRAPPER */}
                <div className="image-wrapper">
                    <img src="/images/logos/bse.jpg" alt="BLE" style={{ maxHeight: '400px', width: 'auto', objectFit: 'contain', margin: '0 auto' }} />
                </div>
                {/**TEXT WRAPPER */}
                <div className="text-content">
                    <h2>Decentralized BLE-Based Military Personnel Tracking System</h2>
                    <p className="text-white-50 md:text-xl">
                        A resource-efficient Android solution for multi-hop, GPS-free battlefield communication and low-cost personnel tracking using Bluetooth Low Energy.
                    </p>
                </div>
            </div>

            {/**RIGHT CONTENT */}
            <div className="project-list-wrapper overflow-hidden">
                <div className="project" ref={project2Ref}>
                    <div className="image-wrapper bg-[#000000]">
                        <img src="/images/logos/netlinks.jpg" alt="Netlinks" />
                    </div>
                    <h2>Automotive Services Website UI Design</h2>
                    <p className="text-white-50 md:text-xl">
                        A sleek, user-centered interface for showcasing vehicle customization services.
                    </p>
                </div>

                <div className="project" ref={project3Ref}>
                    <div className="image-wrapper bg-[#000000]">
                        <img src="/images/logos/immigration.jpg" alt="Immigration Portal" />
                    </div>
                    <h2>
                        Immigration Services Portal
                    </h2>
                    <p className="text-white-50 md:text-xl">
                        A streamlined platform for visa applications and immigration document management.
                    </p>
                </div>

            </div>

        </div>
      </div>
    </section>
  )
}

export default Showcase
