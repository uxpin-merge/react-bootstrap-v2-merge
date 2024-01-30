import React from "react";
import PropTypes from 'prop-types';
import { Transfer as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Transfer/
 * @uxpindescription Double column transfer choice box.
 */

const Transfer = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props} render={(item) => item.title} />

    );
};

Transfer.propTypes = {
    /** Used for setting the source data */
    dataSource: PropTypes.arrayOf(PropTypes.object),

    /** Whether disabled transfer */
    disabled: PropTypes.bool,

    /** Custom dropdown icon */
    selectionsIcon: PropTypes.node,

    /** A function to determine whether an item should show in search result list */
    filterOption: PropTypes.func,

    /** A function used for rendering the footer */
    footer: PropTypes.func,

    /** A custom CSS style used for rendering the transfer columns */
    listStyle: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.func
    ]),

    /** The i18n text including filter, empty text, item unit, etc */
    locale: PropTypes.shape({
        itemUnit: PropTypes.string,
        itemsUnit: PropTypes.string,
        searchPlaceholder: PropTypes.string,
        notFoundContent: PropTypes.oneOfType([
            PropTypes.node,
            PropTypes.arrayOf(PropTypes.node)
        ])
    }),

    /** Display as single direction style */
    oneWay: PropTypes.bool,

    /** A set of operations that are sorted from top to bottom */
    operations: PropTypes.arrayOf(PropTypes.string),

    /** A custom CSS style used for rendering the operations column */
    operationStyle: PropTypes.object,

    /** Use pagination */
    pagination: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.shape({
            pageSize: PropTypes.number,
            simple: PropTypes.bool,
            showSizeChanger: PropTypes.bool,
            showLessItems: PropTypes.bool
        })
    ]),

    /** The function to generate the item shown on a column */
    render: PropTypes.func,

    /** A set of customized labels for select all checkboxes on the header */
    selectAllLabels: PropTypes.arrayOf(PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.func
    ])),

    /** A set of keys of selected items */
    selectedKeys: PropTypes.arrayOf(PropTypes.string),

    /** If included, a search box is shown on each column */
    showSearch: PropTypes.bool,

    /** Show select all checkbox on the header */
    showSelectAll: PropTypes.bool,

    /** Set validation status */
    status: PropTypes.oneOf(['error', 'warning']),

    /** A set of keys of elements that are listed on the right column
     * @uxpinbind onChange 
    */
    targetKeys: PropTypes.arrayOf(PropTypes.string),

    /** A set of titles that are sorted from left to right */
    titles: PropTypes.arrayOf(PropTypes.node),

    /** A callback function that is executed when the transfer between columns is complete */
    onChange: PropTypes.func,

    /** A callback function which is executed when scroll options list */
    onScroll: PropTypes.func,

    /** A callback function which is executed when search field are changed */
    onSearch: PropTypes.func,

    /** A callback function which is executed when selected items are changed */
    onSelectChange: PropTypes.func,
    /** The style properties of the component */
    style: PropTypes.object,





};

Transfer.defaultProps = {};

export default Transfer;