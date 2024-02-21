import jwt from "jsonwebtoken";

export default function createToken(user, expiresIn = "1d") {
  return jwt.sign(
    { user: { ...user } },
    process.env.JWT_SECRET,
    { expiresIn }
  );
}

export const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};
