import { Navigate } from "react-router-dom";
import { ACCESS_TOKEN_KEY } from "../services/constant";

export const PrivatePage = ({ children }) => {
  const loggedIn = localStorage.getItem(ACCESS_TOKEN_KEY);
  if (loggedIn) {
    return [children];
  }
  else 
  return(
   Navigate({to:'/'})
  )
}