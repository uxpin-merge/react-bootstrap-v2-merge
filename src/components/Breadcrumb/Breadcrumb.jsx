import React from "react";
import PropTypes from 'prop-types';
import { Breadcrumb as ANTComponent } from "antd";
import Item from "./Item/Item";

/**
 * @uxpindocurl https://ant.design/components/Breadcrumb/
 * @uxpindescription A breadcrumb displays the current location within a hierarchy. It allows going back to states higher up in the hierarchy.
 */

const Breadcrumb = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props} />

    );
};

Breadcrumb.propTypes = {
    /** The content of the component. */
    children: PropTypes.node,

    /** Custom item renderer */
    itemRender: PropTypes.func,

    /** The routing stack information of router */
    items: PropTypes.array,

    /** Routing parameters */
    params: PropTypes.object,

    /** Custom separator */
    separator: PropTypes.node,

    /** The style properties of the component */
    style: PropTypes.object,

};

Breadcrumb.defaultProps = {};

Breadcrumb.Item = Item;

export default Breadcrumb;