import React from "react";
import PropTypes from "prop-types";
import { navigate } from "gatsby";
import useReduxHandler from "../../hooks/useReduxHandler";
import ROUTES from "../utils/routes";

const AuthProvider = ({ children }) => {
  const { isLoggedIn, isBrowser } = useReduxHandler();
  if (isLoggedIn()) return children;
  if (isBrowser()) navigate(ROUTES.LOGIN);
  return null;
};
AuthProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
AuthProvider.defaultProps = {
  children: null,
};
export default (WrappedComponent) => {
  const hocComponent = (...props) => {
    return (
      <AuthProvider>
        <WrappedComponent {...props} />
      </AuthProvider>
    );
  };
  return hocComponent;
};
