import Flex from '../../design-system/Flex'
import Heading from '../../design-system/Heading'
import List from '../../design-system/List'
import PropTypes from 'prop-types';
import React from 'react'
import Text from '../../design-system/Text'
import Image from '../../design-system/Image'
import sunImg from '../../../public/images/sun_400x225.jpg'

const ProfileComponent = () => {
  return (
    <Flex flexDirection={['column', null, null, null, 'row']} paddingB={4}>
     <Flex flex={[null, null, null, null, '0.5']}>
        <Heading
          header={1}
          letterSpacing='0.06em'
          fontWeight='300'
          lineHeight='1em'
          paddingY={[4, null, null, null, 0]}
          color="#999999"
          id='profile'
        >
          Profile
        </Heading>
     </Flex>
      <Flex flex={[null, null, null, null, '1']} alignItems='center' flexDirection={['column', null, null, 'row']}>
        <Image src={sunImg} width={'150px'} height={'150px'} borderRadius={'50%'} />
        <Text paddingT={[4, null, null, 0]} paddingL={[null, null, null, 4]}>5+ years of experience in Full-stack Development in leading IT companies in the USA. Highly motivated, effective and fast learner of new technologies. An excellent team player who can guide junior developers, develop high quality code, debug production issues, and quickly provide solutions.</Text>
      </Flex>
    </Flex>
  )
}
ProfileComponent.displayName = 'ProfileComponent'

//TODO: add proptypes from styles
ProfileComponent.propTypes = {
}
export default ProfileComponent
