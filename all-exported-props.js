import PropTypes from 'prop-types';

// Button Component PropTypes
Button.propTypes = {
    /** Defines the button type */
    type: PropTypes.oneOf(['primary', 'ghost', 'dashed', 'link', 'text', 'default']),

    /** Function to handle click event */
    onClick: PropTypes.func,

    /** Whether the button is disabled */
    disabled: PropTypes.bool,

    /** Set the loading status of button */
    loading: PropTypes.bool,

    /** Defines the shape of the button */
    shape: PropTypes.oneOf(['circle', 'round']),

    /** Defines the size of the button */
    size: PropTypes.oneOf(['large', 'middle', 'small']),

    /** Icon to be displayed in the button */
    icon: PropTypes.node,

    /** Whether the button should display as a block element */
    block: PropTypes.bool,

    /** Makes the background transparent and invert the text and border colors */
    ghost: PropTypes.bool,

    /** Set the danger status of button */
    danger: PropTypes.bool,

    /** Redirect url of link button */
    href: PropTypes.string,

    /** Specifies where to display the linked URL */
    target: PropTypes.string,

    /** Set the original html type of the button */
    htmlType: PropTypes.oneOf(['submit', 'button', 'reset']),
};

// FloatButton Component PropTypes
FloatButton.propTypes = {
    /** Function to handle click event */
    onClick: PropTypes.func,

    /** Defines the position of the button */
    position: PropTypes.oneOf(['top-left', 'top-right', 'bottom-left', 'bottom-right']),

    /** Icon to be displayed in the button */
    icon: PropTypes.node,

    /** Size of the button */
    size: PropTypes.oneOf(['small', 'medium', 'large']),

    /** Color of the button */
    color: PropTypes.string,

    /** Whether the button is disabled */
    disabled: PropTypes.bool,

    /** Tooltip text for the button */
    tooltip: PropTypes.string,

    /** Custom styling for the button */
    style: PropTypes.object,
};

// Typography.Text Component PropTypes for Ant Design v5
Typography.Text.propTypes = {
    /** The content of the Text */
    children: PropTypes.node,

    /** Set the text to bold */
    strong: PropTypes.bool,

    /** Set the color of the text */
    color: PropTypes.string,

    /** Add a delete line style */
    delete: PropTypes.bool,

    /** Add an underline to the text */
    underline: PropTypes.bool,

    /** Highlight the text */
    mark: PropTypes.bool,

    /** Italicize the text */
    italic: PropTypes.bool,

    /** Render text as code */
    code: PropTypes.bool,

    /** Display text with an ellipsis when it overflows */
    ellipsis: PropTypes.bool,

    /** Add custom styles to the text */
    style: PropTypes.object,

    /** Add custom class names to the text */
    className: PropTypes.string,

    /** Make the text copyable */
    copyable: PropTypes.bool,

    /** Set typography type */
    type: PropTypes.oneOf(['secondary', 'success', 'warning', 'danger']),

    /** Define custom behavior for ellipsis expansion */
    onEllipsis: PropTypes.func,

    /** Set the component that will be rendered */
    component: PropTypes.string,

    /** Disable text selection */
    disabled: PropTypes.bool,

    /** Set the keyboard style */
    keyboard: PropTypes.bool,

    /** Set a hyperlink for the text */
    href: PropTypes.string,

    /** Set the target attribute for hyperlink */
    target: PropTypes.string,

    /** Set the rel attribute for hyperlink */
    rel: PropTypes.string,

    /** Set the title attribute for hyperlink */
    title: PropTypes.string,

    /** Define click event handler */
    onClick: PropTypes.func,
};

// Typography.Paragraph Component PropTypes for Ant Design v5
Typography.Paragraph.propTypes = {
    /** Content of the Paragraph */
    children: PropTypes.node,

    /** Set the text to bold */
    strong: PropTypes.bool,

    /** Set the color of the text */
    color: PropTypes.string,

    /** Add a delete line style */
    delete: PropTypes.bool,

    /** Add an underline to the text */
    underline: PropTypes.bool,

    /** Highlight the text */
    mark: PropTypes.bool,

    /** Italicize the text */
    italic: PropTypes.bool,

    /** Render text as code */
    code: PropTypes.bool,

    /** Display text with an ellipsis when it overflows */
    ellipsis: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.shape({
            rows: PropTypes.number, // Maximum number of rows before showing ellipsis
            expandable: PropTypes.bool, // Allow expansion
            onExpand: PropTypes.func, // Callback when expanded
            suffix: PropTypes.string, // Add suffix at the end of the text
            tooltip: PropTypes.oneOfType([PropTypes.bool, PropTypes.node]), // Show tooltip with full content
        }),
    ]),

    /** Add custom styles to the text */
    style: PropTypes.object,

    /** Add custom class names to the text */
    className: PropTypes.string,

    /** Make the text copyable */
    copyable: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.shape({
            text: PropTypes.string, // Text to be copied
            onCopy: PropTypes.func, // Callback after text is copied
            icon: PropTypes.node, // Custom icon for copy action
            tooltips: PropTypes.bool, // Show tooltips
        }),
    ]),

    /** Set typography type */
    type: PropTypes.oneOf(['secondary', 'success', 'warning', 'danger']),

    /** Define custom behavior for ellipsis expansion */
    onEllipsis: PropTypes.func,

    /** Set the component that will be rendered */
    component: PropTypes.elementType,

    /** Disable text selection */
    disabled: PropTypes.bool,

    /** Set the keyboard style */
    keyboard: PropTypes.bool,

    /** Set a hyperlink for the text */
    href: PropTypes.string,

    /** Set the target attribute for hyperlink */
    target: PropTypes.string,

    /** Set the rel attribute for hyperlink */
    rel: PropTypes.string,

    /** Set the title attribute for hyperlink */
    title: PropTypes.string,

    /** Define click event handler */
    onClick: PropTypes.func,

    /** Responsive settings for different screen sizes */
    responsive: PropTypes.bool,
};

// Typography.Title Component PropTypes for Ant Design v5
Typography.Title.propTypes = {
    /** Content of the Title */
    children: PropTypes.node,

    /** Level of the title for defining size (h1, h2, etc.) */
    level: PropTypes.oneOf([1, 2, 3, 4, 5]),

    /** Set the title text to bold */
    strong: PropTypes.bool,

    /** Set the color of the title text */
    color: PropTypes.string,

    /** Add a delete line style to the title text */
    delete: PropTypes.bool,

    /** Add an underline to the title text */
    underline: PropTypes.bool,

    /** Highlight the title text */
    mark: PropTypes.bool,

    /** Italicize the title text */
    italic: PropTypes.bool,

    /** Render title text as code */
    code: PropTypes.bool,

    /** Display title text with an ellipsis when it overflows */
    ellipsis: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.shape({
            rows: PropTypes.number, // Maximum number of rows before showing ellipsis
            expandable: PropTypes.bool, // Allow expansion
            onExpand: PropTypes.func, // Callback when expanded
            suffix: PropTypes.string, // Add suffix at the end of the text
            tooltip: PropTypes.oneOfType([PropTypes.bool, PropTypes.node]), // Show tooltip with full content
        }),
    ]),

    /** Add custom styles to the title text */
    style: PropTypes.object,

    /** Add custom class names to the title text */
    className: PropTypes.string,

    /** Make the title text copyable */
    copyable: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.shape({
            text: PropTypes.string, // Text to be copied
            onCopy: PropTypes.func, // Callback after text is copied
            icon: PropTypes.node, // Custom icon for copy action
            tooltips: PropTypes.bool, // Show tooltips
        }),
    ]),

    /** Define custom behavior for ellipsis expansion */
    onEllipsis: PropTypes.func,

    /** Set the component that will be rendered */
    component: PropTypes.elementType,

    /** Set a hyperlink for the title text */
    href: PropTypes.string,

    /** Set the target attribute for the hyperlink */
    target: PropTypes.string,

    /** Set the rel attribute for the hyperlink */
    rel: PropTypes.string,

    /** Set the title attribute for the hyperlink */
    title: PropTypes.string,

    /** Define click event handler */
    onClick: PropTypes.func,

    /** Responsive settings for different screen sizes */
    responsive: PropTypes.bool,
};

// Col Component PropTypes
Col.propTypes = {
    /** Flex layout style */
    flex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /** The number of cells to offset Col from the left */
    offset: PropTypes.number,

    /** Raster order */
    order: PropTypes.number,

    /** The number of cells that raster is moved to the left */
    pull: PropTypes.number,

    /** The number of cells that raster is moved to the right */
    push: PropTypes.number,

    /** Raster number of cells to occupy, 0 corresponds to display: none */
    span: PropTypes.number,

    /** Responsive settings for different screen sizes */
    xs: responsivePropType,
    sm: responsivePropType,
    md: responsivePropType,
    lg: responsivePropType,
    xl: responsivePropType,
    xxl: responsivePropType,

    /** Custom CSS class for the column */
    className: PropTypes.string,

    /** Custom style for the column */
    style: PropTypes.object,
};

// Row Component PropTypes
Row.propTypes = {
    /** Horizontal alignment of the flex layout */
    justify: PropTypes.oneOf(['start', 'end', 'center', 'space-around', 'space-between', 'space-evenly']),

    /** Vertical alignment of the flex layout */
    align: PropTypes.oneOf(['top', 'middle', 'bottom']),

    /** Spacing between grid items */
    gutter: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.arrayOf(PropTypes.number),
        PropTypes.object
    ]),

    /** Whether to wrap grid items */
    wrap: PropTypes.bool,

    /** Custom CSS class for the row */
    className: PropTypes.string,

    /** Custom style for the row */
    style: PropTypes.object,
};


// Divider Component PropTypes
Divider.propTypes = {
    /** Orientation of divider text */
    orientation: PropTypes.oneOf(['left', 'right', 'center']),

    /** Whether the divider is dashed */
    dashed: PropTypes.bool,

    /** Text inside the divider */
    children: PropTypes.node,

    /** Custom style for the divider */
    style: PropTypes.object,

    /** Custom CSS class for the divider */
    className: PropTypes.string,

    /** Type of the divider line */
    type: PropTypes.oneOf(['horizontal', 'vertical']),

    /** Custom plain style */
    plain: PropTypes.bool,
};


Flex.propTypes = {
    /** Sets the alignment of elements in the direction of the cross axis */
    align: PropTypes.oneOf(['normal']),

    /** custom element type */
    component: PropTypes.elementType,

    /** Sets the flex CSS shorthand properties */
    flex: PropTypes.oneOf(['normal']),

    /** Sets the gap between grids: number, 'small', 'middle', 'large' */
    gap: PropTypes.oneOfType([
        PropTypes.oneOf(['small', 'middle', 'large']),
        PropTypes.string,
        PropTypes.number
    ]),

    /** Sets the alignment of elements in the direction of the main axis */
    justify: PropTypes.oneOf(['normal']),

    /** Sets whether the element is displayed in a single line or in multiple lines */
    wrap: PropTypes.string,

    /** Is direction of the flex vertical, use flex-direction: column */
    vertical: PropTypes.bool,
};

// Space Component PropTypes
Space.propTypes = {
    /** The direction of space */
    direction: PropTypes.oneOf(['vertical', 'horizontal']),

    /** Size of the space, can be an array to set horizontal and vertical spacing */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /** Whether to wrap items */
    wrap: PropTypes.bool,

    /** Alignment of items in the space */
    align: PropTypes.oneOf(['start', 'end', 'center', 'baseline']),

    /** Custom style for the space container */
    style: PropTypes.object,

    /** Custom class names for the space container */
    className: PropTypes.string,

    /** React elements within space */
    children: PropTypes.node,

    /** Split the space with a specific separator */
    split: PropTypes.node,
};
Space.compact.propTypes = {
    /** Option to fit width to its parent's width */
    block: PropTypes.bool,

    /** Set direction of layout */
    direction: PropTypes.oneOf(['vertical', 'horizontal']),

    /** Set child component size */
    size: PropTypes.oneOf(['large', 'middle', 'small']),
};
// Layout Component PropTypes
Layout.propTypes = {
    /** Custom style for the layout */
    style: PropTypes.object,

    /** Custom class name for the layout */
    className: PropTypes.string,

    /** Whether the layout has a `Sider` in its children */
    hasSider: PropTypes.bool,

    /** Children components inside the layout */
    children: PropTypes.node,
};

// Layout.Sider Component PropTypes
Layout.Sider.propTypes = {
    /** Children components inside the Sider */
    children: PropTypes.node,

    /** The breakpoint at which the Sider will automatically collapse */
    breakpoint: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),

    /** Whether the Sider is collapsible */
    collapsible: PropTypes.bool,

    /** Current collapse status of the Sider */
    collapsed: PropTypes.bool,

    /** Width of the Sider when it's collapsed */
    collapsedWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /** Custom class name for the sider */
    className: PropTypes.string,

    /** To set the default collapsed status */
    defaultCollapsed: PropTypes.bool,

    /** Triggered when the collapse status is changed */
    onCollapse: PropTypes.func,

    /** Reverse direction of arrow, for a collapsible sider */
    reverseArrow: PropTypes.bool,

    /** Custom style for the sider */
    style: PropTypes.object,

    /** The theme of the Sider */
    theme: PropTypes.oneOf(['light', 'dark']),

    /** Whether to render the trigger or not */
    trigger: PropTypes.node,

    /** Width of the Sider when it's unfolded */
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /** Zero width trigger styling */
    zeroWidthTriggerStyle: PropTypes.object,
};

Anchor.propTypes = {
    /** Set the component that will be rendered */
    children: PropTypes.node,

    /** Fixed mode of Anchor */
    affix: PropTypes.bool,

    /** Bounding distance of anchor area */
    bounds: PropTypes.number,

    /** Scrolling container */
    getContainer: PropTypes.func,

    /** Customize the anchor highlight */
    getCurrentAnchor: PropTypes.func,

    /** Pixels to offset from top when calculating position of scroll */
    offsetTop: PropTypes.number,

    /** Whether show ink-square when affix={false} */
    showInkInFixed: PropTypes.bool,

    /** Anchor scroll offset, default as offsetTop, example */
    targetOffset: PropTypes.number,

    /** Listening for anchor link change */
    onChange: PropTypes.func,

    /** Set the handler to handle click event */
    onClick: PropTypes.func,

    /** Data configuration option content, support nesting through children */
    items: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.string,
            href: PropTypes.string,
            title: PropTypes.string,
            target: PropTypes.string,
            children: PropTypes.node,
        })
    ),

    /** Set Anchor direction */
    direction: PropTypes.oneOf(['vertical', 'horizontal']),

    /** Replace items' href in browser history instead of pushing it */
    replace: PropTypes.bool,
}

AnchorItem.propTypes = {
    /** The unique identifier of the Anchor Link */
    key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /** The target of hyperlink */
    href: PropTypes.string,

    /** Specifies where to display the linked URL */
    target: PropTypes.string,

    /** The content of hyperlink */
    title: PropTypes.node,

    /** Nested Anchor Link, Attention: This attribute does not support horizontal orientation */
    children: PropTypes.arrayOf(PropTypes.shape({ type: PropTypes.oneOf([AnchorItem]) })),

    /** Replace item href in browser history instead of pushing it */
    replace: PropTypes.bool,
};

Breadcrumb.propTypes = {
    /** Custom item renderer */
    itemRender: PropTypes.func,

    /** Routing parameters */
    params: PropTypes.object,

    /** The routing stack information of router */
    items: PropTypes.array,

    /** Custom separator */
    separator: PropTypes.node,
};

Dropdown.propTypes = {
    /** Whether the dropdown arrow should be visible */
    arrow: PropTypes.bool,

    /** Whether to adjust dropdown placement automatically when dropdown is off screen */
    autoAdjustOverflow: PropTypes.bool,

    /** Focus element in overlay when opened */
    autoFocus: PropTypes.bool,

    /** Whether the dropdown menu is disabled */
    disabled: PropTypes.bool,

    /** Whether destroy dropdown when hidden */
    destroyPopupOnHide: PropTypes.bool,

    /** Customize dropdown content */
    dropdownRender: PropTypes.func,

    /** To set the container of the dropdown menu. The default is to create a div element in body, but you can reset it to the scrolling area and make a relative reposition. Example on CodePen */
    getPopupContainer: PropTypes.func,

    /** The menu props */
    menu: PropTypes.shape(MenuProps),

    /** The class name of the dropdown root element */
    overlayClassName: PropTypes.string,

    /** The style of the dropdown root element */
    overlayStyle: PropTypes.object,

    /** Placement of popup menu: bottom bottomLeft bottomRight top topLeft topRight */
    placement: PropTypes.oneOf(['bottom', 'bottomLeft', 'bottomRight', 'top', 'topLeft', 'topRight']),

    /** The trigger mode which executes the dropdown action. Note that hover can't be used on touchscreens */
    trigger: PropTypes.oneOf(['click', 'hover', 'contextMenu']),

    /** Whether the dropdown menu is currently open. Use visible under 4.23.0 (why?) */
    open: PropTypes.bool,

    /** Called when the open state is changed. Not trigger when hidden by click item. Use onVisibleChange under 4.23.0 (why?) */
    onOpenChange: PropTypes.func,
};

Dropdown.Button.propTypes = {
    /** Whether the dropdown arrow should be visible */
    arrow: PropTypes.bool,

    /** Whether to adjust dropdown placement automatically when dropdown is off screen */
    autoAdjustOverflow: PropTypes.bool,

    /** Focus element in overlay when opened */
    autoFocus: PropTypes.bool,

    /** Whether the dropdown menu is disabled */
    disabled: PropTypes.bool,

    /** Whether destroy dropdown when hidden */
    destroyPopupOnHide: PropTypes.bool,

    /** Customize dropdown content */
    dropdownRender: PropTypes.func,

    /** To set the container of the dropdown menu. The default is to create a div element in body, but you can reset it to the scrolling area and make a relative reposition. Example on CodePen */
    getPopupContainer: PropTypes.func,

    /** The menu props */
    menu: PropTypes.shape(MenuProps),

    /** The class name of the dropdown root element */
    overlayClassName: PropTypes.string,

    /** The style of the dropdown root element */
    overlayStyle: PropTypes.object,

    /** Placement of popup menu: bottom bottomLeft bottomRight top topLeft topRight */
    placement: PropTypes.oneOf(['bottom', 'bottomLeft', 'bottomRight', 'top', 'topLeft', 'topRight']),

    /** The trigger mode which executes the dropdown action. Note that hover can't be used on touchscreens */
    trigger: PropTypes.oneOf(['click', 'hover', 'contextMenu']),

    /** Whether the dropdown menu is currently open. Use visible under 4.23.0 (why?) */
    open: PropTypes.bool,

    /** Called when the open state is changed. Not trigger when hidden by click item. Use onVisibleChange under 4.23.0 (why?) */
    onOpenChange: PropTypes.func,

    /** Custom buttons inside Dropdown.Button */
    buttonsRender: PropTypes.func,

    /** Set the loading status of button */
    loading: PropTypes.bool,

    /** Set the danger status of button */
    danger: PropTypes.bool,

    /** Icon (appears on the right) */
    icon: PropTypes.node,

    /** Size of the button, the same as Button */
    size: PropTypes.string,

    /** Type of the button, the same as Button */
    type: PropTypes.string,

    /** The same as Button: called when you click the button on the left */
    onClick: PropTypes.func,
};

