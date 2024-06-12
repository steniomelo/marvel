import { Image } from "./thumbnail";

export interface Comics {
  available: number;
  collectionURI: string;
  items: {
    name: string;
    resourceURI: string;
  }[];
  returned: number;
}
export interface Comic {
  id: number;
  title: string;
  thumbnail: Image;
  dates: {
    date: string;
    type: string;
  }[];
}