import React from 'react'
import PropTypes from 'prop-types'
import { Form as FormM } from 'react-bootstrap'
import Check from '../FormCheck/FormCheck'
import Control from '../FormControl/FormControl'
import Group from '../FormGroup/FormGroup'
import Label from '../FormLabel/FormLabel'
import Range from '../FormRange/FormRange'
import Select from '../FormSelect/FormSelect'
import Text from '../FormText/FormText'
import Floating from '../FormFloating/FormFloating'

const Form = (props) => {
  return <FormM {...props} />
}

Form.Control = Control
Form.Group = Group
Form.Label = Label
Form.Range = Range
Form.Select = Select
Form.Text = Text
Form.Floating = Floating
Form.Check = Check

Form.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Add Bootstrap classes */
  className: PropTypes.string,

  /** Override styles */
  style: PropTypes.object,

  as: PropTypes.string,
  /** The Form `ref` will be forwarded to the underlying element,which means, unless it's rendered `as` a composite component,it will be a DOM node, when resolved.@type {ReactRef}@alias ref */
  _ref: PropTypes.string,
  /** Mark a form as having been validated. Setting it to `true` willtoggle any validation styles on the forms elements. */
  validated: PropTypes.bool,
}

export default Form
