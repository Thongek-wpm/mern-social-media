import Jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  try {
    let token = req.header("Authorization");

    if (!token) {
      return res.status(403).send("Access Deied");
    }

    if (token.statusWith("Bearer")) {
      token = token.slice(7, token.length).trimLeft();
    }
    const verifyToken = Jwt.verify(token, process.env.JWT_SECRET);
    req.user = verifyToken;
    next();
  } catch (err) {
    res.status(500).json({ error: err.massage });
  }
};
