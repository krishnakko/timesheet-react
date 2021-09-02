import React from 'react';
import './project.scss';
import { Button } from '@material-ui/core';
import { Link } from "react-router-dom";


export function Projects(props: any) {

    return (
        <div className="projectsMainDiv">
            <div className="addLink">
                <Button
                    className="cancel hoverBgButtonLinkForm"
                >
                    <Link to="/projects/add">
                        Add Project
                    </Link>
                </Button>
            </div>

            <div>In Projects LIST PAGE</div>
        </div>
    )
}