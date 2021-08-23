import React from 'react';
import { useLocation } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { Formik, Form, getIn, ErrorMessage } from "formik";
import * as styles from '@material-ui/core/styles';
import * as core from '@material-ui/core';
import * as Yup from 'yup';
import './addTimeSheet.scss';
import { addTimeSheetInitValues } from '../../../../confifData/formInitialValues';

const Accordion = withStyles({
    root: {
        border: '1px solid rgba(0, 0, 0, .125)',
        boxShadow: 'none',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },
    },
    expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
    root: {
        backgroundColor: 'rgba(0, 0, 0, .03)',
        borderBottom: '1px solid rgba(0, 0, 0, .125)',
        marginBottom: -1,
        minHeight: 56,
        '&$expanded': {
            minHeight: 56,
        },
    },
    content: {
        '&$expanded': {
            margin: '12px 0',
        },
    },
    expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
    root: {
        padding: theme.spacing(3),
    },
}))(MuiAccordionDetails);

const useStyles = styles.makeStyles((theme: styles.Theme) =>
    styles.createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(3),
                width: '30ch',
            },
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 250,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
        customWidth: {
            maxWidth: 500,
        },
        noMaxWidth: {
            maxWidth: 'none',
        },
    }),
);


const theme2 = styles.createTheme({
    palette: {
        primary: {
            main: "#42BABD"
        },
    }
});

const yupValidationSchema = Yup.object().shape({
    licensePool: Yup.object().shape({
        poolName: Yup.string()
            .min(4, 'Min 4 characters required!')
            .max(150, 'Max 150 characters allowed!')
            .required(),
        poolCode: Yup.string()
            .min(3, 'Min 3 characters required!')
            .max(150, 'Max 150 characters allowed!'),
        // productId: Yup.string().required(),
        productId: Yup.object().shape({
            id: Yup.string().required()
        }),
        // defaultSession: Yup.string()
        //     .when("productId", {
        //         is: (value) => nonSessionProductsIds.includes(parseInt(selProductId)),
        //         then: Yup.string().notRequired(),
        //         // otherwise: Yup.string().required(),
        //     }),
        // defaultDuration: Yup.string()
        //     .when("productId", {
        //         is: (value) => nonSessionProductsIds.includes(parseInt(selProductId)),
        //         then: Yup.string().notRequired(),
        //         // otherwise: Yup.string().required(),
        //     }),
        // defaultFrequency: Yup.string()
        //     .when("productId", {
        //         is: (value) => nonSessionProductsIds.includes(parseInt(selProductId)),
        //         then: Yup.string().notRequired(),
        //         // otherwise: Yup.string().required(),
        //     }),
        poolType: Yup.string().required(),
        poolClass: Yup.string().required(),
        licenseCount: Yup.string().required(),
        periodOfUse: Yup.string().required(),
    }),
})

export function AddTimeSheet(props: any) {
    let location = useLocation();
    const classes = useStyles();

    const [openItems, setOpenItems] = React.useState<string[]>([]);

    const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, newExpanded: boolean) => {
        if (openItems.includes(panel)) {
            const newItems = openItems.filter(itemName => itemName !== panel)
            setOpenItems(newItems);
        } else {
            setOpenItems([...openItems, panel]);
        }
    };
    const initialValues = addTimeSheetInitValues;

    const timeSheetSubmit = (values: any) => {

    }

    const accordionTimesheetForm = (values: any) => {
        return (
            <core.Accordion square expanded={openItems.includes('panel1')} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>Add Timesheet #1</Typography>
                </AccordionSummary>
                <core.AccordionDetails>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={(values, { setSubmitting }) => {
                            timeSheetSubmit(values)
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
                            handleSubmit,
                            isSubmitting,
                            setFieldValue,
                            isValid,
                            dirty,
                            /* and other goodies */
                        }) => (
                            <Form className="addTimeSheetForm">
                                <div className="classTypeDropdown firstPartDiv">
                                    <core.FormControl variant="outlined" className={classes.formControl}>
                                        <core.InputLabel id="demo-simple-select-outlined-label">Age</core.InputLabel>
                                        <core.Select
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            // value={age}
                                            onChange={handleChange}
                                            label="Age"
                                        >
                                            <core.MenuItem value="">
                                                <em>None</em>
                                            </core.MenuItem>
                                            <core.MenuItem value={10}>Ten</core.MenuItem>
                                            <core.MenuItem value={20}>Twenty</core.MenuItem>
                                            <core.MenuItem value={30}>Thirty</core.MenuItem>
                                        </core.Select>
                                    </core.FormControl>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </core.AccordionDetails>
            </core.Accordion>
        )
    }
    return (
        <div className="AddTimeSheetMain">
            <div className="pageTitle">
                <h4>Add Timesheet</h4>
            </div>
            <div className="timesheetsDiv">
                {accordionTimesheetForm({})}
                {/* <styles.ThemeProvider theme={theme2}> */}
                    {/* <core.TextField
                        id="description"
                        multiline
                        rows={4}
                        label="Description"
                        variant="outlined"
                        autoComplete="off"
                        // value={values.licensePool.poolDescription}
                        name="licensePool.poolDescription"
                        // onChange={handleChange}
                        // onBlur={handleBlur}
                    /> */}
                {/* </styles.ThemeProvider> */}
            </div>
        </div>
    )
}