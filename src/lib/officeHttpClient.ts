import axios from "axios";
import {
  Episode,
  EpisodesResponseSchema,
  Pagination,
  Season,
  SeasonsResponseSchema,
} from "@/lib/schemas";

const instance = axios.create({
  baseURL: process.env.BASE_URL as string,
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

    console.log({ page });
  } while (true);

  return episodes;
};
