import setAuthHeader from "../utils/setAuthHeader.js";

const url = "http://localhost:1337";

const getUser = async () => {
  const user = await fetch(`${url}/api/users`, {
    headers: setAuthHeader(),
  })
    .then((res) => res.json())
    .then((data) => data.name);
  console.log(user);
  return String(user);
};

export default getUser;
