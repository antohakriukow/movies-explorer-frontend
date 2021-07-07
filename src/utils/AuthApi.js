import { apiUrl } from "../utils/config";

const checkToken = (token) => {
  return fetch(`${apiUrl}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((data) => data);
};

const signUp = (email, password, name) => {
  return fetch(`${apiUrl}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email, password, name
    }),
  })
    .then((res) => res.json())
    .then((res) => res);
};

const singIn = (email, password) => {
  return fetch(`${apiUrl}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password: password,
      email: email,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.token) {
        localStorage.setItem("jwt", data.token);
        return data;
      }
    });
};

export {
  checkToken,
  signUp,
  singIn
}
