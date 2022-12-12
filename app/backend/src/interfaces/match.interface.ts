import ITeam from './team.interface';

export default interface IMatch {
  id?: number;
  homeTeam: number;
  awayTeam: number;
  homeTeamGoals: number;
  awayTeamGoals: number;
  inProgress?: boolean;
  teamHome?: ITeam;
  teamAway?: ITeam;
}
