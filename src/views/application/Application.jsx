import React, { useState } from "react";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Checkbox from "@mui/material/Checkbox";
import CardMedia from "@mui/material/CardMedia";
import Switch from "@mui/material/Switch";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormGroup from "@mui/material/FormGroup";
import "./Application.css";
//Firebase Imports
import {
  submitCompanyApplication,
  validateApplicationCode,
} from "../../firebase/utils";

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

  // Firebase Integration Below:

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
    current: "", //Should we create separate object for this? Some companies may not have current openings. Or should we just make the forms fill N/A for all categories within if the switch is false
    future: "",
    validCode: false,
  };

  const [submitSuccess, setSubmitSuccess] = React.useState(false);

  /**
   * object used for keeping track of application errors
   */
  const [errors, setErrors] = React.useState({
    validation: false, // form submitted without all fields
    verification: false, // id does not exist in /partners/${id}
    invalidId: false,
  });
  const [applicationInfo, setApplicationInfo] = React.useState(blankApp);

  // used for internal purposes
  // const [email, setEmail] = React.useState();
  // const [password, setPassword] = React.useState();

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

  const validateForm = () => {
    // Object.values(applicationInfo).every((x) => !!x) // checks to see if all values are not empty
    return applicationInfo.validCode && applicationInfo.name !== "";
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
          setErrors(
            Object.keys(errors).reduce((acc, key) => {
              acc[key] = false;
              return acc;
            }, {})
          );
          setSubmitSuccess(true);
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
   * checks if code exists in database
   * @param {string} code
   * @returns boolean validating code existence in firebase
   */
  const validateCode = (code) => {
    validateApplicationCode(code)
      .then((valid) => {
        setErrors({ ...errors, invalidId: !valid });
        setApplicationInfo({ ...applicationInfo, validCode: valid });
      })
      .catch((error) => console.log("error", error));
  };
  // codes that should work rn:
  // test-company-1
  // test-company-2
  // test-william

  return (
    <>
      <div>
        {/* <div>
        <form action="" autoComplete="off">
          email
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => {
              e.preventDefault();
              setEmail(e.target.value);
            }}
          />
          password
          <input
            type="text"
            name="password"
            value={password}
            onChange={(e) => {
              e.preventDefault();
              setPassword(e.target.value);
            }}
          />
          <div
            className="application-button"
            onClick={() => emailSignIn(email, password)}
          >
            submit
          </div>
        </form>
        <form action="" onSubmit={submitForm} autoComplete="off">
          <div>
            id
            <input
              name="id"
              type="text"
              value={applicationInfo.id}
              onChange={handleInput}
            />
          </div>
          <div>
            name
            <input
              name="name"
              type="text"
              value={applicationInfo.name}
              onChange={handleInput}
            />
          </div>
          <div className="application-button" onClick={submitForm}>
            submit
          </div>
          {errors.validation && (
            <div>please fill out all parts of the form!</div>
          )}
          {errors.verification && (
            <div>
              issue submitting application, please make sure the company id is
              correct
            </div>
          )}
        </form>
      </div>
    */}

        {/*Application Page Code*/}
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
                    onSubmit={(e) => e.preventDefault()}
                    value={applicationInfo.applicationId}
                    onChange={handleInput}
                    error={errors.invalidId}
                    disabled={applicationInfo.validCode}
                    helperText={
                      errors.invalidId
                        ? "Invalid Application Code"
                        : applicationInfo.validCode
                        ? "Valid Application Code!"
                        : null
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
                <RadioGroup name="radio-buttons-group">
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
          <div className="badges">
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
                {showForm && (
                  <form>
                    <Card
                      variant="outlined"
                      sx={{ minWidth: "60ch", maxWidth: "65ch" }}
                    >
                      <CardContent>
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
                            label="Job Title"
                            color="secondary"
                          />
                        </Box>
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
                            label="Compensation Range"
                            color="secondary"
                          />
                        </Box>
                        <Box
                          component="form"
                          sx={{
                            "& .MuiTextField-root": { m: 1, width: "28.79ch" },
                          }}
                          noValidate
                          autoComplete="off"
                        >
                          <TextField
                            id="filled-multiline-static"
                            label="Start Date"
                            color="secondary"
                          />
                          <TextField
                            id="filled-multiline-static"
                            label="End Date"
                            color="secondary"
                          />
                        </Box>
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
                            label="Skills and Qualifications"
                            color="secondary"
                          />
                        </Box>
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
                            label="Deadline"
                            color="secondary"
                          />
                        </Box>
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
                            label="How to Apply"
                            color="secondary"
                          />
                        </Box>
                        <div>
                          <FormControlLabel
                            control={
                              <Checkbox defaultChecked color="secondary" />
                            }
                            label="Remote Accessibility?"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </form>
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
            {errors.validation && (
              <Typography variant="body2" component="div" color="error">
                <br />
                Please fill out all parts of the form!
              </Typography>
            )}
            {errors.verification && (
              <Typography variant="body2" component="div" color="error">
                <br />
                Issue submitting the application, please try again!
              </Typography>
            )}
            {submitSuccess && (
              <Snackbar
                open={submitSuccess}
                onClose={() => setSubmitSuccess(false)}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                message="Application Successfully Submitted!"
              >
                <Alert
                  onClose={() => setSubmitSuccess(false)}
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
    </>
  );
}
