import React from "react";
import PropTypes from "prop-types";
import storage from "./storage";
import { useRouter } from "next/router";

const AuthProvider = ({ children }) => {
  const router = useRouter();
  const isLoggedIn = () => (storage.getToken() ? true : false);
  const isBrowser = () => typeof window !== "undefined";
  if (isLoggedIn()) return children;
  if (isBrowser()) router.push("/login");
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
const withPermission = (WrappedComponent) => {
  const hocComponent = (...props) => {
    return (
      <AuthProvider>
        <WrappedComponent {...props} />
      </AuthProvider>
    );
  };
  return hocComponent;
};

export default withPermission;
