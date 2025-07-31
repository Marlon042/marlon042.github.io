import { useEffect, useState } from 'react'

const useIsLargeScreen = (minWidth: number) => {
  const [isLargeScreen, setIsLargeScreen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= minWidth)
    }

    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [minWidth])

  return isLargeScreen
}

export default useIsLargeScreen
