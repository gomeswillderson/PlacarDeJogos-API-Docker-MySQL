import Team from '../database/models/TeamsModel';
import ITeam from '../interfaces/team.interface';

export default class TeamService {
  public async getAll(): Promise<ITeam[]> {
    this.getAll = this.getAll.bind(this);
    const teams = await Team.findAll();
    return teams;
  }
}
