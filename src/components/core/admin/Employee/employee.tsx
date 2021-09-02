import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from "react-router-dom";
import './employee.scss';


export function Employee(props: any) {

    return (
        <div className="employeeMainDiv">
            <div className="addLink">
                <Button
                    className="hoverBgButtonLinkForm"
                >
                    <Link to="/employee/add">
                        Add Employee
                    </Link>
                </Button>
            </div>

            <div>In Employee LIST PAGE</div>
        </div>
    )
}