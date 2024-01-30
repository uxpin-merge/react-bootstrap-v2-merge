import React from "react";
import PropTypes from 'prop-types';
import { Table as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Table/
 * @uxpindescription A table displays rows of data.
 */

const Table = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props} />

    );
};



Table.propTypes = {
    /** The content of the component. */
    children: PropTypes.node,

    /** The style properties of the component */
    style: PropTypes.object,

    /** Whether to show all table borders */ bordered: PropTypes.bool, /** Columns of table */ columns: PropTypes.arrayOf(PropTypes.object), /** Override default table elements */ components: PropTypes.object, /** Data record array to be displayed */ dataSource: PropTypes.arrayOf(PropTypes.object), /** Config expandable content */ expandable: PropTypes.object, /** Table footer renderer */ footer: PropTypes.func, /** The render container of dropdowns in table */ getPopupContainer: PropTypes.func, /** Loading status of table */ loading: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]), /** The i18n text including filter, sort, empty text, etc */ locale: PropTypes.object, /** Config of pagination */ pagination: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]), /** Row's className */ rowClassName: PropTypes.func, /** Row's unique key, could be a string or function that returns a string */ rowKey: PropTypes.oneOfType([PropTypes.string, PropTypes.func]), /** Row selection config */ rowSelection: PropTypes.object, /** Whether the table can be scrollable */ scroll: PropTypes.object, /** Whether to show table header */ showHeader: PropTypes.bool, /** The header show next sorter direction tooltip */ showSorterTooltip: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]), /** Size of table */ size: PropTypes.oneOf(['large', 'middle', 'small']), /** Supported sort way, could be ascend, descend */ sortDirections: PropTypes.array, /** Set sticky header and scroll bar */ offsetHeader: PropTypes.number, offsetScroll: PropTypes.number, getContainer: PropTypes.func, /** Summary content */ summary: PropTypes.func, /** The table-layout attribute of table element */ tableLayout: PropTypes.oneOf(['auto', 'fixed']), /** Fixed when header/columns are fixed, or using column.ellipsis */ title: PropTypes.func, /** Callback executed when pagination, filters or sorter is changed */ onChange: PropTypes.func, /** Set props on per header row */ onHeaderRow: PropTypes.func, /** Set props on per row */ onRow: PropTypes.func, /** Support virtual list */ virtual: PropTypes.bool,

};

Table.defaultProps = {};

export default Table;