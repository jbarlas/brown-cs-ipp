import React from "react";
import "./Application.css";
import {
  submitCompanyApplication,
  emailSignIn,
} from "../../firebase/utils";

export default function Application() {
  /**
   * template application for empty state -- should contain all relevant fields for company application
   */
  const blankApp = {
    id: "",
    name: "",
    // add rest of fields here
  };
  /**
   * object used for keeping track of application errors
   */
  const [errors, setErrors] = React.useState({
    validation: false, // form submitted without all fields
    verification: false, // id does not exist in /partners/${id}
  });
  const [applicationInfo, setApplicationInfo] = React.useState(blankApp);

  // used for internal purposes
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();

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
   * calls submitCompanyApplication using current applicationInfo object -- checks for form validation and verification
   * @param {event} event should only be called on form submit
   */
  const submitForm = (event) => {
    event.preventDefault();
    if (Object.values(applicationInfo).every((x) => !!x)) {
      submitCompanyApplication(applicationInfo.id.trim(), applicationInfo)
        .then(() => {
          console.log("successfully submitted application");
          setApplicationInfo(blankApp);
          setErrors(
            Object.keys(errors).reduce((acc, key) => {
              acc[key] = false;
              return acc;
            }, {})
          );
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

  return (
    <>
      <div>
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
    </>
  );
}
