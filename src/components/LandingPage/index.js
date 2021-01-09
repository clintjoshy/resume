import Box from '../../design-system/Box'
import Button from '../../design-system/Button'
import Divider from '../../design-system/Divider'
import Flex from '../../design-system/Flex'
import Heading from '../../design-system/Heading'
import Link from '../../design-system/Link'
import NavigationComponent from '../../components/NavigationComponent'
import PropTypes from 'prop-types';
import React from 'react'
import Relative from '../../design-system/Relative'
import styled, {keyframes} from 'styled-components'
import Text from '../../design-system/Text'
import { useWindowSize } from '../../hooks'

const translate = keyframes`
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(8px);
  }

  100% {
    transform: translateY(0);
  }
`

const TempBox = styled(Box)`
  animation: ${translate} 2s ease infinite;
  display: inline-block;
`

//TODO: accessiblity styles
const StyledLink = styled(Link)`
  &:after {
    content: "${() => '\\21A1'}";
    padding-left: 5px;
  }
`

const LandingPage = () => {
  const { sizeString: height } = useWindowSize('innerHeight')

  // TODO: Change font sizes
  return (
    <Flex height={height} justifyContent='center' alignItems='center'>
      <Box height={1} width={1} paddingY={'5px'}>
        <NavigationComponent />
        <Relative
          top={'30%'}
          textAlign='center'
          paddingX={[null, null, null, '100px', '250px']}
        >
          <Heading
            header={1}
            textTransform='uppercase'
            letterSpacing='0.06em'
            fontWeight='400'
            lineHeight='1em'
            paddingB={3}
          >
            Clint Joshy
          </Heading>
          <Text
            fontSize='24px'
            letterSpacing='0.06em'
            fontWeight='100'
            lineHeight='1em'
          >
            Frontend Software Engineer
          </Text>
        </Relative>
        <Relative top={'50%'}>
          <Flex justifyContent='center'>
            <Button href='#profile' color='white' textDecoration='none' outline='none' border='1px solid' background='transparent'>
              <Flex alignItems='center' paddingY={1} paddingX={3}>
                <Text>Download Resume</Text>
                <TempBox fontSize='24px' color='#FFDF6C'>&#9759;</TempBox>
              </Flex>
            </Button>
          </Flex>
        </Relative>
      </Box>
    </Flex>
  )
}
LandingPage.displayName = 'LandingPage'

//TODO: add proptypes from styles
LandingPage.propTypes = {
}
export default LandingPage
