const url = "http://localhost:1337";

const currentUser = () => {
  return localStorage.getItem("currentUser");
};

const authRegister = async (data) => {
  const { token } = await fetch(`${url}/api/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data,
    }),
  })
    .then((res) => res.json())
    .catch((error) => {
      console.log(error);
    });
  console.log(token);
};

const authLogin = async (data) => {
  const { email, password } = data;
  console.log(JSON.stringify(data));
  const token = await fetch(`${url}/api/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem("currentUser", data.token.split(" ")[1]);
      console.log(localStorage.getItem("currentUser"));
      console.log(localStorage);
    })
    .catch((error) => console.log(error));
};

export { authLogin, authRegister, currentUser };
