import { useWindowSize } from '.'

const useDeviceSize = () => {
  const innerWidth = +useWindowSize('innerWidth').size
  let deviceType = ''
  if (innerWidth >= 1024) {
    deviceType = 'desktop'
  } else if (innerWidth < 1024 && innerWidth >= 768) {
    deviceType = 'tablet'
  } else {
    deviceType = 'mobile'
  }
  return deviceType
}

export default useDeviceSize
