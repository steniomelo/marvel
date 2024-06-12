import { Comics } from "./comic";
import { Image } from "./thumbnail";

export interface Character {
  id: number;
  name: string;
  description: string;
  modified: Date;
  resourceURI: string;
  urls: {
    type: string;
    url: string;
  }[];
  thumbnail: Image;
  comics: Comics;
  events: Comics;
}
