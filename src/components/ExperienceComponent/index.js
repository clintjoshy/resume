import Flex from '../../design-system/Flex'
import Heading from '../../design-system/Heading'
import List from '../../design-system/List'
import PropTypes from 'prop-types';
import React from 'react'
import Text from '../../design-system/Text'
import Box from '../../design-system/Box'
import Link from '../../design-system/Link'

//TODO: flex shouldn't be converted to %.
const ExperienceComponent = ({experienceList = []}) => {
  return (
    experienceList?.length && <Flex flexDirection={['column', null, null, null, 'row']}>
      <Flex flex={[null, null, null, null, '0.5']}>
        <Heading
          header={1}
          letterSpacing='0.06em'
          fontWeight='300'
          lineHeight='1em'
          paddingY={[4, null, null, null, 0]}
          color="#999999"
          id='workExperience'
        >
          Work Experience
        </Heading>
      </Flex>
      <Flex flexDirection='column' flex={[null, null, null, null, '1']}>
        { experienceList.map((experience, experienceId) => {
           const { company, duration, location, title, url, details } = experience
           return (
            company && <Flex key={experienceId} flexDirection='column'>
              <Heading header={5} textTransform='uppercase' color='#FFDF6C'>{title}</Heading>
              <Flex marginB={'24px'} whiteSpace='pre-wrap' flexDirection={['column']}>
                <Link target='_blank' href={url} color='#007AFF' fontWeight='bold'>{company}</Link>
                <i>
                  <Flex flexWrap='wrap' fontSize='14px'>
                    <Text>{duration}{', '}</Text>
                    <Text>{location}</Text>
                  </Flex>
                </i>
              </Flex>
              <Text marginB={4}>{details}</Text>
            </Flex>
           )
         })
        }
      </Flex>
    </Flex>
  )
}
ExperienceComponent.displayName = 'ExperienceComponent'

//TODO: add proptypes from styles
ExperienceComponent.propTypes = {
}
export default ExperienceComponent
