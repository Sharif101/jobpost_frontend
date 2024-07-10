/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Auth } from "../contexts/context";
import { Navigate, useLocation } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const { stateAuth } = useContext(Auth);

  let location = useLocation();

  if (stateAuth.auth === true) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
}
