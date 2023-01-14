import Seo from "@/components/Seo";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export interface Movie {
  adult?: boolean;
  popularity?: number;
  poster_path: string;
  id: number;
  title: string;
  overview: string;
}

export default function Home({ results }: any) {
  const [movies, setMovies] = useState(results);
  const router = useRouter();

  const onClick = (
    id: number,
    title: string,
    overview: string,
    img: string
  ) => {
    router.push(
      {
        pathname: `/movies/${title}/${id}`,
        query: {
          title,
          overview,
          img,
        },
      },
      `/movies/${title}/${id}`
    );
  };

  if (movies?.length === 0) return <span>Loading...</span>;

  return (
    <>
      <Seo title="HOME" />
      <div className="container">
        {movies?.map((movie: Movie) => (
          <div
            className="movie"
            key={movie.id}
            onClick={() => {
              onClick(movie.id, movie.title, movie.overview, movie.poster_path);
            }}
          >
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
            <h4>
              <Link href={`/movies/${movie.title}/${movie.id}`}>
                <span>{movie.title}</span>
              </Link>
            </h4>
          </div>
        ))}
        <style jsx>{`
          .container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            padding: 20px;
            gap: 20px;
            max-width: 1200px;
            margin: 0 auto;
          }
          .movie {
            cursor: pointer;
            width: 100%;
          }
          .movie img {
            width: 100%;
            border-radius: 12px;
            transition: transform 0.2s ease-in-out;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
            margin-bottom: 15px;
          }
          .movie:hover img {
            transform: scale(1.05) translateY(-10px);
          }
          .movie h4 {
            width: 100%;
            font-size: 18px;
            text-align: center;
            margin-bottom: 15px;
          }
        `}</style>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const API_KEY = "4dce5e2aa071cda3c95daac64628defc";
  const { results } = await await (
    await fetch(
      `https://api.themoviedb.org/3/movie/popular?page=1&api_key=${API_KEY}&language=ko-KR`
    )
  ).json();
  return {
    props: {
      results,
    },
  };
}
