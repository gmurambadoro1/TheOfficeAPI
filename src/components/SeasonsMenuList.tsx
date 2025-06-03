import { getAllSeasons } from "@/lib/officeHttpClient";
import Link from "next/link";

export default async function SeasonsMenuList() {
  const seasons = await getAllSeasons({ page: 1, limit: 100 });

  return (
    <ul>
      {seasons.map((season) => {
        return (
          <li key={season.id}>
            <Link href={`/episodes/${season.id}`} passHref={true}>
              <span>Season {season.number}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
