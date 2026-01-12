import { useState, useEffect } from 'react'

export const useDeviceCapabilities = () => {
  const [shouldLoadHeavyContent, setShouldLoadHeavyContent] = useState(true)

  useEffect(() => {
    const detectCapabilities = () => {
      // Check mobile devices (user agent)
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
      
      // Check screen size
      const isSmallScreen = window.innerWidth < 1024
      
      // Check touch capability
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
      
      // If mobile OR small screen OR touch device, disable heavy content
      if (isMobile || isSmallScreen || isTouchDevice) {
        setShouldLoadHeavyContent(false)
        console.log('Heavy content disabled:', { isMobile, isSmallScreen, isTouchDevice })
        return
      }

      // Check device memory (< 4GB = low-end)
      const deviceMemory = navigator.deviceMemory
      if (deviceMemory && deviceMemory < 4) {
        setShouldLoadHeavyContent(false)
        console.log('Heavy content disabled: Low memory', deviceMemory)
        return
      }

      // Check CPU cores (< 4 = low-end)
      const cpuCores = navigator.hardwareConcurrency
      if (cpuCores && cpuCores < 4) {
        setShouldLoadHeavyContent(false)
        console.log('Heavy content disabled: Low CPU cores', cpuCores)
        return
      }

      console.log('Heavy content enabled')
      setShouldLoadHeavyContent(true)
    }

    detectCapabilities()
  }, [])

  return shouldLoadHeavyContent
}
