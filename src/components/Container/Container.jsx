import React from 'react'
import PropTypes from 'prop-types'
import { Container as ContainerM } from 'react-bootstrap'
/**
 * @uxpindocurl https://react-bootstrap.github.io/docs/layout/grid
 * @uxpindescription Bootstrap’s grid system uses a series of containers, rows, and columns to layout and align content. It’s built with flexbox and is fully responsive.
 */
const Container = (props) => {
  return <ContainerM {...props}>{props.children}</ContainerM>
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

Container.defaultProps = {
  children: 'testing',
}

export default Container
