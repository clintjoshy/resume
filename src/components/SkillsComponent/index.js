import Box from '../../design-system/Box'
import Flex from '../../design-system/Flex'
import Heading from '../../design-system/Heading'
import List from '../../design-system/List'
import PropTypes from 'prop-types';
import React from 'react'
import Text from '../../design-system/Text'

const getStars = (maxStars, correctedLevel) => {
  const stars = []
  for (let i = 0; i < maxStars; i++) {
    stars.push(<Text color={i < correctedLevel ? '#FFDF6C' : null} paddingX={1} key={i}>&#9733;</Text>)
  }
  return stars
}

const SkillsComponent = ({skillsList = []}) => {
  return (
    skillsList?.length && <Flex flexDirection={['column', null, null, null, 'row']}>
      <Flex flex={[null, null, null, null, '0.5']}>
        <Heading
          header={1}
          letterSpacing='0.06em'
          fontWeight='300'
          lineHeight='1em'
          paddingY={[4, null, null, null, 0]}
          color="#999999"
          id='skills'
        >
          Skills
        </Heading>
      </Flex>
      <Flex flex={[null, null, null, null, '1']} flexWrap='wrap'>
        { 
          skillsList.map((skill, skillId) => {
            const { name, level, maxLevel } = skill
            const maxStars = 5
            const correctedLevel = level && !isNaN(level) ? Math.round((maxStars * level) / maxLevel) : null
            return (
              correctedLevel && <Flex key={skillId} flexBasis={['100%', '50%']} marginY={1}>
                <Flex width='35%'>
                  {name}
                </Flex>
                <Flex>
                  {getStars(maxStars, correctedLevel)}
                </Flex>
              </Flex>
            )
          })
        }
      </Flex>
    </Flex>
  )
}
SkillsComponent.displayName = 'SkillsComponent'

//TODO: add proptypes from styles
SkillsComponent.propTypes = {
}
export default SkillsComponent
