import * as jsonwebtoken from 'jsonwebtoken';
import IUser from '../interfaces/user.interface';

const jwt = jsonwebtoken;

function generateToken(user: IUser) {
  const payload = { email: user.email, username: user.username };
  return jwt.sign(
    payload,
    process.env.JWT_SECRET as string,
    { algorithm: 'HS256', expiresIn: '1d' },
  );
}

export default generateToken;
