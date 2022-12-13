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

  public async getProgress(query: string): Promise<IMatch[]> {
    this.getProgress = this.getProgress.bind(this);
    if (query === 'true') {
      return Matche.findAll({
        where: { inProgress: true },
        include: [
          { model: Team, as: 'teamHome', attributes: { exclude: ['id'] } },
          { model: Team, as: 'teamAway', attributes: { exclude: ['id'] } },
        ],
      });
    }
    return Matche.findAll({
      where: { inProgress: false },
      include: [
        { model: Team, as: 'teamHome', attributes: { exclude: ['id'] } },
        { model: Team, as: 'teamAway', attributes: { exclude: ['id'] } },
      ],
    });
  }

  public async insert(data: IMatch): Promise<IMatch> {
    this.insert = this.insert.bind(this);
    if (data.awayTeam === data.homeTeam) {
        throw new HttpException(422, 'It is not possible to create a match with two equal teams');
    }
    const addMatch = await Matche.create({ ...data, inProgress: true });
    return addMatch;
  }
}
