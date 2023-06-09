import { Request, Response } from 'express';
import MatchService from '../services/match.service';

export default class MatchController {
  public matchService = new MatchService();

  public async getAll(req: Request, res: Response) {
    if (req.query.inProgress) {
      const boolean = req.query.inProgress as string;
      const progressMatchs = await this.matchService.getProgress(boolean);
      return res.status(200).json(progressMatchs);
    }
    const matchs = await this.matchService.getAll();
    return res.status(200).json(matchs);
  }

  public async insert(req: Request, res: Response) {
    const newMatch = await this.matchService.insert(req.body);
    return res.status(201).json(newMatch);
  }

  public async stopMatch(req: Request, res: Response) {
    const { id } = req.params;
    await this.matchService.stopMatch(id);
    return res.status(200).json({ message: 'Finished' });
  }

  public async updateMatch(req: Request, res: Response) {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;
    await this.matchService.updateMatch(id, homeTeamGoals, awayTeamGoals);
    return res.status(200).json({ message: 'Updated' });
  }
}