Menu.propTypes = {
    /** Array with the keys of default opened sub menus */
    defaultOpenKeys: PropTypes.arrayOf(PropTypes.string),

    /** Array with the keys of default selected menu items */
    defaultSelectedKeys: PropTypes.arrayOf(PropTypes.string),

    /** Custom expand icon of submenu */
    expandIcon: PropTypes.node,

    /** Render submenu into DOM before it becomes visible */
    forceSubMenuRender: PropTypes.bool,

    /** Specifies the collapsed status when menu is inline mode */
    inlineCollapsed: PropTypes.bool,

    /** Indent (in pixels) of inline menu items on each level */
    inlineIndent: PropTypes.number,

    /** Menu item content */
    items: PropTypes.arrayOf(PropTypes.shape({ type: PropTypes.oneOf([ItemType]) })),

    /** Type of menu */
    mode: PropTypes.oneOf(['vertical', 'horizontal', 'inline']),

    /** Allows selection of multiple items */
    multiple: PropTypes.bool,

    /** Array with the keys of currently opened sub-menus */
    openKeys: PropTypes.arrayOf(PropTypes.string),

    /** Customized the ellipsis icon when menu is collapsed horizontally */
    overflowedIndicator: PropTypes.node,

    /** Allows selecting menu items */
    selectable: PropTypes.bool,

    /** Array with the keys of currently selected menu items */
    selectedKeys: PropTypes.arrayOf(PropTypes.string),

    /** Style of the root node */
    style: PropTypes.object,

    /** Delay time to hide submenu when mouse leaves (in seconds) */
    subMenuCloseDelay: PropTypes.number,

    /** Delay time to show submenu when mouse enters, (in seconds) */
    subMenuOpenDelay: PropTypes.number,

    /** Color theme of the menu */
    theme: PropTypes.oneOf(['light', 'dark']),

    /** Which action can trigger submenu open/close */
    triggerSubMenuAction: PropTypes.oneOf(['hover', 'click']),

    /** Called when a menu item is clicked */
    onClick: PropTypes.func,

    /** Called when a menu item is deselected (multiple mode only) */
    onDeselect: PropTypes.func,

    /** Called when sub-menus are opened or closed */
    onOpenChange: PropTypes.func,

    /** Called when a menu item is selected */
    onSelect: PropTypes.func,
};

MenuItemType.propTypes = {
    /** Display the danger style */
    danger: PropTypes.bool,

    /** Whether menu item is disabled */
    disabled: PropTypes.bool,

    /** The icon of the menu item */
    icon: PropTypes.node,

    /** Unique ID of the menu item */
    key: PropTypes.string,

    /** Menu label */
    label: PropTypes.node,

    /** Set display title for collapsed item */
    title: PropTypes.string,
};

SubMenuType.propTypes = {
    /** Sub-menus or sub-menu items */
    children: PropTypes.node,

    /** Whether sub-menu is disabled */
    disabled: PropTypes.bool,

    /** Icon of sub menu */
    icon: PropTypes.node,

    /** Unique ID of the sub-menu */
    key: PropTypes.string,

    /** Menu label */
    label: PropTypes.node,

    /** Sub-menu class name, not working when mode="inline" */
    popupClassName: PropTypes.string,

    /** Sub-menu offset, not working when mode="inline" */
    popupOffset: PropTypes.arrayOf(PropTypes.number),

    /** Color theme of the SubMenu (inherits from Menu by default) */
    theme: PropTypes.oneOf(['light', 'dark']),

    /** Callback executed when the sub-menu title is clicked */
    onTitleClick: PropTypes.func,
};

Pagination.propTypes = {
    /** Current page number */
    current: PropTypes.number,

    /** Default initial page number */
    defaultCurrent: PropTypes.number,

    /** Default number of data items per page */
    defaultPageSize: PropTypes.number,

    /** Disable pagination */
    disabled: PropTypes.bool,

    /** Whether to hide pager on a single page */
    hideOnSinglePage: PropTypes.bool,

    /** To customize item's innerHTML */
    itemRender: PropTypes.func,

    /** Number of data items per page */
    pageSize: PropTypes.number,

    /** Specify the sizeChanger options */
    pageSizeOptions: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.arrayOf(PropTypes.number)]),

    /** If size is not specified, Pagination would resize according to the width of the window */
    responsive: PropTypes.bool,

    /** Show less page items */
    showLessItems: PropTypes.bool,

    /** Determine whether you can jump to pages directly */
    showQuickJumper: PropTypes.bool,

    /** Determine whether to show pageSize select, it will be true when total > 50 */
    showSizeChanger: PropTypes.bool,

    /** Show page item's title */
    showTitle: PropTypes.bool,

    /** To display the total number and range */
    showTotal: PropTypes.func,

    /** Whether to use simple mode */
    simple: PropTypes.bool,

    /** Specify the size of Pagination, can be set to small */
    size: PropTypes.oneOf(['default', 'small']),

    /** Total number of data items */
    total: PropTypes.number,

    /** Called when the page number or pageSize is changed, and it takes the resulting page number and pageSize as its arguments */
    onChange: PropTypes.func,

    /** Called when pageSize is changed */
    onShowSizeChange: PropTypes.func,
};

Steps.propTypes = {
    /** Children components, usually Step items */
    children: PropTypes.node,

    /** Additional CSS class for the Steps component */
    className: PropTypes.string,

    /** The index of the current step (starting from 0) */
    current: PropTypes.number,

    /** The direction of the step component, either 'horizontal' or 'vertical' */
    direction: PropTypes.oneOf(['horizontal', 'vertical']),

    /** The starting number for the first step */
    initial: PropTypes.number,

    /** The placement of the step label, either 'horizontal' or 'vertical' */
    labelPlacement: PropTypes.oneOf(['horizontal', 'vertical']),

    /** Function to call when the step changes, provides the current step index as argument */
    onChange: PropTypes.func,

    /** Percentage of the current step, used when the steps have a progress bar */
    percent: PropTypes.number,

    /** Whether to apply a dot style progress bar, can be a boolean or a custom render function */
    progressDot: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),

    /** Make the steps responsive */
    responsive: PropTypes.bool,

    /** The size of the steps, can be 'default' or 'small' */
    size: PropTypes.oneOf(['default', 'small']),

    /** The status of the current step, can be 'wait', 'process', 'finish', or 'error' */
    status: PropTypes.oneOf(['wait', 'process', 'finish', 'error']),

    /** Inline style to apply to the Steps component */
    style: PropTypes.object,

    /** The type of the step component, either 'default' or 'navigation' */
    type: PropTypes.oneOf(['default', 'navigation']),
};

StepItem.propTypes = {
    /** Children components, usually the content of the step */
    children: PropTypes.node,

    /** Additional CSS class for the StepItem component */
    className: PropTypes.string,

    /** Description of the step */
    description: PropTypes.node,

    /** Icon to be displayed in the step */
    icon: PropTypes.node,

    /** A status to mark the step as 'wait', 'process', 'finish', or 'error' */
    status: PropTypes.oneOf(['wait', 'process', 'finish', 'error']),

    /** Title of the step */
    title: PropTypes.node,

    /** Customized style for the step item */
    style: PropTypes.object,

    /** Unique identifier for the step */
    stepNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /** Whether the step is disabled */
    disabled: PropTypes.bool,

    /** Callback fired when the step is clicked */
    onClick: PropTypes.func,

    /** Inline style to apply to the title */
    titleStyle: PropTypes.object,

    /** Inline style to apply to the description */
    descriptionStyle: PropTypes.object,
};

AutoComplete.propTypes = {
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

    /** The value of the input */
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

AutoComplete.Option.propTypes = {
    /** Additional CSS class for the Option component */
    className: PropTypes.string,

    /** Whether the option is disabled */
    disabled: PropTypes.bool,

    /** The key of the option, which might be used for identifying the selected value */
    key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /** Label to display in the option, typically the same as children */
    label: PropTypes.node,

    /** The content of the option, usually the text to be displayed */
    children: PropTypes.node,

    /** The value corresponding to this option, which will be used as the value of the select on select */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /** Style object for the individual option */
    style: PropTypes.object,

    /** Callback fired when the option is selected */
    onSelect: PropTypes.func,
};


Cascader.propTypes = {
    /** Array of options available for the cascader */
    options: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        label: PropTypes.node,
        children: PropTypes.array, // More options nested
        disabled: PropTypes.bool,
    })).isRequired,

    /** Default value of the cascader */
    defaultValue: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),

    /** Specifies the value of the cascader */
    value: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),

    /** Callback fired when the selected value changes */
    onChange: PropTypes.func,

    /** Whether the Cascader is disabled */
    disabled: PropTypes.bool,

    /** To customize the rendering of the label */
    displayRender: PropTypes.func,

    /** Placeholder text for the input */
    placeholder: PropTypes.string,

    /** Size of the input box */
    size: PropTypes.oneOf(['small', 'default', 'large']),

    /** Additional CSS class for the cascader */
    className: PropTypes.string,

    /** Style object for the cascader */
    style: PropTypes.object,

    /** Whether to show a search box within the dropdown */
    showSearch: PropTypes.bool,

    /** Custom render function for each option */
    renderOption: PropTypes.func,

    /** Whether to load options lazily */
    loadData: PropTypes.func,

    /** Whether the cascader is in a popup or inline mode */
    popupVisible: PropTypes.bool,

    /** Custom render function for the popup */
    renderPopup: PropTypes.func,

    /** Whether to allow clearing the selection */
    allowClear: PropTypes.bool,
};

Checkbox.propTypes = {
    /** Whether the Checkbox is checked */
    checked: PropTypes.bool,

    /** Initial value whether the Checkbox is checked */
    defaultChecked: PropTypes.bool,

    /** Disable the Checkbox */
    disabled: PropTypes.bool,

    /** Callback function when the state changes */
    onChange: PropTypes.func,

    /** Value of the Checkbox, used when inside a Checkbox.Group */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),

    /** Additional CSS class for the Checkbox */
    className: PropTypes.string,

    /** Inline style to apply to the Checkbox */
    style: PropTypes.object,

    /** The content to be displayed next to the Checkbox */
    children: PropTypes.node,
};

Checkbox.Group.propTypes = {
    /** Array of Checkbox.Option values to be treated as checked */
    value: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])),

    /** Array of Checkbox.Option values to be treated as default checked */
    defaultValue: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])),

    /** Callback function when the value changes */
    onChange: PropTypes.func,

    /** Array of options for the group, can be an array of strings or objects */
    options: PropTypes.arrayOf(PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
            label: PropTypes.node,
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
            disabled: PropTypes.bool,
        })
    ])),

    /** Disable all checkboxes in the group */
    disabled: PropTypes.bool,

    /** Additional CSS class for the Checkbox Group */
    className: PropTypes.string,

    /** Inline style to apply to the Checkbox Group */
    style: PropTypes.object,
};

ColorPicker.propTypes = {
    /** Allow clearing color selected */
    allowClear: PropTypes.bool,

    /** Configuration for popup arrow */
    arrow: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.shape({ pointAtCenter: PropTypes.bool }),
    ]),

    /** Trigger of ColorPicker */
    children: PropTypes.node,

    /** Default value of color */
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),

    /** Default format of color */
    defaultFormat: PropTypes.oneOf(['rgb', 'hex', 'hsb']),

    /** Disable ColorPicker */
    disabled: PropTypes.bool,

    /** Disable Alpha */
    disabledAlpha: PropTypes.bool,

    /** Whether destroy popover when hidden */
    destroyTooltipOnHide: PropTypes.bool,

    /** Format of color */
    format: PropTypes.oneOf(['rgb', 'hex', 'hsb']),

    /** Whether to show popup */
    open: PropTypes.bool,

    /** Preset colors */
    presets: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.node,
            colors: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object])),
            defaultOpen: PropTypes.bool,
        })
    ),

    /** Placement of popup */
    placement: PropTypes.oneOf(['top', 'topLeft', 'topRight', 'bottom', 'bottomLeft', 'bottomRight']),

    /** Custom Render Panel */
    panelRender: PropTypes.func,

    /** Show color text */
    showText: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),

    /** Setting the trigger size */
    size: PropTypes.oneOf(['large', 'middle', 'small']),

    /** ColorPicker trigger mode */
    trigger: PropTypes.oneOf(['hover', 'click']),

    /** Value of color */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),

    /** Callback when value is changed */
    onChange: PropTypes.func,

    /** Called when color pick ends */
    onChangeComplete: PropTypes.func,

    /** Callback when format is changed */
    onFormatChange: PropTypes.func,

    /** Callback when open is changed */
    onOpenChange: PropTypes.func,

    /** Called when clear */
    onClear: PropTypes.func,
};

DatePicker.propTypes = {
    /** Customize clear button */
    allowClear: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.shape({ clearIcon: PropTypes.node }),
    ]),

    /** If get focus when component mounted */
    autoFocus: PropTypes.bool,

    /** The picker className */
    className: PropTypes.string,

    /** Custom rendering function for date cells */
    dateRender: PropTypes.func,

    /** Trigger change when blur. e.g., datetime picker no need click confirm button */
    changeOnBlur: PropTypes.bool,

    /** Custom rendering function for picker cells */
    cellRender: PropTypes.func,

    /** Determine whether the DatePicker is disabled */
    disabled: PropTypes.bool,

    /** Specify the date that cannot be selected */
    disabledDate: PropTypes.func,

    /** To set the date format, support multi-format matching when it is an array, display the first one shall prevail. */
    format: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),

    /** To customize the className of the popup calendar */
    popupClassName: PropTypes.string,

    /** To set the container of the floating layer, while the default is to create a div element in body */
    getPopupContainer: PropTypes.func,

    /** Set the readonly attribute of the input tag (avoids virtual keyboard on touch devices) */
    inputReadOnly: PropTypes.bool,

    /** Localization configuration */
    locale: PropTypes.object,

    /** The picker panel mode */
    mode: PropTypes.oneOf(['time', 'date', 'month', 'year', 'decade']),

    /** The custom next icon */
    nextIcon: PropTypes.node,

    /** The open state of picker */
    open: PropTypes.bool,

    /** Customize panel render */
    panelRender: PropTypes.func,

    /** Set picker type */
    picker: PropTypes.oneOf(['date', 'week', 'month', 'quarter', 'year']),

    /** The placeholder of date input */
    placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),

    /** The position where the selection box pops up */
    placement: PropTypes.oneOf(['bottomLeft', 'bottomRight', 'topLeft', 'topRight']),

    /** To customize the style of the popup calendar */
    popupStyle: PropTypes.object,

    /** The preset ranges for quick selection */
    presets: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.node,
            value: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
        })
    ),

    /** The custom prev icon */
    prevIcon: PropTypes.node,

    /** To determine the size of the input box */
    size: PropTypes.oneOf(['large', 'middle', 'small']),

    /** Set validation status */
    status: PropTypes.oneOf(['error', 'warning']),

    /** To customize the style of the input box */
    style: PropTypes.object,

    /** The custom suffix icon */
    suffixIcon: PropTypes.node,

    /** The custom super next icon */
    superNextIcon: PropTypes.node,

    /** The custom super prev icon */
    superPrevIcon: PropTypes.node,

    /** Variants of picker */
    variant: PropTypes.oneOf(['outlined', 'borderless', 'filled']),

    /** Callback function, can be executed whether the popup calendar is popped up or closed */
    onOpenChange: PropTypes.func,

    /** Callback when picker panel mode is changed */
    onPanelChange: PropTypes.func,

    /** To set default date, if start time or end time is null or undefined, the date range will be an open interval */
    defaultValue: PropTypes.object,

    /** To specify the time that cannot be selected */
    disabledTime: PropTypes.func,

    /** To set the date format */
    renderExtraFooter: PropTypes.func,

    /** Whether to show 'Now' button on panel when showTime is set */
    showNow: PropTypes.bool,

    /** To provide an additional time selection */
    showTime: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),

    /** Whether to show Today button */
    showToday: PropTypes.bool,

    /** To set date */
    value: PropTypes.object,

    /** Callback function, can be executed when the selected time is changing */
    onChange: PropTypes.func,

    /** Callback when click ok button */
    onOk: PropTypes.func,
};

