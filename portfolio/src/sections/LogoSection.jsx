import React from 'react'
import { logoIconsList } from '../constants/index.js'

const LogoIcon = ({ icon }) => {
  const alt = icon.name || icon.imgPath || 'logo'

  return (
    <div className="flex-none flex-center marquee-item">
      {/* 
        Constrain each image so very large source images are scaled down
        but keep aspect ratio with object-contain. Use lazy loading to
        avoid blocking.
      */}
      <img
        src={icon.imgPath}
        alt={alt}
        loading="lazy"
        className="max-h-20 md:max-h-28 w-auto object-contain"
      />
    </div>
  )
}

const LogoSection = () => {
  return (
    <div className="md:my-20 my-10 relative">
      <div className="gradient-edge" />
      <div className="gradient-edge" />

      {/**adding marquee to animate the company logos */}
      <div className="marquee h-52">
        <div className="marquee-box md:gap-12 gap-5">
          {logoIconsList.map((icon, i) => (
            <LogoIcon key={`${icon.name ?? icon.imgPath}-${i}`} icon={icon} />
          ))}

          {/**adding a second for continous animation - give unique keys for the clones */}
          {logoIconsList.map((icon, i) => (
            <LogoIcon key={`clone-${icon.name ?? icon.imgPath}-${i}`} icon={icon} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default LogoSection