import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from "react-router-dom";
import './addEmployee.scss';


export function AddEmployee(props: any) {

    return (
        <div>
            <div className="addLink">
                <Button
                    className="hoverBgButtonLinkForm"
                >
                    <Link to="/employee">
                        Employee List
                    </Link>
                </Button>
            </div>

            <div>In Add Employee PAGE.</div>
            </div>
    )
}
