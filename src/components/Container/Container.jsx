import React from 'react'
import PropTypes from 'prop-types'
import { Container as ContainerM } from 'react-bootstrap'

const Container = (props) => {
  return <ContainerM {...props} />
}

Container.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Add Bootstrap classes */
  className: PropTypes.object,

  /** Override styles */
  style: PropTypes.object,

  /** Allow the Container to fill all of its available horizontal space. */
  fluid: PropTypes.string,
  /** You can use a custom element for this component */
  as: PropTypes.string,
  /** @default 'container' */
  bsPrefix: PropTypes.string,
}

export default Container
