import { useEffect, useState } from "react";
import { Character } from "@/lib/schemas";
import axios from "axios";

const instance = axios.create();

export const useCharacters = (episodeId: number) => {
  const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    setLoading(true);
    instance
      .get(`/api/characters/${episodeId}`)
      .then((response) => response.data)
      .then((data) => setCharacters(() => [...data]))
      .finally(() => setLoading(false));
  }, [episodeId]);

  return {
    loading: loading,
    characters: [...characters],
  };
};
