import jsCookie from "js-cookie";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import styles from "./Form.module.css";
import {
  getEndPoint,
  getFormFields,
  getValidation,
  redirectionThankYou,
} from "./formFunction";

const Form = ({
  popup,
  setTrigger,
  downloadBrochure,
  radio,
  event,
  dataScience,
  fullStack,
  google,
  referrals,
  syllabus,
  learning,
  titleCourse,
  brochureLink,
  dataScienceCounselling,
  dataScienceGeneric,
  interstedInHide,
  Domain,
  DomainInput,
  brochurePdf,
}) => {
  const router = useRouter();
  const [formFields, setFormFields] = useState(
    getFormFields(radio, google, referrals, Domain, interstedInHide)
  );
  const [formField, setFormField] = useState(
    getFormFields(radio, google, referrals, interstedInHide)
  );
  

  const [value, setValue] = useState();
  const [error, setError] = useState();
  const [alertMSG, setAlertMSG] = useState("");
  const [toggle, setToggle] = useState(true);
  const [query, setQuery] = useState({
    name: "",
    email: "",
    phone: "",
    upskillPlanning: "",
    upskillingObjective: "",
    platform: "",
    workExperience: "",
    Brief: "",
    dateTime: "",
    WAdropdown: "",
    currentOrganization: "",
    currentDesignation: "",
    interstedIn: "",
    url: router.asPath,
    Domain: "",
  });
  const [submitting, setSubmitting] = useState(false); // State to track form submission

  useEffect(() => {
    setQuery({ ...query, phone: value });
    jsCookie.set("CARD", query.email, { expires: 14, secure: true });
  }, [value]);

  useEffect(() => {
    if (value) {
      const formattedPhone = value;
      const phoneWithPlus = `+${formattedPhone}`;
      setQuery({ ...query, phone: phoneWithPlus });

      jsCookie.set("CARDPHONE", phoneWithPlus, { expires: 14, secure: true });
    }
  }, [value]);

  const handleParam = () => (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  let btnText = "Apply For Counselling";
  if (event) {
    btnText = "Register Now";
  }
  if (learning) {
    btnText = "Download Resources";
  }

  const formSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true); // Set submitting state to true
    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      const locationData = await fetchLocation();
      formData.append("country", locationData.country);
      formData.append("city", locationData.city);
      formData.append("region", locationData.region);
    } catch (error) {
      console.error("Error fetching location:", error.message);
    }

    try {
      const endPoint = getEndPoint(router.pathname, event);
      const pushPath = redirectionThankYou(
        router.pathname,
        fullStack,
        event,
        dataScience,
        dataScienceGeneric,
        dataScienceCounselling
      );

      setError(getValidation(radio, Domain, interstedInHide, query));
      const validation = getValidation(radio, Domain, interstedInHide, query);

      if (!validation) {
        const sendData = await fetch(endPoint, {
          method: "POST",
          body: formData,
        });

        setQuery({
          name: "",
          email: "",
          phone: "",
          upskillPlanning: "",
          upskillingObjective: "",
          jobDescription: "",
          platform: "",
          workExperience: "",
          dateTime: "",
          WAdropdown: "",
          currentOrganization: "",
          currentDesignation: "",
          interstedIn: "",
          country: "",
          region: "",
          city: "",
          url: router.asPath,
        });

        if (popup) {
          setTrigger(false);
        }

        if (sendData.status === 200) {
          if (downloadBrochure) {
            downloadFileAtUrl(brochurePdf); // Download the brochure only after a successful submission
          }
          router.push(
            pushPath,
            dataScience
              ? {
                  pathname: "/Thank-you",
                  query: {
                    titleCourse: titleCourse,
                    brochureLink: brochureLink,
                    
                  },
                }
              : {
                  pathname: pushPath,
                }
          );
        }
      }
      setSubmitting(false); // Set submitting state to false after form submission
    } catch (error) {
      console.error("Error submitting form:", error.message);
    }
  };



  const downloadFileAtUrl = (url) => {
    const aTag = document.createElement('a');
    aTag.href = url;
    aTag.download = url.split('/').pop();
    document.body.appendChild(aTag);
    aTag.click();
    document.body.removeChild(aTag);
  };

  const fetchLocation = async () => {
    try {
      const response = await fetch(
        "https://ipinfo.io/json?token=bc89c2010abac0"
      );
      if (!response.ok) {
        throw new Error(
          `Failed to fetch location: ${response.status} ${response.statusText}`
        );
      }
      const data = await response.json();
      console.log("API Response:", data);
      const { country, region, city } = data;
      // If city is not available, provide a default value or placeholder
      const finalCity = city ? city : "Unknown";
      return { country, region, city: finalCity };
    } catch (error) {
      console.error("Error fetching location:", error.message);
      // If there's an error fetching location data, return default or placeholder values
      return {
        country: "Country Undefined",
        region: "Region Undefined",
        city: "City Undefined",
      };
    }
  };

  return (
    <div className={styles.App}>
      <form onSubmit={formSubmit}>
        <>
          {DomainInput
            ? formField.map(
                (field) =>
                  field.showField && (
                    <div key={field.name} className={styles.formWrapper}>
                      <label htmlFor={field.name}>
                        {field.label}
                        {field.required && (
                          <span className={styles.spanLabel}>*</span>
                        )}
                      </label>
                      {field.type === "phone" ? (
                        <PhoneInput
                          inputStyle={field.inputStyle}
                          containerStyle={field.containerStyle}
                          name={field.name}
                          inputProps={field.inputProps}
                          country="in"
                          placeholder={field.placeholder}
                          value={value}
                          onChange={(phone) => setValue(phone)}
                          required={field.required}
                        />
                      ) : field.type === "select" ? (
                        <select
                          name={field.name}
                          required={field.required}
                          value={query[field.name]}
                          className=""
                          onChange={handleParam(field.name)}
                        >
                          {field.options.map((option) => (
                            <option
                              key={option.value}
                              value={option.value}
                              hidden={option.hidden}
                            >
                              {option.label}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <input
                          type={field.type}
                          name={field.name}
                          className={styles.EmailInputs}
                          required={field.required}
                          placeholder={field.placeholder}
                          value={query[field.name]}
                          onChange={handleParam(field.name)}
                        />
                      )}
                    </div>
                  )
              )
            : formFields.map(
                (field) =>
                  field.showField && (
                    <div key={field.name} className={styles.formWrapper}>
                      <label htmlFor={field.name}>
                        {field.label}
                        {field.required && (
                          <span className={styles.spanLabel}>*</span>
                        )}
                      </label>
                      {field.type === "phone" ? (
                        <PhoneInput
                          inputStyle={field.inputStyle}
                          containerStyle={field.containerStyle}
                          name={field.name}
                          inputProps={field.inputProps}
                          country="in"
                          placeholder={field.placeholder}
                          value={value}
                          onChange={(phone) => setValue(phone)}
                          required={field.required}
                        />
                      ) : field.type === "select" ? (
                        <select
                          name={field.name}
                          required={field.required}
                          value={query[field.name]}
                          className=""
                          onChange={handleParam(field.name)}
                        >
                          {field.options.map((option) => (
                            <option
                              key={option.value}
                              value={option.value}
                              hidden={option.hidden}
                            >
                              {option.label}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <input
                          type={field.type}
                          name={field.name}
                          className={styles.EmailInputs}
                          required={field.required}
                          placeholder={field.placeholder}
                          value={query[field.name]}
                          onChange={handleParam(field.name)}
                        />
                      )}
                    </div>
                  )
              )}
        </>

        <input name="country" value={query.country} type="hidden" />
        <input name="region" value={query.region} type="hidden" />
        <input name="city" value={query.city} type="hidden" />
        {error && (
          <p className={styles.errorMsg}>
            Please fill all the fields marked with *
          </p>
        )}        {popup && (
          <input type="hidden" id="url" name="url" value={router.asPath} />
        )}
        <div>{toggle ? "" : <p className={styles.alert}>{alertMSG}</p>}</div>
        {syllabus ? (
          <div className={styles.bottomWrap}>
            <p className={styles.FormText}>
              By submitting the form, you agree to our Terms and Conditions and
              our Privacy Policy.
            </p>
            <button
              type="submit"
              className={styles.button}
              disabled={submitting}
              onClick={() => setToggle(true)}
            >
              {submitting
                ? "Submitting..."
                : downloadBrochure
                ? "Download Now"
                : btnText}
            </button>
          </div>
        ) : (
          <>
            <p className={styles.FormText}>
              By submitting the form, you agree to our Terms and Conditions and
              our Privacy Policy.
            </p>
            <button
              type="submit"
              className={styles.button}
              onClick={() => setToggle(true)}
              disabled={submitting}
            >
              {submitting
                ? "Submitting..."
                : downloadBrochure
                ? "Download Now"
                : btnText}
            </button>
          </>
        )}
        <input type="hidden" id="zc_gad" name="zc_gad" value="" />
        {alertMSG === "" ? (
          ""
        ) : (
          <p
            style={{
              fontSize: "12px",
              color: "red",
              marginTop: "-10px",
              marginBottom: "10px",
            }}
          >
            {alertMSG}
          </p>
        )}
        <p className={styles.formWrapper} style={{ color: "red" }}>
          {error}
        </p>
        
      </form>
    </div>
  );
};

export default Form;