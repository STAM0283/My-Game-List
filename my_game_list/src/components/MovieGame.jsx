import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import axios from "axios";

const MovieGame = () => {
  const [listGame, setListGame] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
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
          <div className="movieGame">
            <Modal
              isOpen={modalIsOpen}
              style={{
                content: {
                  backgroundColor: "black",
                },
              }}
            >
              <div>
                <button
                  style={{
                    width: "10%",
                    height: "40px",
                    fontSize: "large",
                    fontWeight: "bolder",
                    marginLeft: "45%",
                    marginBottom: "30px",
                    marginTop: "10px",
                    color: "white",
                    backgroundColor: "transparent",
                    background: "transparent",
                    border: "solid 5px wheat",
                    boxShadow: "0px 0px 20px #00ccff",
                    inset: "0px 0px 20px #00ccff",
                  }}
                  onClick={() => setModalIsOpen(false)}
                >
                  Hide the modal
                </button>
                {listGame.map((item) => {
                  return <img className="imgPreview" src={item.preview} />;
                })}
              </div>

              <button
                style={{
                  width: "10%",
                  height: "40px",
                  fontSize: "large",
                  fontWeight: "bolder",
                  marginLeft: "45%",
                  marginBottom: "30px",
                  marginTop: "10px",
                  color: "white",
                  backgroundColor: "transparent",
                  background: "transparent",
                  border: "solid 5px wheat",
                  boxShadow: "0px 0px 20px #00ccff",
                  inset: "0px 0px 20px #00ccff",
                }}
                onClick={() => setModalIsOpen(false)}
              >
                Hide the modal
              </button>
            </Modal>
            <video id="video" controls>
              <source src={item.clip} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <button
              style={{
                width: "10%",
                height: "40px",
                fontSize: "large",
                fontWeight: "bolder",
                marginLeft: "50%",
                marginBottom: "30px",
                marginTop: "10px",
                color: "white",
                backgroundColor: "transparent",
                background: "transparent",
                border: "solid 5px wheat",
                boxShadow: "0px 0px 20px #00ccff",
                inset: "0px 0px 20px #00ccff",
              }}
              onClick={() => setModalIsOpen(true)}
            >
              previeuw
            </button>
          </div>
        );
      })}
    </div>
  ) : (
    <p>Pas de data</p>
  );
};

export default MovieGame;
