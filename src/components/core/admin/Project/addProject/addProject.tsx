import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from "react-router-dom";
import './addProject.scss';


export function AddProject(props: any) {

    return (
        <div className="addProjectMainDiv">
            <div className="addLink">
                <Button
                    className="hoverBgButtonLinkForm"
                >
                    <Link to="/projects">
                        Projects List
                    </Link>
                </Button>
            </div>
            <div>In Add Project PAGE.</div>

        </div>
    )
}
