"use client";

import { useInView } from "framer-motion";
import { fetchAnime } from "@actions/anime";
import { Spinner } from "@nextui-org/spinner";
import AnimeCard from "@components/AnimeCard";
import { useEffect, useRef, useState } from "react";

let page = 2;

export type AnimeCard = JSX.Element;

export default function LoadMore() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const [data, setData] = useState<AnimeCard[]>([]);

  useEffect(() => {
    if (isInView) {
      console.log(isInView);
      fetchAnime(page).then((response) => {
        setData([...data, ...response]);

        page++;
      });
    }
  }, [isInView, data]);

  return (
    <>
      <div
        className={`grid grid-cols-1 content-stretch justify-items-center gap-x-10 gap-y-10 sm:grid-cols-2 md:gap-x-8 lg:grid-cols-3 lg:gap-x-6 2xl:grid-cols-4`}
      >
        {data}
      </div>

      <div ref={ref} className={`mt-7`}>
        <Spinner color={`danger`} size={`lg`} />
      </div>
    </>
  );
}
