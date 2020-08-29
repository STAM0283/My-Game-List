import React from "react";
import minecraft from "../images/minecraft.png";
import image_game from "../images/image_game.png";

const Home = () => {
  return (
    <div className = "home">
      <p>welcome to the wonderful world of video games</p>
      <img
        style={{ marginRight: "4%" }}
        src={image_game}
        alt="image game boy color"
      />
      <img src={minecraft} alt=" image minecraft" />
    </div>
  );
};

export default Home;
