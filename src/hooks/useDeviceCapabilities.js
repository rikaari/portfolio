import { useState, useEffect } from 'react'

export const useDeviceCapabilities = () => {
  const [shouldLoadHeavyContent, setShouldLoadHeavyContent] = useState(true)
  const [isLowEndDevice, setIsLowEndDevice] = useState(false)

  useEffect(() => {
    const detectCapabilities = () => {
      // Check mobile devices (user agent)
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
      
      // Check screen size (only very small screens like phones)
      const isSmallScreen = window.innerWidth < 768
      
      // Check device memory
      const deviceMemory = navigator.deviceMemory
      const hasLowMemory = deviceMemory && deviceMemory <= 2
      
      // Determine if low-end device (for animation optimization)
      const isLowEnd = isMobile || isSmallScreen || hasLowMemory
      setIsLowEndDevice(isLowEnd)
      
      // Only disable 3D on actual mobile devices (not laptops with touchscreens)
      if (isMobile || isSmallScreen) {
        setShouldLoadHeavyContent(false)
        console.log('Heavy content disabled - Mobile device detected:', { isMobile, isSmallScreen, screenWidth: window.innerWidth })
        return
      }

      // Check device memory only on low-end devices (< 2GB)
      if (hasLowMemory) {
        setShouldLoadHeavyContent(false)
        console.log('Heavy content disabled: Very low memory', deviceMemory)
        return
      }

      console.log('Heavy content enabled - Desktop/Laptop detected')
      setShouldLoadHeavyContent(true)
    }

    detectCapabilities()
    
    // Re-detect on window resize
    window.addEventListener('resize', detectCapabilities)
    return () => window.removeEventListener('resize', detectCapabilities)
  }, [])

  return { shouldLoadHeavyContent, isLowEndDevice }
}
