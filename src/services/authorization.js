import jwt from "jsonwebtoken";
export const getUser = (token) => {
  if (token === "" || token == null) {
    return null;
  }
  try {
    var decoded = jwt.verify(token, "fjkdsjfklsdjkfjskd");
    return decoded;
  } catch (err) {
    console.log(err);
    return null;
  }
};
