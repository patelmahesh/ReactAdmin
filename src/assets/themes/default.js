import tinycolor from "tinycolor2";

const primary = "#21935c";
const secondary = "#f15546";
const warning = "#dda305";
const success = "#2dbd7b";
const info = "#24abfa";

const lightenRate = 7.5;
const darkenRate = 15;

export default {
  palette: {
    primary: {
      main: primary,
      light: tinycolor(primary)
        .lighten(lightenRate)
        .toHexString(),
      dark: tinycolor(primary)
        .darken(darkenRate)
        .toHexString(),
    },
    secondary: {
      main: secondary,
      light: tinycolor(secondary)
        .lighten(lightenRate)
        .toHexString(),
      dark: tinycolor(secondary)
        .darken(darkenRate)
        .toHexString(),
      contrastText: "#FFFFFF",
    },
    warning: {
      main: warning,
      light: tinycolor(warning)
        .lighten(lightenRate)
        .toHexString(),
      dark: tinycolor(warning)
        .darken(darkenRate)
        .toHexString(),
    },
    success: {
      main: success,
      light: tinycolor(success)
        .lighten(lightenRate)
        .toHexString(),
      dark: tinycolor(success)
        .darken(darkenRate)
        .toHexString(),
    },
    info: {
      main: info,
      light: tinycolor(info)
        .lighten(lightenRate)
        .toHexString(),
      dark: tinycolor(info)
        .darken(darkenRate)
        .toHexString(),
    },
    text: {
      primary: "#4A4A4A",
      secondary: "#6E6E6E",
      hint: "#B9B9B9",
    },
    background: {
      default: "#f0f2f6",
      light: "#f2f4f8",
      
    },
  },
  customShadows: {
    widget:
      "0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A",
    widgetDark:
      "0px 3px 18px 0px #4558A3B3, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A",
    widgetWide:
      "0px 12px 33px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A",
  },
  overrides: {
    MuiTypography: {
      root: {
        margin: "0",
      },
      body2: {
        fontSize: "0.875rem",
        fontFamily:
          'Nunito,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
        fontWeight: "400",
        lineHeight: "1.43",
      },
      body1: {
        fontSize: "14px",
        fontFamily:
          'Nunito,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
        fontWeight: "400",
        lineHeight: "1.5",
      },
      caption: {
        fontSize: "0.75rem",
        fontFamily:
          'Nunito,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
        fontWeight: "400",
        lineHeight: "1.66",
      },
      button: {
        fontSize: "0.875rem",
        fontFamily:
          'Nunito,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
        fontWeight: "600",
        lineHeight: "1.75",
        textTransform: "none",
      },
      h1: {
        fontSize: "2rem",
        fontFamily:
          'Nunito,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
        fontWeight: "600",
        lineHeight: "1.2",
      },
      h2: {
        fontSize: "1.75rem",
        fontFamily:
          'Nunito,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
        fontWeight: "600",
        lineHeight: "1.2",
      },
      h3: {
        fontSize: "1.5rem",
        fontFamily:
          'Nunito,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
        fontWeight: "600",
        lineHeight: "1.2",
      },
      h4: {
        fontSize: "1.25rem",
        fontFamily:
          'Nunito,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
        fontWeight: "600",
        lineHeight: "1.2",
      },
      h5: {
        fontSize: "1.125rem",
        fontFamily:
          'Nunito,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
        fontWeight: "600",
        lineHeight: "1.2",
      },
      h6: {
        fontSize: "1.0625rem",
        fontFamily:
          'Nunito,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
        fontWeight: "600",
        lineHeight: "1.2",
      },
      subtitle1: {
        fontSize: "1rem",
        fontFamily:
          'Nunito,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
        fontWeight: "400",
        lineHeight: "1.75",
      },
      subtitle2: {
        fontSize: "0.875rem",
        fontFamily:
          'Nunito,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
        fontWeight: "600",
        lineHeight: "1.57",
      },
      overline: {
        fontSize: "0.75rem",
        fontFamily:
          'Nunito,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
        fontWeight: "400",
        lineHeight: "2.66",
        textTransform: "uppercase",
      },
      srOnly: {
        width: "1px",
        height: "1px",
        overflow: "hidden",
        position: "absolute",
      },
      alignLeft: {
        textAlign: "left",
      },
      alignCenter: {
        textAlign: "center",
      },
      alignRight: {
        textAlign: "right",
      },
      alignJustify: {
        textAlign: "justify",
      },
      noWrap: {
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
      },
      gutterBottom: {
        marginBottom: "0.35em",
      },
      paragraph: {
        marginBottom: "16px",
      },
      colorInherit: {
        color: "inherit",
      },
      colorPrimary: {
        color: "#1565c0",
      },
      colorSecondary: {
        color: "#1e88e5",
      },
      colorTextPrimary: {
        color: "rgba(0, 0, 0, 0.87)",
      },
      colorTextSecondary: {
        color: "rgba(0, 0, 0, 0.54)",
      },
      colorError: {
        color: "#f44336",
      },
      displayInline: {
        display: "inline",
      },
      displayBlock: {
        display: "block",
      },
    },
    MuiCssBaseline: {
      "@global": {
        html: {
          boxSizing: "border-box",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
        },
        body: {
          color: "rgba(0, 0, 0, 0.87)",
          margin: "0",
          fontSize: "0.875rem",
          fontFamily:
            'Nunito,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
          fontWeight: "400",
          lineHeight: "1.43",
          backgroundColor: "#f2f4f8",
          overflow: "hidden",
          backdrop: {
            backgroundColor: "#f2f4f8",
          },
        },
      },
    },
    MuiDrawer: {
      docked: {
        flex: "0 0 auto",
      },
      paper: {
        top: "0",
        flex: "1 0 auto",
        height: "100%",
        display: "flex",
        outline: "0",
        zIndex: "1200",
        position: "fixed",
        overflowY: "auto",
        flexDirection: "column",
        WebkitOverflowScrolling: "touch",
      },
      paperAnchorLeft: {
        left: "0",
        right: "auto",
      },
      paperAnchorRight: {
        left: "auto",
        right: "0",
      },
      paperAnchorTop: {
        top: "0",
        left: "0",
        right: "0",
        bottom: "auto",
        height: "auto",
        maxHeight: "100%",
      },
      paperAnchorBottom: {
        top: "auto",
        left: "0",
        right: "0",
        bottom: "0",
        height: "auto",
        maxHeight: "100%",
      },
      paperAnchorDockedLeft: {
        borderRight: "none",
      },
      paperAnchorDockedTop: {
        borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
      },
      paperAnchorDockedRight: {
        borderLeft: "1px solid rgba(0, 0, 0, 0.12)",
      },
      paperAnchorDockedBottom: {
        borderTop: "1px solid rgba(0, 0, 0, 0.12)",
      },
    },
    MuiPaper: {
      root: {
        color: "rgba(0, 0, 0, 0.87)",
        transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        backgroundColor: "#fff",
      },
      rounded: {
        borderRadius: "6px",
      },
      elevation0: {
        boxShadow: "none",
      },
      elevation1: {
        boxShadow: "0 0 23px -6px rgba(0, 0, 0, .24)",
      },
      elevation2: {
        boxShadow: "0 0 23px -6px rgba(0, 0, 0, .24)",
      },
      elevation3: {
        boxShadow: "0 0 23px -6px rgba(0, 0, 0, .24)",
      },
      elevation4: {
        boxShadow: "0 0 23px -6px rgba(0, 0, 0, .24)",
      },
      elevation5: {
        boxShadow: "0 0 23px -6px rgba(0, 0, 0, .24)",
      },
      elevation6: {
        boxShadow: "0 0 23px -6px rgba(0, 0, 0, .24)",
      },
      elevation7: {
        boxShadow: "0 0 23px -6px rgba(0, 0, 0, .24)",
      },
      elevation8: {
        boxShadow: "0 0 23px -6px rgba(0, 0, 0, .24)",
      },
      elevation9: {
        boxShadow: "0 0 23px -6px rgba(0, 0, 0, .24)",
      },
      elevation10: {
        boxShadow: "0 0 23px -6px rgba(0, 0, 0, .24)",
      },
      elevation11: {
        boxShadow: "0 0 23px -6px rgba(0, 0, 0, .24)",
      },
      elevation12: {
        boxShadow: "0 0 23px -6px rgba(0, 0, 0, .24)",
      },
      elevation13: {
        boxShadow: "0 0 23px -6px rgba(0, 0, 0, .24)",
      },
      elevation14: {
        boxShadow: "0 0 23px -6px rgba(0, 0, 0, .24)",
      },
      elevation15: {
        boxShadow: "0 0 23px -6px rgba(0, 0, 0, .24)",
      },
      elevation16: {
        boxShadow: "0 0 23px -6px rgba(0, 0, 0, .24)",
      },
      elevation17: {
        boxShadow: "0 0 23px -6px rgba(0, 0, 0, .24)",
      },
      elevation18: {
        boxShadow: "0 0 23px -6px rgba(0, 0, 0, .24)",
      },
      elevation19: {
        boxShadow: "0 0 23px -6px rgba(0, 0, 0, .24)",
      },
      elevation20: {
        boxShadow: "0 0 23px -6px rgba(0, 0, 0, .24)",
      },
      elevation21: {
        boxShadow: "0 0 23px -6px rgba(0, 0, 0, .24)",
      },
      elevation22: {
        boxShadow: "0 0 23px -6px rgba(0, 0, 0, .24)",
      },
      elevation23: {
        boxShadow: "0 0 23px -6px rgba(0, 0, 0, .24)",
      },
      elevation24: {
        boxShadow: "0 0 23px -6px rgba(0, 0, 0, .24)",
      },
    },
    MuiTableCell: {
      root: {
        display: "table-cell",
        padding: "16px",
        fontSize: "0.875rem",
        textAlign: "left",
        fontFamily:
          'Nunito,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
        fontWeight: "400",
        lineHeight: "1.43",
        borderBottom: "1px solid\n    rgba(224, 224, 224, 1)",
        verticalAlign: "inherit",
      },
      head: {
        color: "rgba(0, 0, 0, 0.87)",
        fontWeight: "600",
        lineHeight: "1.5rem",
      },
      body: { color: "rgba(0, 0, 0, 0.87)" },
      footer: {
        color: "rgba(0, 0, 0, 0.54)",
        fontSize: "0.75rem",
        lineHeight: "1.3125rem",
      },
    },
    MuiInputBase: {
      root: {
        color: "rgba(0, 0, 0, 0.87)",
        cursor: "text",
        display: "inline-flex",
        position: "relative",
        fontSize: "1rem",
        boxSizing: "border-box",
        alignItems: "center",
        fontFamily:
          'Nunito,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
        lineHeight: "1.1875em",
        MuiDisabled: {
          color: " rgba(0, 0, 0, 0.38)",
          cursor: " default",
        },
      },

      multiline: {
        padding: " 6px 0 7px",
      },
      multilinemarginDense: {
        paddingTop: " 3px",
      },
      fullWidth: {
        width: " 100%",
      },
      input: {
        font: " inherit",
        width: " 100%",
        border: " 0",
        height: " 1.1875em",
        margin: " 0",
        display: " block",
        padding: " 6px 0 7px",
        minWidth: " 0",
        background: " none",
        boxSizing: " content-box",
      },
      inputMultiline: {
        height: " auto",
        resize: " none",
        padding: " 0",
      },
    },
    MuiFormControl: {
      root: {
        margin: "15px",
      },
      fullWidth: {
        width: "90%",
      },
    },
    MuiCard: {
      root: {
        padding: "15px",
      },
    },
    MuiButton: {
      root: {
        margin: "10px",
      },
    },
    MuiInputLabel: {
      asterisk: {
        color: "red",
        fontSize: "18px",
      },
    },
    MuiMenu: {
      paper: {
        borderRadius: "0px",
      },
    },
  },
};
