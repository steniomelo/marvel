import axios from "axios";
var md5 = require("md5");

const PUBLIC_KEY = process.env.REACT_APP_MARVEL_PUBLIC_KEY as string;
const PRIVATE_KEY = process.env.REACT_APP_MARVEL_PRIVATE_KEY as string;
const BASE_URL = "https://gateway.marvel.com/v1/public";

const timestamp = new Date().getTime();
const hash = md5(timestamp + PRIVATE_KEY + PUBLIC_KEY).toString();

export const fetchCharacters = (
  offset = 0,
  limit = 20,
  name = "",
  orderby = "name"
) =>
  axios.get(`${BASE_URL}/characters`, {
    params: {
      apikey: PUBLIC_KEY,
      ts: timestamp,
      hash,
      limit: limit,
      ...(name ? { nameStartsWith: name } : {}),
      offset: offset,
      orderBy: orderby,
    },
  });

export const fetchCharacterDetails = (characterId: number) =>
  axios.get(`${BASE_URL}/characters/${characterId}`, {
    params: {
      apikey: PUBLIC_KEY,
      ts: timestamp,
      hash,
    },
  });

export const fetchCharacterComics = (characterId: number) =>
  axios.get(`${BASE_URL}/characters/${characterId}/comics`, {
    params: {
      apikey: PUBLIC_KEY,
      ts: timestamp,
      hash,
      orderBy: "-onsaleDate",
      limit: 10,
    },
  });
