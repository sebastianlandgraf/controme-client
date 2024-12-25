export interface Wetter {
  raum: number;
  haus: number;
}

export interface Api {}

export interface Offsets {
  Wetter?: Wetter;
  Heizflächenoptimierung: Wetter;
  api: Api;
  'Automatischer hydraulischer Abgleich Test': Wetter;
  Funksollregelung: Wetter;
  Backupcontrol: Wetter;
  'Dynamischer hydraulischer Maximal-Abgleich': Wetter;
  luftfeuchte?: Wetter;
}
