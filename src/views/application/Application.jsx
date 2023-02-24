import React, { useState } from "react";
import {
  Box,
  Alert,
  Snackbar,
  TextField,
  Card,
  CardContent,
  Button,
  Typography,
  Grid,
  Divider,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Checkbox,
  Switch,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormGroup,
  CardMedia,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { createTheme, ThemeProvider} from '@mui/material/styles';
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import "./Application.css";
//Firebase Imports
import {
  submitCompanyApplication,
  validateApplicationCode,
} from "../../firebase/utils";

const theme = createTheme({
  typography: {
    fontFamily: 'Circular Std',
  },
});

export default function Application() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  /**
   * Functions for Current Openings Toggle Button
   */
  const [showForm, setShowForm] = useState(false);

  const handleToggle = () => {
    setShowForm(!showForm);
  };

  /**
   * template application for empty state -- should contain all relevant fields for company application
   */
  const blankApp = {
    applicationId: "",
    name: "",
    industry: "",
    website: "",
    size: "",
    locations: "",
    busType: "",
    mission: "",
    dei: "",
    envRes: "",
    socImp: "",
    mentor: "",
    current: {}, //Should we create separate object for this? Some companies may not have current openings. Or should we just make the forms fill N/A for all categories within if the switch is false
    future: "",
    validCode: false,
  };

  /**
   * template for job position object
   */
  const blankPosition = {
    jobTitle: "",
    compensationRange: "",
    startDate: "",
    endDate: "",
    skillsQual: "",
    deadline: "",
    howApply: "",
    remote: false,
    active: true, // toggle to display/validate job object 
  };

  /**
   * adds new position to applicationInfo.current using the length of the object as the key value
   */
  const addPosition = () => {
    setApplicationInfo({
      ...applicationInfo,
      current: {
        ...applicationInfo.current,
        [Object.keys(applicationInfo.current).length]: blankPosition,
      },
    });
  };

  /**
   * application object to be updated by the form and sent to firebase on form submit
   */
  const [applicationInfo, setApplicationInfo] = React.useState(blankApp);

  /**
   * object used for keeping track of application errors
   */
  const [errors, setErrors] = React.useState({
    validation: false, // form submitted without all fields
    verification: false, // server error
    invalidId: false, // submitted id does not exist in the database
    submitSuccess: false, // used to display form submit success snackbar
  });

  /**
   * handler function for updating applicationInfo object
   * @param {event} event should come from a form input object with target.name equal to the name of the key you wish to update
   */
  const handleInput = (event) => {
    event.preventDefault();
    setApplicationInfo({
      ...applicationInfo,
      [event.target.name]: event.target.value,
    });
  };

  /**
   * input handler for job openings
   * @param {event} event
   * @param {int} ind used as the key for application.current object (hopefully a temporary solution -- would be better to create a UUID or something)
   */
  const updateJobInfo = (event, ind) => {
    event.preventDefault();
    setApplicationInfo({
      ...applicationInfo,
      current: {
        ...applicationInfo.current,
        [ind]: {
          ...applicationInfo.current[ind],
          [event.target.name]: event.target.value,
        },
      },
    });
  };

  /**
   * checks validation rules against applicationInfo object
   * @returns boolean indicating if form is valid & can be submitted
   */
  const validateForm = () => {
    // Object.values(applicationInfo).every((x) => !!x) // checks to see if all values are not empty
    return applicationInfo.validCode && applicationInfo.name !== "" 
    && applicationInfo.industry !== "" && applicationInfo.website !== ""
    && applicationInfo.size !== "" && applicationInfo.locations !== ""
    && applicationInfo.busType !== "" && applicationInfo.mission !== ""
    && applicationInfo.dei !== "" && applicationInfo.envRes !== ""
    && applicationInfo.socImp !== "" && applicationInfo.mentor !== ""; 
  };

  /**
   * calls submitCompanyApplication using current applicationInfo object -- checks for form validation and verification
   * @param {event} event should only be called on form submit
   */
  const submitForm = (event) => {
    event.preventDefault();
    if (validateForm()) {
      submitCompanyApplication(
        applicationInfo.applicationId.trim(),
        applicationInfo
      )
        .then(() => {
          console.log("successfully submitted application");
          setApplicationInfo(blankApp);
          setShowForm(false);
          setErrors(
            Object.keys(errors).reduce((acc, key) => {
              acc[key] = false;
              return acc;
            }, {})
          );
          setErrors({ ...errors, submitSuccess: true });
        })
        .catch(
          (
            _ // error in verifying id
          ) =>
            setErrors({
              ...errors,
              validation: false,
              verification: true,
            })
        );
    } else {
      setErrors({
        // errors in validating information (parts of form are not complete)
        ...errors,
        validation: true,
        verification: false,
      });
    }
  };

  /**
   * checks if code exists in database and updates errors/applicationInfo object
   * @param {string} code
   * @returns boolean validating code existence in firebase
   */
  const validateCode = (code) => {
    validateApplicationCode(code)
      // .then((valid) => {
      //   setErrors({ ...errors, invalidId: !valid });
      //   setApplicationInfo({ ...applicationInfo, validCode: valid });
      // })
      // .catch((error) => {
      //   console.log("error validating application code", error);
      //   setErrors({ ...errors, verification: true });
      // });
      setErrors({ ...errors, invalidId: !true });
      setApplicationInfo({ ...applicationInfo, validCode: true });
  };
  // codes that should work rn:
  // test-company-1
  // test-company-2
  // test-william


  return (
    <>
    <ThemeProvider theme={theme}>
    
    
      <div style={{ background: '#f5f5f5' }}>
        <div className="code-block" align="center">
          <br></br>
          <br></br>
          <br></br>
          <Grid justifyContent="center" alignItems="center">
            <Card variant="outlined" sx={{ minWidth: 450, maxWidth: 460 }}>
              <CardContent>
                <Typography variant="body2" component="div">
                  Thank you for your interest in applying to IPP! Before you
                  continue with your application, please enter the Application
                  Code provided by one of our IPP staff:
                </Typography>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 2, width: "30ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="outlined-basic"
                    label="Appplication Code"
                    variant="outlined"
                    name="applicationId"
                    onKeyPress={(e) => e.key === "Enter" && e.preventDefault()}
                    value={applicationInfo.applicationId}
                    onChange={handleInput}
                    error={errors.invalidId}
                    disabled={applicationInfo.validCode}
                    helperText={
                      errors.invalidId
                        ? "Invalid Application Code"
                        : applicationInfo.validCode
                        ? "Valid Application Code!"
                        : ""
                    }
                  />
                </Box>
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => validateCode(applicationInfo.applicationId)}
                >
                  Validate
                </Button>
                <Typography variant="body2">
                  <br></br>
                  Don’t have a code yet? Please reach out to our partner
                  relations staff at: brown-cs-ipp@brown.edu to be provided with
                  one. In the mean time, feel free to browse our application
                  below.
                </Typography>
              </CardContent>
            </Card>
            <br></br>
            <br></br>
            <br></br>
          </Grid>
        </div>
        <br></br>
        <Divider />
        <br></br>
        <div id="form" align="center">
          <Typography variant="body2">
            To apply to become a partner, please provide the following details
            so we can best inform our students about your job opportunities.
          </Typography>
          <br></br>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 2, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                id="outlined-multiline-flexible"
                label="Company Name"
                color="secondary"
                name="name"
                value={applicationInfo.name}
                onChange={handleInput}
                disabled={!applicationInfo.validCode}
              />
              <TextField
                id="outlined-textarea"
                label="Industry"
                color="secondary"
                name="industry"
                value={applicationInfo.industry}
                onChange={handleInput}
                disabled={!applicationInfo.validCode}
              />
            </div>
            <div>
              <TextField
                id="standard-basic"
                label="Website"
                color="secondary"
                name="website"
                value={applicationInfo.website}
                onChange={handleInput}
                disabled={!applicationInfo.validCode}
              />
              <TextField
                id="filled-multiline-flexible"
                label="Size (Employees)"
                color="secondary"
                name="size"
                value={applicationInfo.size}
                onChange={handleInput}
                disabled={!applicationInfo.validCode}
              />
            </div>

            <div className="formcontrol">
              <TextField
                id="filled-textarea"
                label="Office Locations"
                placeholder="Providence"
                color="secondary"
                name="locations"
                value={applicationInfo.locations}
                onChange={handleInput}
                disabled={!applicationInfo.validCode}
              />
              {"\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"}
              <FormControl disabled={!applicationInfo.validCode}>
                <FormLabel
                  id="demo-radio-buttons-group-label"
                  color="secondary"
                >
                  Business Type
                </FormLabel>
                <RadioGroup
                  name="busType"
                  value={applicationInfo.busType}
                  onChange={handleInput}
                >
                  <FormControlLabel
                    value="For Profit"
                    control={<Radio color="secondary" />}
                    label="For Profit"
                  />
                  <FormControlLabel
                    value="Not For Profit"
                    control={<Radio color="secondary" />}
                    label="Not For Profit"
                  />
                  <FormControlLabel
                    value="Non-Profit"
                    control={<Radio color="secondary" />}
                    label="Non-Profit"
                  />
                </RadioGroup>
              </FormControl>
              {
                "\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"
              }
            </div>
          </Box>

          <div>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "60ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="filled-multiline-static"
                label="Mission Statement"
                color="secondary"
                multiline
                rows={4}
                name="mission"
                value={applicationInfo.mission}
                onChange={handleInput}
                disabled={!applicationInfo.validCode}
              />
            </Box>
          </div>
          <div>
            <Typography variant="h6">
              <b>Values</b>
            </Typography>
          </div>
          <div>
            <br></br>
            <CardMedia
              component="img"
              sx={{
                height: 100,
                objectFit: "contain",
              }}
              image={require("./temp_imgs/badges.png")}
            ></CardMedia>
            <br></br>
            <Box
              sx={{
                "& .MuiTextField-root": { m: 1, width: "60ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
                sx={{
                  maxWidth: '100ch',
                  minHeight: '8ch',
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography sx={{ width: "33%", flexShrink: 0 }}>
                    DEI (Diversity, Equity, Inclusion)
                  </Typography>
                  <Typography sx={{ color: "text.secondary" }}>
                    {" "}
                    How does your company build an environment that fosters
                    diversity, equity, and inclusion?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <TextField
                    id="filled-multiline-static"
                    color="secondary"
                    label="Response"
                    multiline
                    rows={4}
                    name="dei"
                    value={applicationInfo.dei}
                    onChange={handleInput}
                    disabled={!applicationInfo.validCode}
                  />
                </AccordionDetails>
              </Accordion>
              <Accordion
              sx={{
                maxWidth: '100ch',
                minHeight: '8ch',
              }}
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography sx={{ width: "33%", flexShrink: 0 }}>
                    Environmental Responsibility
                  </Typography>
                  <Typography sx={{ color: "text.secondary" }}>
                    How is your company working to protect the environment and
                    address climate change?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <TextField
                    id="filled-multiline-static"
                    color="secondary"
                    label="Response"
                    multiline
                    rows={4}
                    name="envRes"
                    value={applicationInfo.envRes}
                    onChange={handleInput}
                    disabled={!applicationInfo.validCode}
                  />
                </AccordionDetails>
              </Accordion>
              <Accordion
              sx={{
                maxWidth: '100ch',
                minHeight: '8ch',
              }}
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3bh-content"
                  id="panel3bh-header"
                >
                  <Typography sx={{ width: "33%", flexShrink: 0 }}>
                    Social Impact
                  </Typography>
                  <Typography sx={{ color: "text.secondary" }}>
                    How does your company have/aim to have a positive social
                    impact?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <TextField
                    id="filled-multiline-static"
                    color="secondary"
                    label="Response"
                    multiline
                    rows={4}
                    name="socImp"
                    value={applicationInfo.socImp}
                    onChange={handleInput}
                    disabled={!applicationInfo.validCode}
                  />
                </AccordionDetails>
              </Accordion>
              <Accordion
              sx={{
                maxWidth: '100ch',
                minHeight: '8ch',
              }}
                expanded={expanded === "panel4"}
                onChange={handleChange("panel4")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
                >
                  <Typography sx={{ width: "33%", flexShrink: 0 }}>
                    Mentorship
                  </Typography>
                  <Typography sx={{ color: "text.secondary" }}>
                    How do opportunities with your company facilitate
                    professional growth and mentorship?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <TextField
                    id="filled-multiline-static"
                    color="secondary"
                    label="Response"
                    multiline
                    rows={4}
                    name="mentor"
                    value={applicationInfo.mentor}
                    onChange={handleInput}
                    disabled={!applicationInfo.validCode}
                  />
                </AccordionDetails>
              </Accordion>
            </Box>
          </div>
          <br></br>
          <div>
            <Typography variant="h6">
              <b>Current Openings</b>
              <div>
                <FormControl
                  component="fieldset"
                  disabled={!applicationInfo.validCode}
                >
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Switch
                          color="secondary"
                          checked={showForm}
                          onChange={handleToggle}
                        />
                      }
                      label="Would you like to advertise current open positions through IPP?"
                    />
                  </FormGroup>
                </FormControl>
                <br />
                {showForm && (
                  <>
                  <br></br>
                    <Button
                      variant="contained"
                      color="secondary"
                      endIcon={<AddIcon />}
                      onClick={addPosition}
                    >
                      Add Position
                    </Button>
                    <br />
                    <br></br>
                    {Object.values(applicationInfo.current).map((elt, ind) => {
                      return (
                        elt.active && (
                          <div key={`current-position-${ind}`}>
                            <Card
                              variant="outlined"
                              sx={{ minWidth: "60ch", maxWidth: "65ch" }}
                            >
                              <CardContent>
                                <Box
                                  component="form"
                                  sx={{
                                    "& .MuiTextField-root": {
                                      m: 1,
                                      width: "60ch",
                                    },
                                  }}
                                  noValidate
                                  autoComplete="off"
                                >
                                  <TextField
                                    id="filled-multiline-static"
                                    label="Job Title"
                                    color="secondary"
                                    name="jobTitle"
                                    value={elt.jobTitle}
                                    onChange={(e) => updateJobInfo(e, ind)}
                                    disabled={!applicationInfo.validCode}
                                  />
                                </Box>
                                <Box
                                  component="form"
                                  sx={{
                                    "& .MuiTextField-root": {
                                      m: 1,
                                      width: "60ch",
                                    },
                                  }}
                                  noValidate
                                  autoComplete="off"
                                >
                                  <TextField
                                    id="filled-multiline-static"
                                    label="Compensation Range"
                                    color="secondary"
                                    name="compensationRange"
                                    value={elt.compensationRange}
                                    onChange={(e) => updateJobInfo(e, ind)}
                                    disabled={!applicationInfo.validCode}
                                  />
                                </Box>
                                <Box
                                  component="form"
                                  sx={{
                                    "& .MuiTextField-root": {
                                      m: 1,
                                      width: "28.79ch",
                                    },
                                  }}
                                  noValidate
                                  autoComplete="off"
                                >
                                  <TextField
                                    id="filled-multiline-static"
                                    label="Start Date"
                                    color="secondary"
                                    name="startDate"
                                    value={elt.startDate}
                                    onChange={(e) => updateJobInfo(e, ind)}
                                    disabled={!applicationInfo.validCode}
                                  />
                                  <TextField
                                    id="filled-multiline-static"
                                    label="End Date"
                                    color="secondary"
                                    name="endDate"
                                    value={elt.endDate}
                                    onChange={(e) => updateJobInfo(e, ind)}
                                    disabled={!applicationInfo.validCode}
                                  />
                                </Box>
                                <Box
                                  component="form"
                                  sx={{
                                    "& .MuiTextField-root": {
                                      m: 1,
                                      width: "60ch",
                                    },
                                  }}
                                  noValidate
                                  autoComplete="off"
                                >
                                  <TextField
                                    id="filled-multiline-static"
                                    label="Skills and Qualifications"
                                    color="secondary"
                                    name="skillsQual"
                                    value={elt.skillsQual}
                                    onChange={(e) => updateJobInfo(e, ind)}
                                    disabled={!applicationInfo.validCode}
                                  />
                                </Box>
                                <Box
                                  component="form"
                                  sx={{
                                    "& .MuiTextField-root": {
                                      m: 1,
                                      width: "60ch",
                                    },
                                  }}
                                  noValidate
                                  autoComplete="off"
                                >
                                  <TextField
                                    id="filled-multiline-static"
                                    label="Deadline"
                                    color="secondary"
                                    name="deadline"
                                    value={elt.deadline}
                                    onChange={(e) => updateJobInfo(e, ind)}
                                    disabled={!applicationInfo.validCode}
                                  />
                                </Box>
                                <Box
                                  component="form"
                                  sx={{
                                    "& .MuiTextField-root": {
                                      m: 1,
                                      width: "60ch",
                                    },
                                  }}
                                  noValidate
                                  autoComplete="off"
                                >
                                  <TextField
                                    id="filled-multiline-static"
                                    label="How to Apply"
                                    color="secondary"
                                    name="howApply"
                                    value={elt.howApply}
                                    onChange={(e) => updateJobInfo(e, ind)}
                                    disabled={!applicationInfo.validCode}
                                  />
                                </Box>
                                <div>
                                  <FormControlLabel
                                    control={
                                      <Checkbox
                                        defaultChecked
                                        color="secondary"
                                        name="remote"
                                        value={elt.remote}
                                        onChange={(event, checked) => {
                                          event.preventDefault();
                                          setApplicationInfo({
                                            ...applicationInfo,
                                            current: {
                                              ...applicationInfo.current,
                                              [ind]: {
                                                ...applicationInfo.current[ind],
                                                [event.target.name]: checked,
                                              },
                                            },
                                          });
                                        }}
                                        disabled={!applicationInfo.validCode}
                                      />
                                    }
                                    label="Remote Accessibility?"
                                  />
                                </div>
                                <Button
                                  variant="outlined"
                                  color="secondary"
                                  endIcon={<DeleteIcon />}
                                  onClick={() => {
                                    setApplicationInfo({
                                      ...applicationInfo,
                                      current: {
                                        ...applicationInfo.current,
                                        [ind] : {
                                          ...applicationInfo.current[ind],
                                          active: false
                                        }
                                      },
                                    });
                                    console.log(applicationInfo)
                                  }}
                                >
                                  Delete
                                </Button>
                              </CardContent>
                            </Card>
                            <br />
                          </div>
                        )
                      );
                    })}
                  </>
                )}
              </div>
            </Typography>
          </div>

          <div>
            <br></br>
            <Typography variant="h6">
              <b>Future Hiring Timeline</b>
            </Typography>

            <Typography variant="body2">
              Optionally include more information here so we can keep an eye out
              for future roles.
            </Typography>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "60ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="filled-multiline-static"
                color="secondary"
                multiline
                rows={4}
                name="future"
                value={applicationInfo.future}
                onChange={handleInput}
                disabled={!applicationInfo.validCode}
              />
            </Box>
            <br></br>
            <Button
              variant="contained"
              color={errors.validation ? "error" : "secondary"}
              onClick={submitForm}
              disabled={!applicationInfo.validCode}
            >
              <b>Submit</b>
            </Button>
            {/* <Button onClick={() => console.log(applicationInfo)}> // for testing purposes
              Check Application
            </Button> */}
            {errors.validation && (
              <Snackbar
                open={errors.validation}
                autoHideDuration={6000}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                onClose={() => setErrors({ ...errors, validation: false })}
                action={() => console.log("action")}
              >
                <Alert severity="error" sx={{ width: "100%" }}>
                  Please fill out all parts of the form!
                </Alert>
              </Snackbar>
            )}
            {errors.verification && (
              <Snackbar
                open={errors.verification}
                autoHideDuration={6000}
                onClose={() => setErrors({ ...errors, verification: false })}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
              >
                <Alert severity="error" sx={{ width: "100%" }}>
                  Issue submitting the application, please try again!
                </Alert>
              </Snackbar>
            )}
            {errors.submitSuccess && (
              <Snackbar
                open={errors.submitSuccess}
                onClose={() => setErrors({ ...errors, submitSuccess: false })}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
              >
                <Alert
                  onClose={() => setErrors({ ...errors, submitSuccess: false })}
                  severity="success"
                  sx={{ width: "100%" }}
                >
                  Application successfully submitted!
                </Alert>
              </Snackbar>
            )}
            <br></br>
            <br></br>
          </div>
        </div>
      </div>
      </ThemeProvider>
    </>
  );
}
