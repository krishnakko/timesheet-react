import React from 'react';
import {
    Divider,
    List,
    ListItem,
    Collapse,
    ListItemIcon,
    ListItemText
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
    const [openItems, setOpenItems] = React.useState<string[]>([]);

    const handleItemOpen = (item: string) => {
        console.log("item")
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
                        <ListItem button className={`${classes.nested} listItemClass`}>
                            <ListItemIcon>
                                <AddCircleOutlineOutlined />
                            </ListItemIcon>
                            <ListItemText primary="Add" />
                        </ListItem>
                        <ListItem button className={`${classes.nested} listItemClass`}>
                            <ListItemIcon>
                                <ListAlt />
                            </ListItemIcon>
                            <ListItemText primary="Timesheet List" />
                        </ListItem>
                        <ListItem button className={`${classes.nested} listItemClass`}>
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
                        <ListItem button className={`${classes.nested} listItemClass`}>
                            <ListItemIcon>
                                <GridOnOutlined />
                            </ListItemIcon>
                            <ListItemText primary="All Timesheet" />
                        </ListItem>
                        <ListItem button className={`${classes.nested} listItemClass`}>
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
                        <ListItem button className={`${classes.nested} listItemClass`}>
                            <ListItemIcon>
                                <GroupWorkOutlined />
                            </ListItemIcon>
                            <ListItemText primary="Department" />
                        </ListItem>
                        <ListItem button className={`${classes.nested} listItemClass`}>
                            <ListItemIcon>
                                <LaptopChromebookOutlined />
                            </ListItemIcon>
                            <ListItemText primary="Project" />
                        </ListItem>
                        <ListItem button className={`${classes.nested} listItemClass`}>
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
                        <ListItem button className={`${classes.nested} listItemClass`}>
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
