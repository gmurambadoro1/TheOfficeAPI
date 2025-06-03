import { z } from "zod";

export const SeasonSchema = z.object({
  id: z.number(),
  number: z.number(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
});

export const SeasonsResponseSchema = z.array(SeasonSchema);

export const PaginationSchema = z.object({
  page: z.number().default(1),
  limit: z.number().default(10),
});

const PaginationResponseMetaSchema = z.object({
  isFirstPage: z.boolean(),
  isLastPage: z.boolean(),
  currentPage: z.number(),
  nextPage: z.number().nullable(),
  pageCount: z.number(),
  previousPage: z.number().nullable(),
  totalCount: z.number(),
});

export type Season = z.infer<typeof SeasonSchema>;
export type Pagination = z.infer<typeof PaginationSchema>;

export const EpisodeSchema = z.object({
  id: z.number(),
  title: z.string(),
  summary: z.string(),
  airDate: z.coerce.date(),
  episode: z.string(),
  seriesEpisodeNumber: z.number(),
  seasonId: z.number(),
});

export const CharacterSchema = z.object({
  id: z.number(),
  name: z.string(),
  gender: z.string().nullable(),
  actor: z.string().nullable(),
  episodes: z.array(
    z.object({
      episode: z.object({
        id: z.number(),
        title: z.string(),
      }),
    })
  ),
});

export const EpisodesResponseSchema = z.object({
  results: z.array(EpisodeSchema),
  meta: PaginationResponseMetaSchema,
});

export type Episode = z.infer<typeof EpisodeSchema>;
export type Character = z.infer<typeof CharacterSchema>;

export const CharactersResponseSchema = z.object({
  results: z.array(CharacterSchema),
  meta: PaginationResponseMetaSchema,
});
