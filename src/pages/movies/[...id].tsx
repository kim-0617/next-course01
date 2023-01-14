import Seo from "@/components/Seo";
import { useRouter } from "next/router";

function Detail() {
  const { query } = useRouter();

  return (
    <div className="container">
      <Seo title={`${query.title}`} />
      <div className="movie">
        <img src={`https://image.tmdb.org/t/p/w500/${query.img}`} />
        <h4>
          <span>{query.title}</span>
        </h4>

        <p>{query.overview}</p>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          max-width: 1200px;
          margin: 80px auto;
        }
        .movie {
          cursor: pointer;
          width: 90%;
        }
        .movie img {
          width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
          margin-bottom: 25px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          width: 100%;
          font-size: 18px;
          text-align: center;
          margin-bottom: 25px;
        }
      `}</style>
    </div>
  );
}

export default Detail;
