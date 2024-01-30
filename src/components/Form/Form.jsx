import React from "react";
import PropTypes from 'prop-types';
import { Form as ANTComponent } from "antd";
import Item from "./Item/Item"

/**
 * @uxpindocurl https://ant.design/components/Form/
 * @uxpindescription Display multiple read-only fields in groups.
 */

const Form = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props} />

    );
};

Form.propTypes = {
    /** The content of the component. */
    children: PropTypes.node,

    /** The style properties of the component */
    style: PropTypes.object,

       /** Configure the default value of colon for Form.Item. Indicates whether the colon after the label is displayed (only effective when prop layout is horizontal) */ colon: PropTypes.bool, /** Set form component disable, only available for antd components */ disabled: PropTypes.bool, /** Set the Form rendering element. Do not create a DOM node for false */ component: PropTypes.oneOfType([PropTypes.elementType, PropTypes.bool]), /** Control of form fields through state management (such as redux). Not recommended for non-strong demand. */ fields: PropTypes.arrayOf(PropTypes.object), /** Form control instance created by Form.useForm(). Automatically created when not provided */ form: PropTypes.object, /** Can be passed custom icons while Form.Item element has hasFeedback */ feedbackIcons: PropTypes.object, /** Set value by Form initialization or reset */ initialValues: PropTypes.object, /** The text align of label of all items */ labelAlign: PropTypes.oneOf(['left', 'right']), /** whether label can be wrap */ labelWrap: PropTypes.bool, /** Label layout, like <Col> component. Set span offset value like {span: 3, offset: 12} or sm: {span: 3, offset: 12} */ labelCol: PropTypes.object, /** Form layout */ layout: PropTypes.oneOf(['horizontal', 'vertical', 'inline']), /** Form name. Will be the prefix of Field id */ name: PropTypes.string, /** Keep field value even when field removed. You can get the preserve field value by getFieldsValue(true) */ preserve: PropTypes.bool, /** Required mark style. Can use required mark or optional mark. You can not config to single Form.Item since this is a Form level config */ requiredMark: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['optional']), PropTypes.func]), /** Auto scroll to first failed field when submit */ scrollToFirstError: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]), /** Set field component size (antd components only) */ size: PropTypes.oneOf(['small', 'middle', 'large']), /** Validation prompt template */ validateMessages: PropTypes.object, /** Variant of components inside form */ variant: PropTypes.oneOf(['outlined', 'borderless', 'filled']), /** The layout for input controls, same as labelCol */ wrapperCol: PropTypes.object, /** Trigger when field updated */ onFieldsChange: PropTypes.func, /** Trigger after submitting the form and verifying data successfully */ onFinish: PropTypes.func, /** Trigger after submitting the form and verifying data failed */ onFinishFailed: PropTypes.func, /** Trigger when value updated */ onValuesChange: PropTypes.func,


};

Form.defaultProps = {};

Form.Item = Item;

export default Form;