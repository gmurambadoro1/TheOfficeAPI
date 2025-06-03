import axios from "axios";
import { Pagination, Season, SeasonsResponseSchema } from "@/lib/schemas";

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
