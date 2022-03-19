import React from "react";
import "../App.css";

import PropTypes from "prop-types";

const handleName = (a) => {
  function handleClick(e) {
    e.preventDefault();
    alert(`Tableau de ${a} `);
  }
  return (
    <button
      style={{
        color: "#090909",
        padding: "0.7em 1.7em",
        fontSize: "18px",
        borderRadius: "0.5em",
        background: "#e8e8e8",
        border: "1px solid #e8e8e8",
        transition: "all .3s",
        boxShadow: "6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff",
        marginBottom: "10px",
      }}
      onClick={handleClick}
    >
      Clique ici
    </button>
  );
};

const Profile = (props) => {
  return (
    <div>
      {props.children}
      <h1>{props.name}</h1>
      <h3 style={{ color: "#f3bf99" }}>{props.artist}</h3>
      <p style={{ padding: "20px" }}>{props.bio}</p>
      {handleName(props.name)}
    </div>
  );
};

Profile.defaultProps = {
  children: <img src="./empty-image.jpg" alt="" />,
  name: "No one",
  artist: "No one",
  bio: "//",
};

Profile.propTypes = {
  name: PropTypes.string,
  artist: PropTypes.string,
  bio: PropTypes.string,
};

export { Profile };
