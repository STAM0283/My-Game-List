import React, { useState, useEffect } from "react";
import axios from "axios";

const MovieGame = () => {
  const [listGame, setListGame] = useState(null);
  useEffect(() => {
    axios.get("https://wild-games.herokuapp.com/api/v1").then((response) => {
      console.log(response.data.map((item) => item.genres));
      setListGame(response.data.map((item) => item.clip));
    });
  }, []);
  return listGame !== null ? (
    <div className="movie">
      {listGame.map((item) => {
        return (
          <div className = "">
            <video id="video" controls>
              <source src={item.clip} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        );
      })}
    </div>
  ) : (
    <p>Pas de data</p>
  );
};

export default MovieGame;
