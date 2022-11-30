import { Model, INTEGER, BOOLEAN } from 'sequelize';
import db from '.';
import Team from './TeamsModel';

class Matche extends Model {
  declare id: number;
  declare homeTeam: number;
  declare homeTeamGoals: number;
  declare awayTeam: number;
  declare awayTeamGoals: number;
  declare inProgress: boolean;
}

Matche.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER,
  },
  homeTeam: {
    allowNull: false,
    type: INTEGER,
  },
  homeTeamGoals: {
    allowNull: false,
    type: INTEGER,
  },
  awayTeam: {
    allowNull: false,
    type: INTEGER,
  },
  awayTeamGoals: {
    allowNull: false,
    type: INTEGER,
  },
  inProgress: {
    type: BOOLEAN,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'matches',
  timestamps: false,
});

Team.hasMany(Matche, { foreignKey: 'homeTeam', as: 'teamHome' });
Team.hasMany(Matche, { foreignKey: 'awayTeam', as: 'teamAway' });

Matche.belongsTo(Team, { foreignKey: 'homeTeam', as: 'teamHome' });
Matche.belongsTo(Team, { foreignKey: 'awayTeam', as: 'teamAway' });

export default Matche;
