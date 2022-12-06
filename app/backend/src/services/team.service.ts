import Team from '../database/models/TeamsModel';
import ITeam from '../interfaces/team.interface';
import HttpException from '../utils/http.exception';

export default class TeamService {
  public async getAll(): Promise<ITeam[]> {
    this.getAll = this.getAll.bind(this);
    const teams = await Team.findAll();
    return teams;
  }

  public async findById(id: number): Promise<ITeam | void> {
    this.findById = this.findById.bind(this);
    const team = await Team.findOne({ where: { id } });
    if (!team) {
      throw new HttpException(404, 'Sorry, Not Found :(');
    }
    return team;
  }
}
