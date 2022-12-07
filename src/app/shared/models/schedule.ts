export interface Schedule {
  content: [
    {
      day: number;
      home: string;
      away: string;
      league: number;
      type: number;
      homeScore: number;
      awayScore: number;
      boxName: string;
      playerOfGameId: number;
      playerOfGame: string;
      homePointsID: number;
      homePoints: number;
      homeRebID: number;
      homeRebs: number;
      homeAssistID: number;
      homeAssists: number;
      awayPointsID: number;
      awayPoints: number;
      awayRebID: number;
      awayRebs: number;
      awayAssistID: number;
      homeQ1: number;
      homeQ2: number;
      homeQ3: number;
      homeQ4: number;
      homeOT: number;
      awayQ1: number;
      awayQ2: number;
      awayQ3: number;
      awayQ4: number;
      awayOT: number;
    }
  ];
}
