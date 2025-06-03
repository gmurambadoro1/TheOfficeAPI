import axios from "axios";
import {
  Character,
  CharactersResponseSchema,
  Episode,
  EpisodesResponseSchema,
  Pagination,
  Season,
  SeasonsResponseSchema,
} from "@/lib/schemas";

const instance = axios.create({
  baseURL: "https://theofficeapi.dev/api",
});

export const getAllSeasons = async (
  pagination: Pagination = { page: 1, limit: 10 }
): Promise<Season[]> => {
  const { data } = await instance.get("/seasons", {
    params: {
      page: pagination.page,
      limit: pagination.limit,
    },
  });

  return SeasonsResponseSchema.parse(data);
};

export const getSeasonEpisodes = async (
  seasonId: number
): Promise<Episode[]> => {
  const episodes: Episode[] = [];

  // todo: loop through until you get all episodes
  let page = 1;

  do {
    const { data } = await instance.get("/episodes", {
      params: { season: seasonId, page: page, limit: 10 },
    });

    const parsedData = EpisodesResponseSchema.parse(data);

    if (parsedData.results.length) {
      episodes.push(...parsedData.results);
    }

    if (!parsedData.meta.nextPage) {
      break;
    }

    page++;
  } while (true);

  return episodes;
};

export const getCharacters = async (): Promise<Character[]> => {
  const characters: Character[] = [];

  let page = 1;

  do {
    const { data } = await instance.get("/characters", {
      params: {
        includeEpisodes: true,
        page: page,
        limit: 10,
      },
    });

    const parsedData = CharactersResponseSchema.parse(data);

    if (parsedData.results.length) {
      characters.push(...parsedData.results);
    }

    if (!parsedData.meta.nextPage) {
      break;
    }

    page++;
  } while (true);

  return [...characters];
};
