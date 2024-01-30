import React from "react";
import PropTypes from 'prop-types';
import { Button as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Button/
 * @uxpindescription To trigger an operation. Ant Design we provide 5 types of buttons: • Primary • Default • Dashed • Text • Link
 */

const Button = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props} />

    );
};

Button.propTypes = {
    /** The content of the component. */
    children: PropTypes.node,

    /**
        * Option to fit button width to its parent width.
        */
    block: PropTypes.bool,

    /**
     * Semantic DOM class.
     * Version: 5.4.0
     */
    classNames: PropTypes.object,

    /**
     * Set the danger status of button.
     */
    danger: PropTypes.bool,

    /**
     * Disabled state of button.
     */
    disabled: PropTypes.bool,

    /**
     * Make background transparent and invert text and border colors.
     */
    ghost: PropTypes.bool,

    /**
     * Redirect url of link button.
     */
    href: PropTypes.string,

    /**
     * Set the original html type of button, see: MDN.
     */
    htmlType: PropTypes.string,

    /**
     * Set the icon component of button.
     */
    icon: PropTypes.node, // ReactNode

    /**
     * Set the loading status of button. Can be a boolean or an object with a 'delay' number property.
     */
    loading: PropTypes.oneOfType([
        PropTypes.bool
    ]),

    /**
     * Can be set button shape. Values are 'default', 'circle', or 'round'.
     */
    shape: PropTypes.oneOf(['default', 'circle', 'round']),

    /**
     * Set the size of button. Values are 'large', 'middle', or 'small'.
     */
    size: PropTypes.oneOf(['large', 'middle', 'small']),

    /**
     * Semantic DOM style.
     */
    styles: PropTypes.object,

    /**
     * Same as target attribute of a, works when href is specified.
     */
    target: PropTypes.string,

    /**
     * Set button type. Values are 'primary', 'dashed', 'link', 'text', or 'default'.
     */
    type: PropTypes.oneOf(['primary', 'dashed', 'link', 'text', 'default']),

    /**
     * Set the handler to handle click event.
     */
    onClick: PropTypes.func, // (event: MouseEvent) => void

};

Button.defaultProps = {

};

export default Button;