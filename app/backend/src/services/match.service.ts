import Matche from '../database/models/MatchesModel';
import IMatch from '../interfaces/match.interface';
import HttpException from '../utils/http.exception';
import Team from '../database/models/TeamsModel';

export default class MatchService {
  public async getAll(): Promise<IMatch[]> {
    this.getAll = this.getAll.bind(this);
    const matchs = await Matche.findAll({
      include: [
        { model: Team, as: 'teamHome', attributes: { exclude: ['id'] } },
        { model: Team, as: 'teamAway', attributes: { exclude: ['id'] } },
      ],
    });
    if (!matchs) {
      throw new HttpException(404, 'Sorry, Not Found :(');
    }
    return matchs;
  }
}
