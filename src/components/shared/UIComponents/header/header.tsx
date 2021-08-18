import * as React from "react";
import { Form, Nav, Navbar, NavDropdown, FormControl, Container } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import AccountCircle from "@material-ui/icons/AccountCircle";
import "./header.scss";
import { Link, useHistory, useLocation } from "react-router-dom";

import { FunctionComponent, useEffect } from "react";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import ToggleButton from "@material-ui/lab/ToggleButton";
import { useSelector } from "react-redux";
import { IStore } from "../../helpers/interfaces/interfaces";

export const Header: FunctionComponent = (props: any) => {
    let location = useLocation();
    let history = useHistory();
    const [activeLink, setactiveLink] = React.useState(false);
    // const [alignment, setAlignment] = React.useState<string | null>('');

    // const handleAlignment = (event: React.MouseEvent<HTMLElement>, newAlignment: string | null) => {
    //   setAlignment(newAlignment);
    // };
    // const logout = () => {
    //     removeCookie();
    //     history.push("/logout")
    // };

    return (
        <div className="header-wrapper w-100">
            <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" className="w-100">
                <Container>
                    <Navbar.Brand href="#home" className="navBarBrandClass">
                        <img
                            src="../../../../../images/Learnship-primary-logo-negative.svg"
                            width="130"
                            height="28"
                            alt="Learnship"
                        />
                        {/* Learnship */}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <NavDropdown title={"Venkata Krishna Reddy"} className="t-dec-none userDropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* <Navbar>
                <Container>
                    <Navbar.Brand href="#home">
                        
                        Learnship
                        </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Signed in as: <a href="#login">Mark Otto</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar> */}
        </div>
    );
}
