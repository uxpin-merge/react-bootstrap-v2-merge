import React from "react";
import PropTypes from 'prop-types';
import { Drawer as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Drawer/
 * @uxpindescription A panel which slides in from the edge of the screen.
 * @uxpinuseportal
 */

const Drawer = (props) => {
    // Component logic

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

Drawer.propTypes = {
    /** The content of the component. */
    children: PropTypes.node,

    /** Whether Drawer should get focused after open */
    autoFocus: PropTypes.bool,

    /** Callback after the animation ends when switching drawers */
    afterOpenChange: PropTypes.func,

    /** Config Drawer Panel className */
    className: PropTypes.string,

    /** Config Drawer build-in module's className */
    classNames: PropTypes.shape({
        header: PropTypes.string,
        body: PropTypes.string,
        footer: PropTypes.string,
        mask: PropTypes.string,
        content: PropTypes.string,
        wrapper: PropTypes.string
    }),

    /** Config Drawer build-in module's style */
    styles: PropTypes.shape({
        header: PropTypes.object, // CSSProperties
        body: PropTypes.object, // CSSProperties
        footer: PropTypes.object, // CSSProperties
        mask: PropTypes.object, // CSSProperties
        content: PropTypes.object, // CSSProperties
        wrapper: PropTypes.object // CSSProperties
    }),

    /** Custom close icon */
    closeIcon: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.node
    ]),

    /** Whether to unmount child components on closing drawer */
    destroyOnClose: PropTypes.bool,

    /** Extra actions area at corner */
    extra: PropTypes.node,

    /** The footer for Drawer */
    footer: PropTypes.node,

    /** Pre-render Drawer component forcibly */
    forceRender: PropTypes.bool,

    /** Mounted node and display window for Drawer */
    getContainer: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.func,
        PropTypes.string,
        PropTypes.bool
    ]),

    /** Style of the drawer header part */
    headerStyle: PropTypes.object, // CSSProperties

    /** Height of the Drawer dialog */
    height: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),

    /** Whether support press esc to close */
    keyboard: PropTypes.bool,

    /** Whether to show mask or not */
    mask: PropTypes.bool,

    /** Clicking on the mask to close the Drawer */
    maskClosable: PropTypes.bool,

    /** The placement of the Drawer */
    placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),

    /** Nested drawers push behavior */
    push: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.shape({ distance: PropTypes.oneOfType([PropTypes.string, PropTypes.number]) })
    ]),

    /** Style of wrapper element which contains mask */
    rootStyle: PropTypes.object, // CSSProperties

    /** Style of Drawer panel */
    style: PropTypes.object, // CSSProperties

    /** Preset size of drawer */
    size: PropTypes.oneOf(['default', 'large']),

    /** The title for Drawer */
    title: PropTypes.node,

    /** Whether the Drawer dialog is visible
     * @uxpinbind onClose 0.defaultPrevented
    */
    open: PropTypes.bool,

    /** Width of the Drawer dialog */
    width: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),

    /** The z-index of the Drawer */
    zIndex: PropTypes.number,

    /** Callback when clicking mask, close button, or Cancel button */
    onClose: PropTypes.func

};

Drawer.defaultProps = {};

export default Drawer;