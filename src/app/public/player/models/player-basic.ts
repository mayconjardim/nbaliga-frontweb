import { SeasonStats } from 'src/app/shared/models/seasonStats';

export interface PlayerBasic {
  id: number;
  name: string;
  height: 75;
  weight: 200;
  age: 28;
  currentteamid: 10;
  positionnumber: 5;
  currentrating: string;
  futurerating: string;
  contract1: number;
  contract2: number;
  contract3: number;
  contract4: number;
  contract5: number;
  seasonStats: SeasonStats[];
  assistsPerGame: number;
  contractLength: number;
  pointsPerGame: number;
  rebsPerGame: number;
}
