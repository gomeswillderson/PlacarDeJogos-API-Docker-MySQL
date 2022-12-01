import { Request, Response } from 'express';
import UserService from '../services/user.service';
import ILogin from '../interfaces/login.interface';

export default class UserController {
  public userService = new UserService();

  async login(req: Request<object, object, ILogin>, res: Response) {
    const { body } = req;

    const token = await this.userService.login(body);

    return res.status(200).json({ token });
  }
}
