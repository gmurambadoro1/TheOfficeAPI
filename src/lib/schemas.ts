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

export type Season = z.infer<typeof SeasonSchema>;
export type SeasonsResponse = z.infer<typeof SeasonsResponseSchema>;
export type Pagination = z.infer<typeof PaginationSchema>;
