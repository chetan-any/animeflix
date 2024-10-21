import Image from "next/image";
import Footer from "@components/Footer";
import { fetchAnime } from "@actions/anime";
import LoadMore from "@components/LoadMore";

export default async function HomePage() {
  const data = await fetchAnime();

  return (
    <>
      <main
        className={`flex min-h-screen flex-col items-center bg-dark-1 pb-10 xl:px-28`}
      >
        <section
          className={`flex items-center gap-20 bg-hero bg-cover bg-top px-8 py-20 md:px-14`}
        >
          <div
            className={`grid flex-1 place-items-center gap-10 md:grid-cols-2 md:flex-row`}
          >
            <div className={`flex flex-col`}>
              <h1
                className={`text-pretty text-center text-4xl font-bold leading-10 sm:text-balance md:text-5xl`}
              >
                Explore The{" "}
                <span className={`text-heading`}> Diverse Realms </span>of Anime
                Magic
              </h1>
            </div>

            <Image
              priority
              src={`/images/anime.webp`}
              alt={`Anime hero picture`}
              height={430}
              width={400}
              className={`shrink-0`}
              quality={50}
            />
          </div>
        </section>

        {/* Anime list */}
        <section className={`space-y-10 p-2 py-16 sm:px-10 md:px-10`}>
          <h2 className={`text-3xl font-semibold`}>Explore Anime</h2>

          <div
            className={`grid grid-cols-1 content-stretch justify-items-center gap-x-10 gap-y-10 sm:grid-cols-2 md:gap-x-16 lg:grid-cols-3 lg:gap-x-8 2xl:grid-cols-4`}
          >
            {data}
          </div>
        </section>

        <LoadMore />
      </main>

      <Footer />
    </>
  );
}
