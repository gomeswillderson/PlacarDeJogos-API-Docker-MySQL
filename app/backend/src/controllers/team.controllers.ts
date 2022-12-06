import { Request, Response } from 'express';
import ITeam from '../interfaces/team.interface';
import TeamService from '../services/team.service';

export default class TeamController {
  public teamService = new TeamService();

  public async getAll(_req: Request, res: Response) {
    const teams = await this.teamService.getAll();
    return res.status(200).json(teams);
  }

  public async findById(req: Request<ITeam>, res: Response) {
    const { id } = req.params;
    const team = await this.teamService.findById(id);
    return res.status(200).json(team);
  }
}
