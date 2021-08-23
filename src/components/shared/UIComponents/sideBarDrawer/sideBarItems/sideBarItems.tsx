/* eslint-disable array-callback-return */
import React from 'react';
import * as core from "@material-ui/core";
import * as styles from '@material-ui/core/styles';
import * as icons from '@material-ui/icons';
import { NavLink } from "react-router-dom";
import "./sideBarItems.scss";


import './sideBarItems.scss';

const useStyles = styles.makeStyles((theme: styles.Theme) =>
    styles.createStyles({
        root: {
            width: '100%',
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
        },
        nested: {
            paddingLeft: theme.spacing(4),
        },
    }),
);

export function SidebarDrawerItems() {

    const classes = useStyles();
    const curPath = window.location.pathname;
    const [openItems, setOpenItems] = React.useState<string[]>([]);

    React.useEffect(() => {
        const path = curPath;
        const items: any = {
            "item1": ["add-timesheet", "timesheet-list", "report"],
            "item2": ["all-timesheet-list", "team-timesheet-list"],
            "item3": ["department", "project", "employee"],
            "item4": ["db-setup"]
        };
        for (var key in items) {
            const baseLinks = items[key];
            // eslint-disable-next-line no-loop-func
            baseLinks.filter((li: string) => {
                if (path.includes(li)) {
                    setOpenItems([...openItems, key])
                }
            })
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [curPath])

    const handleItemOpen = (item: string) => {
        if (openItems.includes(item)) {
            const newItems = openItems.filter(itemName => itemName !== item)
            setOpenItems(newItems);
        } else {
            setOpenItems([...openItems, item]);
        }
    };

    return (
        <React.Fragment>
            <core.List>
                <core.ListItem button onClick={handleItemOpen.bind(null, "item1")}>
                    <core.ListItemIcon>
                        <icons.SpeedOutlined />
                    </core.ListItemIcon>
                    <core.ListItemText primary="Timesheet" />
                    {openItems.includes("item1") ? <icons.ExpandLess /> : <icons.ExpandMore />}
                </core.ListItem>
                <core.Collapse in={openItems.includes("item1")} timeout="auto" unmountOnExit>
                    <core.List component="div" disablePadding>
                        <core.ListItem button className={`${classes.nested} listItemClass`} component={NavLink} activeClassName="activeLink" to={{ pathname: '/add-timesheet', state: {} }}>
                            <core.ListItemIcon>
                                <icons.AddCircleOutlineOutlined />
                            </core.ListItemIcon>
                            <core.ListItemText primary="Add" />
                        </core.ListItem>
                        <core.ListItem button className={`${classes.nested} listItemClass`} component={NavLink} activeClassName="activeLink" to={{ pathname: '/timesheet-list', state: {} }}>
                            <core.ListItemIcon>
                                <icons.ListAlt />
                            </core.ListItemIcon>
                            <core.ListItemText primary="Timesheet List" />
                        </core.ListItem>
                        <core.ListItem button className={`${classes.nested} listItemClass`} component={NavLink} activeClassName="activeLink" to={{ pathname: '/report', state: {} }}>
                            <core.ListItemIcon>
                                <icons.LocalLibraryOutlined />
                            </core.ListItemIcon>
                            <core.ListItemText primary="Report" />
                        </core.ListItem>
                    </core.List>
                </core.Collapse>
                <core.ListItem button onClick={handleItemOpen.bind(null, "item2")}>
                    <core.ListItemIcon>
                        <icons.MenuBook />
                    </core.ListItemIcon>
                    <core.ListItemText primary="Reports" />
                    {openItems.includes("item2") ? <icons.ExpandLess /> : <icons.ExpandMore />}
                </core.ListItem>
                <core.Collapse in={openItems.includes("item2")} timeout="auto" unmountOnExit>
                    <core.List component="div" disablePadding>
                        <core.ListItem button className={`${classes.nested} listItemClass`} component={NavLink} activeClassName="activeLink" to={{ pathname: '/all-timesheet-list', state: {} }}>
                            <core.ListItemIcon>
                                <icons.GridOnOutlined />
                            </core.ListItemIcon>
                            <core.ListItemText primary="All Timesheet" />
                        </core.ListItem>
                        <core.ListItem button className={`${classes.nested} listItemClass`} component={NavLink} activeClassName="activeLink" to={{ pathname: '/team-timesheet-list', state: {} }}>
                            <core.ListItemIcon>
                                <icons.DnsOutlined />
                            </core.ListItemIcon>
                            <core.ListItemText primary="Team Timesheet" />
                        </core.ListItem>
                    </core.List>
                </core.Collapse>
            </core.List>
            <core.Divider />
            <span className="adminInterfaceStart"><icons.SystemUpdateAltOutlined /></span>
            <core.List>
                <core.ListItem button onClick={handleItemOpen.bind(null, "item3")}>
                    <core.ListItemIcon>
                        <icons.SupervisedUserCircleOutlined />
                    </core.ListItemIcon>
                    <core.ListItemText primary="Admin" />
                    {openItems.includes("item3") ? <icons.ExpandLess /> : <icons.ExpandMore />}
                </core.ListItem>
                <core.Collapse in={openItems.includes("item3")} timeout="auto" unmountOnExit>
                    <core.List component="div" disablePadding>
                        <core.ListItem button className={`${classes.nested} listItemClass`} component={NavLink} activeClassName="activeLink" to={{ pathname: '/departments', state: {} }}>
                            <core.ListItemIcon>
                                <icons.GroupWorkOutlined />
                            </core.ListItemIcon>
                            <core.ListItemText primary="Department" />
                        </core.ListItem>
                        <core.ListItem button className={`${classes.nested} listItemClass`} component={NavLink} activeClassName="activeLink" to={{ pathname: '/projects', state: {} }}>
                            <core.ListItemIcon>
                                <icons.LaptopChromebookOutlined />
                            </core.ListItemIcon>
                            <core.ListItemText primary="Project" />
                        </core.ListItem>
                        <core.ListItem button className={`${classes.nested} listItemClass`} component={NavLink} activeClassName="activeLink" to={{ pathname: '/employee', state: {} }}>
                            <core.ListItemIcon>
                                <icons.PeopleAltOutlined />
                            </core.ListItemIcon>
                            <core.ListItemText primary="Employee" />
                        </core.ListItem>
                    </core.List>
                </core.Collapse>
                <core.ListItem button onClick={handleItemOpen.bind(null, "item4")}>
                    <core.ListItemIcon>
                        <icons.MenuBook />
                    </core.ListItemIcon>
                    <core.ListItemText primary="Maintenance" />
                    {openItems.includes("item4") ? <icons.ExpandLess /> : <icons.ExpandMore />}
                </core.ListItem>
                <core.Collapse in={openItems.includes("item4")} timeout="auto" unmountOnExit>
                    <core.List component="div" disablePadding>
                        <core.ListItem button className={`${classes.nested} listItemClass`} component={NavLink} activeClassName="activeLink" to={{ pathname: '/db-setup', state: {} }}>
                            <core.ListItemIcon>
                                <icons.ViewListOutlined />
                            </core.ListItemIcon>
                            <core.ListItemText primary="DB Setup" />
                        </core.ListItem>
                    </core.List>
                </core.Collapse>
            </core.List>
        </React.Fragment>
    );
}
