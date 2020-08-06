import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import FieldWidget from "../FieldWidget";
import { Row, Col } from "react-bootstrap";

const FormWidget = ({ fields }) => {
  const { register, handleSubmit, watch, errors, setValue } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Row>
          <Col>
            {fields &&
              fields.length > 0 &&
              fields.map((item) => {
                return (
                  <FieldWidget
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
};

FormWidget.defaultProps = {
  fields: [],
};

export default FormWidget;
