/* eslint-disable array-callback-return */
import React from 'react';
import {
    Divider,
    List,
    ListItem,
    Collapse,
    ListItemIcon,
    ListItemText,
} from "@material-ui/core";
import * as styles from '@material-ui/core/styles';
import {
    AddCircleOutlineOutlined,
    DnsOutlined,
    ExpandLess,
    ExpandMore,
    ListAlt,
    LocalLibraryOutlined,
    MenuBook,
    SpeedOutlined,
    ViewListOutlined,
    PeopleAltOutlined,
    GridOnOutlined,
    SupervisedUserCircleOutlined,
    LaptopChromebookOutlined,
    GroupWorkOutlined,
    SystemUpdateAltOutlined
} from '@material-ui/icons';
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
    const curPath = window.location.pathname
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
            console.log(`${key}: ${items[key]}`);
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
            <List>
                <ListItem button onClick={handleItemOpen.bind(null, "item1")}>
                    <ListItemIcon>
                        <SpeedOutlined />
                    </ListItemIcon>
                    <ListItemText primary="Timesheet" />
                    {openItems.includes("item1") ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openItems.includes("item1")} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={`${classes.nested} listItemClass`} component={NavLink} activeClassName="activeLink" to={{ pathname: '/add-timesheet', state: {} }}>

                            <ListItemIcon>
                                <AddCircleOutlineOutlined />
                            </ListItemIcon>
                            <ListItemText primary="Add" />
                        </ListItem>
                        <ListItem button className={`${classes.nested} listItemClass`} component={NavLink} activeClassName="activeLink" to={{ pathname: '/timesheet-list', state: {} }}>
                            <ListItemIcon>
                                <ListAlt />
                            </ListItemIcon>
                            <ListItemText primary="Timesheet List" />
                        </ListItem>
                        <ListItem button className={`${classes.nested} listItemClass`} component={NavLink} activeClassName="activeLink" to={{ pathname: '/report', state: {} }}>
                            <ListItemIcon>
                                <LocalLibraryOutlined />
                            </ListItemIcon>
                            <ListItemText primary="Report" />
                        </ListItem>
                    </List>
                </Collapse>
                <ListItem button onClick={handleItemOpen.bind(null, "item2")}>
                    <ListItemIcon>
                        <MenuBook />
                    </ListItemIcon>
                    <ListItemText primary="Reports" />
                    {openItems.includes("item2") ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openItems.includes("item2")} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={`${classes.nested} listItemClass`} component={NavLink} activeClassName="activeLink" to={{ pathname: '/all-timesheet-list', state: {} }}>
                            <ListItemIcon>
                                <GridOnOutlined />
                            </ListItemIcon>
                            <ListItemText primary="All Timesheet" />
                        </ListItem>
                        <ListItem button className={`${classes.nested} listItemClass`} component={NavLink} activeClassName="activeLink" to={{ pathname: '/team-timesheet-list', state: {} }}>
                            <ListItemIcon>
                                <DnsOutlined />
                            </ListItemIcon>
                            <ListItemText primary="Team Timesheet" />
                        </ListItem>
                    </List>
                </Collapse>
            </List>
            <Divider />
            <span className="adminInterfaceStart"><SystemUpdateAltOutlined /></span>
            <List>
                <ListItem button onClick={handleItemOpen.bind(null, "item3")}>
                    <ListItemIcon>
                        <SupervisedUserCircleOutlined />
                    </ListItemIcon>
                    <ListItemText primary="Admin" />
                    {openItems.includes("item3") ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openItems.includes("item3")} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={`${classes.nested} listItemClass`} component={NavLink} activeClassName="activeLink" to={{ pathname: '/department', state: {} }}>
                            <ListItemIcon>
                                <GroupWorkOutlined />
                            </ListItemIcon>
                            <ListItemText primary="Department" />
                        </ListItem>
                        <ListItem button className={`${classes.nested} listItemClass`} component={NavLink} activeClassName="activeLink" to={{ pathname: '/project', state: {} }}>
                            <ListItemIcon>
                                <LaptopChromebookOutlined />
                            </ListItemIcon>
                            <ListItemText primary="Project" />
                        </ListItem>
                        <ListItem button className={`${classes.nested} listItemClass`} component={NavLink} activeClassName="activeLink" to={{ pathname: '/employee', state: {} }}>
                            <ListItemIcon>
                                <PeopleAltOutlined />
                            </ListItemIcon>
                            <ListItemText primary="Employee" />
                        </ListItem>
                    </List>
                </Collapse>
                <ListItem button onClick={handleItemOpen.bind(null, "item4")}>
                    <ListItemIcon>
                        <MenuBook />
                    </ListItemIcon>
                    <ListItemText primary="Maintenance" />
                    {openItems.includes("item4") ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openItems.includes("item4")} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={`${classes.nested} listItemClass`} component={NavLink} activeClassName="activeLink" to={{ pathname: '/db-setup', state: {} }}>
                            <ListItemIcon>
                                <ViewListOutlined />
                            </ListItemIcon>
                            <ListItemText primary="DB Setup" />
                        </ListItem>
                    </List>
                </Collapse>
            </List>
        </React.Fragment>
    );
}
