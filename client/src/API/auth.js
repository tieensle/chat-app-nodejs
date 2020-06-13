import handleResponse from "../utils/handleResponse.js";

const url = "http://localhost:1337";

const currentUserValue = () => {
  return localStorage.getItem("currentUser");
};

const authRegister = async (data) => {
  console.log(JSON.stringify(data));
  const response = await fetch(`${url}/api/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then(handleResponse)
    .catch((error) => {
      console.log(error);
    });
  return response;
};

const authLogin = async (data) => {
  const response = await fetch(`${url}/api/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then(handleResponse)
    .then((data) => {
      localStorage.setItem("currentUser", data.token);
      return data;
    })
    .catch((error) => console.log(error));
  return response;
};

const logout = () => {
  localStorage.removeItem("currentUser");
};

export { authLogin, authRegister, currentUserValue, logout };