RangePicker.propTypes = {
    /** Customize clear button */
    allowClear: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.shape({ clearIcon: PropTypes.node }),
    ]),

    /** If get focus when component mounted */
    autoFocus: PropTypes.bool,

    /** The picker className */
    className: PropTypes.string,

    /** Custom rendering function for date cells */
    dateRender: PropTypes.func,

    /** Trigger change when blur. e.g., datetime picker no need click confirm button */
    changeOnBlur: PropTypes.bool,

    /** Custom rendering function for picker cells */
    cellRender: PropTypes.func,

    /** Determine whether the DatePicker is disabled */
    disabled: PropTypes.bool,

    /** Specify the date that cannot be selected */
    disabledDate: PropTypes.func,

    /** To set the date format, support multi-format matching when it is an array, display the first one shall prevail. refer to dayjs#format. */
    format: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),

    /** To customize the className of the popup calendar */
    popupClassName: PropTypes.string,

    /** To set the container of the floating layer, while the default is to create a div element in body */
    getPopupContainer: PropTypes.func,

    /** Set the readonly attribute of the input tag (avoids virtual keyboard on touch devices) */
    inputReadOnly: PropTypes.bool,

    /** Localization configuration */
    locale: PropTypes.object,

    /** The picker panel mode */
    mode: PropTypes.oneOf(['time', 'date', 'month', 'year', 'decade']),

    /** The custom next icon */
    nextIcon: PropTypes.node,

    /** The open state of picker */
    open: PropTypes.bool,

    /** Customize panel render */
    panelRender: PropTypes.func,

    /** Set picker type */
    picker: PropTypes.oneOf(['date', 'week', 'month', 'quarter', 'year']),

    /** The placeholder of date input */
    placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),

    /** The position where the selection box pops up */
    placement: PropTypes.oneOf(['bottomLeft', 'bottomRight', 'topLeft', 'topRight']),

    /** To customize the style of the popup calendar */
    popupStyle: PropTypes.object,

    /** The preset ranges for quick selection */
    presets: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.node,
            value: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
        })
    ),

    /** The custom prev icon */
    prevIcon: PropTypes.node,

    /** To determine the size of the input box */
    size: PropTypes.oneOf(['large', 'middle', 'small']),

    /** Set validation status */
    status: PropTypes.oneOf(['error', 'warning']),

    /** To customize the style of the input box */
    style: PropTypes.object,

    /** The custom suffix icon */
    suffixIcon: PropTypes.node,

    /** The custom super next icon */
    superNextIcon: PropTypes.node,

    /** The custom super prev icon */
    superPrevIcon: PropTypes.node,

    /** Variants of picker */
    variant: PropTypes.oneOf(['outlined', 'borderless', 'filled']),

    /** Callback function, can be executed whether the popup calendar is popped up or closed */
    onOpenChange: PropTypes.func,

    /** Callback when picker panel mode is changed */
    onPanelChange: PropTypes.func,

    /** Allow start or end input leave empty */
    allowEmpty: PropTypes.arrayOf(PropTypes.bool),

    /** To set default date */
    defaultValue: PropTypes.arrayOf(PropTypes.object),

    /** If disable start or end */
    disabled: PropTypes.arrayOf(PropTypes.bool),

    /** To specify the time that cannot be selected */
    disabledTime: PropTypes.func,

    /** The preset ranges for quick selection */
    presets: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.node,
            value: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object, PropTypes.func])),
        })
    ),

    /** Render extra footer in panel */
    renderExtraFooter: PropTypes.func,

    /** Set separator between inputs */
    separator: PropTypes.node,

    /** To provide an additional time selection */
    showTime: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),

    /** To set default time of selected date */
    // showTime.defaultValue: PropTypes.arrayOf(PropTypes.object),

    /** To set date */
    value: PropTypes.arrayOf(PropTypes.object),

    /** Callback function, can be executed when the start time or the end time of the range is changing. info argument is added in 4.4.0 */
    onCalendarChange: PropTypes.func,

    /** Callback function, can be executed when the selected time is changing */
    onChange: PropTypes.func,
};

Form.propTypes = {
    /** Configure the default value of colon for Form.Item. Indicates whether the colon after the label is displayed (only effective when prop layout is horizontal) */
    colon: PropTypes.bool,

    /** Set form component disable, only available for antd components */
    disabled: PropTypes.bool,

    /** Set the Form rendering element. Do not create a DOM node for false */
    component: PropTypes.oneOfType([PropTypes.elementType, PropTypes.bool]),

    /** Control of form fields through state management (such as redux). Not recommended for non-strong demand. */
    fields: PropTypes.arrayOf(PropTypes.object),

    /** Form control instance created by Form.useForm(). Automatically created when not provided */
    form: PropTypes.object,

    /** Can be passed custom icons while Form.Item element has hasFeedback */
    feedbackIcons: PropTypes.object,

    /** Set value by Form initialization or reset */
    initialValues: PropTypes.object,

    /** The text align of label of all items */
    labelAlign: PropTypes.oneOf(['left', 'right']),

    /** whether label can be wrap */
    labelWrap: PropTypes.bool,

    /** Label layout, like <Col> component. Set span offset value like {span: 3, offset: 12} or sm: {span: 3, offset: 12} */
    labelCol: PropTypes.object,

    /** Form layout */
    layout: PropTypes.oneOf(['horizontal', 'vertical', 'inline']),

    /** Form name. Will be the prefix of Field id */
    name: PropTypes.string,

    /** Keep field value even when field removed. You can get the preserve field value by getFieldsValue(true) */
    preserve: PropTypes.bool,

    /** Required mark style. Can use required mark or optional mark. You can not config to single Form.Item since this is a Form level config */
    requiredMark: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['optional']), PropTypes.func]),

    /** Auto scroll to first failed field when submit */
    scrollToFirstError: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),

    /** Set field component size (antd components only) */
    size: PropTypes.oneOf(['small', 'middle', 'large']),

    /** Validation prompt template */
    validateMessages: PropTypes.object,

    /** Variant of components inside form */
    variant: PropTypes.oneOf(['outlined', 'borderless', 'filled']),

    /** The layout for input controls, same as labelCol */
    wrapperCol: PropTypes.object,

    /** Trigger when field updated */
    onFieldsChange: PropTypes.func,

    /** Trigger after submitting the form and verifying data successfully */
    onFinish: PropTypes.func,

    /** Trigger after submitting the form and verifying data failed */
    onFinishFailed: PropTypes.func,

    /** Trigger when value updated */
    onValuesChange: PropTypes.func,
};

Form.Item.propTypes = {
    /** Used with label, whether to display : after label text */
    colon: PropTypes.bool,

    /** Set the dependency field */
    dependencies: PropTypes.arrayOf(PropTypes.string),

    /** The extra prompt message. It is similar to help. */
    extra: PropTypes.node,

    /** Specify how to get value from event or other onChange arguments */
    getValueFromEvent: PropTypes.func,

    /** Additional props with sub component */
    getValueProps: PropTypes.func,

    /** Used with validateStatus, this option specifies the validation status icon */
    hasFeedback: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),

    /** The prompt message. If not provided, the prompt message will be generated by the validation rule */
    help: PropTypes.node,

    /** Whether to hide Form.Item (still collect and validate value) */
    hidden: PropTypes.bool,

    /** Set sub label htmlFor */
    htmlFor: PropTypes.string,

    /** Config sub default value. Form initialValues get higher priority when conflict */
    initialValue: PropTypes.string,

    /** Label text */
    label: PropTypes.node,

    /** The text align of label */
    labelAlign: PropTypes.oneOf(['left', 'right']),

    /** The layout of label */
    labelCol: PropTypes.object,

    /** The default validate field info */
    messageVariables: PropTypes.object,

    /** Field name, support array */
    name: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),

    /** Normalize value from component value before passing to Form instance. Do not support async */
    normalize: PropTypes.func,

    /** No style for true, used as a pure field control. Will inherit parent Form.Item validateStatus if self validateStatus not configured */
    noStyle: PropTypes.bool,

    /** Keep field value even when field removed */
    preserve: PropTypes.bool,

    /** Display required style. It will be generated by the validation rule */
    required: PropTypes.bool,

    /** Rules for field validation */
    rules: PropTypes.arrayOf(PropTypes.object),

    /** Custom field update logic */
    shouldUpdate: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),

    /** Config tooltip info */
    tooltip: PropTypes.node,

    /** When to collect the value of children node */
    trigger: PropTypes.string,

    /** Delay milliseconds to start validation */
    validateDebounce: PropTypes.number,

    /** Whether stop validate on first rule of error for this field. Will parallel validate when parallel configured */
    validateFirst: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),

    /** The validation status. If not provided, it will be generated by validation rule */
    validateStatus: PropTypes.string,

    /** When to validate the value of children node */
    validateTrigger: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),

    /** Props of children node, for example, the prop of Switch or Checkbox is checked. */
    valuePropName: PropTypes.string,

    /** The layout for input controls, same as labelCol */
    wrapperCol: PropTypes.object,
};

Input.propTypes = {
    /** The label text displayed after (on the right side of) the input field */
    addonAfter: PropTypes.node,

    /** The label text displayed before (on the left side of) the input field */
    addonBefore: PropTypes.node,

    /** If allow removing input content with clear icon */
    allowClear: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape({ clearIcon: PropTypes.node })]),

    /** Semantic DOM class */
    classNames: PropTypes.shape({}),

    /** Character count config */
    count: PropTypes.shape({
        formatter: PropTypes.func,
        max: PropTypes.number,
        show: PropTypes.bool,
        suffix: PropTypes.string,
    }),

    /** The initial input content */
    defaultValue: PropTypes.string,

    /** Whether the input is disabled */
    disabled: PropTypes.bool,

    /** The ID for input */
    id: PropTypes.string,

    /** The maximum number of characters in Input */
    maxLength: PropTypes.number,

    /** The prefix icon for the Input */
    prefix: PropTypes.node,

    /** Whether to show character count */
    showCount: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape({ formatter: PropTypes.func })]),

    /** Set validation status */
    status: PropTypes.oneOf(['error', 'warning']),

    /** Semantic DOM style */
    styles: PropTypes.shape({}),

    /** The size of the input box. Note: in the context of a form, the middle size is used */
    size: PropTypes.oneOf(['large', 'middle', 'small']),

    /** The suffix icon for the Input */
    suffix: PropTypes.node,

    /** The type of input, see: MDN (use Input.TextArea instead of type="textarea") */
    type: PropTypes.string,

    /** The input content value */
    value: PropTypes.string,

    /** Variants of Input */
    variant: PropTypes.oneOf(['outlined', 'borderless', 'filled']),

    /** Callback when user input */
    onChange: PropTypes.func,

    /** The callback function that is triggered when the Enter key is pressed */
    onPressEnter: PropTypes.func,
};

Input.TextArea.propTypes = {
    /** The label text displayed after (on the right side of) the input field */
    addonAfter: PropTypes.node,

    /** The label text displayed before (on the left side of) the input field */
    addonBefore: PropTypes.node,

    /** If allow removing input content with clear icon */
    allowClear: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape({ clearIcon: PropTypes.node })]),

    /** Semantic DOM class */
    classNames: PropTypes.shape({}),

    /** Character count config */
    count: PropTypes.shape({
        formatter: PropTypes.func,
        max: PropTypes.number,
        show: PropTypes.bool,
        suffix: PropTypes.string,
    }),

    /** The initial input content */
    defaultValue: PropTypes.string,

    /** Whether the input is disabled */
    disabled: PropTypes.bool,

    /** The ID for input */
    id: PropTypes.string,

    /** The maximum number of characters in Input */
    maxLength: PropTypes.number,

    /** The prefix icon for the Input */
    prefix: PropTypes.node,

    /** Whether to show character count */
    showCount: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape({ formatter: PropTypes.func })]),

    /** Set validation status */
    status: PropTypes.oneOf(['error', 'warning']),

    /** Semantic DOM style */
    styles: PropTypes.shape({}),

    /** The size of the input box. Note: in the context of a form, the middle size is used */
    size: PropTypes.oneOf(['large', 'middle', 'small']),

    /** The suffix icon for the Input */
    suffix: PropTypes.node,

    /** The type of input, see: MDN (use Input.TextArea instead of type="textarea") */
    type: PropTypes.string,

    /** The input content value */
    value: PropTypes.string,

    /** Variants of Input */
    variant: PropTypes.oneOf(['outlined', 'borderless', 'filled']),

    /** Callback when user input */
    onChange: PropTypes.func,

    /** The callback function that is triggered when the Enter key is pressed */
    onPressEnter: PropTypes.func,

    /** Height auto size feature, can be set to true, false, or an object { minRows: 2, maxRows: 6 } */
    autoSize: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),

    /** Semantic DOM class */
    classNames: PropTypes.shape({
        textarea: PropTypes.string,
        input: PropTypes.string,
        mirror: PropTypes.string,
        counter: PropTypes.string,
        content: PropTypes.string,
    }),

    /** Semantic DOM style */
    styles: PropTypes.shape({
        textarea: PropTypes.object,
        input: PropTypes.object,
        mirror: PropTypes.object,
        counter: PropTypes.object,
        content: PropTypes.object,
    }),
};

Input.Search.propTypes = {
    /** The label text displayed after (on the right side of) the input field */
    addonAfter: PropTypes.node,

    /** The label text displayed before (on the left side of) the input field */
    addonBefore: PropTypes.node,

    /** If allow removing input content with clear icon */
    allowClear: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape({ clearIcon: PropTypes.node })]),

    /** Semantic DOM class */
    classNames: PropTypes.shape({}),

    /** Character count config */
    count: PropTypes.shape({
        formatter: PropTypes.func,
        max: PropTypes.number,
        show: PropTypes.bool,
        suffix: PropTypes.string,
    }),

    /** The initial input content */
    defaultValue: PropTypes.string,

    /** Whether the input is disabled */
    disabled: PropTypes.bool,

    /** The ID for input */
    id: PropTypes.string,

    /** The maximum number of characters in Input */
    maxLength: PropTypes.number,

    /** The prefix icon for the Input */
    prefix: PropTypes.node,

    /** Whether to show character count */
    showCount: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape({ formatter: PropTypes.func })]),

    /** Set validation status */
    status: PropTypes.oneOf(['error', 'warning']),

    /** Semantic DOM style */
    styles: PropTypes.shape({}),

    /** The size of the input box. Note: in the context of a form, the middle size is used */
    size: PropTypes.oneOf(['large', 'middle', 'small']),

    /** The suffix icon for the Input */
    suffix: PropTypes.node,

    /** The type of input, see: MDN (use Input.TextArea instead of type="textarea") */
    type: PropTypes.string,

    /** The input content value */
    value: PropTypes.string,

    /** Variants of Input */
    variant: PropTypes.oneOf(['outlined', 'borderless', 'filled']),

    /** Callback when user input */
    onChange: PropTypes.func,

    /** The callback function that is triggered when the Enter key is pressed */
    onPressEnter: PropTypes.func,

    /** Whether to show an enter button after input. This property conflicts with the addonAfter property */
    enterButton: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.node,
    ]),

    /** Search box with loading */
    loading: PropTypes.bool,

    /** The callback function triggered when you click on the search-icon, the clear-icon, or press the Enter key */
    onSearch: PropTypes.func,
};

Input.Password.propTypes = {
    /** The label text displayed after (on the right side of) the input field */
    addonAfter: PropTypes.node,

    /** The label text displayed before (on the left side of) the input field */
    addonBefore: PropTypes.node,

    /** If allow removing input content with clear icon */
    allowClear: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape({ clearIcon: PropTypes.node })]),

    /** Semantic DOM class */
    classNames: PropTypes.shape({}),

    /** Character count config */
    count: PropTypes.shape({
        formatter: PropTypes.func,
        max: PropTypes.number,
        show: PropTypes.bool,
        suffix: PropTypes.string,
    }),

    /** The initial input content */
    defaultValue: PropTypes.string,

    /** Whether the input is disabled */
    disabled: PropTypes.bool,

    /** The ID for input */
    id: PropTypes.string,

    /** The maximum number of characters in Input */
    maxLength: PropTypes.number,

    /** The prefix icon for the Input */
    prefix: PropTypes.node,

    /** Whether to show character count */
    showCount: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape({ formatter: PropTypes.func })]),

    /** Set validation status */
    status: PropTypes.oneOf(['error', 'warning']),

    /** Semantic DOM style */
    styles: PropTypes.shape({}),

    /** The size of the input box. Note: in the context of a form, the middle size is used */
    size: PropTypes.oneOf(['large', 'middle', 'small']),

    /** The suffix icon for the Input */
    suffix: PropTypes.node,

    /** The type of input, see: MDN (use Input.TextArea instead of type="textarea") */
    type: PropTypes.string,

    /** The input content value */
    value: PropTypes.string,

    /** Variants of Input */
    variant: PropTypes.oneOf(['outlined', 'borderless', 'filled']),

    /** Callback when user input */
    onChange: PropTypes.func,

    /** The callback function that is triggered when the Enter key is pressed */
    onPressEnter: PropTypes.func,

    /** Custom toggle button */
    iconRender: PropTypes.func,

    /** Whether to show toggle button or control password visibility */
    visibilityToggle: PropTypes.bool,
};

InputNumber.propTypes = {
    /** The label text displayed after (on the right side of) the input field */
    addonAfter: PropTypes.node,

    /** The label text displayed before (on the left side of) the input field */
    addonBefore: PropTypes.node,

    /** If get focus when component mounted */
    autoFocus: PropTypes.bool,

    /** Trigger onChange when blur. e.g. reset value in range by blur */
    changeOnBlur: PropTypes.bool,

    /** Whether to show +- controls, or set custom arrows icon */
    controls: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.shape({
            upIcon: PropTypes.node,
            downIcon: PropTypes.node,
        }),
    ]),

    /** Decimal separator */
    decimalSeparator: PropTypes.string,

    /** Placeholder */
    placeholder: PropTypes.string,

    /** The initial value */
    defaultValue: PropTypes.number,

    /** If disable the input */
    disabled: PropTypes.bool,

    /** Specifies the format of the value presented */
    formatter: PropTypes.func,

    /** If enable keyboard behavior */
    keyboard: PropTypes.bool,

    /** The max value */
    max: PropTypes.number,

    /** The min value */
    min: PropTypes.number,

    /** Specifies the value extracted from formatter */
    parser: PropTypes.func,

    /** The precision of input value. Will use formatter when config of formatter */
    precision: PropTypes.number,

    /** If readonly the input */
    readOnly: PropTypes.bool,

    /** Set validation status */
    status: PropTypes.oneOf(['error', 'warning']),

    /** The prefix icon for the Input */
    prefix: PropTypes.node,

    /** The height of input box */
    size: PropTypes.oneOf(['large', 'middle', 'small']),

    /** The number to which the current value is increased or decreased. It can be an integer or decimal */
    step: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /** Set value as string to support high precision decimals. Will return string value by onChange */
    stringMode: PropTypes.bool,

    /** The current value */
    value: PropTypes.number,

    /** Variants of Input */
    variant: PropTypes.oneOf(['outlined', 'borderless', 'filled']),

    /** The callback triggered when the value is changed */
    onChange: PropTypes.func,

    /** The callback function that is triggered when Enter key is pressed */
    onPressEnter: PropTypes.func,

    /** The callback function that is triggered when click up or down buttons */
    onStep: PropTypes.func,
};

