import { Request, Response } from 'express';
import MatchService from '../services/match.service';

export default class MatchController {
  public matchService = new MatchService();

  public async getAll(_req: Request, res: Response) {
    const matchs = await this.matchService.getAll();
    return res.status(200).json(matchs);
  }
}
