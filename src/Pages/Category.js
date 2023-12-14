import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import Header from "../Components/Header";
import { ProgressBar } from "react-loader-spinner";
import Footer from "../Components/Footer";
import Pagination from "../Components/Pagination";

const Category = () => {
  const { game } = useParams();
  const [gameList, setGameList] = useState([]);

  const [loading, setLoading] = useState(false);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);

  const lastPost = currentPage * postPerPage; // 1 * 10
  const firstPost = lastPost - postPerPage; // 10 - 10 = halaman 1

  // End Pagination

  const getCategoryGames = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://free-to-play-games-database.p.rapidapi.com/api/games`,
        {
          params: { category: `${game}` },
          headers: {
            "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
            "X-RapidAPI-Host": process.env.REACT_APP_API_HOST,
          },
        }
      );
      // console.log(res.data.slice(0, 10));
      setGameList(res.data);
      setLoading(false);
    } catch (error) {
      setLoading(true);
      console.log(error);
    }
  };

  useEffect(() => {
    getCategoryGames();
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>RevGaming | {game}</title>
        <meta
          name="description"
          content={`Ini halaman genre ${game} untuk PC`}
        />
      </Helmet>
      {loading ? (
        <div className="flex flex-col h-screen justify-center items-center">
          <ProgressBar
            height="80"
            width="80"
            ariaLabel="progress-bar-loading"
            wrapperStyle={{}}
            wrapperClass="progress-bar-wrapper"
            borderColor="#0d47a1"
            barColor="#0d47a1"
          />
          <h2 className="font-semibold -mt-5 text-white">Loading...</h2>
        </div>
      ) : (
        <>
          <Header />
          <div className="pt-32 pb-10">
            <h2 className="text-center text-white font-semibold text-3xl">
              List <span className="capitalize">{game}</span> Games For PC 2023
            </h2>

            <div className="flex flex-wrap gap-5 px-10 justify-center py-10">
              {gameList
                .map((g) => (
                  <Link
                    target={"_blank"}
                    to={g.freetogame_profile_url}
                    key={g.id}
                  >
                    <div
                      className="w-64 h-72 bg-slate-900 text-white card-games rounded-xl"
                      key={g.id}
                    >
                      <img
                        src={g.thumbnail}
                        alt={g.title}
                        className="rounded-t-xl"
                      />
                      <h2 className="text-center py-4 font-medium">
                        {g.title}
                      </h2>

                      <div className="flex justify-center mt-10">
                        <p className="bg-slate-600 py-1.5 px-3 rounded-3xl text-xs text-white">
                          {g.genre}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))
                .slice(firstPost, lastPost)}
            </div>
            <Pagination
              totalPost={gameList.length}
              postPerPage={postPerPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default Category;
