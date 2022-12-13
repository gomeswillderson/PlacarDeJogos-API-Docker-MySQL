const ladder = `
SELECT 
    t2.team_name AS name,
    ((SUM(t1.home_team_goals > t1.away_team_goals) * 3) +
     SUM(t1.home_team_goals = t1.away_team_goals)) AS totalPoints,
    COUNT(t1.home_team) AS totalGames,
    SUM(t1.home_team_goals > t1.away_team_goals) AS totalVictories,
    SUM(t1.home_team_goals = t1.away_team_goals) AS totalDraws,
    SUM(t1.home_team_goals < t1.away_team_goals) AS totalLosses,
    SUM(t1.home_team_goals) AS goalsFavor,
    SUM(t1.away_team_goals) AS goalsOwn,
    (SUM(t1.home_team_goals) - SUM(t1.away_team_goals)) AS goalsBalance,
    ROUND((((SUM(t1.home_team_goals > t1.away_team_goals) * 3) +
     SUM(t1.home_team_goals = t1.away_team_goals)) / (COUNT(t1.home_team) * 3)) * 100,
            2) AS efficiency
FROM
    TRYBE_FUTEBOL_CLUBE.matches AS t1
        INNER JOIN
    TRYBE_FUTEBOL_CLUBE.teams AS t2 ON t1.home_team = t2.id
WHERE
    t1.in_progress = 0
GROUP BY name
ORDER BY totalPoints DESC , goalsBalance DESC , goalsFavor DESC , goalsOwn DESC;`;

export default ladder;
