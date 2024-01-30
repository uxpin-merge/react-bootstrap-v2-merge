import React from "react";
import PropTypes from 'prop-types';
import { ConfigProvider as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/config-provider/
 * @uxpindescription Provides configuration for nested components.


 */

const ConfigProvider = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props} />

    );
};

ConfigProvider.propTypes = {
    /** The content of the component. */
    children: PropTypes.node,

    /** Set false to remove space between 2 Chinese characters on Button */
    autoInsertSpaceInButton: PropTypes.bool,

    /** Config antd component disabled */
    componentDisabled: PropTypes.bool,

    /** Config antd component size */
    componentSize: PropTypes.oneOf(['small', 'middle', 'large']),

    /** Set Content Security Policy config */
    csp: PropTypes.shape({
        nonce: PropTypes.string
    }),

    /** Set direction of layout */
    direction: PropTypes.oneOf(['ltr', 'rtl']),

    /** To set the container of the popup element */
    getPopupContainer: PropTypes.func,

    /** Config Affix, Anchor scroll target container */
    getTargetContainer: PropTypes.func,

    /** Set icon prefix className */
    iconPrefixCls: PropTypes.string,

    /** Language package setting */
    locale: PropTypes.object, // Can find packages in antd/locale

    /** Determine whether the dropdown menu and the select input are the same width */
    popupMatchSelectWidth: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number
    ]),

    /** Select like component popup logic */
    popupOverflow: PropTypes.oneOf(['viewport', 'scroll']),

    /** Set prefix className */
    prefixCls: PropTypes.string,

    /** Set empty content of components */
    renderEmpty: PropTypes.func,

    /** Set theme */
    theme: PropTypes.object, // Theme

    /** Disable virtual scroll when set to false */
    virtual: PropTypes.bool,

    /** Config warning level */
    warning: PropTypes.shape({
        strict: PropTypes.bool
    })
};

ConfigProvider.defaultProps = {};

export default ConfigProvider;