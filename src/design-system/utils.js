import { background, border, buttons, common, color, flexBox, layout, lists, overflow, position, space, texts, typography } from './'
const constants = {
  PERCENT: '%',
  PIXEL: 'px',
  EM: 'em',
  REM: 'rem'
}
const { PERCENT, PIXEL, EM, REM } = constants
const layoutProps = Object.keys(layout)
const boxProps = {...common, ...border, ...layout, ...space, ...color, ...position, ...background, ...overflow, ...texts, ...typography}
const buttonProps = {...boxProps, ...buttons}
const flexProps = {...boxProps, ...flexBox}
const textProps = {...boxProps, ...texts, ...typography}
const imageProps = {...boxProps }
const linkProps = {...boxProps, ...texts, ...typography }
const listProps = {...linkProps, ...lists }
const propTypes = {
  boxProps, buttonProps, flexProps, textProps, imageProps, linkProps, listProps
}

const breakPoints = [0, 32, 40, 48, 56, 72, 80].map(n => `${n}em`)
//TODO: if fontsize then take from theme
const space1 = [0, 4, 8, 16, 32, 64, 128, 256, 512]
const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 72]
//TODO: if fontsize then take from theme
const getPropertyValue = ({property, propertyValue = 0, elementType}) => {
  let retFinalValue = ''
  if (!propertyValue && propertyValue !== 0) {
    return retFinalValue
  }

  let retPropertyValue = ''
  const propertyType = typeof propertyValue
  const propertyNames = propTypes[elementType][property].value

  if (propertyType === 'string') {
    retPropertyValue = [PERCENT, PIXEL, EM, REM].some((item) => propertyValue.includes(item)) ? propertyValue : `${propertyValue}`
  } else {
    const shouldBePercent = layoutProps.includes(property) && propertyValue > 0 && propertyValue <= 1
    retPropertyValue = shouldBePercent ? `${propertyValue * 100}%` : space1[propertyValue] ? `${space1[propertyValue]}px` : `${propertyValue}px`
  }

  if (Array.isArray(propertyNames)) {
    retFinalValue = propertyNames.reduce((propertyAcc, currentProperty) => {
      propertyAcc.push(`${currentProperty}: ${retPropertyValue};`)
      return propertyAcc
    }, []).join('')
  } else {
    retFinalValue = `${propTypes[elementType][property].value}: ${retPropertyValue};`
  }
  return retFinalValue
}

const responsive = ({ responsiveArr, type, responsiveCacheObj: cacheObj, elementType } ) => {
  responsiveArr.forEach((responsiveItem, responsiveIdx) => {
    // TODO: Avoid string concatenation here
    cacheObj[breakPoints[responsiveIdx]] = `${cacheObj[breakPoints[responsiveIdx]] || ''}${getPropertyValue({property: type, propertyValue: responsiveItem, elementType})}`
  })
  return cacheObj
}

const getStyles = ({elementType, ...remainingProps}) => {
  const responsiveCacheObj = {}
  const cacheObj = []
  let retVal = ''
  for (const [type, value] of Object.entries(remainingProps)) {
    if (propTypes[`${elementType}Props`][type]) {
      Array.isArray(value) ? responsive({responsiveArr: value, type, responsiveCacheObj, elementType: `${elementType}Props`}) : cacheObj.push(getPropertyValue({property: type, propertyValue: value, elementType: `${elementType}Props`}))
    }
  }
  for (const [type, value] of Object.entries(responsiveCacheObj)) {
    retVal = `${retVal}
      @media screen and (min-width: ${type}) {${value}}
    `
  }
  return `${retVal} ${cacheObj.join(' ')}`
}

export {
  breakPoints,
  getStyles,
  responsive
}