Radio.propTypes = {
    /** Whether to get focus when the component is mounted */
    autoFocus: PropTypes.bool,

    /** Specifies whether the radio is selected */
    checked: PropTypes.bool,

    /** Specifies the initial state: whether or not the radio is selected */
    defaultChecked: PropTypes.bool,

    /** Disable radio */
    disabled: PropTypes.bool,

    /** According to value for comparison, to determine whether the selected */
    value: PropTypes.any,
};

Radio.Group.propTypes = {
    /** The style type of radio button */
    buttonStyle: PropTypes.oneOf(['outline', 'solid']),

    /** Default selected value */
    defaultValue: PropTypes.any,

    /** Disable all radio buttons */
    disabled: PropTypes.bool,

    /** The name property of all input[type="radio"] children */
    name: PropTypes.string,

    /** Set children optional */
    options: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.arrayOf(PropTypes.number),
        PropTypes.arrayOf(
            PropTypes.shape({
                label: PropTypes.node,
                value: PropTypes.string,
                disabled: PropTypes.bool,
            })
        ),
    ]),

    /** Set Radio optionType */
    optionType: PropTypes.oneOf(['default', 'button']),

    /** The size of radio button style */
    size: PropTypes.oneOf(['large', 'middle', 'small']),

    /** Used for setting the currently selected value */
    value: PropTypes.any,

    /** The callback function that is triggered when the state changes */
    onChange: PropTypes.func,
};


Rate.propTypes = {
    /** Whether to allow clear when click again */
    allowClear: PropTypes.bool,

    /** Whether to allow semi selection */
    allowHalf: PropTypes.bool,

    /** If get focus when component mounted */
    autoFocus: PropTypes.bool,

    /** The custom character of rate */
    character: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.func,
    ]),

    /** The custom class name of rate */
    className: PropTypes.string,

    /** Star count */
    count: PropTypes.number,

    /** The default value */
    defaultValue: PropTypes.number,

    /** If read-only, unable to interact */
    disabled: PropTypes.bool,

    /** The custom style object of rate */
    style: PropTypes.object,

    /** Customize tooltip by each character */
    tooltips: PropTypes.arrayOf(PropTypes.string),

    /** The current value */
    value: PropTypes.number,

    /** Callback when the component loses focus */
    onBlur: PropTypes.func,

    /** Callback when selecting a value */
    onChange: PropTypes.func,

    /** Callback when the component gets focus */
    onFocus: PropTypes.func,

    /** Callback when hovering over an item */
    onHoverChange: PropTypes.func,

    /** Callback when a key is pressed down on the component */
    onKeyDown: PropTypes.func,
};

Select.propTypes = {
    /** Customize clear icon */
    allowClear: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.shape({ clearIcon: PropTypes.node }),
    ]),

    /** Whether the current search will be cleared on selecting an item. Only applies when mode is set to multiple or tags */
    autoClearSearchValue: PropTypes.bool,

    /** Get focus by default */
    autoFocus: PropTypes.bool,

    /** Whether active first option by default */
    defaultActiveFirstOption: PropTypes.bool,

    /** Initial open state of dropdown */
    defaultOpen: PropTypes.bool,

    /** Initial selected option */
    defaultValue: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.string,
        PropTypes.number,
        PropTypes.number,
        PropTypes.shape({ label: PropTypes.node, value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]) }),
        PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.shape({ label: PropTypes.node, value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]) })])),
    ]),

    /** Whether disabled select */
    disabled: PropTypes.bool,

    /** The className of dropdown menu */
    popupClassName: PropTypes.string,

    /** Determine whether the popup menu and the select input are the same width. Default set min-width same as input. Will ignore when value less than select width. false will disable virtual scroll */
    popupMatchSelectWidth: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),

    /** Customize dropdown content */
    dropdownRender: PropTypes.func,

    /** The style of dropdown menu */
    dropdownStyle: PropTypes.object,

    /** Customize node label, value, options，groupLabel field name */
    fieldNames: PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.string,
        options: PropTypes.string,
        groupLabel: PropTypes.string,
    }),

    /** If true, filter options by input, if function, filter options against it. The function will receive two arguments, inputValue and option, if the function returns true, the option will be included in the filtered set; Otherwise, it will be excluded */
    filterOption: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),

    /** Sort function for search options sorting, see Array.sort's compareFunction */
    filterSort: PropTypes.func,

    /** Parent Node which the selector should be rendered to. Default to body. When position issues happen, try to modify it into scrollable content and position it relative. */
    getPopupContainer: PropTypes.func,

    /** Whether to embed label in value, turn the format of value from string to { value: string, label: ReactNode } */
    labelInValue: PropTypes.bool,

    /** Config popup height */
    listHeight: PropTypes.number,

    /** Indicate loading state */
    loading: PropTypes.bool,

    /** The max number of items can be selected, only applies when mode is multiple or tags */
    maxCount: PropTypes.number,

    /** Max tag count to show. responsive will cost render performance */
    maxTagCount: PropTypes.oneOfType([PropTypes.number, PropTypes.shape({ xs: PropTypes.number, sm: PropTypes.number, md: PropTypes.number, lg: PropTypes.number, xl: PropTypes.number })]),

    /** Placeholder for not showing tags */
    maxTagPlaceholder: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

    /** Max tag text length to show */
    maxTagTextLength: PropTypes.number,

    /** The custom menuItemSelected icon with multiple options */
    menuItemSelectedIcon: PropTypes.node,

    /** Set mode of Select */
    mode: PropTypes.oneOf(['multiple', 'tags']),

    /** Specify content to show when no result matches */
    notFoundContent: PropTypes.node,

    /** Controlled open state of dropdown */
    open: PropTypes.bool,

    /** Which prop value of option will be used for filter if filterOption is true. If options is set, it should be set to label */
    optionFilterProp: PropTypes.string,

    /** Which prop value of option will render as content of select. Example */
    optionLabelProp: PropTypes.string,

    /** Select options. Will get better perf than jsx definition */
    options: PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.node, value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]) })),

    /** Customize the rendering dropdown options */
    optionRender: PropTypes.func,

    /** Placeholder of select */
    placeholder: PropTypes.node,

    /** The position where the selection box pops up */
    placement: PropTypes.oneOf(['bottomLeft', 'bottomRight', 'topLeft', 'topRight']),

    /** The custom remove icon */
    removeIcon: PropTypes.node,

    /** The current input "search" text */
    searchValue: PropTypes.string,

    /** Whether select is searchable */
    showSearch: PropTypes.bool,

    /** Size of Select input */
    size: PropTypes.oneOf(['large', 'middle', 'small']),

    /** Set validation status */
    status: PropTypes.oneOf(['error', 'warning']),

    /** The custom suffix icon. Customize icon will not response click open to avoid icon designed to do other interactive. You can use pointer-events: none style to bypass */
    suffixIcon: PropTypes.node,

    /** Customize tag render, only applies when mode is set to multiple or tags */
    tagRender: PropTypes.func,

    /** Separator used to tokenize, only applies when mode="tags" */
    tokenSeparators: PropTypes.arrayOf(PropTypes.string),

    /** Current selected option (considered as an immutable array) */
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.string,
        PropTypes.number,
        PropTypes.number,
        PropTypes.shape({ label: PropTypes.node, value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]) }),
        PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.shape({ label: PropTypes.node, value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]) })])),
    ]),

    /** Variants of selector */
    variant: PropTypes.oneOf(['outlined', 'borderless', 'filled']),

    /** Disable virtual scroll when set to false */
    virtual: PropTypes.bool,

    /** Called when blur */
    onBlur: PropTypes.func,

    /** Called when select an option or input value changes */
    onChange: PropTypes.func,

    /** Called when clear */
    onClear: PropTypes.func,

    /** Called when an option is deselected, param is the selected option's value. Only called for multiple or tags, effective in multiple or tags mode only */
    onDeselect: PropTypes.func,

    /** Called when dropdown open */
    onDropdownVisibleChange: PropTypes.func,

    /** Called when focus */
    onFocus: PropTypes.func,

    /** Called when key pressed down */
    onInputKeyDown: PropTypes.func,

    /** Called when mouse enter */
    onMouseEnter: PropTypes.func,

    /** Called when mouse leave */
    onMouseLeave: PropTypes.func,

    /** Called when dropdown scrolls */
    onPopupScroll: PropTypes.func,

    /** Callback function that is fired when input changed */
    onSearch: PropTypes.func,

    /** Called when an option is selected, the params are option's value (or key) and option instance */
    onSelect: PropTypes.func,
};


Slider.propTypes = {
    /** Whether to automatically adjust the popup position */
    autoAdjustOverflow: PropTypes.bool,

    /** Whether get focus when component mounted */
    autoFocus: PropTypes.bool,

    /** The default value of slider. When range is false, use number, otherwise, use [number, number] */
    defaultValue: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),

    /** If true, the slider will not be interactable */
    disabled: PropTypes.bool,

    /** Support using keyboard to move handlers */
    keyboard: PropTypes.bool,

    /** Whether the thumb can drag over tick only */
    dots: PropTypes.bool,

    /** Make effect when marks not null, true means containment and false means coordinative */
    included: PropTypes.bool,

    /** Tick mark of Slider, type of key must be number, and must in the closed interval [min, max], each mark can declare its own style */
    marks: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.node, PropTypes.shape({ style: PropTypes.object, label: PropTypes.node })])),

    /** The maximum value the slider can slide to */
    max: PropTypes.number,

    /** The minimum value the slider can slide to */
    min: PropTypes.number,

    /** Dual thumb mode */
    range: PropTypes.bool,

    /** Reverse the component */
    reverse: PropTypes.bool,

    /** The granularity the slider can step through values. Must be greater than 0 and be divided by (max - min). When marks not null, step can be null */
    step: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([null])]),

    /** The tooltip related props */
    tooltip: PropTypes.object,

    /** The value of slider. When range is false, use number, otherwise, use [number, number] */
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),

    /** If true, the slider will be vertical */
    vertical: PropTypes.bool,

    /** Fire when mouseup or keyup is fired */
    onChangeComplete: PropTypes.func,

    /** Callback function that is fired when the user changes the slider's value */
    onChange: PropTypes.func,
};

TimePicker.propTypes = {
    /** Customize clear icon */
    allowClear: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.shape({
            clearIcon: PropTypes.node,
        }),
    ]),

    /** If get focus when the component is mounted */
    autoFocus: PropTypes.bool,

    /** Custom rendering function for picker cells */
    cellRender: PropTypes.func,

    /** Trigger change when blur. e.g. datetime picker no need click confirm button */
    changeOnBlur: PropTypes.bool,

    /** The className of picker */
    className: PropTypes.string,

    /** To set default time */
    defaultValue: PropTypes.object, // Assuming dayjs object, you can adjust the type accordingly

    /** Determine whether the TimePicker is disabled */
    disabled: PropTypes.bool,

    /** To specify the time that cannot be selected */
    disabledTime: PropTypes.object,

    /** To set the time format */
    format: PropTypes.string,

    /** To set the container of the floating layer, while the default is to create a div element in body */
    getPopupContainer: PropTypes.func,

    /** Whether hide the options that can not be selected */
    hideDisabledOptions: PropTypes.bool,

    /** Interval between hours in picker */
    hourStep: PropTypes.number,

    /** Set the readonly attribute of the input tag (avoids virtual keyboard on touch devices) */
    inputReadOnly: PropTypes.bool,

    /** Interval between minutes in picker */
    minuteStep: PropTypes.number,

    /** Whether to popup panel */
    open: PropTypes.bool,

    /** Display when there's no value */
    placeholder: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
    ]),

    /** The position where the selection box pops up */
    placement: PropTypes.oneOf(['bottomLeft', 'bottomRight', 'topLeft', 'topRight']),

    /** The className of panel */
    popupClassName: PropTypes.string,

    /** The style of panel */
    popupStyle: PropTypes.object,

    /** Called from time picker panel to render some addon to its bottom */
    renderExtraFooter: PropTypes.func,

    /** Interval between seconds in picker */
    secondStep: PropTypes.number,

    /** Whether to show Now button on panel */
    showNow: PropTypes.bool,

    /** To determine the size of the input box, the height of large and small, are 40px and 24px respectively, while default size is 32px */
    size: PropTypes.oneOf(['large', 'middle', 'small']),

    /** Set validation status */
    status: PropTypes.oneOf(['error', 'warning', 'success', 'validating']),

    /** The custom suffix icon */
    suffixIcon: PropTypes.node,

    /** Display as 12 hours format, with default format h:mm:ss a */
    use12Hours: PropTypes.bool,

    /** To set time */
    value: PropTypes.object, // Assuming dayjs object, you can adjust the type accordingly

    /** Variants of picker */
    variant: PropTypes.oneOf(['outlined', 'borderless', 'filled']),

    /** A callback function, can be executed when the selected time is changing */
    onChange: PropTypes.func,

    /** A callback function which will be called while panel opening/closing */
    onOpenChange: PropTypes.func,

    /** A callback function, executes when a value is selected */
    onSelect: PropTypes.func,
};


Transfer.propTypes = {
    /** Used for setting the source data. The elements that are part of this array will be present in the left column. Except the elements whose keys are included in the targetKeys prop */
    dataSource: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.string.isRequired,
            title: PropTypes.node,
            description: PropTypes.node,
            disabled: PropTypes.bool,
        })
    ),

    /** Whether disabled transfer */
    disabled: PropTypes.bool,

    /** Custom dropdown icon */
    selectionsIcon: PropTypes.node,

    /** A function to determine whether an item should show in the search result list, only works when searching */
    filterOption: PropTypes.func,

    /** A function used for rendering the footer */
    footer: PropTypes.func,

    /** A custom CSS style used for rendering the transfer columns */
    listStyle: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.func,
    ]),

    /** The i18n text including filter, empty text, item unit, etc */
    locale: PropTypes.shape({
        itemUnit: PropTypes.string,
        itemsUnit: PropTypes.string,
        searchPlaceholder: PropTypes.string,
        notFoundContent: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
    }),

    /** Display as single direction style */
    oneWay: PropTypes.bool,

    /** A set of operations that are sorted from top to bottom */
    operations: PropTypes.arrayOf(PropTypes.string),

    /** A custom CSS style used for rendering the operations column */
    operationStyle: PropTypes.object,

    /** Use pagination. Not work in render props */
    pagination: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.shape({
            pageSize: PropTypes.number,
            simple: PropTypes.bool,
            showSizeChanger: PropTypes.bool,
            showLessItems: PropTypes.bool,
        }),
    ]),

    /** The function to generate the item shown on a column. Based on a record (element of the dataSource array), this function should return a React element which is generated from that record. Also, it can return a plain object with value and label, label is a React element and value is for title */
    render: PropTypes.func,

    /** A set of customized labels for select all checkboxes on the header */
    selectAllLabels: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.node,
            PropTypes.func,
        ])
    ),

    /** A set of keys of selected items */
    selectedKeys: PropTypes.arrayOf(PropTypes.string),

    /** If included, a search box is shown on each column */
    showSearch: PropTypes.bool,

    /** Show select all checkbox on the header */
    showSelectAll: PropTypes.bool,

    /** Set validation status */
    status: PropTypes.oneOf(['error', 'warning']),

    /** A set of keys of elements that are listed on the right column */
    targetKeys: PropTypes.arrayOf(PropTypes.string),

    /** A set of titles that are sorted from left to right */
    titles: PropTypes.arrayOf(PropTypes.node),

    /** A callback function that is executed when the transfer between columns is complete */
    onChange: PropTypes.func,

    /** A callback function which is executed when scroll options list */
    onScroll: PropTypes.func,

    /** A callback function which is executed when search field is changed */
    onSearch: PropTypes.func,

    /** A callback function which is executed when selected items are changed */
    onSelectChange: PropTypes.func,
};

