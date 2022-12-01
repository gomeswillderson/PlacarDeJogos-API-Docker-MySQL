import * as jwt from 'jsonwebtoken';
import ILogin from '../interfaces/login.interface';

function generateToken(user: ILogin) {
  const payload = { email: user.email };
  return jwt.sign(
    payload,
    process.env.JWT_SECRET as string,
    { algorithm: 'HS256', expiresIn: '1d' },
  );
}

export default generateToken;
