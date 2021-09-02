import { Button } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { AddEditDepartment } from './addDepartment/addDepartment';
import './department.scss';


export function Departments(props: any) {
    let location = useLocation();
    const pathName = location.pathname;
    console.log("location", location)
    const [showAddDepartment, setShowAddDepartment] = useState<boolean>(false);


    useEffect(() => {
        if (pathName === "/departments/add") {
            setShowAddDepartment(true);
        }
    }, [pathName])

    function handleEdit() {
    }

    const openDepartmentPopup = () => {
        console.log("showAddDepartment 2", showAddDepartment)

        setShowAddDepartment(true);
    }

    const closeShowPoolModal = () => {
        setShowAddDepartment(false);
    }

    return (
        <div className="departmentsMainDiv">
            {console.log("showAddDepartment", showAddDepartment)}
            {showAddDepartment ? <AddEditDepartment showEdit={false} show={showAddDepartment} handleEdit={handleEdit} handleCloseModal={closeShowPoolModal} /> : ""}
            <div className="addLink">
                <Button
                    className="hoverBgButtonLinkForm"
                    onClick={openDepartmentPopup}

                >
                    <Link to="/departments/add">
                        Add Department
                    </Link>
                </Button>
            </div>

            <div>In Departments LIST PAGE</div>
        </div>
    )
}