TreeSelect.propTypes = {
    /** Customize clear icon */
    allowClear: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.shape({ clearIcon: PropTypes.node }),
    ]),

    /** If auto clear search input value when multiple select is selected/deselected */
    autoClearSearchValue: PropTypes.bool,

    /** To set the initial selected treeNode(s) */
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),

    /** Disabled or not */
    disabled: PropTypes.bool,

    /** The className of dropdown menu */
    popupClassName: PropTypes.string,

    /** Determine whether the popup menu and the select input are the same width. Default set min-width same as input. Will ignore when value less than select width. false will disable virtual scroll */
    popupMatchSelectWidth: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),

    /** Customize dropdown content */
    dropdownRender: PropTypes.func,

    /** To set the style of the dropdown menu */
    dropdownStyle: PropTypes.object,

    /** Customize node label, value, children field name */
    fieldNames: PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.string,
        children: PropTypes.string,
    }),

    /** Whether to filter treeNodes by input value. The value of treeNodeFilterProp is used for filtering by default */
    filterTreeNode: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),

    /** To set the container of the dropdown menu. The default is to create a div element in body, you can reset it to the scrolling area and make a relative reposition. example */
    getPopupContainer: PropTypes.func,

    /** Whether to embed label in value, turn the format of value from string to {value: string, label: ReactNode, halfChecked: string[]} */
    labelInValue: PropTypes.bool,

    /** Config popup height */
    listHeight: PropTypes.number,

    /** Load data asynchronously. Will not load when filtering. Check FAQ for more info */
    loadData: PropTypes.func,

    /** Max tag count to show. responsive will cost render performance */
    maxTagCount: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),

    /** Placeholder for not showing tags */
    maxTagPlaceholder: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

    /** Max tag text length to show */
    maxTagTextLength: PropTypes.number,

    /** Support multiple or not, will be true when enable treeCheckable */
    multiple: PropTypes.bool,

    /** Specify content to show when no result matches */
    notFoundContent: PropTypes.node,

    /** Placeholder of the select input */
    placeholder: PropTypes.string,

    /** The position where the selection box pops up */
    placement: PropTypes.oneOf(['bottomLeft', 'bottomRight', 'topLeft', 'topRight']),

    /** Work with onSearch to make search value controlled */
    searchValue: PropTypes.string,

    /** The way show selected item in box when treeCheckable set. Default: just show child nodes. TreeSelect.SHOW_ALL: show all checked treeNodes (include parent treeNode). TreeSelect.SHOW_PARENT: show checked treeNodes (just show parent treeNode) */
    showCheckedStrategy: PropTypes.oneOf(['SHOW_ALL', 'SHOW_PARENT', 'SHOW_CHILD']),

    /** Support search or not */
    showSearch: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.shape({
            single: PropTypes.bool,
            multiple: PropTypes.bool,
        }),
    ]),

    /** To set the size of the select input */
    size: PropTypes.oneOf(['large', 'middle', 'small']),

    /** Set validation status */
    status: PropTypes.oneOf(['error', 'warning']),

    /** The custom suffix icon */
    suffixIcon: PropTypes.node,

    /** Customize collapse/expand icon of tree node */
    switcherIcon: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.func,
        PropTypes.shape({
            render: PropTypes.func,
        }),
    ]),

    /** Customize tag render when multiple */
    tagRender: PropTypes.func,

    /** Whether to show checkbox on the treeNodes */
    treeCheckable: PropTypes.bool,

    /** Whether to check nodes precisely (in the checkable mode), means parent and child nodes are not associated, and it will make labelInValue be true */
    treeCheckStrictly: PropTypes.bool,

    /** Data of the treeNodes, manual construction work is no longer needed if this property has been set(ensure the Uniqueness of each value) */
    treeData: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.any,
            title: PropTypes.node,
            children: PropTypes.array,
            disabled: PropTypes.bool,
            disableCheckbox: PropTypes.bool,
            selectable: PropTypes.bool,
            checkable: PropTypes.bool,
        })
    ),

    /** Enable simple mode of treeData. Changes the treeData schema to: [{id:1, pId:0, value:'1', title:"test1",...},...] where pId is parent node's id). It is possible to replace the default id and pId keys by providing object to treeDataSimpleMode */
    treeDataSimpleMode: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),

    /** Whether to expand all treeNodes by default */
    treeDefaultExpandAll: PropTypes.bool,

    /** Default expanded treeNodes */
    treeDefaultExpandedKeys: PropTypes.arrayOf(PropTypes.string),

    /** Tree title open logic when click, optional: false | click | doubleClick */
    treeExpandAction: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['false', 'click', 'doubleClick'])]),

    /** Set expanded keys */
    treeExpandedKeys: PropTypes.arrayOf(PropTypes.string),

    /** Shows the icon before a TreeNode's title. There is no default style; you must set a custom style for it if set to true */
    treeIcon: PropTypes.bool,

    /** (Controlled) Set loaded tree nodes, work with loadData only */
    treeLoadedKeys: PropTypes.arrayOf(PropTypes.string),

    /** Show the line. Ref Tree - showLine */
    treeLine: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),

    /** Will be used for filtering if filterTreeNode returns true */
    treeNodeFilterProp: PropTypes.string,

    /** Will render as content of select */
    treeNodeLabelProp: PropTypes.string,

    /** To set the current selected treeNode(s) */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),

    /** Variants of selector */
    variant: PropTypes.oneOf(['outlined', 'borderless', 'filled']),

    /** Disable virtual scroll when set to false */
    virtual: PropTypes.bool,

    /** A callback function, can be executed when selected treeNodes or input value change */
    onChange: PropTypes.func,

    /** Called when dropdown open */
    onDropdownVisibleChange: PropTypes.func,

    /** A callback function, can be executed when the search input changes */
    onSearch: PropTypes.func,

    /** A callback function, can be executed when you select a treeNode */
    onSelect: PropTypes.func,

    /** A callback function, can be executed when treeNode expanded */
    onTreeExpand: PropTypes.func,
};

Upload.propTypes = {
    /** File types that can be accepted. See input accept Attribute */
    accept: PropTypes.string,

    /** Uploading URL */
    action: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),

    /** Hook function which will be executed before uploading. Uploading will be stopped with false or a rejected Promise returned. When returned value is Upload.LIST_IGNORE, the list of files that have been uploaded will ignore it. Warning：this function is not supported in IE9 */
    beforeUpload: PropTypes.func,

    /** Override for the default xhr behavior allowing for additional customization and the ability to implement your own XMLHttpRequest */
    customRequest: PropTypes.func,

    /** Uploading extra params or function which can return uploading extra params */
    data: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),

    /** Default list of files that have been uploaded */
    defaultFileList: PropTypes.arrayOf(PropTypes.object),

    /** Support upload whole directory (caniuse) */
    directory: PropTypes.bool,

    /** Disable upload button */
    disabled: PropTypes.bool,

    /** List of files that have been uploaded (controlled). Here is a common issue #2423 when using it */
    fileList: PropTypes.arrayOf(PropTypes.object),

    /** Set request headers, valid above IE10 */
    headers: PropTypes.object,

    /** Custom show icon */
    iconRender: PropTypes.func,

    /** Customize if render <img /> in thumbnail */
    isImageUrl: PropTypes.func,

    /** Custom item of uploadList */
    itemRender: PropTypes.func,

    /** Built-in stylesheets, support for four types: text, picture, picture-card or picture-circle */
    listType: PropTypes.oneOf(['text', 'picture', 'picture-card', 'picture-circle']),

    /** Limit the number of uploaded files. Will replace current one when maxCount is 1 */
    maxCount: PropTypes.number,

    /** The http method of upload request */
    method: PropTypes.string,

    /** Whether to support selected multiple files. IE10+ supported. You can select multiple files with CTRL holding down while multiple is set to be true */
    multiple: PropTypes.bool,

    /** The name of uploading file */
    name: PropTypes.string,

    /** Click open file dialog */
    openFileDialogOnClick: PropTypes.bool,

    /** Customize preview file logic */
    previewFile: PropTypes.func,

    /** Custom progress bar */
    progress: PropTypes.shape({
        strokeWidth: PropTypes.number,
        showInfo: PropTypes.bool,
    }),

    /** Whether to show default upload list, could be an object to specify showPreviewIcon, showRemoveIcon, showDownloadIcon, removeIcon and downloadIcon individually */
    showUploadList: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.shape({
            showPreviewIcon: PropTypes.bool,
            showDownloadIcon: PropTypes.bool,
            showRemoveIcon: PropTypes.bool,
            previewIcon: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
            removeIcon: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
            downloadIcon: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
        }),
    ]),

    /** The ajax upload with cookie sent */
    withCredentials: PropTypes.bool,

    /** A callback function, can be executed when uploading state is changing. It will trigger by every uploading phase. see onChange */
    onChange: PropTypes.func,

    /** A callback function executed when files are dragged and dropped into the upload area */
    onDrop: PropTypes.func,

    /** Click the method to download the file, pass the method to perform the method logic, and do not pass the default jump to the new TAB */
    onDownload: PropTypes.func,

    /** A callback function, will be executed when the file link or preview icon is clicked */
    onPreview: PropTypes.func,

    /** A callback function, will be executed when removing file button is clicked, remove event will be prevented when the return value is false or a Promise which resolve(false) or reject */
    onRemove: PropTypes.func,
};

UploadFile.propTypes = {
    /** File types that can be accepted. See input accept Attribute */
    accept: PropTypes.string,

    /** Uploading URL */
    action: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),

    /** Hook function which will be executed before uploading. Uploading will be stopped with false or a rejected Promise returned. When returned value is Upload.LIST_IGNORE, the list of files that have been uploaded will ignore it. Warning：this function is not supported in IE9 */
    beforeUpload: PropTypes.func,

    /** Override for the default xhr behavior allowing for additional customization and the ability to implement your own XMLHttpRequest */
    customRequest: PropTypes.func,

    /** Uploading extra params or function which can return uploading extra params */
    data: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.instanceOf(Promise)]),

    /** Default list of files that have been uploaded */
    defaultFileList: PropTypes.arrayOf(PropTypes.object),

    /** Support upload whole directory (caniuse) */
    directory: PropTypes.bool,

    /** Disable upload button */
    disabled: PropTypes.bool,

    /** List of files that have been uploaded (controlled). Here is a common issue #2423 when using it */
    fileList: PropTypes.arrayOf(PropTypes.object),

    /** Set request headers, valid above IE10 */
    headers: PropTypes.object,

    /** Custom show icon */
    iconRender: PropTypes.func,

    /** Customize if render <img /> in thumbnail */
    isImageUrl: PropTypes.func,

    /** Custom item of uploadList */
    itemRender: PropTypes.func,

    /** Built-in stylesheets, support for four types: text, picture, picture-card or picture-circle */
    listType: PropTypes.oneOf(['text', 'picture', 'picture-card', 'picture-circle']),

    /** Limit the number of uploaded files. Will replace current one when maxCount is 1 */
    maxCount: PropTypes.number,

    /** The http method of upload request */
    method: PropTypes.string,

    /** Whether to support selected multiple files. IE10+ supported. You can select multiple files with CTRL holding down while multiple is set to be true */
    multiple: PropTypes.bool,

    /** The name of uploading file */
    name: PropTypes.string,

    /** Click open file dialog */
    openFileDialogOnClick: PropTypes.bool,

    /** Customize preview file logic */
    previewFile: PropTypes.func,

    /** Custom progress bar */
    progress: PropTypes.shape({
        strokeWidth: PropTypes.number,
        showInfo: PropTypes.bool,
    }),

    /** Whether to show default upload list, could be an object to specify showPreviewIcon, showRemoveIcon, showDownloadIcon, removeIcon and downloadIcon individually */
    showUploadList: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.shape({
            showPreviewIcon: PropTypes.bool,
            showDownloadIcon: PropTypes.bool,
            showRemoveIcon: PropTypes.bool,
            previewIcon: PropTypes.node,
            removeIcon: PropTypes.node,
            downloadIcon: PropTypes.node,
        }),
    ]),

    /** The ajax upload with cookie sent */
    withCredentials: PropTypes.bool,

    /** A callback function, can be executed when uploading state is changing. It will trigger by every uploading phase. see onChange */
    onChange: PropTypes.func,

    /** A callback function executed when files are dragged and dropped into the upload area */
    onDrop: PropTypes.func,

    /** Click the method to download the file, pass the method to perform the method logic, and do not pass the default jump to the new TAB */
    onDownload: PropTypes.func,

    /** A callback function, will be executed when the file link or preview icon is clicked */
    onPreview: PropTypes.func,

    /** A callback function, will be executed when removing file button is clicked, remove event will be prevented when the return value is false or a Promise which resolve(false) or reject */
    onRemove: PropTypes.oneOfType([PropTypes.bool, PropTypes.func, PropTypes.instanceOf(Promise)]),

    /** CORS settings attributes */
    crossOrigin: PropTypes.oneOf(['anonymous', 'use-credentials', '']),

    /** File name */
    name: PropTypes.string,

    /** Upload progress percent */
    percent: PropTypes.number,

    /** Upload status. Show different style when configured: error | done | uploading | removed */
    status: PropTypes.oneOf(['error', 'done', 'uploading', 'removed']),

    /** Thumb image url */
    thumbUrl: PropTypes.string,

    /** Unique id. Will auto-generate when not provided */
    uid: PropTypes.string,

    /** Download url */
    url: PropTypes.string,
};

// Avatar
Avatar.propTypes = {
    /** This attribute defines the alternative text describing the image */
    alt: PropTypes.string,

    /** Letter type unit distance between left and right sides */
    gap: PropTypes.number,

    /** Custom icon type for an icon avatar */
    icon: PropTypes.node,

    /** The shape of avatar */
    shape: PropTypes.oneOf(['circle', 'square']),

    /** The size of the avatar */
    size: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.oneOf(['large', 'small', 'default']),
        PropTypes.shape({
            xs: PropTypes.number,
            sm: PropTypes.number,
            // ...other sizes
        }),
    ]),

    /** The address of the image for an image avatar or image element */
    src: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

    /** A list of sources to use for different screen resolutions */
    srcSet: PropTypes.string,

    /** Whether the picture is allowed to be dragged */
    draggable: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['true', 'false'])]),

    /** CORS settings attributes */
    crossOrigin: PropTypes.oneOf(['anonymous', 'use-credentials', '']),

    /** Handler when img load error, return false to prevent default fallback behavior */
    onError: PropTypes.func,
};

// Avatar.Group
Avatar.Group.propTypes = {
    /** Max avatars to show */
    maxCount: PropTypes.number,

    /** The placement of excess avatar Popover */
    maxPopoverPlacement: PropTypes.oneOf(['top', 'bottom']),

    /** Set the trigger of excess avatar Popover */
    maxPopoverTrigger: PropTypes.oneOf(['hover', 'focus', 'click']),

    /** The style of excess avatar style */
    maxStyle: PropTypes.object,

    /** The size of the avatar */
    size: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.oneOf(['large', 'small', 'default']),
        PropTypes.shape({
            xs: PropTypes.number,
            sm: PropTypes.number,
            // ...other sizes
        }),
    ]),

    /** The shape of the avatar */
    shape: PropTypes.oneOf(['circle', 'square']),
};

Badge.propTypes = {
    /** Customize Badge dot color */
    color: PropTypes.string,

    /** Number to show in badge */
    count: PropTypes.node,

    /** Semantic DOM class */
    classNames: PropTypes.objectOf(PropTypes.string), // Since 5.7.0

    /** Whether to display a red dot instead of count */
    dot: PropTypes.bool,

    /** Set offset of the badge dot */
    offset: PropTypes.arrayOf(PropTypes.number),

    /** Max count to show */
    overflowCount: PropTypes.number,

    /** Whether to show badge when count is zero */
    showZero: PropTypes.bool,

    /** If count is set, size sets the size of badge */
    size: PropTypes.oneOf(['default', 'small']),

    /** Set Badge as a status dot */
    status: PropTypes.oneOf(['success', 'processing', 'default', 'error', 'warning']),

    /** Semantic DOM style */
    styles: PropTypes.objectOf(PropTypes.object), // Since 5.7.0

    /** If status is set, text sets the display text of the status dot */
    text: PropTypes.node,

    /** Text to show when hovering over the badge */
    title: PropTypes.string,
};

Badge.Ribbon.propTypes = {
    /** Customize Ribbon color */
    color: PropTypes.string,

    /** The placement of the Ribbon, start and end follow text direction (RTL or LTR) */
    placement: PropTypes.oneOf(['start', 'end']),

    /** Content inside the Ribbon */
    text: PropTypes.node,
};

Calendar.propTypes = {
    /** Customize the display of the date cell, the returned content will be appended to the cell */
    dateCellRender: PropTypes.func,

    /** Customize the display of the date cell, the returned content will override the cell */
    dateFullCellRender: PropTypes.func,

    /** The date selected by default */
    defaultValue: PropTypes.instanceOf(Dayjs),

    /** Function that specifies the dates that cannot be selected, currentDate is the same dayjs object as the value prop which you shouldn't mutate */
    disabledDate: PropTypes.func,

    /** Whether to display in full-screen */
    fullscreen: PropTypes.bool,

    /** Render custom header in panel */
    headerRender: PropTypes.func,

    /** The calendar's locale */
    locale: PropTypes.object,

    /** The display mode of the calendar */
    mode: PropTypes.oneOf(['month', 'year']),

    /** Customize the display of the month cell, the returned content will be appended to the cell */
    monthCellRender: PropTypes.func,

    /** Customize the display of the month cell, the returned content will override the cell */
    monthFullCellRender: PropTypes.func,

    /** To set valid range */
    validRange: PropTypes.arrayOf(PropTypes.instanceOf(Dayjs)),

    /** The current selected date */
    value: PropTypes.instanceOf(Dayjs),

    /** Callback for when date changes */
    onChange: PropTypes.func,

    /** Callback for when panel changes */
    onPanelChange: PropTypes.func,

    /** Callback for when a date is selected, include source info */
    onSelect: PropTypes.func,
};

Card.propTypes = {
    /** The action list, shows at the bottom of the Card */
    actions: PropTypes.arrayOf(PropTypes.node),

    /** Current TabPane's key */
    activeTabKey: PropTypes.string,

    /** Inline style to apply to the card content */
    bodyStyle: PropTypes.objectOf(CSSProperties),

    /** Toggles rendering of the border around the card */
    bordered: PropTypes.bool,

    /** Card cover */
    cover: PropTypes.node,

    /** Initial active TabPane's key, if activeTabKey is not set */
    defaultActiveTabKey: PropTypes.string,

    /** Content to render in the top-right corner of the card */
    extra: PropTypes.node,

    /** Inline style to apply to the card head */
    headStyle: PropTypes.objectOf(CSSProperties),

    /** Lift up when hovering card */
    hoverable: PropTypes.bool,

    /** Shows a loading indicator while the contents of the card are being fetched */
    loading: PropTypes.bool,

    /** Size of card */
    size: PropTypes.oneOf(['default', 'small']),

    /** Extra content in tab bar */
    tabBarExtraContent: PropTypes.node,

    /** List of TabPane's head */
    tabList: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.string.isRequired,
            tab: PropTypes.node.isRequired,
        })
    ),

    /** Tabs */
    tabProps: PropTypes.object,

    /** Card title */
    title: PropTypes.node,

    /** Card style type, can be set to inner or not set */
    type: PropTypes.string,

    /** Callback when tab is switched */
    onTabChange: PropTypes.func,
};

Card.Grid.propTypes = {
    /** The className of container */
    className: PropTypes.string,

    /** Lift up when hovering card grid */
    hoverable: PropTypes.bool,

    /** The style object of container */
    style: PropTypes.objectOf(CSSProperties),
};

Card.Meta.propTypes = {
    /** Avatar or icon */
    avatar: PropTypes.node,

    /** The className of container */
    className: PropTypes.string,

    /** Description content */
    description: PropTypes.node,

    /** The style object of container */
    style: PropTypes.objectOf(CSSProperties),

    /** Title content */
    title: PropTypes.node,
};

Collapse.propTypes = {
    /** If true, Collapse renders as Accordion */
    accordion: PropTypes.bool,

    /** Key of the active panel */
    activeKey: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
    ]),

    /** Toggles rendering of the border around the collapse block */
    bordered: PropTypes.bool,

    /** Specify whether the panels of children be collapsible or the trigger area of collapsible */
    collapsible: PropTypes.oneOf(['header', 'icon', 'disabled']),

    /** Key of the initial active panel */
    defaultActiveKey: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
    ]),

    /** Destroy Inactive Panel */
    destroyInactivePanel: PropTypes.bool,

    /** Allow to customize collapse icon */
    expandIcon: PropTypes.func,

    /** Set expand icon position */
    expandIconPosition: PropTypes.oneOf(['start', 'end']),

    /** Make the collapse borderless and its background transparent */
    ghost: PropTypes.bool,

    /** Set the size of collapse */
    size: PropTypes.oneOf(['large', 'middle', 'small']),

    /** Callback function executed when active panel is changed */
    onChange: PropTypes.func,

    /** Collapse items content */
    items: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            header: PropTypes.node,
            content: PropTypes.node,
        })
    ),
};

