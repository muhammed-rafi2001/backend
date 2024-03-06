import jwt from 'jsonwebtoken';
const checkToken = (req, res, next) => {
  const btoken = req.headers.authorization;
  if (!btoken) {
    return res.status(403).json({ error: 'You are not authorized' });
  }
  const splitToken = btoken.split(' ');
  const token = splitToken[1];
  console.log(token);
  try {
    const decoded = jwt.verify(
      token,
      'hquwhr328r2rjkwhr49rhwoefk0w3rahfksdfh0r049ror'
    );
  } catch (e) {
    return res.status(403).json({ error: 'You are not authorized' });
  }
  next();
};
export default checkToken;
