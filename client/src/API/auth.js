const url = "http://localhost:1337";

const currentUser = () => {
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
    .then((res) => res.json())
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
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem("currentUser", data.token);
      return data;
    })
    .catch((error) => console.log(error));
  return response;
};

export { authLogin, authRegister, currentUser };
