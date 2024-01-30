import React from "react";
import PropTypes from 'prop-types';
import { Upload as ANTComponent } from "antd";
import Dragger from "./Dragger/Dragger";

/**
 * @uxpindocurl https://ant.design/components/Upload/
 * @uxpindescription Upload the file by selecting or dragging.
 */

const Upload = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props} />

    );
};

Upload.propTypes = {
    /** The content of the component. */
    children: PropTypes.node,

    /** The style properties of the component */
    style: PropTypes.object,

    /** File types that can be accepted */
    accept: PropTypes.string,

    /** Uploading URL */
    action: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func
    ]),

    /** Hook function before uploading */
    beforeUpload: PropTypes.func,

    /** Override for the default xhr behavior */
    customRequest: PropTypes.func,

    /** Uploading extra params */
    data: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.func
    ]),

    /** Default list of files that have been uploaded */
    defaultFileList: PropTypes.arrayOf(PropTypes.object),

    /** Support upload whole directory */
    directory: PropTypes.bool,

    /** Disable upload button */
    disabled: PropTypes.bool,

    /** List of files that have been uploaded (controlled) */
    fileList: PropTypes.arrayOf(PropTypes.object),

    /** Set request headers */
    headers: PropTypes.object,

    /** Custom show icon */
    iconRender: PropTypes.func,

    /** Customize if render <img /> in thumbnail */
    isImageUrl: PropTypes.func,

    /** Custom item of uploadList */
    itemRender: PropTypes.func,

    /** Built-in stylesheets */
    listType: PropTypes.oneOf(['text', 'picture', 'picture-card', 'picture-circle']),

    /** Limit the number of uploaded files */
    maxCount: PropTypes.number,

    /** The http method of upload request */
    method: PropTypes.string,

    /** Whether to support selected multiple files */
    multiple: PropTypes.bool,

    /** The name of uploading file */
    name: PropTypes.string,

    /** Click open file dialog */
    openFileDialogOnClick: PropTypes.bool,

    /** Customize preview file logic */
    previewFile: PropTypes.func,

    /** Custom progress bar */
    progress: PropTypes.object,

    /** Whether to show default upload list */
    showUploadList: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.shape({
            showPreviewIcon: PropTypes.bool,
            showDownloadIcon: PropTypes.bool,
            showRemoveIcon: PropTypes.bool,
            previewIcon: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
            removeIcon: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
            downloadIcon: PropTypes.oneOfType([PropTypes.node, PropTypes.func])
        })
    ]),

    /** The ajax upload with cookie sent */
    withCredentials: PropTypes.bool,

    /** Callback when uploading state is changing */
    onChange: PropTypes.func,

    /** Callback when files are dragged and dropped */
    onDrop: PropTypes.func,

    /** Click method to download the file */
    onDownload: PropTypes.func,

    /** Callback when file link or preview icon is clicked */
    onPreview: PropTypes.func,

    /** Callback when removing file button is clicked */
    onRemove: PropTypes.func,
};

Upload.defaultProps = {};

Upload.Dragger = Dragger;

export default Upload;