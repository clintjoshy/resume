import data from './data'
import ContactComponent from './components/ContactComponent'
import EducationComponent from './components/EducationComponent'
import ExperienceComponent from './components/ExperienceComponent'
import Flex from './design-system/Flex'
import Box from './design-system/Box'
import LandingPage from './components/LandingPage'
import ProfileComponent from './components/ProfileComponent'
import React, { useState, useEffect } from 'react'
import SkillsComponent from './components/SkillsComponent'
import OtherSkillsComponent from './components/OtherSkillsComponent'
import Overlay from './design-system/Overlay'
import styled, { createGlobalStyle, keyframes, ThemeProvider } from 'styled-components'

const commonTheme = {
  font: `'Roboto', 'Open Sans', 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif`,
  fontWeight: {
    light: 300,
    medium: 500,
    bold: 700
  },
  lineHeight: {
    standard: 1.4,
    regular: '2em'
  },
  letterSpacing: {
    normal: '0.06em'
  },
  fontSizes: [12, 14, 16, 18, 20, 22, 24],
  spaces: [0, 4, 8, 16, 32, 64, 128],
}

const darkTheme = {
  background: 'black',
  color: 'white'
}

const lightTheme = {
  background: 'white',
  color: 'black'
}
/*
 080708
C4C3C4
7b7c82
4b4a4b
7d8284
#080708 
    background: #2c2c2c;
    color: #e7e7e7;
    background: #121111;
    color: #baab8f
    color: #FF9933
    filter: invert(100%) hue-rotate(180deg)
 * */

const gradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`

// can move to it's own file
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    height: 100%;
    background: #000;
    /* background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: ${gradient} 15s ease infinite; */
  }

  body {
    height: 100%;
    max-width: 1280px;
    margin: 0 auto;
    font-size: ${({ theme }) => theme.fontSizes[2]}px;
    font-family: ${({ theme }) => theme.font};
    font-weight: ${({theme}) => theme.fontWeight.light};
    line-height: ${({theme}) => theme.lineHeight.regular};
    letter-spacing: ${({theme}) => theme.letterSpacing.normal};
    color: #FFF;
  }
`

const App = () => (
  <Flex
    justifyContent='center'
    paddingX={[3, null, null, 4]}
    flexDirection='column'
  >
    <Box marginB={4}>
      <LandingPage />
    </Box>
    <Box marginY={4}>
      <ProfileComponent />
    </Box>
    <Box marginY={4}>
      <ExperienceComponent experienceList={data.Experience} />
    </Box>
    <Box marginY={4}>
      <SkillsComponent skillsList={data.Skills} />
    </Box>
    <Box marginY={4}>
      <OtherSkillsComponent skillsList={data.Other_Skills} />
    </Box>
    <Box marginY={4}>
      <EducationComponent educationList={data.Education} />
    </Box>
    <Box marginY={4}>
      <ContactComponent />
    </Box>
  </Flex>
)
const AppContainer = () => {
  return  <ThemeProvider theme={{ ...commonTheme, ...lightTheme }}><GlobalStyle /><App /></ThemeProvider>
}

export default AppContainer
