import { useEffect, useState } from 'react'

const useWindowSize = (type, element) => {
  const initialSize = `${element ? element[type] : (window[type] || 0)}`
  const [value, setValue] = useState(initialSize)
  //TODO: add event listenrer
  useEffect(() => {
    const windowResize = () => {
      setValue(`${element ? element[type] : (window[type] || 0)}`)
    }
    window.addEventListener('resize', windowResize)
    windowResize()
    return () => window.removeEventListener('resize', windowResize)
  }, [])
  return (
    {
    size: value,
    sizeString: `${value}px`
    }
  )
}

export default useWindowSize
