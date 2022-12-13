import { Router } from 'express';
import LeaderboardController from '../controllers/leaderboard.controllers';

const router = Router();

const leaderboardController = new LeaderboardController();

router.get('/leaderboard/home', leaderboardController.getLadder.bind(leaderboardController));

export default router;
