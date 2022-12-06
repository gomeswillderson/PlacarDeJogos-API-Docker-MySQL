import { Request, Response } from 'express';
import UserService from '../services/user.service';
import ILogin from '../interfaces/login.interface';

export default class UserController {
  public userService = new UserService();

  public async login(req: Request<object, object, ILogin>, res: Response) {
    const { body } = req;

    const token = await this.userService.login(body);

    return res.status(200).json({ token });
  }

  public async validate(req: Request, res: Response) {
    const token = req.header('authorization');

    // console.log(token);

    const userRole = await this.userService.validate(token as string);

    return res.status(200).json({ role: userRole });
  }
}
