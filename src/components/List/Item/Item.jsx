import React from "react";
import PropTypes from 'prop-types';
import { List as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/FloatButton/
 * @uxpindescription TODO
 * @uxpinnamespace List
 */
const Item = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent.Item {...props} />

    );
};

Item.propTypes = {
    /** The content of the component. */
    children: PropTypes.node,

    /** The actions content of list item. If itemLayout is vertical, shows the content on bottom, otherwise shows content on the far right */
    actions: PropTypes.arrayOf(PropTypes.node),

    /** The extra content of list item. If itemLayout is vertical, shows the content on right, otherwise shows content on the far right */
    extra: PropTypes.node,
    /** The style properties of the component */
    style: PropTypes.object,

};

Item.defaultProps = {};

export default Item;