import React, { useState } from "react";
import PropTypes from "prop-types";
import PageHead from "../../shared/PageHead";
import Sidebar from "../../shared/Sidebar/Sidebar";
import Navbar from "../../shared/Navbar";
const styles = {};

const DashboardLayout = ({
  metadata,
  showSideBar,
  showNavbar,
  nodes,
  children,
}) => {
  const [toggledClass, setToggledClass] = useState(false);
  const changeToggledClass = () => {
    setToggledClass(!toggledClass);
  };
  return (
    <>
      <PageHead metadata={metadata} />
      <div className={`${toggledClass ? "toggled" : ""}`} id="wrapper">
        {showSideBar && <Sidebar nodes={nodes} />}
        <div id="page-content-wrapper">
          {showNavbar && <Navbar changeToggledClass={changeToggledClass} />}

          <main> {children}</main>
        </div>
      </div>
    </>
  );
};

DashboardLayout.propTypes = {
  metadata: PropTypes.objectOf(PropTypes.any).isRequired,
  nodes: PropTypes.arrayOf(PropTypes.any),
};

DashboardLayout.defaultProps = {
  nodes: [],
};

export default DashboardLayout;
