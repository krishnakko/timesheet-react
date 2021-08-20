import { CssBaseline } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import * as React from "react";

// A theme with custom primary and secondary color.
// It's optional.
const theme = createTheme({
    palette: {
        primary: {
            light: "#6dc7ca",
            main: "#49BABD",
            dark: "#338284",
            contrastText: "#fff",
        },
        secondary: {
            light: "#ff5e50",
            main: "#333333",
            dark: "#a90000",
            contrastText: "#fff",
        },
    },
});

export function withRoot(Component: any) {
    function WithRoot(props: object) {
        // MuiThemeProvider makes the theme available down the React tree
        // thanks to React context.
        return (
            <ThemeProvider theme={theme}>
                {/* Reboot kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                <Component {...props} />
            </ThemeProvider>
        );
    }

    return WithRoot;
}
