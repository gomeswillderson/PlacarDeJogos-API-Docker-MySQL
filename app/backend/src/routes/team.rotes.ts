import { Router } from 'express';
import TeamController from '../controllers/team.controllers';

const router = Router();

const teamController = new TeamController();

// router.post('/login', userController.login.bind(userController));

router.get('/teams', teamController.getAll.bind(teamController));

router.get('/teams/:id', teamController.findById.bind(teamController));

export default router;
