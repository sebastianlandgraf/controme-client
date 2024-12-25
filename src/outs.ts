export interface outsResponse {
  etagenname: string;
  id: number;
  raeume: Raeume[];
}

export interface Raeume {
  ausgang: Ausgang;
  id: number;
  name: string;
}

export interface Ausgang {
  '13'?: number;
  ' 14'?: number;
  '12'?: number;
  '9'?: number;
  '8'?: number;
  '10'?: number;
  '7'?: number;
  '2'?: number;
  '3'?: number;
  '1'?: number;
  '6'?: number;
  '5'?: number;
  '4'?: number;
}
