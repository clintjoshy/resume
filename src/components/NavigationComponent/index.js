import Absolute from '../../design-system/Absolute'
import Box from '../../design-system/Box'
import Flex from '../../design-system/Flex'
import Heading from '../../design-system/Heading'
import List from '../../design-system/List'
import Link from '../../design-system/Link'
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react'
import Text from '../../design-system/Text'
import Button from '../../design-system/Button'
import Overlay from '../../design-system/Overlay'
import styled from 'styled-components'
import { utils } from '../../design-system'
import { useDeviceSize } from '../../hooks'

const { breakPoints } = utils
const StyledSpan = styled.span`
  width: 100%;
  border-top: 1px solid white;
  padding: 1px;
`

const StyledLi = styled.li`
  padding: 0px;
  display: block;
  @media screen and (min-width: ${breakPoints[4]} ) {
    display: inline;
  }
  &:hover {
    background: #FFDF6C;
  }
`

const StyledUl = styled.ul`
  margin: 0px;
  padding: 0px 0px;
  list-style: none;
  border: 1px solid;
  border-radius: 4px;
  text-align: center;
  @media screen and (min-width: ${breakPoints[4]} ) {
    border: none;
    margin-top: 16px;
  }
`

const StyledLink = styled(Link)`
  padding: 8px 16px;
  margin: 0px 8px;
  &:hover {
    color: #000;
  }
`

const StyledBox = styled(Box)`
  display: ${(({ isDesktop, showBlock }) => {
    console.log(isDesktop, showBlock, 'styled')
    return isDesktop
      ? 'inline-block'
      : showBlock
        ? 'block'
        : 'none'})
  };
  position: ${(({ isDesktop, showBlock }) => !isDesktop ? 'absolute' : null)};
  left: ${(({ isDesktop, showBlock }) => !isDesktop ? '16px' : null)};
  right: ${(({ isDesktop, showBlock }) => !isDesktop ? '16px' : null)};
`

const NavigationComponent = ({educationList = []}) => {
  const deviceType = useDeviceSize()
  const isDesktop = deviceType === 'desktop'
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const handleBtnClick = () => {
    setShowMobileMenu(!showMobileMenu)
  }

  //TODO: add event listenrer
  //TODO: Probably can make this a custom hook and useCallback hook also
  //TODO: Maybe this is not the correct way to attach a event handler.
  useEffect(() => {
    if (deviceType !== 'desktop') {
      const outsideClickHandler = () => {
        if (showMobileMenu) {
          setShowMobileMenu(false)
        }
      }
      window.addEventListener('click', outsideClickHandler)
      return () => window.removeEventListener('click', outsideClickHandler)
    }
  }, [showMobileMenu])

  return (
    <Flex flexDirection={['column', null, null, null, 'row']} justifyContent={[null, null, null, null, 'space-between']}>
      <Flex justifyContent='space-between' alignItems='center'>
        <Box fontFamily={`'Meie Script', cursive`} fontSize={['24px', null, null, '44px', '48px']}>
          <Link href='#profile' textDecoration='none' color='#fff'>cj</Link>
        </Box>
        {!isDesktop && <Button background='transparent' padding={'0px'} margin={'0px'} border='1px solid white' borderRadius={1} display={['block', null, null, null, 'none']} onClick={handleBtnClick}>
          <Flex flexDirection='column' width='20px' height={3} padding={1}>
            <StyledSpan />
            <StyledSpan />
            <StyledSpan />
          </Flex>
        </Button>}
      </Flex>
      {isDesktop && <Box>
        <StyledUl>
          <StyledLi>
            <StyledLink color='#fff' href='#profile' textDecoration='none'>Profile</StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink color='#fff' href='#workExperience' textDecoration='none'>Work Experience</StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink color='#fff' href='#skills' textDecoration='none'>Skills</StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink color='#fff' href='#education' textDecoration='none'>Education</StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink color='#fff' href='#contact' textDecoration='none'>Contact</StyledLink>
          </StyledLi>
        </StyledUl>
      </Box>}
      {!isDesktop && showMobileMenu && <Absolute left='16px' right='16px' top='70px'>
        <StyledUl>
          <StyledLi onClick={() => setShowMobileMenu(false)}>
            <StyledLink color='#fff' href='#profile' textDecoration='none'>Profile</StyledLink>
          </StyledLi>
          <StyledLi onClick={() => setShowMobileMenu(false)}>
            <StyledLink color='#fff' href='#workExperience' textDecoration='none'>Work Experience</StyledLink>
          </StyledLi>
          <StyledLi onClick={() => setShowMobileMenu(false)}>
            <StyledLink color='#fff' href='#skills' textDecoration='none'>Skills</StyledLink>
          </StyledLi>
          <StyledLi onClick={() => setShowMobileMenu(false)}>
            <StyledLink color='#fff' href='#education' textDecoration='none'>Education</StyledLink>
          </StyledLi>
          <StyledLi onClick={() => setShowMobileMenu(false)}>
            <StyledLink color='#fff' href='#contact' textDecoration='none'>Contact</StyledLink>
          </StyledLi>
        </StyledUl>
      </Absolute>}
    </Flex>
  )
}
NavigationComponent.displayName = 'NavigationComponent'

//TODO: add proptypes from styles
NavigationComponent.propTypes = {
}
export default NavigationComponent
