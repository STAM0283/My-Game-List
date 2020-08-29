import React, {useState} from "react";
import Modal from "react-modal";

const Footer = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className="footer">
      <Modal isOpen={modalIsOpen}
      style={{
                content: {
                  backgroundColor: "black",
                },
              }}>
        <button onClick={() => setModalIsOpen(false)} style={{
                  width: "10%",
                  height: "40px",
                  fontSize: "large",
                  fontWeight: "bolder",
                  marginLeft: "10px",
                  marginBottom: "30px",
                  marginTop: "10px",
                  color: "black",
                  border: "solid 5px wheat",
                          boxShadow: "0px 0px 20px #00ccff",
                          inset: "0px 0px 20px #00ccff",
                          inset: "0px 0px 60px #00ffff",
                }}>hide the modal</button>
      </Modal>
      <button
        onClick={() => setModalIsOpen(true)}
        style={{
                  width: "10%",
                  height: "40px",
                  fontSize: "large",
                  fontWeight: "bolder",
                  marginLeft: "10px",
                  marginBottom: "30px",
                  marginTop: "10px",
                  color: "black",
                  
                }}
      >
        CONTACT
      </button>
    </div>
  );
};

export default Footer;
