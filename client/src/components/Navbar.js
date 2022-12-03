import React, { useState } from "react";
import "./style/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { BsCart4 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { AiOutlineBell } from "react-icons/ai";
import { BiDownArrow } from "react-icons/bi";
import Dropdown from "react-bootstrap/Dropdown";
import ModalLogin from "./ModalLogin";

const Navbar = ({setText}) => {
 

  const [show, setShow] = useState(false);
  const isAuth = localStorage.getItem("token");

  return (
    <div className="navbar">
      <div className="combo">
        <div className="left">
          <img src="https://i.pinimg.com/originals/30/d3/a5/30d3a50c78a8f224a966a9cc3cf8a411.jpg" alt=""/>
        </div>


        <div className="searchP">
          <input
            type="text"
            onChange={(e)=>setText(e.target.value)}
            placeholder="Vous cherchez quel théme de broderie..."
            className="search"
          />
          <i>
            <FontAwesomeIcon icon={faSearch} />
          </i>
        </div>
      </div>
      <div className="right">
        {isAuth ? (
          <AiOutlineBell />
        ) : (
          <button
            onClick={() => {
              setShow(!show);
            }}
          >
            Sign In
          </button>
        )}




        {isAuth ? (
          <div className="imb">
            <CgProfile />
            <BiDownArrow />
          </div>
        ) : (
          <div className="ima">
            <img src=" " alt="" />
          </div>
        )}

        <div className="imb">
          {" "}
          <MdOutlineFavoriteBorder />
        </div>
        <div className="imc">
          {" "}
          <BsCart4 />
        </div>
      </div>
      
      
      {show && <ModalLogin setShow={setShow} show={show} />}
    </div>
  );
};

export default Navbar;
