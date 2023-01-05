import React from "react";
import "./Application.css";
import { submitCompanyApplication } from "../../firebase/utils";

export default function Application() {
  const blankApp = {
    id: "",
    name: "",
  };

  const [errors, setErrors] = React.useState({
    validation: false,
    verification: false,
  });
  const [applicationInfo, setApplicationInfo] = React.useState(blankApp);

  const handleInput = (event) => {
    event.preventDefault()
    setApplicationInfo({
      ...applicationInfo,
      [event.target.name]: event.target.value,
    });
  };

  React.useEffect(() => {
    // console.log(applicationInfo);
  });

  const submitForm = (event) => {
    event.preventDefault()
    if (Object.values(applicationInfo).every((x) => !!x)) {
      const info = {
        name: applicationInfo.name,
      };
      submitCompanyApplication(applicationInfo.id.trim(), info)
        .then(() => {
          console.log('successfully submitted application')
          setApplicationInfo(blankApp);
          setErrors(
            Object.keys(errors).reduce((acc, key) => {
              acc[key] = false;
              return acc;
            }, {})
          );
        })
        .catch((_) =>
          setErrors({
            ...errors,
            validation: false,
            verification: true,
          })
        );
    } else {
      setErrors({
        ...errors,
        validation: true,
        verification: false,
      });
    }
  };

  return (
    <>
      <div className="application-container">
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
