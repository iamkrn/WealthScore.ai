import jwt, { SignOptions } from "jsonwebtoken";

const generateToken = (userId: string): string => {
  const options: SignOptions = {
    expiresIn: "7d",
  };

  return jwt.sign(
    { id: userId },
    process.env.JWT_SECRET as string,
    options
  );
};

export default generateToken;