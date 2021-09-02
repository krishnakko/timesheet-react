import React, { useEffect, useState } from 'react'
import * as core from '@material-ui/core';
import { Link, useLocation } from "react-router-dom";
import { ErrorMessage, Form, Formik, getIn } from "formik";
import { object, ref, string } from 'yup';
import { Button, Dialog, Typography } from '@material-ui/core';
import {
    createStyles,
    Theme,
    withStyles,
    WithStyles,
} from "@material-ui/core/styles";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import CloseIcon from "@material-ui/icons/Close";
import './addDepartment.scss';
import IconButton from '@material-ui/core/IconButton';
import { ThemeProvider } from '@material-ui/styles';


const styles = (theme: Theme) =>
    createStyles({
        root: {
            margin: 0,
            padding: theme.spacing(2),
        },
        closeButton: {
            position: 'absolute',
            right: theme.spacing(1),
            top: theme.spacing(1),
            color: theme.palette.grey[500],
        },
    });

export interface DialogTitleProps extends WithStyles<typeof styles> {
    id: string;
    children: React.ReactNode;
    onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton
                    aria-label="close"
                    className={classes.closeButton}
                    onClick={onClose}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme: Theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme: Theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

const theme2 = ({
    palette: {
        primary: {
            main: "#42BABD"
        },
    }
});

const yupValidationSchema = object().shape({
    departmentCode: string()
        .max(25, 'Max 25 characters allowed!')
        .required(),
    departmentName: string()
        .min(4, 'Min 4 characters required!')
        .max(150, 'Max 150 characters allowed!')
        .required(),
    contact: string()
        .required(),
})


export function AddEditDepartment(props: any) {
    let location = useLocation();
    console.log("props", props)

    const pathName = location.pathname;
    console.log("location", location)

    const [formLoader, setFormLoader] = useState<boolean>(false);
    const [initialValues, setInitialValues] = useState<any>({});
    const [showAddDepartment, setAddDepartment] = useState<boolean>(false);

    useEffect(() => {
        const actionName = "create";
        if (actionName === "create") {
            const initValues = {
                "departmentCode": "",
                "departmentName": "",
                "contact": ""
            }
            setInitialValues(initValues);
        }
    }, [])

    const addOrEditDepartment = (values: any) => {
        console.log("values", values)
    }

    const handleClose = () => {
        props.handleCloseModal()
    }

    return (
        <div className="addDepartmentsMainDiv">

            {/* <div className="addLink">
                <core.Button
                    className="hoverBgButtonLinkForm"
                >
                    <Link to="/departments">
                        Departments List
                    </Link>
                </core.Button>
            </div> */}
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={props.show}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Modal title
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                        in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    </Typography>
                    <Typography gutterBottom>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                        lacus vel augue laoreet rutrum faucibus dolor auctor.
                    </Typography>
                    <Typography gutterBottom>
                        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                        scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                        auctor fringilla.
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                        Save changes
                    </Button>
                </DialogActions>
            </Dialog>
            <Dialog className="poolPopupDiv" aria-labelledby="customized-dialog-title" open={props.show}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    License pool details
                </DialogTitle>
                <DialogContent className="poolBodyDiv">
                    <div className="departmentsAdd addFormMainDiv">
                        {formLoader ? "" :
                            <Formik
                                initialValues={initialValues}
                                onSubmit={(values, { setSubmitting }) => {
                                    addOrEditDepartment(values)
                                    setTimeout(() => {
                                        setSubmitting(false);
                                    }, 400);
                                }}
                                validationSchema={yupValidationSchema}
                            >
                                {({
                                    values,
                                    errors,
                                    touched,
                                    handleChange,
                                    handleBlur,
                                    setFieldValue,
                                    isValid,
                                    dirty,
                                    /* and other goodies */
                                }) => (
                                    <Form>
                                        <div className="subFormDiv">
                                            <Dialog className="poolPopupDiv" aria-labelledby="customized-dialog-title" open={props.show}>
                                                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                                                    Add Department
                                                </DialogTitle>
                                                <DialogContent className="poolBodyDiv">
                                                    <div className="numberOfSeatsDiv firstPartDiv">
                                                        <ThemeProvider theme={theme2}>
                                                            <core.TextField
                                                                required
                                                                id="dept-code"
                                                                label="Department code"
                                                                variant="outlined"
                                                                name="departmentCode"
                                                                // value={values.departmentCode}
                                                                autoComplete="off"
                                                                onChange={(e) => { }}
                                                                onBlur={handleBlur}
                                                                className={`
                                                                    ${getIn(errors, "departmentCode") &&
                                                                        getIn(touched, "departmentCode")
                                                                        ? "requiredError"
                                                                        : ""}
                                                                    `}
                                                            />
                                                        </ThemeProvider>
                                                    </div>
                                                </DialogContent>
                                                <DialogActions className="dialogueActions">
                                                    <Button autoFocus className="closeButton hoverBgButtonLinkForm" onClick={handleClose} color="primary">
                                                        Close
                                                    </Button>
                                                </DialogActions>
                                            </Dialog>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        }
                    </div>
                </DialogContent>
                <DialogActions className="dialogueActions">
                    <Button autoFocus className="closeButton hoverBgButtonLinkForm" onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>

            {/* <div>In Departments Add PAGE</div> */}
        </div>
    )
}
