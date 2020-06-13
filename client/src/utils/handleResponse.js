import { logout } from "../api/auth";

const handleResponse = (response) => {
  return response.text().then((res) => {
    const data = JSON.parse(res);
    if (!response.ok) {
      if (response.status === 401 || response.status === 403) {
        logout();
        return {
          error: "Unauthorized",
        };
      }
    }
    return data;
  });
};

export default handleResponse;
