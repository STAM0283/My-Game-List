import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-modal";

const GameList = () => {
  const [listGames, setListGames] = useState(null);
  const [bestGame, setBestGame] = useState("");
  const [allGames, setAllGame] = useState("");
  const [modalGameIsOpen, setModalGameIsOpen] = useState(false);
  const [moreInfos, setMoreInfos] = useState("");
  useEffect(() => {
    axios.get("https://wild-games.herokuapp.com/api/v1").then((response) => {
      setListGames(response.data.map((item) => item));
      setBestGame(response.data.filter((note) => note.rating >= 4.5));
      setAllGame(response.data.map((item) => item));
      setMoreInfos(response.data.map((index) => index.genres));
      
    });
  }, []);
  return listGames !== null ? (
    <div className="App">
      <button onClick={() => setListGames(bestGame)}>Best Games</button>
      <button onClick={() => setListGames(allGames)}>All Games</button>
      {listGames.map((item) => {
        return (
          <div className="listPicture">
            <button onClick={() => setModalGameIsOpen(true)}>more infos</button>
            <Modal
              isOpen={modalGameIsOpen}
              style={{
                content: {
                  backgroundColor: "greenyellow",
                },
              }}
            >
              <button
                style={{
                  width: "10%",
                  height: "40px",
                  fontSize: "large",
                  fontWeight: "bolder",
                  marginLeft: "10px",
                  marginBottom: "10px",
                  marginTop: "10px",
                }}
                onClick={() => setModalGameIsOpen(false)}
              >
                hide the modal
              </button>
              {/* {moreInfos.map((item) => {
                return moreInfos !== null ? (
                  <div>
                    <p>{item[0].name}</p>
                  </div>
                ) : (
                  <p>Pas de data</p>
                );
              })} */}
            </Modal>
            <div
              style={{
                border: "2px solid black",
                width: "90%",
                marginBottom: "30px",
                backgroundColor: "gray",
              }}
            >
              <p>Name : {item.name}</p>
              <p>Release : {item.released}</p>
              <img src={item.background_image} alt="picture-game" />
              <p>Evaluation : {item.rating}/5</p>
              <label for="file"></label>

              <progress id="file" max="5" value={item.rating}>
                {" "}
              </progress>
            </div>
          </div>
        );
      })}

      <button onClick={() => setListGames(bestGame)}>Best Games</button>
      <button onClick={() => setListGames(allGames)}>All Games</button>
    </div>
  ) : (
    <p>Pas de data</p>
  );
};

export default GameList;
