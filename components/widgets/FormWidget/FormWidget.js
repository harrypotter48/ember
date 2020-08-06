import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import FieldWidget from "../FieldWidget";
import { Row, Col } from "react-bootstrap";

const FormWidget = ({ fields, onSubmit }) => {
  const { register, handleSubmit, watch, errors, setValue } = useForm();
  const onSubmitHandler = (data) => onSubmit(data);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmitHandler)} noValidate>
        <Row>
          <Col>
            {fields &&
              fields.length > 0 &&
              fields.map((item) => {
                return (
                  <FieldWidget
                    key={item.name}
                    item={item}
                    register={register}
                    errors={errors}
                    watch={watch}
                    setValue={setValue}
                  />
                );
              })}
          </Col>
        </Row>
        <Row>
          <Col className="d-flex align-items-end justify-content-center">
            <button
              type="submit"
              className="btn btn-primary btn-send-response my-4"
            >
              Send Request
            </button>
          </Col>
        </Row>
      </form>
    </>
  );
};

FormWidget.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.any),
  onSubmit: PropTypes.func,
};

FormWidget.defaultProps = {
  fields: [],
  onSubmit: () => {},
};

export default FormWidget;
