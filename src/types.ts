export interface Person {
  isim: string;
  görev: string;
  şehir: string;
  durum: string;
}

export interface CityCoords {
  [key: string]: [number, number];
} 