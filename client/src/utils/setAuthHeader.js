//TODO : SET HEADER AUTHORIZATION

import { currentUserValue } from "../api/auth.js";

const setAuthHeader = () => {
  const currentUser = currentUserValue();
  if (currentUser) {
    return {
      "Content-Type": "application/json",
      Authorization: currentUser,
    };
  }
  return {};
};

export default setAuthHeader;
