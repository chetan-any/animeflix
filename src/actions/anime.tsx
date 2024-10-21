"use server";

import AnimeCard, { type AnimeProps } from "@components/AnimeCard";

export async function fetchAnime(page: number = 1, limit: number = 8) {
  const response = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=${limit}&order=popularity`,
  );
  const data = (await response.json()) as AnimeProps[];

  return data.map((anime, index: number) => (
    <AnimeCard key={anime.id} anime={anime} index={index} />
  ));
}
