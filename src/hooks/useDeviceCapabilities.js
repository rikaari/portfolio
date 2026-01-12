import { useState, useEffect } from 'react'

export const useDeviceCapabilities = () => {
  const [shouldLoadHeavyContent, setShouldLoadHeavyContent] = useState(true)

  useEffect(() => {
    const detectCapabilities = () => {
      // Check device memory (< 4GB = low-end)
      const deviceMemory = navigator.deviceMemory
      if (deviceMemory && deviceMemory < 4) {
        setShouldLoadHeavyContent(false)
        return
      }

      // Check mobile devices
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
      if (isMobile) {
        setShouldLoadHeavyContent(false)
        return
      }

      // Check CPU cores (< 4 = low-end)
      const cpuCores = navigator.hardwareConcurrency
      if (cpuCores && cpuCores < 4) {
        setShouldLoadHeavyContent(false)
        return
      }

      setShouldLoadHeavyContent(true)
    }

    detectCapabilities()
  }, [])

  return shouldLoadHeavyContent
}
