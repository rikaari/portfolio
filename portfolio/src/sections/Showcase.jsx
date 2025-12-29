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
                    <img src="/images/project1.png" alt="Ryde" />
                </div>
                {/**TEXT WRAPPER */}
                <div className="text-content">
                    <h2>On-demand type of app</h2>
                    <p className="text-white-50 md:text-xl">
                        An app build for navigation
                    </p>
                </div>
            </div>

            {/**RIGHT CONTENT */}
            <div className="project-list-wrapper overflow-hidden">
                <div className="project" ref={project2Ref}>
                    <div className="image-wrapper bg-[#ffefdb]">
                        <img src="/images/project2.png" alt="Lib Man" />
                    </div>
                    <h2>Library Management</h2>
                </div>

                <div className="project" ref={project3Ref}>
                    <div className="image-wrapper bg-[#ffe7db]">
                        <img src="/images/project3.png" alt="YC Directory" />
                    </div>
                    <h2>YC Directory</h2>
                </div>

            </div>

        </div>
      </div>
    </section>
  )
}

export default Showcase
