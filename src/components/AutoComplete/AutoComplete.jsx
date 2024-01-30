import React from "react";
import PropTypes from 'prop-types';
import { AutoComplete as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/AutoComplete/
 * @uxpindescription Autocomplete function of input field.
 */

const AutoComplete = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props} />

    );
};

AutoComplete.propTypes = {
    /** The content of the component. */
    children: PropTypes.node,

    /** The style properties of the component */
    style: PropTypes.object,

    /** Children components, typically `AutoComplete.Option` */
    children: PropTypes.node,
    /** Additional CSS class for the AutoComplete component */
    className: PropTypes.string,
    /** The default value of the input */
    defaultValue: PropTypes.string,
    /** Whether the AutoComplete is disabled */
    disabled: PropTypes.bool,
    /** The data source for autocomplete suggestions */
    dataSource: PropTypes.arrayOf(PropTypes.string),
    /** Function that will be called when a selection is made */
    onSelect: PropTypes.func,
    /** Function that will be called when the input is changed */
    onChange: PropTypes.func,
    /** Placeholder text for the input */
    placeholder: PropTypes.string,
    /** The value of the input
     * @uxpinbind onChange 
    */
    value: PropTypes.string,
    /** Style object for the container of the AutoComplete */
    style: PropTypes.object,
    /** The maximum height of the dropdown menu in pixels */
    dropdownMatchSelectWidth: PropTypes.number,
    /** Whether to show a loading indicator */
    loading: PropTypes.bool,
    /** Custom render function for the input element */
    renderInput: PropTypes.func,
    /** Custom render function for the dropdown menu */
    renderOptions: PropTypes.func,
    /** Whether to allow clearing the input */
    allowClear: PropTypes.bool,

};

AutoComplete.defaultProps = {};

export default AutoComplete;