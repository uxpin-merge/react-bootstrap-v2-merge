import React from 'react'
import PropTypes from 'prop-types'
import { Card as CardM } from 'react-bootstrap'
import Body from '../CardBody/CardBody'
import Img from '../CardImg/CardImg'
import Title from '../CardTitle/CardTitle'
import Subtitle from '../CardSubtitle/CardSubtitle'
import Text from '../CardText/CardText'
import Link from '../CardLink/CardLink'
import Footer from '../CardFooter/CardFooter'
import Header from '../CardHeader/CardHeader'
import ImgOverlay from '../CardImgOverlay/CardImgOverlay'

/**
 * @uxpindocurl https://react-bootstrap.github.io/docs/components/Card
 * @uxpindescription Bootstrap’s cards provide a flexible and extensible content container with multiple variants and options.
 */
const Card = (props) => {
  return <CardM {...props} />
}

Card.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Add Bootstrap classes */
  className: PropTypes.string,

  /** Override styles */
  style: PropTypes.object,

  /** When this prop is set, it creates a Card with a Card.Body insidepassing the children directly to it */
  body: PropTypes.bool,
  as: PropTypes.string,
  /** @default 'card' */
  bsPrefix: PropTypes.string,
  /** Sets card background */
  bg: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light']),
  /** Sets card text color */
  text: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'dark',
    'light',
    'white',
    'muted',
  ]),
  /** Sets card border color */
  border: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light']),
}

Card.Body = Body
Card.Footer = Footer
Card.Header = Header
Card.Img = Img
Card.ImgOverlay = ImgOverlay
Card.Title = Title
Card.Text = Text
Card.Link = Link
Card.Subtitle = Subtitle

export default Card
