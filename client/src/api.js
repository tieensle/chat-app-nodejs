const API_URL = "http://localhost:1337";

async function signupUser() {
  const response = await fetch(`${API_URL}/signup`);
  return response.json();
}
