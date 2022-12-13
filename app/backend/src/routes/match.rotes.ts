import { Router } from 'express';
import MatchController from '../controllers/match.controllers';
import validateTokenMiddleware from '../middlewares/validate.token.middleware';

const router = Router();

const matchController = new MatchController();

router.get('/matches', matchController.getAll.bind(matchController));

router.post('/matches', validateTokenMiddleware, matchController.insert.bind(matchController));

router.patch('/matches/:id/finish', matchController.stopMatch.bind(matchController));

router.patch('/matches/:id', matchController.updateMatch.bind(matchController));

export default router;
