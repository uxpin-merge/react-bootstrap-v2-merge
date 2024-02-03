import React from 'react';
import PropTypes from 'prop-types';
import { DropdownMenu as DropdownMenuM } from 'react-bootstrap';

/**
* @uxpindocurl https://react-bootstrap.github.io/docs/components/DropdownMenu
* @uxpindescription TODO
*/


const DropdownMenu = (props) => {
  return <DropdownMenuM {...props} />;
};

DropdownMenu.propTypes = {
  children: PropTypes.node,
/** Have the dropdown switch to it's opposite placement when necessary to stay on screen. */
  flip: PropTypes.bool,
  /** Control the rendering of the DropdownMenu. All non-menu props(listed here) are passed through to the `as` Component.If providing a custom, non DOM, component. the `show`, `close` and `align` propsare also injected and should be handled appropriately. */
  as: PropTypes.string,
  /** @default 'dropdown-menu' */
  bsPrefix: PropTypes.string,
  /** Controls the visibility of the Dropdown menu */
  show: PropTypes.bool,
  /** Whether to render the dropdown menu in the DOM before the first time it is shown */
  renderOnMount: PropTypes.bool,
  /** Aligns the dropdown menu to the specified side of the container. You can also alignthe menu responsively for breakpoints starting at `sm` and up. The alignmentdirection will affect the specified breakpoint or larger.*Note: Using responsive alignment will disable Popper usage for positioning.*@type {"start"|"end"|{ sm: "start"|"end" }|{ md: "start"|"end" }|{ lg: "start"|"end" }|{ xl: "start"|"end"}|{ xxl: "start"|"end"} } */
  align: PropTypes.string,
  /** Which event when fired outside the component will cause it to be closed*Note: For custom dropdown components, you will have to pass the`rootCloseEvent` to `<RootCloseWrapper>` in your custom dropdown menucomponent ([similarly to how it is implemented in `<Dropdown.Menu>`](https://github.com/react-bootstrap/react-bootstrap/blob/v0.31.5/src/DropdownMenu.js#L115-L119)).* */
  rootCloseEvent: PropTypes.string,
  /** A set of popper options and props passed directly to Popper. */
  popperConfig: PropTypes.object,
  /** Menu color variant.Omitting this will use the default light color. */
  variant: PropTypes.string,
};

export default DropdownMenu;