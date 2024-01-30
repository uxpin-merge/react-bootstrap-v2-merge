import React from "react";
import PropTypes from 'prop-types';
import { Descriptions as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Descriptions/
 * @uxpindescription Display multiple read-only fields in groups.
 * @uxpinnamespace Descriptions
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

    /** The style properties of the component */
    style: PropTypes.object,

    /** Customize content style */ contentStyle: PropTypes.object, /** The description of the content */ label: PropTypes.node, /** Customize label style */ labelStyle: PropTypes.object, /** The number of columns included */ span: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),

};

Item.defaultProps = {};

export default Item;