import jwt from "jsonwebtoken";

export default function createToken(user) {
  return jwt.sign(
    { user: { id: user.id, name: user.name, email: user.email } },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
}

export const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};
