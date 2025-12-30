import React, { useState, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Button = ({text,className,id}) => {
  const [isHovered, setIsHovered] = useState(false);
  const textRef = useRef(null);

  // Hover-driven gradient flow using GSAP
  useGSAP(() => {
    if (isHovered && textRef.current) {
      gsap.to(textRef.current, {
        backgroundPosition: '100% 50%',
        duration: 6,
        ease: 'power2.inOut',
        repeat: -1,
        yoyo: true
      });
    } else if (textRef.current) {
      gsap.killTweensOf(textRef.current);
      gsap.set(textRef.current, { backgroundPosition: '0% 50%' });
    }
  }, { dependencies: [isHovered] });

  return (
   <a 
    onClick={(e) =>{
      e.preventDefault();

      const target = document.getElementById('work')

      if(target && id){
        const offset = window.innerHeight * 0.15;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({top, behavior: 'smooth'})
      }

    }}
    className={`${className ?? ''} cta-wrapper`}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
   >
    <div className='cta-button group'>
        <div className='bg-circle'/>
        <p 
          ref={textRef}
          className='text'
          style={isHovered ? {
            background: 'linear-gradient(90deg, #d90429, #8338ec, #7209b7, #d90429)',
            backgroundSize: '200% auto',
            backgroundPosition: '0% 50%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          } : {}}
        >
          {text}
        </p>
        <div className="arrow-wrapper">
            <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
    </div>
   </a>
  )
}

export default Button
