import React from "react";

// import PropTypes from "prop-types"

const Sidebar = ({ nodes }) => {
  return (
    <>
      <div className="bg-light border-right" id="sidebar-wrapper">
        <div className="sidebar-heading">Apexedge-e2e </div>
        <div class="list-group list-group-flush">
          <a
            href="/"
            className="list-group-item list-group-item-action bg-light"
          >
            Dashboard
          </a>
          <a
            href="/unidad"
            className="list-group-item list-group-item-action bg-light"
          >
            Unidad
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action bg-light"
          >
            Overview
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action bg-light"
          >
            Events
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action bg-light"
          >
            Profile
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action bg-light"
          >
            Status
          </a>
        </div>
      </div>
    </>
  );
};

// Sidebar.propTypes = {}

export default Sidebar;
