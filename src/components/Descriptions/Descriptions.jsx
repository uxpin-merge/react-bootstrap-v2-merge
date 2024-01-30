import React from "react";
import PropTypes from 'prop-types';
import { Descriptions as ANTComponent } from "antd";
import Item from "./Item/Item"

/**
 * @uxpindocurl https://ant.design/components/Descriptions/
 * @uxpindescription Display multiple read-only fields in groups.
 */

const Descriptions = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props} />

    );
};

Descriptions.propTypes = {
    /** The content of the component. */
    children: PropTypes.node,

    /** The style properties of the component */
    style: PropTypes.object,

    /** Whether to display the border */
    bordered: PropTypes.bool,
    /** Change default props colon value of Descriptions.Item */
    colon: PropTypes.bool,
    /** Customize content style */
    contentStyle: PropTypes.object,
    /** The action area of the description list, placed at the top-right */
    extra: PropTypes.node,
    /** Describe the contents of the list item */
    contentStyle: PropTypes.object,
    labelStyle: PropTypes.object,
    /** The number of DescriptionItems in a row,could be a number or a object like { xs: 8, sm: 16, md: 24},(Only set bordered={true} to take effect)	 */
    column: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
    /** Customize label style */
    labelStyle: PropTypes.object,
    /** Define description layout */
    layout: PropTypes.oneOf(['horizontal', 'vertical']),
    /** Set the size of the list. Can be set to middle, small, or not filled */
    size: PropTypes.oneOf(['default', 'middle', 'small']),
    /** The title of the description list, placed at the top */
    title: PropTypes.node,

};

Descriptions.defaultProps = {};

Descriptions.Item = Item;

export default Descriptions;