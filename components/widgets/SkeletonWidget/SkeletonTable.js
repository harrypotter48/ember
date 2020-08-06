import React from 'react';
import PropTypes from 'prop-types';
import SkeletonWidget from './SkeletonWidget';

const SkeletonTable = ({ rows, cols }) => {
  const colsData = [];
  for (let i = 0; i < cols; i++) {
    colsData.push(
      <th key={`cols-${i}`}>
        <SkeletonWidget height="50px" />
      </th>
    );
  }
  const rowsData = [];
  for (let i = 0; i < rows; i++) {
    rowsData.push(i);
  }
  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>{colsData}</tr>
        </thead>
        <tbody>
          {rowsData &&
            rowsData.length > 0 &&
            rowsData.map((row) => {
              return (
                <React.Fragment key={row}>
                  <tr>{colsData}</tr>
                </React.Fragment>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

SkeletonTable.propTypes = {
  rows: PropTypes.number,
  cols: PropTypes.number,
};

SkeletonTable.defaultProps = {
  rows: 5,
  cols: 4,
};

export default SkeletonTable;
