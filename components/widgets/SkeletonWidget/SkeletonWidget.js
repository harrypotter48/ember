import React from 'react';
import PropTypes from 'prop-types';

const SkeletonWidget = (props) => {
  const { height, className } = props;
  return (
    <div className={`widgets-skeleton-element ${className}`} style={{ height }} />
  );
};

SkeletonWidget.propTypes = {
  height: PropTypes.string,
};

SkeletonWidget.defaultProps = {
  height: '25px',
};

export default SkeletonWidget;