Collapse.Panel.propTypes = {
    /** Specify whether the panel be collapsible or the trigger area of collapsible */
    collapsible: PropTypes.oneOf(['header', 'icon', 'disabled']),

    /** The extra element in the corner */
    extra: PropTypes.node,

    /** Forced render of content on panel, instead of lazy rendering after clicking on header */
    forceRender: PropTypes.bool,

    /** Title of the panel */
    header: PropTypes.node,

    /** Unique key identifying the panel from among its siblings */
    key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /** If false, panel will not show arrow icon. If false, collapsible can't be set as icon */
    showArrow: PropTypes.bool,
};

Descriptions.propTypes = {
    /** Whether to display the border */
    bordered: PropTypes.bool,

    /** Change default props colon value of Descriptions.Item */
    colon: PropTypes.bool,

    /** The number of DescriptionItems in a row, could be a number or an object like { xs: 8, sm: 16, md: 24} (Only set bordered={true} to take effect) */
    column: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.shape({
            xs: PropTypes.number,
            sm: PropTypes.number,
            md: PropTypes.number,
        }),
    ]),

    /** Customize content style */
    contentStyle: PropTypes.object,

    /** The action area of the description list, placed at the top-right */
    extra: PropTypes.node,

    /** Describe the contents of the list item */
    items: PropTypes.arrayOf(
        PropTypes.shape({
            contentStyle: PropTypes.object,
            label: PropTypes.node,
            labelStyle: PropTypes.object,
            span: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
        })
    ),

    /** Customize label style */
    labelStyle: PropTypes.object,

    /** Define description layout */
    layout: PropTypes.oneOf(['horizontal', 'vertical']),

    /** Set the size of the list. Can be set to middle, small, or not filled */
    size: PropTypes.oneOf(['default', 'middle', 'small']),

    /** The title of the description list, placed at the top */
    title: PropTypes.node,
};

DescriptionsItem.propTypes = {
    /** Customize content style */
    contentStyle: PropTypes.object,

    /** The description of the content */
    label: PropTypes.node,

    /** Customize label style */
    labelStyle: PropTypes.object,

    /** The number of columns included */
    span: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
};

Empty.propTypes = {
    /** Customize description */
    description: PropTypes.node,

    /** Customize image. Will treat as image URL when a string is provided */
    image: PropTypes.node,

    /** The style of the image */
    imageStyle: PropTypes.object,
};

Image.propTypes = {
    /** Image description */
    alt: PropTypes.string,

    /** Load failure fault-tolerant src */
    fallback: PropTypes.string,

    /** Image height */
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /** Load placeholder, use default placeholder when set true */
    placeholder: PropTypes.node,

    /** Preview config, disabled when false */
    preview: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape(PreviewType)]),

    /** Image path */
    src: PropTypes.string,

    /** Image width */
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /** Load failed callback */
    onError: PropTypes.func,
};

Image.PreviewType.propTypes = {
    /** Whether the preview dialog is visible or not */
    visible: PropTypes.bool,

    /** Custom preview src */
    src: PropTypes.string,

    /** The mounted node for the preview dialog but still display at full screen */
    getContainer: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(HTMLElement),
        PropTypes.func,
        PropTypes.bool,
    ]),

    /** Whether can be moved */
    movable: PropTypes.bool,

    /** Thumbnail mask */
    mask: PropTypes.node,

    /** The className of the mask */
    maskClassName: PropTypes.string,

    /** The classname of the preview root DOM */
    rootClassName: PropTypes.string,

    /** 1 + scaleStep is the step to increase or decrease the scale */
    scaleStep: PropTypes.number,

    /** Min scale */
    minScale: PropTypes.number,

    /** Max scale */
    maxScale: PropTypes.number,

    /** Custom close icon */
    closeIcon: PropTypes.node,

    /** Force render preview dialog */
    forceRender: PropTypes.bool,

    /** Custom toolbar render */
    toolbarRender: PropTypes.func,

    /** Custom preview content */
    imageRender: PropTypes.func,

    /** Callback when the transform of image changed */
    onTransform: PropTypes.func,

    /** Callback when visible changed */
    onVisibleChange: PropTypes.func,
};

Image.PreviewGroup.propTypes = {
    /** Preview config, disabled when false */
    preview: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape(PreviewGroupType)]),

    /** Preview items */
    items: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.arrayOf(PropTypes.shape({ src: PropTypes.string, crossOrigin: PropTypes.string })),
    ]),

    /** Load failure fault-tolerant src */
    fallback: PropTypes.string,
};

Image.PreviewGroupType.propTypes = {
    /** Whether the preview dialog is visible or not */
    visible: PropTypes.bool,

    /** The mounted node for the preview dialog but still display at full screen */
    getContainer: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(HTMLElement),
        PropTypes.func,
        PropTypes.bool,
    ]),

    /** Whether can be moved */
    movable: PropTypes.bool,

    /** The index of the current preview */
    current: PropTypes.number,

    /** Thumbnail mask */
    mask: PropTypes.node,

    /** The className of the mask */
    maskClassName: PropTypes.string,

    /** The classname of the preview root DOM */
    rootClassName: PropTypes.string,

    /** 1 + scaleStep is the step to increase or decrease the scale */
    scaleStep: PropTypes.number,

    /** Min scale */
    minScale: PropTypes.number,

    /** Max scale */
    maxScale: PropTypes.number,

    /** Custom close icon */
    closeIcon: PropTypes.node,

    /** Force render preview dialog */
    forceRender: PropTypes.bool,

    /** Custom preview count content */
    countRender: PropTypes.func,

    /** Custom toolbar render */
    toolbarRender: PropTypes.func,

    /** Custom preview content */
    imageRender: PropTypes.func,

    /** Callback when the transform of image changed */
    onTransform: PropTypes.func,

    /** Callback when switch preview image */
    onChange: PropTypes.func,

    /** Callback when visible changed */
    onVisibleChange: PropTypes.func,
};

List.propTypes = {
    /** Toggles rendering of the border around the list */
    bordered: PropTypes.bool,

    /** DataSource array for list */
    dataSource: PropTypes.arrayOf(PropTypes.any),

    /** List footer renderer */
    footer: PropTypes.node,

    /** The grid type of list. You can set grid to something like {gutter: 16, column: 4} */
    grid: PropTypes.shape({
        gutter: PropTypes.number,
        column: PropTypes.number,
    }),

    /** List header renderer */
    header: PropTypes.node,

    /** The layout of list */
    itemLayout: PropTypes.oneOf(['horizontal', 'vertical']),

    /** Shows a loading indicator while the contents of the list are being fetched */
    loading: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),

    /** Shows a load more content */
    loadMore: PropTypes.node,

    /** The i18n text including empty text */
    locale: PropTypes.shape({
        emptyText: PropTypes.node,
    }),

    /** Pagination config, hide it by setting it to false */
    pagination: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),

    /** Customize list item when using dataSource */
    renderItem: PropTypes.func,

    /** Item's unique value, could be an Item's key which holds a unique value of type React.Key
     * or function that receives Item and returns a React.Key */
    rowKey: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),

    /** Size of list */
    size: PropTypes.oneOf(['default', 'large', 'small']),

    /** Toggles rendering of the split under the list item */
    split: PropTypes.bool,
};

List.Item.propTypes = {
    /** The actions content of list item. If itemLayout is vertical, shows the content on bottom, otherwise shows content on the far right */
    actions: PropTypes.arrayOf(PropTypes.node),

    /** The extra content of list item. If itemLayout is vertical, shows the content on right, otherwise shows content on the far right */
    extra: PropTypes.node,
};

List.Item.Meta.propTypes = {
    /** The avatar of list item */
    avatar: PropTypes.node,

    /** The description of list item */
    description: PropTypes.node,

    /** The title of list item */
    title: PropTypes.node,
};

Popover.propTypes = {
    /** Content of the card */
    content: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

    /** Title of the card */
    title: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
};

QRCode.propTypes = {
    /** Scanned text */
    value: PropTypes.string.isRequired,

    /** Render type: 'canvas' or 'svg' */
    type: PropTypes.oneOf(['canvas', 'svg']),

    /** Include image URL (only image links are supported) */
    icon: PropTypes.string,

    /** QRCode size */
    size: PropTypes.number,

    /** Include image size */
    iconSize: PropTypes.number,

    /** QRCode color */
    color: PropTypes.string,

    /** QRCode background color */
    bgColor: PropTypes.string,

    /** Whether it has border style */
    bordered: PropTypes.bool,

    /** Error Code Level: 'L', 'M', 'Q', 'H' */
    errorLevel: PropTypes.oneOf(['L', 'M', 'Q', 'H']),

    /** QRCode status: 'active', 'expired', 'loading', 'scanned' */
    status: PropTypes.oneOf(['active', 'expired', 'loading', 'scanned']),

    /** Callback function when refreshing */
    onRefresh: PropTypes.func,
};

Segmented.propTypes = {
    /** Option to fit width to its parent's width */
    block: PropTypes.bool,

    /** Default selected value */
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /** Disable all segments */
    disabled: PropTypes.bool,

    /** Callback function triggered when the state changes */
    onChange: PropTypes.func,

    /** Set children options */
    options: PropTypes.oneOfType([
        PropTypes.arrayOf(
            PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number,
                PropTypes.shape({
                    label: PropTypes.node,
                    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
                    icon: PropTypes.node,
                    disabled: PropTypes.bool,
                    className: PropTypes.string,
                }),
            ])
        ),
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.arrayOf(PropTypes.number),
    ]),

    /** The size of the Segmented: 'large', 'middle', 'small' */
    size: PropTypes.oneOf(['large', 'middle', 'small']),

    /** Currently selected value */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Statistic.propTypes = {
    /** The decimal separator */
    decimalSeparator: PropTypes.string,

    /** Customize value display logic */
    formatter: PropTypes.func,

    /** The group separator */
    groupSeparator: PropTypes.string,

    /** Loading status of Statistic */
    loading: PropTypes.bool,

    /** The precision of input value */
    precision: PropTypes.number,

    /** The prefix node of value */
    prefix: PropTypes.node,

    /** The suffix node of value */
    suffix: PropTypes.node,

    /** Display title */
    title: PropTypes.node,

    /** Display value */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /** Set value section style */
    valueStyle: PropTypes.object,
};

Statistic.Countdown.propTypes = {
    /** Format as dayjs */
    format: PropTypes.string,

    /** The prefix node of value */
    prefix: PropTypes.node,

    /** The suffix node of value */
    suffix: PropTypes.node,

    /** Display title */
    title: PropTypes.node,

    /** Set target countdown time */
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),

    /** Set value section style */
    valueStyle: PropTypes.object,

    /** Trigger when time's up */
    onFinish: PropTypes.func,

    /** Trigger when time's changing */
    onChange: PropTypes.func,
};

Table.propTypes = {
    /** Whether to show all table borders */
    bordered: PropTypes.bool,

    /** Columns of table */
    columns: PropTypes.arrayOf(PropTypes.object),

    /** Override default table elements */
    components: PropTypes.object,

    /** Data record array to be displayed */
    dataSource: PropTypes.arrayOf(PropTypes.object),

    /** Config expandable content */
    expandable: PropTypes.object,

    /** Table footer renderer */
    footer: PropTypes.func,

    /** The render container of dropdowns in table */
    getPopupContainer: PropTypes.func,

    /** Loading status of table */
    loading: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),

    /** The i18n text including filter, sort, empty text, etc */
    locale: PropTypes.object,

    /** Config of pagination */
    pagination: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),

    /** Row's className */
    rowClassName: PropTypes.func,

    /** Row's unique key, could be a string or function that returns a string */
    rowKey: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),

    /** Row selection config */
    rowSelection: PropTypes.object,

    /** Whether the table can be scrollable */
    scroll: PropTypes.object,

    /** Whether to show table header */
    showHeader: PropTypes.bool,

    /** The header show next sorter direction tooltip */
    showSorterTooltip: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),

    /** Size of table */
    size: PropTypes.oneOf(['large', 'middle', 'small']),

    /** Supported sort way, could be ascend, descend */
    sortDirections: PropTypes.array,

    /** Set sticky header and scroll bar */
    sticky: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.shape({
            offsetHeader: PropTypes.number,
            offsetScroll: PropTypes.number,
            getContainer: PropTypes.func,
        }),
    ]),

    /** Summary content */
    summary: PropTypes.func,

    /** The table-layout attribute of table element */
    tableLayout: PropTypes.oneOf(['auto', 'fixed']),

    /** Fixed when header/columns are fixed, or using column.ellipsis */
    title: PropTypes.func,

    /** Callback executed when pagination, filters or sorter is changed */
    onChange: PropTypes.func,

    /** Set props on per header row */
    onHeaderRow: PropTypes.func,

    /** Set props on per row */
    onRow: PropTypes.func,

    /** Support virtual list */
    virtual: PropTypes.bool,
};

Table.Column.propTypes = {
    /** The specify which way that column is aligned */
    align: PropTypes.oneOf(['left', 'right', 'center']),

    /** The className of this column */
    className: PropTypes.string,

    /** Span of this column's title */
    colSpan: PropTypes.number,

    /** Display field of the data record, support nest path by string array */
    dataIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),

    /** Default filtered values */
    defaultFilteredValue: PropTypes.arrayOf(PropTypes.string),

    /** Click the reset button, whether to restore the default filter */
    filterResetToDefaultFilteredValue: PropTypes.bool,

    /** Default order of sorted values */
    defaultSortOrder: PropTypes.oneOf(['ascend', 'descend']),

    /** The ellipsis cell content, not working with sorter and filters for now. */
    ellipsis: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape({ showTitle: PropTypes.bool })]),

    /** Customized filter overlay */
    filterDropdown: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

    /** Whether filterDropdown is visible */
    filterDropdownOpen: PropTypes.bool,

    /** Whether the dataSource is filtered */
    filtered: PropTypes.bool,

    /** Controlled filtered value, filter icon will highlight */
    filteredValue: PropTypes.arrayOf(PropTypes.string),

    /** Customized filter icon */
    filterIcon: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

    /** Whether multiple filters can be selected */
    filterMultiple: PropTypes.bool,

    /** To specify the filter interface */
    filterMode: PropTypes.oneOf(['menu', 'tree']),

    /** Whether to be searchable for filter menu */
    filterSearch: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),

    /** Filter menu config */
    filters: PropTypes.arrayOf(PropTypes.object),

    /** Set column to be fixed: true(same as left) 'left' 'right' */
    fixed: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),

    /** Unique key of this column, you can ignore this prop if you've set a unique dataIndex */
    key: PropTypes.string,

    /** Renderer of the table cell. The return value should be a ReactNode */
    render: PropTypes.func,

    /** The list of breakpoints at which to display this column. Always visible if not set */
    responsive: PropTypes.arrayOf(PropTypes.string),

    /** Set scope attribute for all cells in this column */
    rowScope: PropTypes.oneOf(['row', 'rowgroup']),

    /** Control cell render logic */
    shouldCellUpdate: PropTypes.func,

    /** If header show next sorter direction tooltip, override showSorterTooltip in table */
    showSorterTooltip: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),

    /** Supported sort way, override sortDirections in Table, could be ascend, descend */
    sortDirections: PropTypes.arrayOf(PropTypes.string),

    /** Sort function for local sort, see Array.sort's compareFunction. If it is server-side sorting, set to true, but if you want to support multi-column sorting, you can set it to { multiple: number } */
    sorter: PropTypes.oneOfType([PropTypes.func, PropTypes.bool, PropTypes.shape({ compare: PropTypes.func, multiple: PropTypes.number })]),

    /** Order of sorted values: ascend descend null */
    sortOrder: PropTypes.oneOf(['ascend', 'descend', null]),

    /** Customized sort icon */
    sortIcon: PropTypes.func,

    /** Title of this column */
    title: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

    /** Width of this column (width not working?) */
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /** Hidden this column */
    hidden: PropTypes.bool,

    /** Set props on per cell. Same as onCell in column */
    onCell: PropTypes.func,

    /** Function that determines if the row is displayed when filtered */
    onFilter: PropTypes.func,

    /** Callback executed when filterDropdownOpen is changed */
    onFilterDropdownOpenChange: PropTypes.func,

    /** Set props on per header cell. Same as onHeaderCell in column */
    onHeaderCell: PropTypes.func,
};

Table.ColumnGroup.propTypes = {
    /** Title of the column group */
    title: PropTypes.node,
};

Table.pagination.propTypes = {
    /** Specify the position of Pagination, could be topLeft | topCenter | topRight | bottomLeft | bottomCenter | bottomRight */
    position: PropTypes.arrayOf(PropTypes.string),
};

Table.expandable.propTypes = {
    /** The column contains children to display */
    childrenColumnName: PropTypes.string,

    /** Set the title of the expand column */
    columnTitle: PropTypes.node,

    /** Set the width of the expand column */
    columnWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /** Expand all rows initially */
    defaultExpandAllRows: PropTypes.bool,

    /** Initial expanded row keys */
    defaultExpandedRowKeys: PropTypes.arrayOf(PropTypes.string),

    /** Expanded row's className */
    expandedRowClassName: PropTypes.func,

    /** Current expanded row keys */
    expandedRowKeys: PropTypes.arrayOf(PropTypes.string),

    /** Expanded container render for each row */
    expandedRowRender: PropTypes.func,

    /** Customize row expand Icon. Ref example */
    expandIcon: PropTypes.func,

    /** Whether to expand row by clicking anywhere in the whole row */
    expandRowByClick: PropTypes.bool,

    /** Whether the expansion icon is fixed. Optional true left right */
    fixed: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),

    /** Indent size in pixels of tree data */
    indentSize: PropTypes.number,

    /** Enable row can be expandable */
    rowExpandable: PropTypes.func,

    /** Show expand column */
    showExpandColumn: PropTypes.bool,

    /** Callback executed when the row expand icon is clicked */
    onExpand: PropTypes.func,

    /** Callback executed when the expanded rows change */
    onExpandedRowsChange: PropTypes.func,
};

