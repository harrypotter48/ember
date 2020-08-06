import React from "react";
import PropTypes from "prop-types";
import OutlineInput from "./OutlineInput";
import TextArea from "./TextArea";

const FieldWidget = ({ item, register, errors, watch, setValue }) => {
  return (
    <>
      {item.type === "INPUT" && (
        <OutlineInput
          name={item.name}
          label={item.label}
          required={item.required}
          maxLength={item.maxLength}
          minLength={item.minLength}
          register={register}
          errors={errors}
          watch={watch}
          setValue={setValue}
          inputType={item.inputType}
        />
      )}
      {item.type === "TEXTAREA" && (
        <TextArea
          name={item.name}
          label={item.label}
          required={item.required}
          maxLength={item.dataLength}
          register={register}
          errors={errors}
          watch={watch}
          setValue={setValue}
        />
      )}
      {/* {item.type === "CHECKBOX" && (
        <CheckBox
          name={item.name}
          label={item.label}
          required={item.required}
          register={register}
          errors={errors}
          watch={watch}
          sample={item.sample}
          setValue={setValue}
          defaultValues={defaultValues}
        />
      )} */}
    </>
  );
};

FieldWidget.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  register: PropTypes.func.isRequired,
  errors: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default FieldWidget;
