import Image from "next/image";
import { Divider } from "@nextui-org/divider";
import { MotionDiv } from "@components/MotionDiv";
import Link from "next/link";

export type AnimeProps = {
  id: string;
  name: string;
  image: {
    original: string;
  };
  kind: string;
  episodes: number;
  episodes_aired: number;
  score: string;
};

type AnimeCardProps = {
  anime: AnimeProps;
  index: number;
};

const variants = {
  hidden: {
    opacity: 0,
    scale: 0.99,
  },
  visible: { opacity: 1, scale: 1 },
};

export default function AnimeCard({ anime, index }: AnimeCardProps) {
  return (
    <MotionDiv
      variants={variants}
      initial={`hidden`}
      animate={`visible`}
      whileHover={{ scale: 1.02, transition: { bounce: 0.2, delay: 0 } }}
      transition={{ delay: index * 0.2, ease: "easeInOut", duration: 0.5 }}
      className={`relative w-full max-w-[280px] rounded-xl bg-dark-2 pb-3 shadow-2xl sm:px-0 md:max-w-[300px] lg:max-w-[280px]`}
    >
      <Link
        href={`https://aniwatchtv.to/search?keyword=${anime.name}`}
        target={`_blank`}
        className={`flex flex-col gap-y-3`}
      >
        <div className={`relative h-80 w-full`}>
          <Image
            src={`https://shikimori.one${anime.image.original}`}
            alt={anime.name}
            fill
            className={`rounded-t-2xl`}
            quality={90}
          />
        </div>

        <div className={`space-y-3 px-2`}>
          <div className={`flex items-center justify-between gap-3`}>
            <h3 className={`text-balance text-lg font-semibold`}>
              {anime.name}
            </h3>
            <span className={`rounded-md bg-gray-800 p-1 font-semibold`}>
              Tv
            </span>
          </div>

          <Divider orientation={`horizontal`} />

          <div className={`flex items-center gap-x-3`}>
            <div className={`flex items-center gap-x-1`}>
              <div className={`relative size-5`}>
                <Image
                  src={`/svg/episodes.svg`}
                  fill
                  alt={`Episode svg icon`}
                />
              </div>
              <p className={`font-semibold`}>{anime.episodes}</p>
            </div>

            <div className={`flex items-center gap-x-2`}>
              <div className={`relative size-5`}>
                <Image src={`/svg/star.svg`} fill alt={`Star svg icon`} />
              </div>

              <p className={`text-lg font-bold text-golden`}>{anime.score}</p>
            </div>
          </div>
        </div>
      </Link>
    </MotionDiv>
  );
}
