import axios from "axios";
import React, { useEffect, useState } from "react";

const Games = () => {
  const [games, setGames] = useState([]);

  const getGames = async () => {
    try {
      const res = await axios.get(
        "https://free-to-play-games-database.p.rapidapi.com/api/games",
        {
          headers: {
            "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
            "X-RapidAPI-Host": process.env.REACT_APP_API_HOST,
          },
        }
      );

      console.log(res.data.slice(0, 20));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getGames();
  }, []);

  return (
    <div>
      <h2>tes gaming</h2>
    </div>
  );
};

export default Games;
