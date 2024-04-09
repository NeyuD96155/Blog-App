import User from "../models/user.model.js";
export const register = async (req, res) => {
  const { username, email, password } = req.body;
  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    return res.status(400).json({ message: "Please fill all fields" });
  }
  const newUser = new User({
    username: username,
    email: email,
    password: password,
  });
  await newUser.save();
  res.json({ message: "sign up successfully" });
};
