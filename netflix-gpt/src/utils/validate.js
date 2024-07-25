export const checkValidation = (email, password, username) => {
  if(username==="") return "Username is required";
  const validateEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
  const validatePassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  const validateUserName = username &&  /^[0-9A-Za-z]{6,16}$/.test(username);

  if (username && !validateUserName) return "Username is not valid";
  if (!validateEmail) return "Email is not valid";
  if (!validatePassword) return "Password is not valid";

  return null;
};
