import { Route, Router, Switch, useHistory, useLocation } from "react-router-dom";
import * as styles from "@material-ui/core/styles";
import { AddTimeSheet } from "../core/timeSheet/addTimeSheet/addTimeSheet";
import { TimeSheetList } from "../core/timeSheet/timeSheetList/timeSheetList";
import { Report } from "../core/timeSheet/report/report";
import { AllTimeSheet } from "../core/reports/allTimeSheet/allTimeSheet";
import { TeamTimeSheet } from "../core/reports/teamTimeSheet/teamTimeSheet";
import { Departments } from "../core/admin/Department/department";
import { Employee } from "../core/admin/Employee/employee";
import { Projects } from "../core/admin/Project/project";

const drawerWidth = 280;

const useStyles = styles.makeStyles((theme: styles.Theme) =>
    styles.createStyles({
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
            <Route exact path="/add-timesheet">
                <AddTimeSheet />
            </Route>
            <Route exact path="/timesheet-list">
                <TimeSheetList />
            </Route>
            <Route exact path="/report">
                <Report />
            </Route>
            <Route exact path="/all-timesheet-list">
                <AllTimeSheet />
            </Route>
            <Route exact path="/team-timesheet-list">
                <TeamTimeSheet />
            </Route>
            <Route exact path="/departments">
                <Departments />
            </Route>
            <Route exact path="/employee">
                <Employee />
            </Route>
            <Route exact path="/projects">
                <Projects />
            </Route>
        </div>
    )
}
