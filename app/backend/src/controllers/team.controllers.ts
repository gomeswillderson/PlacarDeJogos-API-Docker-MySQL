import { Request, Response } from 'express';
import TeamService from '../services/team.service';

export default class TeamController {
  public teamService = new TeamService();

  public async getAll(_req: Request, res: Response) {
    const teams = await this.teamService.getAll();
    return res.status(200).json(teams);
  }
}
