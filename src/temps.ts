import { Offsets } from './Offsets';
import { Sensoren } from './Sensoren';

export interface Raeume {
  total_offset: number;
  solltemperatur: number;
  temperatur: number;
  name: string;
  offsets: Offsets;
  sensoren: Sensoren[];
  id: number;
  luftfeuchte: number | string;
  betriebsart: string;
}

export interface tempsResponse {
  etagenname: string;
  id: number;
  raeume: Raeume[];
}
