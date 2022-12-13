import { QueryTypes } from 'sequelize';
import ILeaderboard from '../interfaces/leaderboard.interface';
import sequelizeModel from '../database/models';
import leaderboard from '../utils/generate.board';

export default class LeaderboardService {
  public async getLadder(): Promise<ILeaderboard[]> {
    this.getLadder = this.getLadder.bind(this);
    const ladder = await sequelizeModel.query(leaderboard, { type: QueryTypes.SELECT });
    return ladder as ILeaderboard[];
  }
}

// https://sequelize.org/docs/v6/core-concepts/raw-queries/
