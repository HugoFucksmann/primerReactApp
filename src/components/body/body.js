import React from "react";
import Card from "./card";

const Body = () => {
  const productos = [
    { id: 1, name: "notebook", price: 2000 },
    { id: 2, name: "telefono", price: 1000 },
    { id: 3, name: "tablet", price: 1500 },
    { id: 4, name: "ventilado", price: 200 },
    { id: 5, name: "notebook", price: 2000 },
    { id: 6, name: "telefono", price: 1000 },
    { id: 7, name: "tablet", price: 1500 },
    { id: 8, name: "ventilado", price: 200 },
  ];

  return (
    <div
      style={{
        backgroundColor: "#f2f2f2",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      {productos.map((obj) => (
        <Card data={obj} />
      ))}
    </div>
  );
};

const Input = () => {
  return (
    <div
      style={{
        margin: 8,
        background: "grey",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h3 style={{ color: "#f2f2f2", fontSize: 14 }}>Nombre</h3>
      <input
        placeholder="escriba aqui"
        style={{ margin: 4, borderRadius: 6, padding: 6 }}
        type={"text"}
      />
    </div>
  );
};

export default Body;
