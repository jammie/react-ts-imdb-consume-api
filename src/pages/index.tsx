import { useRouter } from "next/router";

import { Meta } from "@/layout/Meta";
import { Main } from "@/templates/Main";

import {
  getImdbTop250MoviesQuery,
  selectTop250Data,
} from "@/features/imdb/imdbSlice";

import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { useEffect } from "react";
import Link from "next/link";

const Index = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectTop250Data);

  useEffect(() => {
    if (items.length == 0) {
      dispatch(getImdbTop250MoviesQuery());
    }
  }, []);

  return (
    <Main
      meta={<Meta title="IMDB" description="Website for Consuming IMDB API." />}
    >
      <div className="w-full flex items-center flex-col justify-center text-center">
        {items.map((movie, index) => (
          <Link
            href={{
              pathname: "/detail/" + movie.id,
              query: {
                id: movie.id,
                rank: movie.rank,
                title: movie.title,
                fulltitle: movie.fulltitle,
                year: movie.year,
                image: movie.image,
                crew: movie.crew,
                imdbRating: movie.imDbRating,
                imdbRatingCount: movie.imDbRatingCount
              }, // the data
            }}
            key={"list-" + index}
          >
            <div className="rounded inline-block align-middle drop-shadow-lg border-2 border-bottom-solid border-blue-100 px-5 py-5 cursor-pointer">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  {index + 1}. {movie.fulltitle}
                </div>
              </div>
              <img
                className="aspect-square h-48 w-96"
                alt={movie.title}
                src={movie.image}
              />
            </div>
          </Link>
        ))}
      </div>
    </Main>
  );
};
export default Index;
