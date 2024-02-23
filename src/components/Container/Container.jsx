import React from 'react'
import PropTypes from 'prop-types'
import { Container as ContainerM } from 'react-bootstrap'

const Container = (props) => {
  const { uxpinRef, ...other } = props

  return <ContainerM {...other} ref={uxpinRef} />
}

Container.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Add Bootstrap classes */
  className: PropTypes.string,

  /** Override styles */
  style: PropTypes.object,

  /** Allow the Container to fill all of its available horizontal space. */
  fluid: PropTypes.string,
  /** You can use a custom element for this component */
  as: PropTypes.string,
  /** @default 'container' */
  bsPrefix: PropTypes.string,

  /**
   * @uxpinignoreprop
   */
  uxpinRef: PropTypes.any,
}

export default Container
