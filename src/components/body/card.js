import React from "react";

const Card = (props) => {
  console.log(props.data);
  return (
    <div
      style={{
        backgroundColor: "purple",
        padding: 12,
        borderRadius: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2>Titulo</h2>
      <h4>price</h4>
    </div>
  );
};

export default Card;
