import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import HttpException from '../utils/http.exception';

const validateTokenMiddleware = (req: Request, _res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) {
    throw new HttpException(401, 'Token must be a valid token');
  }

  jwt.verify(authorization, process.env.JWT_SECRET as string);

  next();
};

export default validateTokenMiddleware;
