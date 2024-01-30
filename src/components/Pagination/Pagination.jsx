import React from "react";
import PropTypes from 'prop-types';
import { Pagination as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Pagination/
 * @uxpindescription TODO
 */

const Pagination = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props}/>

    );
};

Pagination.propTypes = { 
    /** The content of the component. */
    children: PropTypes.node,

    /** The style properties of the component */
    style: PropTypes.object,

    /** Current page number */ current: PropTypes.number, /** Default initial page number */ defaultCurrent: PropTypes.number, /** Default number of data items per page */ defaultPageSize: PropTypes.number, /** Disable pagination */ disabled: PropTypes.bool, /** Whether to hide pager on a single page */ hideOnSinglePage: PropTypes.bool, /** To customize item's innerHTML */ itemRender: PropTypes.func, /** Number of data items per page */ pageSize: PropTypes.number, /** Specify the sizeChanger options */ pageSizeOptions: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.arrayOf(PropTypes.number)]), /** If size is not specified, Pagination would resize according to the width of the window */ responsive: PropTypes.bool, /** Show less page items */ showLessItems: PropTypes.bool, /** Determine whether you can jump to pages directly */ showQuickJumper: PropTypes.bool, /** Determine whether to show pageSize select, it will be true when total > 50 */ showSizeChanger: PropTypes.bool, /** Show page item's title */ showTitle: PropTypes.bool, /** To display the total number and range */ showTotal: PropTypes.func, /** Whether to use simple mode */ simple: PropTypes.bool, /** Specify the size of Pagination, can be set to small */ size: PropTypes.oneOf(['default', 'small']), /** Total number of data items */ total: PropTypes.number, /** Called when the page number or pageSize is changed, and it takes the resulting page number and pageSize as its arguments */ onChange: PropTypes.func, /** Called when pageSize is changed */ onShowSizeChange: PropTypes.func,
    
};

Pagination.defaultProps = {};

export default Pagination;