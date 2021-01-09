import Box from '../../design-system/Box'
import Flex from '../../design-system/Flex'
import Heading from '../../design-system/Heading'
import List from '../../design-system/List'
import PropTypes from 'prop-types';
import React from 'react'
import Text from '../../design-system/Text'

const ContactComponent = ({educationList = []}) => {
  return (
    <Flex flexDirection='column'>
      <Heading
        header={1}
        letterSpacing='0.06em'
        fontWeight='300'
        lineHeight='1em'
        paddingY={4}
        color="#999999"
        id='contact'
      >
        Contact
      </Heading>
    </Flex>
  )
}
ContactComponent.displayName = 'EducationComponent'

//TODO: add proptypes from styles
ContactComponent.propTypes = {
}
export default ContactComponent
