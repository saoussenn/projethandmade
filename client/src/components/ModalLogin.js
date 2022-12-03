import React, { useState } from "react";
import "./style/modal.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogin } from "../redux/slices/userSlice";

import Modal from "react-bootstrap/Modal";

function ModalLogin({ show, setShow }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClose = () => setShow(false);
  const [login, setlogin] = useState({
    email: "",
    password: "",
  });

  return (
    <div className="modal-container">
      <Modal closeButton className="modalx" show={show} onHide={handleClose}>
        <Modal.Header style={{ width: "100%" }}>
          <Modal.Title className="header-modal">
            <h1>Sign In</h1>
            <button className="loginBtn">Register</button>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="formInputs">
            <p>Email:</p>
            <input
              type="text"
              className="formTextItem"
              placeholder="email@exmaple.com"
              onChange={(e) => setlogin({ ...login, email: e.target.value })}
            />
            <p>Mot de passe:</p>
            <input
              type="password"
              className="formTextItem"
              placeholder="**************"
              onChange={(e) => setlogin({ ...login, password: e.target.value })}
            />
            <p>Mot de passe oublié ?</p>
          </div>
          <button
            className="loginBtnn"
            onClick={() => {
              dispatch(userLogin(login));

              setTimeout(() => {
                navigate("/");
              }, 1000);
              setTimeout(() => {
                window.location.reload();
              }, 1000);
            }}
          >
            Connecter
          </button>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ModalLogin;