Table.rowSelection.propTypes = {
    /** Check table row precisely; parent row and children rows are not associated */
    checkStrictly: PropTypes.bool,

    /** Set the title of the selection column */
    columnTitle: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

    /** Set the width of the selection column */
    columnWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /** Fixed selection column on the left */
    fixed: PropTypes.bool,

    /** Get Checkbox or Radio props */
    getCheckboxProps: PropTypes.func,

    /** Hide the selectAll checkbox and custom selection */
    hideSelectAll: PropTypes.bool,

    /** Keep selection key even when it removed from dataSource */
    preserveSelectedRowKeys: PropTypes.bool,

    /** Renderer of the table cell. Same as render in column */
    renderCell: PropTypes.func,

    /** Controlled selected row keys */
    selectedRowKeys: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),

    /** Custom selection config, only displays default selections when set to true */
    selections: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.object), PropTypes.bool]),

    /** Checkbox or radio */
    type: PropTypes.oneOf(['checkbox', 'radio']),

    /** Set props on per cell. Same as onCell in column */
    onCell: PropTypes.func,

    /** Function that determines if the row is displayed when filtered */
    onFilter: PropTypes.func,

    /** Callback executed when filterDropdownOpen is changed */
    onFilterDropdownOpenChange: PropTypes.func,

    /** Set props on per header cell. Same as onHeaderCell in column */
    onHeaderCell: PropTypes.func,

    /** Callback executed when selected rows change */
    onChange: PropTypes.func,

    /** Callback executed when select/deselect one row */
    onSelect: PropTypes.func,

    /** Callback executed when select/deselect all rows */
    onSelectAll: PropTypes.func,

    /** Callback executed when row selection is inverted */
    onSelectInvert: PropTypes.func,

    /** Callback executed when row selection is cleared */
    onSelectNone: PropTypes.func,

    /** Callback executed when row selection is changed by pressing shift */
    onSelectMultiple: PropTypes.func,
};

Table.scroll.propTypes = {
    /** Whether to scroll to the top of the table when paging, sorting, filtering changes */
    scrollToFirstRowOnChange: PropTypes.bool,

    /** Set horizontal scrolling, can also be used to specify the width of the scroll area, could be number, percent value, true and 'max-content' */
    x: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),

    /** Set vertical scrolling, can also be used to specify the height of the scroll area, could be string or number */
    y: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Table.selection.propTypes = {
    /** Unique key of this selection */
    key: PropTypes.string,

    /** Display text of this selection */
    text: PropTypes.node,

    /** Callback executed when this selection is clicked */
    onSelect: PropTypes.func,
};

Tabs.propTypes = {
    /** Current TabPane's key */
    activeKey: PropTypes.string,

    /** Customize add icon */
    addIcon: PropTypes.node,

    /** Whether to change tabs with animation */
    animated: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape({ inkBar: PropTypes.bool, tabPane: PropTypes.bool })]),

    /** Centers tabs */
    centered: PropTypes.bool,

    /** Initial active TabPane's key, if activeKey is not set */
    defaultActiveKey: PropTypes.string,

    /** Hide plus icon or not. Only works while type="editable-card" */
    hideAdd: PropTypes.bool,

    /** Customize size and align of indicator */
    indicator: PropTypes.shape({
        size: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
        align: PropTypes.oneOf(['start', 'center', 'end']),
    }),

    /** Configure tab content */
    items: PropTypes.arrayOf(
        PropTypes.shape({
            closeIcon: PropTypes.oneOfType([PropTypes.bool, PropTypes.node]),
            destroyInactiveTabPane: PropTypes.bool,
            disabled: PropTypes.bool,
            forceRender: PropTypes.bool,
            key: PropTypes.string,
            label: PropTypes.node,
            icon: PropTypes.node,
            children: PropTypes.node,
            closable: PropTypes.bool,
        })
    ),

    /** The custom icon of ellipsis */
    moreIcon: PropTypes.node,

    /** className for more dropdown */
    popupClassName: PropTypes.string,

    /** Replace the TabBar */
    renderTabBar: PropTypes.func,

    /** Preset tab bar size */
    size: PropTypes.oneOf(['large', 'middle', 'small']),

    /** Extra content in tab bar */
    tabBarExtraContent: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.shape({ left: PropTypes.node, right: PropTypes.node }),
    ]),

    /** The gap between tabs */
    tabBarGutter: PropTypes.number,

    /** Tab bar style object */
    tabBarStyle: PropTypes.object,

    /** Position of tabs */
    tabPosition: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),

    /** Whether destroy inactive TabPane when change tab */
    destroyInactiveTabPane: PropTypes.bool,

    /** Basic style of tabs */
    type: PropTypes.oneOf(['line', 'card', 'editable-card']),

    /** Callback executed when active tab is changed */
    onChange: PropTypes.func,

    /** Callback executed when tab is added or removed. Only works while type="editable-card" */
    onEdit: PropTypes.func,

    /** Callback executed when tab is clicked */
    onTabClick: PropTypes.func,

    /** Trigger when tab scroll */
    onTabScroll: PropTypes.func,
};

Tabs.TabItemType.propTypes = {
    /** Customize close icon in TabPane's head. Only works while type="editable-card". 5.7.0: close button will be hidden when setting to null or false */
    closeIcon: PropTypes.oneOfType([PropTypes.bool, PropTypes.node]),

    /** Whether destroy inactive TabPane when change tab */
    destroyInactiveTabPane: PropTypes.bool,

    /** Set TabPane disabled */
    disabled: PropTypes.bool,

    /** Forced render of content in tabs, not lazy render after clicking on tabs */
    forceRender: PropTypes.bool,

    /** TabPane's key */
    key: PropTypes.string,

    /** TabPane's head display text */
    label: PropTypes.node,

    /** TabPane's head display icon */
    icon: PropTypes.node,

    /** TabPane's head display content */
    children: PropTypes.node,

    /** Whether a close (x) button is visible, Only works while type="editable-card" */
    closable: PropTypes.bool,
};

Tag.propTypes = {
    /** Custom close icon. 5.7.0: close button will be hidden when setting to null or false */
    closeIcon: PropTypes.node,

    /** Color of the Tag */
    color: PropTypes.string,

    /** Set the icon of tag */
    icon: PropTypes.node,

    /** Whether has border style */
    bordered: PropTypes.bool,

    /** Callback executed when tag is closed */
    onClose: PropTypes.func,
};

Tag.CheckableTag.propTypes = {
    /** Checked status of Tag */
    checked: PropTypes.bool,

    /** Callback executed when Tag is checked/unchecked */
    onChange: PropTypes.func,
};

Timeline.propTypes = {
    /** By sending alternate the timeline will distribute the nodes to the left and right */
    mode: PropTypes.oneOf(['left', 'alternate', 'right']),

    /** Set the last ghost node's existence or its content */
    pending: PropTypes.oneOfType([PropTypes.bool, PropTypes.node]),

    /** Set the dot of the last ghost node when pending is true */
    pendingDot: PropTypes.node,

    /** Whether reverse nodes or not */
    reverse: PropTypes.bool,

    /** Each node of timeline */
    items: PropTypes.arrayOf(
        PropTypes.shape({
            /** Set the circle's color to blue, red, green, gray or other custom colors */
            color: PropTypes.string,

            /** Customize timeline dot */
            dot: PropTypes.node,

            /** Set the label */
            label: PropTypes.node,

            /** Set the content */
            children: PropTypes.node,

            /** Customize node position */
            position: PropTypes.oneOf(['left', 'right']),
        })
    ),
};

Timeline.Items.propTypes = {
    /** Set the circle's color to blue, red, green, gray or other custom colors */
    color: PropTypes.string,

    /** Customize timeline dot */
    dot: PropTypes.node,

    /** Set the label */
    label: PropTypes.node,

    /** Set the content */
    children: PropTypes.node,

    /** Customize node position */
    position: PropTypes.oneOf(['left', 'right']),
};

Tooltip.propTypes = {

    /** The text shown in the tooltip */
    title: PropTypes.node,

    /** This value will be merged into placement's config, please refer to the settings rc-tooltip */
    align: PropTypes.object,

    /** Change arrow's visible state and change whether the arrow is pointed at the center of target. */
    arrow: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.shape({ pointAtCenter: PropTypes.bool }),
    ]),

    /** Whether to adjust popup placement automatically when popup is off screen */
    autoAdjustOverflow: PropTypes.bool,

    /** The background color */
    color: PropTypes.string,

    /** Whether the floating tooltip card is open by default */
    defaultOpen: PropTypes.bool,

    /** Whether destroy tooltip when hidden */
    destroyTooltipOnHide: PropTypes.bool,

    /** Tooltip will cache content when it is closed by default. Setting this property will always keep updating */
    fresh: PropTypes.bool,

    /** The DOM container of the tip, the default behavior is to create a div element in body */
    getPopupContainer: PropTypes.func,

    /** Delay in seconds, before tooltip is shown on mouse enter */
    mouseEnterDelay: PropTypes.number,

    /** Delay in seconds, before tooltip is hidden on mouse leave */
    mouseLeaveDelay: PropTypes.number,

    /** Class name of the tooltip card */
    overlayClassName: PropTypes.string,

    /** Style of the tooltip card */
    overlayStyle: PropTypes.object,

    /** Style of the tooltip inner content */
    overlayInnerStyle: PropTypes.object,

    /** The position of the tooltip relative to the target */
    placement: PropTypes.oneOf([
        'top',
        'left',
        'right',
        'bottom',
        'topLeft',
        'topRight',
        'bottomLeft',
        'bottomRight',
        'leftTop',
        'leftBottom',
        'rightTop',
        'rightBottom',
    ]),

    /** Tooltip trigger mode. Could be multiple by passing an array */
    trigger: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
    ]),

    /** Whether the floating tooltip card is open or not. Use visible under 4.23.0 */
    open: PropTypes.bool,

    /** Config z-index of Tooltip */
    zIndex: PropTypes.number,

    /** Callback executed when visibility of the tooltip card is changed */
    onOpenChange: PropTypes.func,

};

Tour.propTypes = {
    /** Whether to show the arrow, including the configuration whether to point to the center of the element */
    arrow: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.shape({ pointAtCenter: PropTypes.bool }),
    ]),

    /** Customize close icon */
    closeIcon: PropTypes.node,

    /** Disable interaction on highlighted area */
    disabledInteraction: PropTypes.bool,

    /** Position of the guide card relative to the target element */
    placement: PropTypes.oneOf([
        'center',
        'left',
        'leftTop',
        'leftBottom',
        'right',
        'rightTop',
        'rightBottom',
        'top',
        'topLeft',
        'topRight',
        'bottom',
        'bottomLeft',
        'bottomRight',
    ]),

    /** Callback function on shutdown */
    onClose: PropTypes.func,

    /** Whether to enable masking, change mask style and fill color by pass custom props */
    mask: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.shape({
            style: PropTypes.object,
            color: PropTypes.string,
        }),
    ]),

    /** Type, affects the background color and text color */
    type: PropTypes.string,

    /** Open tour */
    open: PropTypes.bool,

    /** Callback when the step changes. Current is the previous step */
    onChange: PropTypes.func,

    /** What is the current step */
    current: PropTypes.number,

    /** Support passing custom scrollIntoView options */
    scrollIntoViewOptions: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.object,
    ]),

    /** Custom indicator */
    indicatorsRender: PropTypes.func,

    /** Tour's zIndex */
    zIndex: PropTypes.number,

    /** Set the rendering node of Tour floating layer */
    getPopupContainer: PropTypes.func,
};

TourStep.propTypes = {
    /** Get the element the guide card points to. Empty makes it show in center of the screen */
    target: PropTypes.oneOfType([PropTypes.func, PropTypes.instanceOf(HTMLElement)]),

    /** Whether to show the arrow, including the configuration whether to point to the center of the element */
    arrow: PropTypes.shape({ pointAtCenter: PropTypes.bool }),

    /** Customize close icon */
    closeIcon: PropTypes.node,

    /** Displayed pictures or videos */
    cover: PropTypes.node,

    /** Title */
    title: PropTypes.node,

    /** Description */
    description: PropTypes.node,

    /** Position of the guide card relative to the target element */
    placement: PropTypes.oneOf([
        'center',
        'left',
        'leftTop',
        'leftBottom',
        'right',
        'rightTop',
        'rightBottom',
        'top',
        'topLeft',
        'topRight',
        'bottom',
        'bottomLeft',
        'bottomRight',
    ]),

    /** Callback function on shutdown */
    onClose: PropTypes.func,

    /** Whether to enable masking, change mask style and fill color by passing custom props, the default follows the mask property of Tour */
    mask: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.shape({
            style: PropTypes.object,
            color: PropTypes.string,
        }),
    ]),

    /** Type, affects the background color and text color */
    type: PropTypes.string,

    /** Properties of the Next button */
    nextButtonProps: PropTypes.shape({
        children: PropTypes.node,
        onClick: PropTypes.func,
    }),

    /** Properties of the previous button */
    prevButtonProps: PropTypes.shape({
        children: PropTypes.node,
        onClick: PropTypes.func,
    }),

    /** Support passing custom scrollIntoView options, the default follows the scrollIntoViewOptions property of Tour */
    scrollIntoViewOptions: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.object,
    ]),
};

Tree.propTypes = {
    /** Whether to allow dropping on the node */
    allowDrop: PropTypes.func,

    /** Whether to automatically expand a parent treeNode */
    autoExpandParent: PropTypes.bool,

    /** Whether treeNode fill remaining horizontal space */
    blockNode: PropTypes.bool,

    /** Add a Checkbox before the treeNodes */
    checkable: PropTypes.bool,

    /** (Controlled) Specifies the keys of the checked treeNodes */
    checkedKeys: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.shape({ checked: PropTypes.arrayOf(PropTypes.string), halfChecked: PropTypes.arrayOf(PropTypes.string) }),
    ]),

    /** Check treeNode precisely; parent treeNode and children treeNodes are not associated */
    checkStrictly: PropTypes.bool,

    /** Specifies the keys of the default checked treeNodes */
    defaultCheckedKeys: PropTypes.arrayOf(PropTypes.string),

    /** Whether to expand all treeNodes by default */
    defaultExpandAll: PropTypes.bool,

    /** Specify the keys of the default expanded treeNodes */
    defaultExpandedKeys: PropTypes.arrayOf(PropTypes.string),

    /** If auto expand parent treeNodes when init */
    defaultExpandParent: PropTypes.bool,

    /** Specifies the keys of the default selected treeNodes */
    defaultSelectedKeys: PropTypes.arrayOf(PropTypes.string),

    /** Whether disabled the tree */
    disabled: PropTypes.bool,

    /** Specifies whether this Tree or the node is draggable */
    draggable: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.func,
        PropTypes.shape({ icon: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]), nodeDraggable: PropTypes.func }),
    ]),

    /** (Controlled) Specifies the keys of the expanded treeNodes */
    expandedKeys: PropTypes.arrayOf(PropTypes.string),

    /** Customize node title, key, children field name */
    fieldNames: PropTypes.shape({
        title: PropTypes.string,
        key: PropTypes.string,
        children: PropTypes.string,
    }),

    /** Defines a function to filter (highlight) treeNodes */
    filterTreeNode: PropTypes.func,

    /** Config virtual scroll height. Will not support horizontal scroll when enable this */
    height: PropTypes.number,

    /** Customize treeNode icon */
    icon: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

    /** Load data asynchronously */
    loadData: PropTypes.func,

    /** Set loaded tree nodes. Need work with loadData */
    loadedKeys: PropTypes.arrayOf(PropTypes.string),

    /** Allows selecting multiple treeNodes */
    multiple: PropTypes.bool,

    /** Style on the root element */
    rootStyle: PropTypes.object,

    /** Whether can be selected */
    selectable: PropTypes.bool,

    /** (Controlled) Specifies the keys of the selected treeNodes, multiple selection needs to set multiple to true */
    selectedKeys: PropTypes.arrayOf(PropTypes.string),

    /** Shows the icon before a TreeNode's title. There is no default style; you must set a custom style for it if set to true */
    showIcon: PropTypes.bool,

    /** Shows a connecting line */
    showLine: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.shape({ showLeafIcon: PropTypes.oneOfType([PropTypes.bool, PropTypes.node, PropTypes.func]) }),
    ]),

    /** Customize collapse/expand icon of tree node */
    switcherIcon: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

    /** Customize tree node title render */
    titleRender: PropTypes.func,

    /** The treeNodes data Array, if set it then you need not to construct children TreeNode. (key should be unique across the whole array) */
    treeData: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.string,
            title: PropTypes.node,
            children: PropTypes.array,
            disabled: PropTypes.bool,
            selectable: PropTypes.bool,
        })
    ),

    /** Disable virtual scroll when set to false */
    virtual: PropTypes.bool,

    /** Callback function for when the onCheck event occurs */
    onCheck: PropTypes.func,

    /** Callback function for when the onDragEnd event occurs */
    onDragEnd: PropTypes.func,

    /** Callback function for when the onDragEnter event occurs */
    onDragEnter: PropTypes.func,

    /** Callback function for when the onDragLeave event occurs */
    onDragLeave: PropTypes.func,

    /** Callback function for when the onDragOver event occurs */
    onDragOver: PropTypes.func,

    /** Callback function for when the onDragStart event occurs */
    onDragStart: PropTypes.func,

    /** Callback function for when the onDrop event occurs */
    onDrop: PropTypes.func,

    /** Callback function for when a treeNode is expanded or collapsed */
    onExpand: PropTypes.func,

    /** Callback function for when a treeNode is loaded */
    onLoad: PropTypes.func,

    /** Callback function for when the user right clicks a treeNode */
    onRightClick: PropTypes.func,

    /** Callback function for when the user clicks a treeNode */
    onSelect: PropTypes.func,
};

