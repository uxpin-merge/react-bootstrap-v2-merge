import React from "react";
import PropTypes from 'prop-types';
import { Typography as ANTComponent } from "antd";


/**
 * @uxpindocurl https://ant.design/components/typography/
 * @uxpindescription Basic text writing, including headings, body text, lists, and more.
 * @uxpinnamespace Typography
 */
const Paragraph = (props) => {
    return (
        <div>
            <ANTComponent.Paragraph {...props} />
        </div>
    );
};

Paragraph.propTypes = {
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

    /** Display ellipsis when text overflows. boolean or object. See documentation.
     */
    ellipsis: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.shape({
            rows: PropTypes.number,
            expandable: PropTypes.bool,
        }),
    ]),

    /** Marked style */
    mark: PropTypes.bool,

    /** Set the handler to handle click event */
    onClick: PropTypes.func,

    /** Bold style */
    strong: PropTypes.bool,

    /** Italic style */
    italic: PropTypes.bool,

    /** The style properties of the component */
    style: PropTypes.object,

    /** Content type */
    type: PropTypes.oneOf(['secondary', 'success', 'warning', 'danger']),

    /** Underlined style */
    underline: PropTypes.bool,
};

Paragraph.defaultProps = {};

export default Paragraph;