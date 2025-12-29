import { useState, useEffect } from 'react'

export const useResponsive = () => {
  const [screenSize, setScreenSize] = useState('mobile')

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setScreenSize('xl')
      } else if (window.innerWidth >= 768) {
        setScreenSize('md')
      } else {
        setScreenSize('mobile')
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return screenSize
}
