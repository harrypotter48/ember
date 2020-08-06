import React from "react";
import PropTypes from "prop-types";

const TextArea = ({
  register,
  name,
  required,
  maxLength,
  minLength,
  min,
  max,
  label,
  inputId,
  watch,
  errors,
  setValue,
}) => {
  const watchField = watch && watch(name);

  const [focus, setFocus] = useState("");
  const inputRef = useRef(null);
  const handleBlur = () => {
    if (!inputRef.current.value) setFocus("");
  };

  useEffect(() => {
    if (watchField) {
      setFocus("active");
    }
  }, [watchField, defaultValues[name]]);

  const id = inputId || `input-${label}`;

  const objectError = () => {
    let obj = {};
    if (validations) {
      obj = validations;
    }
    if (required) {
      obj = { ...obj, required: "This field is required" };
    } else {
      obj = { ...obj, required: false };
    }
    if (maxLength && maxLength > 0) {
      obj = {
        ...obj,
        maxLength: {
          value: maxLength,
          message: `The maxLength is ${maxLength}`,
        },
      };
    } else {
      obj = {
        ...obj,
        maxLength: {
          value: 1000,
          message: `The maxLength is ${1000}`,
        },
      };
    }
    if (minLength) {
      obj = {
        ...obj,
        minLength: {
          value: minLength,
          message: `The maxLength is ${minLength}`,
        },
      };
    }
    if (min) {
      obj = {
        ...obj,
        min: {
          value: min,
          message: `The min is ${min}`,
        },
      };
    }
    if (max) {
      obj = {
        ...obj,
        max: {
          value: max,
          message: `The max is ${max}`,
        },
      };
    }
    return obj;
  };

  const clearField = () => {
    setValue(name, "");
    setFocus("active");
  };
  return (
    <>
      <div className="mb-2">
        <div className="input-outline">
          <textarea
            ref={register(objectError())}
            onFocus={() => setFocus("active")}
            onBlur={handleBlur}
            name={name}
            className="form-control"
            id={id}
          />
          <label className={focus} htmlFor={id}>
            {label}
            {required && <span className="text-danger"> *</span>}
          </label>
          <div className="action-buttons">
            {showClearButton && (
              <AiFillCloseCircle
                className="inside-buttonAction"
                title="Clear"
                onClick={clearField}
                onKeyPress={clearField}
              />
            )}
          </div>
        </div>
        {errors[name] && (
          <p className="bg-danger px-3 text-center text-white">
            {errors[name].message}
          </p>
        )}
      </div>
    </>
  );
};

TextArea.propTypes = {};

export default TextArea;
