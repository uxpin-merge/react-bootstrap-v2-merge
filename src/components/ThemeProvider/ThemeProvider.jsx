import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider as ThemeProviderM } from 'react-bootstrap'

const ThemeProvider = (props) => {
  return <ThemeProviderM {...props} />
}

ThemeProvider.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Add Bootstrap classes */
  className: PropTypes.object,

  /** Override styles */
  style: PropTypes.object,

  /** An object mapping of Bootstrap component classes thatmap to a custom class.**Note: Changing prefixes is an escape hatch and generallyshouldn't be used.**For more information, see [here](/getting-started/theming/#prefixing-components). */
  prefixes: PropTypes.object,
  /** An array of breakpoints that your application supports.Defaults to the standard Bootstrap breakpoints. */
  breakpoints: PropTypes.arrayOf,
  /** The minimum breakpoint used by your application.Defaults to the smallest of the standard Bootstrap breakpoints. */
  minBreakpoint: PropTypes.string,
  /** Indicates the directionality of the application's text.Use `rtl` to set text as "right to left". */
  dir: PropTypes.string,
}

export default ThemeProvider
