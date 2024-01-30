import React from "react";
import PropTypes from 'prop-types';
import { Typography as ANTComponent } from "antd";


/**
 * @uxpindocurl https://ant.design/components/typography/
 * @uxpindescription Basic text writing, including headings, body text, lists, and more.
 * @uxpinnamespace Typography
 */
const Text = (props) => {
    return (
        <ANTComponent.Text {...props} />
    );
};

Text.propTypes = {
    /** The content of the Text */
    children: PropTypes.node,
    /** Code style */
    code: PropTypes.bool,

    /** Whether to be copyable. boolean or object. See documentation.*/
    copyable: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),

    /** Deleted line style */
    delete: PropTypes.bool,

    /** Disabled content */
    disabled: PropTypes.bool,

    /** If editable. boolean or object. See documentation.*/
    editable: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),

    /** Display ellipsis when text overflows, can't configure expandable、rows and onExpand by using object. Diff with Typography.Paragraph, Text do not have 100% width style which means it will fix width on the first ellipsis. If you want to have responsive ellipsis, please set width manually */
    ellipsis: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.shape({
            expandable: PropTypes.bool,
            rows: PropTypes.number,
            onExpand: PropTypes.func,
        }),
    ]),

    /** Keyboard style */
    keyboard: PropTypes.bool,

    /** Marked style */
    mark: PropTypes.bool,

    /** Set the handler to handle click event */
    onClick: PropTypes.func,

    /** Bold style */
    strong: PropTypes.bool,

    /** Italic style */
    italic: PropTypes.bool,

    /** Content type */
    type: PropTypes.oneOf(['secondary', 'success', 'warning', 'danger']),

    /** Underlined style */
    underline: PropTypes.bool,

    /** The style properties of the component */
    style: PropTypes.object,
};

Text.defaultProps = {};

export default Text;