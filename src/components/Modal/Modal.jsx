import React from "react";
import PropTypes from 'prop-types';
import { Modal as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Modal/
 * @uxpindescription TODO
* @uxpinuseportal
 */

const Modal = (props) => {

    return (
        // Your component JSX
        <div
            style={{ minWidth: '300px', minHeight: '300px', width: '100%', height: '100%' }}
            className="merge-component"
        >
            <ANTComponent
                getContainer="#modalMount"
                {...props}
            />
            <div id="modalMount">
            </div>
        </div>
    );
};

Modal.propTypes = {
    /** The content of the component. */
    children: PropTypes.node,

    /** Called when modal is closed completely */
    afterClose: PropTypes.func,

    /** Config Modal build-in module's className */
    classNames: PropTypes.shape({
        header: PropTypes.string,
        body: PropTypes.string,
        footer: PropTypes.string,
        mask: PropTypes.string,
        wrapper: PropTypes.string
    }),

    /** Config Modal build-in module's style */
    styles: PropTypes.shape({
        header: PropTypes.object, // CSSProperties
        body: PropTypes.object, // CSSProperties
        footer: PropTypes.object, // CSSProperties
        mask: PropTypes.object // CSSProperties
    }),

    /** The cancel button props */
    cancelButtonProps: PropTypes.object, // ButtonProps

    /** Text of the Cancel button */
    cancelText: PropTypes.node,

    /** Centered Modal */
    centered: PropTypes.bool,

    /** Custom close icon */
    closeIcon: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.node
    ]),

    /** Loading visual effect for OK button */
    confirmLoading: PropTypes.bool,

    /** Unmount child components on onClose */
    destroyOnClose: PropTypes.bool,

    /** Focus trigger element after dialog is closed */
    focusTriggerAfterClose: PropTypes.bool,

    /** Footer content */
    footer: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.node
    ]),

    /** Force render Modal */
    forceRender: PropTypes.bool,

    /** Mounted node for Modal */
    getContainer: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.func,
        PropTypes.string,
        PropTypes.bool
    ]),

    /** Support press esc to close */
    keyboard: PropTypes.bool,

    /** Show mask or not */
    mask: PropTypes.bool,

    /** Close modal on mask click */
    maskClosable: PropTypes.bool,

    /** Custom modal content render */
    modalRender: PropTypes.func,

    /** The OK button props */
    okButtonProps: PropTypes.object, // ButtonProps

    /** Text of the OK button */
    okText: PropTypes.node,

    /** Button type of the OK button */
    okType: PropTypes.string,

    /** Style of floating layer */
    style: PropTypes.object, // CSSProperties

    /** The modal dialog's title */
    title: PropTypes.node,

    /** Modal dialog visibility
     * @uxpinbind onCancel 0.defaultPrevented
    */
    open: PropTypes.bool,

    /** Width of the modal dialog */
    width: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),

    /** Class name of the container of the modal dialog */
    wrapClassName: PropTypes.string,

    /** The z-index of the Modal */
    zIndex: PropTypes.number,

    /** Called when clicking mask, close button, or Cancel button */
    onCancel: PropTypes.func,

    /** Called when clicking the OK button */
    onOk: PropTypes.func,

    /** Callback for animation end when Modal is opened or closed */
    afterOpenChange: PropTypes.func

};

Modal.defaultProps = {};

export default Modal;