import React from "react";
import PropTypes from 'prop-types';
import { List as ANTComponent } from "antd";
import Item from "./Item/Item";

/**
 * @uxpindocurl https://ant.design/components/List/
 * @uxpindescription A list can be used to display content related to a single subject. The content can consist of multiple elements of varying type and size.
 */

const List = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props} renderItem={(item) => (
            props.children
        )}
        />
    );
};

List.propTypes = {
    /** The content of the component. */
    children: PropTypes.node,

    /** The style properties of the component */
    style: PropTypes.object,

    /** Toggles rendering of the border around the list */
    bordered: PropTypes.bool,

    /** DataSource array for list */
    dataSource: PropTypes.array,

    /** List footer renderer */
    footer: PropTypes.node,

    /** The grid type of list. You can set grid to something like {gutter: 16, column: 4} */
    grid: PropTypes.object,

    /** List header renderer */
    header: PropTypes.node,

    /** The layout of list */
    itemLayout: PropTypes.oneOf(['horizontal', 'vertical']),

    /** Shows a loading indicator while the contents of the list are being fetched */
    loading: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]), // or SpinProps

    /** Shows a load more content */
    loadMore: PropTypes.node,

    /** The i18n text including empty text */
    locale: PropTypes.object, // {emptyText: 'No Data'}

    /** Pagination config, hide it by setting it to false */
    pagination: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),

    /** Customize list item when using dataSource */
    renderItem: PropTypes.func,

    /** Item's unique value, could be an Item's key which holds a unique value of type React.Key or function that receives Item and returns a React.Key */
    rowKey: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),

    /** Size of list */
    size: PropTypes.oneOf(['default', 'large', 'small']),

    /** Toggles rendering of the split under the list item */
    split: PropTypes.bool,
};

List.defaultProps = {};

List.Item = Item;

export default List;