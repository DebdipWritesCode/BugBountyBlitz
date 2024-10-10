const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ message: 'Access denied' });
  }
  try {
    const decoded = jwt.verify(token. process.env.JWT_SECRET);
    req.user = decoded;
    next();
  }
  catch(err) {
    console.error(err);
    res.status(400).json({ message: "Invalid token" });
  }
}