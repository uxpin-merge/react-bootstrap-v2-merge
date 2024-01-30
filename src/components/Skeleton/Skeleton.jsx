import React from "react";
import PropTypes from 'prop-types';
import { Skeleton as ANTComponent } from "antd";
import Avatar from "./Avatar/Avatar";
import Button from "./Button/Button";
import Input from "./Input/Input";

/**
 * @uxpindocurl https://ant.design/components/Skeleton/
 * @uxpindescription Provide a placeholder while you wait for content to load, or to visualize content that doesn't exist yet.
 */

const Skeleton = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props} />

    );
};

Skeleton.propTypes = {
    /** Show animation effect */
    active: PropTypes.bool,

    /** Show avatar placeholder */
    avatar: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.object // SkeletonAvatarProps
    ]),

    /** Display the skeleton when true */
    loading: PropTypes.bool,

    /** Show paragraph placeholder */
    paragraph: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.object // SkeletonParagraphProps
    ]),

    /** Show paragraph and title radius when true */
    round: PropTypes.bool,

    /** Show title placeholder */
    title: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.object // SkeletonTitleProps
    ])

};

Skeleton.defaultProps = {};

Skeleton.Avatar = Avatar;
Skeleton.Button = Button;
Skeleton.Input = Input;

export default Skeleton;