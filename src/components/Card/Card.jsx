import React from "react";
import PropTypes from 'prop-types';
import { Card as ANTComponent } from "antd";
import Grid from "./Grid/Grid";

/**
 * @uxpindocurl https://ant.design/components/Card/
 * @uxpindescription A card can be used to display content related to a single subject. The content can consist of multiple elements of varying types and sizes.
 */

const Card = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props} />

    );
};

Card.propTypes = {
    /** The content of the component. */
    children: PropTypes.node,

    /** The action list, shows at the bottom of the Card */ actions: PropTypes.arrayOf(PropTypes.node),

 /** Current TabPane's key */ activeTabKey: PropTypes.string,

 /** Inline style to apply to the card content */ bodyStyle: PropTypes.object,

 /** Toggles rendering of the border around the card */ bordered: PropTypes.bool,

 /** Card cover */ cover: PropTypes.node,

 /** Initial active TabPane's key, if activeTabKey is not set */ defaultActiveTabKey: PropTypes.string,

 /** Content to render in the top-right corner of the card */ extra: PropTypes.node,

 /** Inline style to apply to the card head */ headStyle: PropTypes.object,

 /** Lift up when hovering card */ hoverable: PropTypes.bool,

 /** Shows a loading indicator while the contents of the card are being fetched */ loading: PropTypes.bool,

 /** Size of card */ size: PropTypes.oneOf(['default', 'small']),

    /** The style properties of the component */
    style: PropTypes.object,

 /** Extra content in tab bar */ tabBarExtraContent: PropTypes.node,

 /** List of TabPane's head */ tabList: PropTypes.node,

 /** Tabs */ tabProps: PropTypes.object,

 /** Card title */ title: PropTypes.node,

 /** Card style type, can be set to inner or not set */ type: PropTypes.oneOf(['default', 'inner']),

 /** Callback when tab is switched */ onTabChange: PropTypes.func,
    /** The className of container */
    className: PropTypes.string,

};

Card.defaultProps = {};

Card.Grid = Grid;

export default Card;