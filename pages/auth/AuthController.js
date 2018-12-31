export const setToken = token => {
  if (!localStorage.getItem("token")) {
    localStorage.setItem("token", token);
  }
};

export const autoLogin = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return true;
  }

  return false;
};
