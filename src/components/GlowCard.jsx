import React, { useRef } from 'react'

const GlowCard = ({card, children, index}) => {

  //acquiring card screen references
  const cardRefs = useRef([]);
  //acquiring indices of mouse movements around the cards
  const mouseMovements = (index) => (e) => {
    const card = cardRefs.current[index];
    //if it doesnt exist
    if(!card) return;

    //if exists
    //get mouse position relative to card
    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    //calculating angle from the center of the card
    let angle = Math.atan2(mouseX,mouseY) * (180 / Math.PI);
    angle = (angle + 360) % 360;

    //turning theangle to css
    card.style.setProperty('--start', angle + 60);
  }
  return (
    <div 
      className="card card-border timeline-card rounded-xl p-10"
      ref = {(el) => (cardRefs.current[index] = el)}
      onMouseMove={mouseMovements(index)}  
    >
        <div className="glow" />
        <div className='flex items-center gap-1 mb-5'>
            {Array.from({length:5}, (_,i) => (
                <img src="/images/star.png" alt="star" key={i} className='size-5' />
            ))}
        </div>

        <div className="mb-5">
            <p className='text-white-50 text-lg'>{card.review}</p>
        </div>
        {children}

    </div>
  )
}

export default GlowCard
