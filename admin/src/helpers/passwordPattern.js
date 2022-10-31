export const checkRegexPattern = (key) => {
  return {
    regex: "(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}",
    title:
      "Password should have at least one lowercase letter, one uppercase letter, one number and one special character and should be at least 8 characters long",
  };
};
