import { Request, Response } from 'express';
import LeaderboardService from '../services/leaderboard.service';

export default class LeaderboardController {
  public leaderboardService = new LeaderboardService();

  public async getLadder(_req: Request, res: Response) {
    const ladder = await this.leaderboardService.getLadder();
    return res.status(200).json(ladder);
  }
}
