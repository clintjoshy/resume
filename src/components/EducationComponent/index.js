import Box from '../../design-system/Box'
import Flex from '../../design-system/Flex'
import Heading from '../../design-system/Heading'
import List from '../../design-system/List'
import PropTypes from 'prop-types';
import React from 'react'
import Text from '../../design-system/Text'

const EducationComponent = ({educationList = []}) => {
  return (
    educationList?.length && <Flex flexDirection={['column', null, null, null, 'row']}>
      <Flex flex={[null, null, null, null, '0.5']}>
        <Heading
          header={1}
          letterSpacing='0.06em'
          fontWeight='300'
          lineHeight='1em'
          paddingY={[4, null, null, null, 0]}
          color="#999999"
          id='education'
        >
          Education
        </Heading>
      </Flex>
      <Flex flexDirection='column' flex={[null, null, null, null, '1']}>
        {
          educationList.map((education, educationId) => {
            const { name, degree, duration, location, details } = education
            return (
              name && <Flex key={educationId} flexDirection={['column', null, null]}>
                <Heading header={5} textTransform='uppercase' color='#FFDF6C'>{degree}</Heading>
                <Flex marginB={'24px'} whiteSpace='pre-wrap' flexDirection={['column']}>
                  <Text>{name}</Text>
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
EducationComponent.displayName = 'EducationComponent'

//TODO: add proptypes from styles
EducationComponent.propTypes = {
}
export default EducationComponent
