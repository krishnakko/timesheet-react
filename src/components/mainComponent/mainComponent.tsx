import {
    makeStyles,
    Theme,
    createStyles,
} from "@material-ui/core/styles";
const drawerWidth = 280;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
        },
        drawer: {
            [theme.breakpoints.up("md")]: {
                width: drawerWidth,
                flexShrink: 0,
            },
        },
        appBar: {
            [theme.breakpoints.up("md")]: {
                // width: `calc(100% - ${drawerWidth}px)`,
                // marginLeft: drawerWidth,
                zIndex: 9999,
            },
        },
        menuButton: {
            marginRight: theme.spacing(2),
            [theme.breakpoints.up("md")]: {
                display: "none",
            },
        },
        // necessary for content to be below app bar
        toolbar: theme.mixins.toolbar,
        drawerPaper: {
            width: drawerWidth,
            backgroundColor: "#EBEBE6",
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
    })
);

export function MainContent() {
    return (
        <div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
        </div>
    )
}
