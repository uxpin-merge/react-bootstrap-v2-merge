import React from "react";
import PropTypes from 'prop-types';
import { Anchor as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/anchor/
 * @uxpindescription Hyperlinks to scroll on one page.
 */

const AnchorItem = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent.Link {...props} />

    );
};

AnchorItem.propTypes = {
    /** Nested Anchor Link, Attention: This attribute does not support horizontal orientation */
    children: PropTypes.arrayOf(PropTypes.shape({ type: PropTypes.oneOf([AnchorItem]) })),

    /** The target of hyperlink */
    href: PropTypes.string,

    /** The unique identifier of the Anchor Link */
    key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /** Replace item href in browser history instead of pushing it */
    replace: PropTypes.bool,

    /** The style properties of the component */
    style: PropTypes.object,

    /** Specifies where to display the linked URL */
    target: PropTypes.string,

    /** The content of hyperlink */
    title: PropTypes.node,
};

AnchorItem.defaultProps = {};

export default AnchorItem;