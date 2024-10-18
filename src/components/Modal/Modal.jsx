import React from 'react'
import PropTypes from 'prop-types'
import { Modal as ModalM } from 'react-bootstrap'
import Body from '../ModalBody/ModalBody'
import Dialog from '../ModalDialog/ModalDialog'
import Footer from '../ModalFooter/ModalFooter'
import Header from '../ModalHeader/ModalHeader'
import Title from '../ModalTitle/ModalTitle'

// import { useEffect, useState, useRef } from 'react'

/**
 * @uxpindocurl https://react-bootstrap.github.io/docs/components/modal
 * @uxpindescription Add dialogs to your site for lightboxes, user notifications, or completely custom content.
 * @uxpinuseportal
 */
const Modal = (props) => {
  const containerRef = React.useRef(null)
  const uxpContainer = document.querySelector('.uxpin-portal')

  return (
    <div
      style={{
        minWidth: '300px',
        minHeight: '300px',
        width: '100%',
        height: '100%',
        backgroundColor: uxpContainer ? 'rgb(0 0 0 / 0%)' : 'rgb(0 0 0 / 40%)',
        visibility: props.show ? 'visible' : 'hidden',
      }}
    >
      <div ref={containerRef}>
        <ModalM {...props} container={containerRef} backdrop={uxpContainer ? true : false} enforceFocus={false} />
      </div>
    </div>
  )
}
Modal.Body = Body
Modal.Dialog = Dialog
Modal.Footer = Footer
Modal.Title = Title
Modal.Header = Header

Modal.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Add Bootstrap classes */
  className: PropTypes.string,

  /** Override styles
   *  @uxpincontroltype css
   *
   * */
  style: PropTypes.object,

  /** A Component type that provides the modal content Markup. This is a usefulprop when you want to use your own styles and markup to create a custommodal component.
   * @uxpinignoreprop
   */
  dialogAs: PropTypes.string,
  /** When `true` The modal will show itself.
   */
  show: PropTypes.bool,
  /** Open and close the Modal with a slide and fade animation. */
  animation: PropTypes.bool,
  /** Include a backdrop component. Specify 'static' for a backdrop that doesn'trigger an "onHide" when clicked.
   * @uxpinignoreprop
   */
  backdrop: PropTypes.string,
  /** Close the modal when escape key is pressed */
  keyboard: PropTypes.bool,
  /** When `true` The modal will automatically shift focus to itself when itopens, and replace it to the last focused element when it closes.Generally this should never be set to false as it makes the Modal lessaccessible to assistive technologies, like screen-readers. */
  autoFocus: PropTypes.bool,
  /** When `true` The modal will prevent focus from leaving the Modal whileopen. Consider leaving the default value here, as it is necessary to makethe Modal work well with assistive technologies, such as screen readers. */
  enforceFocus: PropTypes.bool,
  /** When `true` The modal will restore focus to previously focused element oncemodal is hidden
   * @uxpinignoreprop
   */
  restoreFocus: PropTypes.bool,
  /** @default 'modal' */
  bsPrefix: PropTypes.string,
  /** Render a large, extra large or small modal.When not provided, the modal is rendered with medium (default) size.@type ('sm'|'lg'|'xl') */
  size: PropTypes.oneOf(['default', 'sm', 'lg', 'xl']),
  /** Renders a fullscreen modal. Specifying a breakpoint will render the modalas fullscreen __below__ the breakpoint size.@type (true|'sm-down'|'md-down'|'lg-down'|'xl-down'|'xxl-down') */
  fullscreen: PropTypes.oneOf(['sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down']),
  /** vertically center the Dialog in the window */
  centered: PropTypes.bool,
  /** Add an optional extra class name to .modal-backdropIt could end up looking like class="modal-backdrop foo-modal-backdrop in". */
  backdropClassName: PropTypes.string,
  /** Allows scrolling the `<Modal.Body>` instead of the entire Modal when overflowing. */
  scrollable: PropTypes.bool,
  /** A css class to apply to the Modal dialog DOM node. */
  dialogClassName: PropTypes.string,
  /** Add an optional extra class name to .modal-content */
  contentClassName: PropTypes.string,
  /** Options passed to focus function when `restoreFocus` is set to `true`@link  https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus#Parameters
   * @uxpinignoreprop
   */
  restoreFocusOptions: PropTypes.shape,
  /** A callback fired when the Modal is opening. */
  onShow: PropTypes.func,
  /** A callback fired when the header closeButton or non-static backdrop isclicked. Required if either are specified.*/
  onHide: PropTypes.func,
  /** A callback fired when the escape key, if specified in `keyboard`, is pressed. */
  onEscapeKeyDown: PropTypes.func,
  /** Callback fired before the Modal transitions in */
  onEnter: PropTypes.func,
  /** Callback fired as the Modal begins to transition in */
  onEntering: PropTypes.func,
  /** Callback fired after the Modal finishes transitioning in */
  onEntered: PropTypes.func,
  /** Callback fired right before the Modal transitions out */
  onExit: PropTypes.func,
  /** Callback fired as the Modal begins to transition out */
  onExiting: PropTypes.func,
  /** Callback fired after the Modal finishes transitioning out */
  onExited: PropTypes.func,
  /** A ModalManager instance used to track and manage the state of openModals. Useful when customizing how modals interact within a container
   * @uxpinignoreprop
   */
  manager: PropTypes.object,
  /** @private
   * @uxpinignoreprop
   */
  container: PropTypes.string,
  'aria-labelledby': PropTypes.string,
  'aria-describedby': PropTypes.string,
  'aria-label': PropTypes.string,
}

export default Modal
