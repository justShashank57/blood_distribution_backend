import bcrypt from "bcrypt";

export const generateSalt = async () => {
  return await bcrypt.genSalt();
};

export const generatePassword = async (password, salt) => {
  return await bcrypt.hash(password, salt);
};

export const validatePassword = async (
  enteredPassword,
  savedPassword,
  salt
) => {
  return (await generatePassword(enteredPassword, salt)) === savedPassword;
};
