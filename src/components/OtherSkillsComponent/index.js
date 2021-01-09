import Box from '../../design-system/Box'
import Flex from '../../design-system/Flex'
import Heading from '../../design-system/Heading'
import List from '../../design-system/List'
import PropTypes from 'prop-types';
import React from 'react'
import Text from '../../design-system/Text'

const OtherSkillsComponent = ({skillsList = []}) => {
console.log(skillsList)
  const otherSkills = skillsList.join(', ')
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
          id='otherSkills'
        >
          Other Skills
        </Heading>
      </Flex>
      <Flex flex={[null, null, null, null, '1']}>
        {otherSkills}
      </Flex>
    </Flex>
  )
}
OtherSkillsComponent.displayName = 'SkillsComponent'

//TODO: add proptypes from styles
OtherSkillsComponent.propTypes = {
}
export default OtherSkillsComponent
