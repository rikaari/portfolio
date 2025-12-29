import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const TitleHeader = ({title,sub}) => {
  const titleRef = useRef(null);

  useGSAP(() => {
    if (!titleRef.current) return;
    gsap.to(titleRef.current, {
      backgroundPosition: '200% 50%',
      duration: 6,
      ease: 'power2.inOut',
      repeat: -1,
      yoyo: true
    });
  }, []);

  return (
    <div className="flex flex-col items-center gap-5">
        <div className="hero-badge">
            <p>{sub}</p>
        </div>
        <div
          ref={titleRef}
          className="font-semibold md:text-5xl text-3xl text-center"
          style={{
            background: 'linear-gradient(90deg, #d90429, #8338ec, #7209b7, #d90429, #cd7c2e, #90e950ff)',
            backgroundSize: '200% auto',
            backgroundPosition: '0% 50%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
            {title}
        </div>
    </div>
  )
}

export default TitleHeader
