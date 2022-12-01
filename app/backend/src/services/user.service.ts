import * as bcrypt from 'bcryptjs';
import User from '../database/models/UserModel';
import generateToken from '../utils/generate.token';
import ILogin from '../interfaces/login.interface';
import HttpException from '../utils/http.exception';

export default class UserService {
  public user = new User();

  public async login(loginBody: ILogin) {
    const { email, password } = loginBody;

    this.login = this.login.bind(this);

    if (!password) {
      throw new HttpException(400, 'All fields must be filled');
    }
    if (!email) {
      throw new HttpException(400, 'All fields must be filled');
    }

    const validateUser = await User.findOne({ where: { email } });

    if (validateUser && bcrypt.compareSync(password, validateUser.password)) {
      return generateToken(loginBody);
    }
    throw new HttpException(401, 'Incorrect email or password');
  }
}