TreeNode.propTypes = {
    /** When Tree is checkable, set TreeNode display Checkbox or not */
    checkable: PropTypes.bool,

    /** Disables the checkbox of the treeNode */
    disableCheckbox: PropTypes.bool,

    /** Disables the treeNode */
    disabled: PropTypes.bool,

    /** Customize icon. When you pass component, whose render will receive full TreeNode props as component props */
    icon: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

    /** Determines if this is a leaf node (effective when loadData is specified). false will force treat TreeNode as a parent node */
    isLeaf: PropTypes.bool,

    /** Used with (default)ExpandedKeys / (default)CheckedKeys / (default)SelectedKeys */
    key: PropTypes.string,

    /** Set whether the treeNode can be selected */
    selectable: PropTypes.bool,

    /** Title */
    title: PropTypes.node,
};

DirectoryTree.propTypes = {
    /** Directory open logic, optional: false | click | doubleClick */
    expandAction: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

Alert.propTypes = {
    /** The action of Alert */
    action: PropTypes.node,

    /** Called when close animation is finished */
    afterClose: PropTypes.func,

    /** Whether to show as banner */
    banner: PropTypes.bool,

    /** Custom close icon, >=5.7.0: close button will be hidden when setting to null or false */
    closeIcon: PropTypes.oneOfType([PropTypes.bool, PropTypes.node]),

    /** Additional content of Alert */
    description: PropTypes.node,

    /** Custom icon, effective when showIcon is true */
    icon: PropTypes.node,

    /** Content of Alert */
    message: PropTypes.node,

    /** Whether to show icon */
    showIcon: PropTypes.bool,

    /** Type of Alert styles, options: success, info, warning, error */
    type: PropTypes.string,

    /** Callback when Alert is closed */
    onClose: PropTypes.func,
};

Alert.ErrorBoundary.propTypes = {
    /** Custom error description to show */
    description: PropTypes.node,

    /** Custom error message to show */
    message: PropTypes.node,
};

Drawer.propTypes = {
    /** Whether Drawer should get focused after open */
    autoFocus: PropTypes.bool,

    /** Callback after the animation ends when switching drawers */
    afterOpenChange: PropTypes.func,

    /** Config Drawer Panel className. Use rootClassName if want to config top dom style */
    className: PropTypes.string,

    /** Config Drawer build-in module's className */
    classNames: PropTypes.shape({
        header: PropTypes.string,
        body: PropTypes.string,
        footer: PropTypes.string,
        mask: PropTypes.string,
        content: PropTypes.string,
        wrapper: PropTypes.string,
    }),

    /** Config Drawer build-in module's style */
    styles: PropTypes.shape({
        header: PropTypes.object,
        body: PropTypes.object,
        footer: PropTypes.object,
        mask: PropTypes.object,
        content: PropTypes.object,
        wrapper: PropTypes.object,
    }),

    /** Custom close icon. 5.7.0: close button will be hidden when setting to null or false */
    closeIcon: PropTypes.oneOfType([PropTypes.bool, PropTypes.node]),

    /** Whether to unmount child components on closing drawer or not */
    destroyOnClose: PropTypes.bool,

    /** Extra actions area at corner */
    extra: PropTypes.node,

    /** The footer for Drawer */
    footer: PropTypes.node,

    /** Pre-render Drawer component forcibly */
    forceRender: PropTypes.bool,

    /** Mounted node and display window for Drawer */
    getContainer: PropTypes.oneOfType([
        PropTypes.instanceOf(HTMLElement),
        PropTypes.func,
        PropTypes.oneOf([false]),
    ]),

    /** Style of the drawer header part */
    headerStyle: PropTypes.object,

    /** Placement is top or bottom, height of the Drawer dialog */
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /** Whether support press esc to close */
    keyboard: PropTypes.bool,

    /** Whether to show mask or not */
    mask: PropTypes.bool,

    /** Clicking on the mask (area outside the Drawer) to close the Drawer or not */
    maskClosable: PropTypes.bool,

    /** The placement of the Drawer */
    placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),

    /** Nested drawers push behavior */
    push: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.shape({
            distance: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        }),
    ]),

    /** Style of wrapper element which contains mask compare to style */
    rootStyle: PropTypes.object,

    /** Style of Drawer panel. Use bodyStyle if want to config body only */
    style: PropTypes.object,

    /** Preset size of drawer, default 378px and large 736px */
    size: PropTypes.oneOf(['default', 'large']),

    /** The title for Drawer */
    title: PropTypes.node,

    /** Whether the Drawer dialog is visible or not */
    open: PropTypes.bool,

    /** Width of the Drawer dialog */
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /** The z-index of the Drawer */
    zIndex: PropTypes.number,

    /** Specify a callback that will be called when a user clicks mask, close button or Cancel button */
    onClose: PropTypes.func,
};

Message.propTypes = {
    /** Customized CSS class */
    className: PropTypes.string,

    /** The content of the message */
    content: PropTypes.node,

    /** Time (seconds) before auto-dismiss, don't dismiss if set to 0 */
    duration: PropTypes.number,

    /** Customized Icon */
    icon: PropTypes.node,

    /** The unique identifier of the Message */
    key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /** Customized inline style */
    style: PropTypes.object,

    /** Specify a function that will be called when the message is clicked */
    onClick: PropTypes.func,

    /** Specify a function that will be called when the message is closed */
    onClose: PropTypes.func,
};

Modal.propTypes = {
    /** Specify a function that will be called when modal is closed completely */
    afterClose: PropTypes.func,

    /** Config Modal build-in module's className */
    classNames: PropTypes.shape({
        header: PropTypes.string,
        body: PropTypes.string,
        footer: PropTypes.string,
        mask: PropTypes.string,
        wrapper: PropTypes.string,
    }),

    /** Config Modal build-in module's style */
    styles: PropTypes.shape({
        header: PropTypes.object,
        body: PropTypes.object,
        footer: PropTypes.object,
        mask: PropTypes.object,
    }),

    /** The cancel button props */
    cancelButtonProps: PropTypes.object,

    /** Text of the Cancel button */
    cancelText: PropTypes.node,

    /** Centered Modal */
    centered: PropTypes.bool,

    /** Custom close icon. 5.7.0: close button will be hidden when setting to null or false */
    closeIcon: PropTypes.oneOfType([PropTypes.bool, PropTypes.node]),

    /** Whether to apply loading visual effect for OK button or not */
    confirmLoading: PropTypes.bool,

    /** Whether to unmount child components on onClose */
    destroyOnClose: PropTypes.bool,

    /** Whether need to focus trigger element after dialog is closed */
    focusTriggerAfterClose: PropTypes.bool,

    /** Footer content, set as footer={null} when you don't need default buttons */
    footer: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.node,
    ]),

    /** Force render Modal */
    forceRender: PropTypes.bool,

    /** The mounted node for Modal but still display at fullscreen */
    getContainer: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.bool]),

    /** Whether support press esc to close */
    keyboard: PropTypes.bool,

    /** Whether show mask or not */
    mask: PropTypes.bool,

    /** Whether to close the modal dialog when the mask (area outside the modal) is clicked */
    maskClosable: PropTypes.bool,

    /** Custom modal content render */
    modalRender: PropTypes.func,

    /** The ok button props */
    okButtonProps: PropTypes.object,

    /** Text of the OK button */
    okText: PropTypes.node,

    /** Button type of the OK button */
    okType: PropTypes.string,

    /** Style of floating layer, typically used at least for adjusting the position */
    style: PropTypes.object,

    /** The modal dialog's title */
    title: PropTypes.node,

    /** Whether the modal dialog is visible or not */
    open: PropTypes.bool,

    /** Width of the modal dialog */
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /** The class name of the container of the modal dialog */
    wrapClassName: PropTypes.string,

    /** The z-index of the Modal */
    zIndex: PropTypes.number,

    /** Specify a function that will be called when a user clicks mask, close button on top right or Cancel button */
    onCancel: PropTypes.func,

    /** Specify a function that will be called when a user clicks the OK button */
    onOk: PropTypes.func,

    /** Callback when the animation ends when Modal is turned on and off */
    afterOpenChange: PropTypes.func,
};

Notification.propTypes = {
    /** Customized close button */
    btn: PropTypes.node,

    /** Customized CSS class */
    className: PropTypes.string,

    /** Custom close icon. 5.7.0: close button will be hidden when setting to null or false */
    closeIcon: PropTypes.oneOfType([PropTypes.bool, PropTypes.node]),

    /** The content of notification box (required) */
    description: PropTypes.node.isRequired,

    /** Time in seconds before Notification is closed. When set to 0 or null, it will never be closed automatically */
    duration: PropTypes.number,

    /** Customized icon */
    icon: PropTypes.node,

    /** The unique identifier of the Notification */
    key: PropTypes.string,

    /** The title of notification box (required) */
    message: PropTypes.node.isRequired,

    /** Position of Notification, can be one of topLeft topRight bottomLeft bottomRight */
    placement: PropTypes.string,

    /** Customized inline style */
    style: PropTypes.object,

    /** The semantics of notification content recognized by screen readers. The default value is alert. */
    role: PropTypes.oneOf(['alert', 'status']),

    /** Specify a function that will be called when the notification is clicked */
    onClick: PropTypes.func,

    /** Trigger when notification closed */
    onClose: PropTypes.func,

    /**
     * An object that can contain data-*, aria-*, or role props, to be put on the notification div.
     * This currently only allows data-testid instead of data-* in TypeScript.
     * See https://github.com/microsoft/TypeScript/issues/28960.
     */
    props: PropTypes.object,
};

Popconfirm.propTypes = {
    /** The cancel button props */
    cancelButtonProps: PropTypes.object,

    /** The text of the Cancel button */
    cancelText: PropTypes.string,

    /** Whether to show popconfirm when clicking its childrenNode */
    disabled: PropTypes.bool,

    /** Customize icon of confirmation */
    icon: PropTypes.node,

    /** The ok button props */
    okButtonProps: PropTypes.object,

    /** The text of the Confirm button */
    okText: PropTypes.string,

    /** Button type of the Confirm button */
    okType: PropTypes.string,

    /** Show cancel button */
    showCancel: PropTypes.bool,

    /** The title of the confirmation box */
    title: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

    /** The description of the confirmation box title */
    description: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

    /** A callback of cancel */
    onCancel: PropTypes.func,

    /** A callback of confirmation */
    onConfirm: PropTypes.func,

    /** A callback of popup click */
    onPopupClick: PropTypes.func,
};

Progress.propTypes = {
    /** The template function of the content */
    format: PropTypes.func,

    /** The color of circular progress, render gradient when passing an object */
    gapDegree: PropTypes.number,

    /** The gap position, options: top, bottom, left, right */
    gapPosition: PropTypes.string,

    /** The color of circular progress, render gradient when passing an object */
    percent: PropTypes.number,

    /** The total step count */
    showInfo: PropTypes.bool,

    /** The gap degree of half circle, 0 ~ 295 */
    size: PropTypes.oneOfType([PropTypes.number, PropTypes.array, PropTypes.string]),

    /** To set the status of the Progress, options: success, exception, normal, active(line only) */
    status: PropTypes.string,

    /** Configs of successfully progress bar */
    steps: PropTypes.number,

    /** The color of circular progress, render gradient when passing an object */
    strokeColor: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
        PropTypes.shape({
            from: PropTypes.string,
            to: PropTypes.string,
            direction: PropTypes.string,
        }),
    ]),

    /** The style of the progress linecap, options: round, butt, square */
    strokeLinecap: PropTypes.string,

    /** To set the type, options: line, circle, dashboard */
    strokeWidth: PropTypes.number,

    /** The color of progress bar */
    success: PropTypes.shape({
        percent: PropTypes.number,
        strokeColor: PropTypes.string,
    }),

    /** The color of unfilled part */
    trailColor: PropTypes.string,

    /** Progress size */
    type: PropTypes.oneOf(['line', 'circle', 'dashboard']),
};

Result.propTypes = {
    /** Operating area */
    extra: PropTypes.node,

    /** Custom back icon */
    icon: PropTypes.node,

    /** Result status, decide icons and colors */
    status: PropTypes.oneOf(['success', 'error', 'info', 'warning', '404', '403', '500']),

    /** The subTitle */
    subTitle: PropTypes.node,

    /** The title */
    title: PropTypes.node,
};

Skeleton.propTypes = {
    /** Show animation effect */
    active: PropTypes.bool,

    /** Show avatar placeholder */
    avatar: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.shape({
            /** Show animation effect, only valid when used avatar independently */
            active: PropTypes.bool,

            /** Set the shape of avatar */
            shape: PropTypes.oneOf(['circle', 'square']),

            /** Set the size of avatar */
            size: PropTypes.oneOfType([
                PropTypes.number,
                PropTypes.oneOf(['large', 'small', 'default']),
            ]),
        }),
    ]),

    /** Display the skeleton when true */
    loading: PropTypes.bool,

    /** Show paragraph placeholder */
    paragraph: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.shape({
            /** Set the row count of paragraph */
            rows: PropTypes.number,

            /** Set the width of paragraph. When width is an Array, it can set the width of each row. Otherwise only set the last row width */
            width: PropTypes.oneOfType([
                PropTypes.number,
                PropTypes.string,
                PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
            ]),
        }),
    ]),

    /** Show paragraph and title radius when true */
    round: PropTypes.bool,

    /** Show title placeholder */
    title: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.shape({
            /** Set the width of title */
            width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        }),
    ]),
};

SkeletonAvatarProps.propTypes = {
    /** Show animation effect, only valid when used avatar independently */
    active: PropTypes.bool,

    /** Set the shape of avatar */
    shape: PropTypes.oneOf(['circle', 'square']),

    /** Set the size of avatar */
    size: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.oneOf(['large', 'small', 'default']),
    ]),
};

SkeletonTitleProps.propTypes = {
    /** Set the width of title */
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

SkeletonParagraphProps.propTypes = {
    /** Set the row count of paragraph */
    rows: PropTypes.number,

    /** Set the width of paragraph. When width is an Array, it can set the width of each row. Otherwise only set the last row width */
    width: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
    ]),
};

SkeletonButtonProps.propTypes = {
    /** Show animation effect */
    active: PropTypes.bool,

    /** Option to fit button width to its parent width */
    block: PropTypes.bool,

    /** Set the shape of button */
    shape: PropTypes.oneOf(['circle', 'round', 'square', 'default']),

    /** Set the size of button */
    size: PropTypes.oneOf(['large', 'small', 'default']),
};

SkeletonInputProps.propTypes = {
    /** Show animation effect */
    active: PropTypes.bool,

    /** Set the size of input */
    size: PropTypes.oneOf(['large', 'small', 'default']),
};

Watermark.propTypes = {
    /** Watermark text content */
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),

    /** Watermark text style */
    font: PropTypes.shape({
        /** Font color */
        color: PropTypes.string,

        /** Font size */
        fontSize: PropTypes.number,

        /** Font weight */
        fontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

        /** Font family */
        fontFamily: PropTypes.string,

        /** Font style */
        fontStyle: PropTypes.oneOf(['none', 'normal', 'italic', 'oblique']),

        /** Text alignment direction */
        textAlign: PropTypes.oneOf(['start', 'end', 'left', 'right', 'center']),
    }),

    /** The spacing between watermarks */
    gap: PropTypes.arrayOf(PropTypes.number),

    /** The height of the watermark, the default value of content is its own height */
    height: PropTypes.number,

    /** Pass the watermark to the pop-up component such as Modal, Drawer */
    inherit: PropTypes.bool,

    /** Image source, it is recommended to export 2x or 3x image, high priority (support base64 format) */
    image: PropTypes.string,

    /** The offset of the watermark from the upper left corner of the container. The default is gap/2 */
    offset: PropTypes.arrayOf(PropTypes.number),

    /** The rotation Angle when the watermark is drawn, unit ° */
    rotate: PropTypes.number,

    /** The width of the watermark, the default value of content is its own width */
    width: PropTypes.number,

    /** The z-index of the appended watermark element */
    zIndex: PropTypes.number,
};

Watermark.Font.propTypes = {
    /** Font color */
    color: PropTypes.string,

    /** Font size */
    fontSize: PropTypes.number,

    /** Font weight */
    fontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /** Font family */
    fontFamily: PropTypes.string,

    /** Font style */
    fontStyle: PropTypes.oneOf(['none', 'normal', 'italic', 'oblique']),

    /** Text alignment direction */
    textAlign: PropTypes.oneOf(['start', 'end', 'left', 'right', 'center']),
};

Affix.propTypes = {
    /** Offset from the bottom of the viewport (in pixels) */
    offsetBottom: PropTypes.number,

    /** Offset from the top of the viewport (in pixels) */
    offsetTop: PropTypes.number,

    /** Callback for when Affix state is changed */
    onChange: PropTypes.func,

    /** Specifies the scrollable area DOM node */
    target: PropTypes.func,
};

ConfigProvider.propTypes = {
    /** Set false to remove space between 2 Chinese characters on Button */
    autoInsertSpaceInButton: PropTypes.bool,

    /** Config antd component disabled */
    componentDisabled: PropTypes.bool,

    /** Config antd component size */
    componentSize: PropTypes.oneOf(['small', 'middle', 'large']),

    /** Set Content Security Policy config */
    csp: PropTypes.shape({
        nonce: PropTypes.string,
    }),

    /** Set direction of layout. See demo */
    direction: PropTypes.oneOf(['ltr', 'rtl']),

    /** To set the container of the popup element. The default is to create a div element in body */
    getPopupContainer: PropTypes.func,

    /** Config Affix, Anchor scroll target container */
    getTargetContainer: PropTypes.func,

    /** Set icon prefix className */
    iconPrefixCls: PropTypes.string,

    /** Language package setting, you can find the packages in antd/locale */
    locale: PropTypes.object,

    /** Determine whether the dropdown menu and the select input are the same width. Default set min-width same as input. Will ignore when value less than select width. false will disable virtual scroll */
    popupMatchSelectWidth: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),

    /** Select like component popup logic. Can set to show in viewport or follow window scroll */
    popupOverflow: PropTypes.oneOf(['viewport', 'scroll']),

    /** Set prefix className */
    prefixCls: PropTypes.string,

    /** Set empty content of components. Ref Empty */
    renderEmpty: PropTypes.func,

    /** Set theme, ref Customize Theme */
    theme: PropTypes.object,

    /** Disable virtual scroll when set to false */
    virtual: PropTypes.bool,

    /** Config warning level, when strict is false, it will aggregate deprecated information into a single message */
    warning: PropTypes.shape({
        strict: PropTypes.bool,
    }),
};