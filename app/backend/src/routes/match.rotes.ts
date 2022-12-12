import { Router } from 'express';
import MatchController from '../controllers/match.controllers';

const router = Router();

const matchController = new MatchController();

// router.post('/login', userController.login.bind(userController));

// router.get('/teams', teamController.getAll.bind(teamController));

// router.get('/teams/:id', teamController.findById.bind(teamController));

router.get('/matches', matchController.getAll.bind(matchController));

router.post('/matches', matchController.insert.bind(matchController));

export default router;
