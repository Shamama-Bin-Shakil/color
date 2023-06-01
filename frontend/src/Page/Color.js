import React, { useContext, useState } from "react";
import Header from "../Components/Header";
import ColorContext from "../context/ColorContext";

const Color = () => {
  const context = useContext(ColorContext);
  const { colorAdd } = context;
  const [color, setColor] = useState({
    colorCode: "",
  });
  const HandleOnChange = (e) => {
    const { name, value } = e.target;
    setColor((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const handleColorForm = (e) => {
    e.preventDefault();
    colorAdd(color);
    color.colorCode = "";
    document.getElementById("colorCode").value = "";
  };
  return (
    <>
      <Header />
      <div id="colorContainer">
        <form className="colorLayout" onSubmit={handleColorForm}>
          <h2>Your Favorite Color</h2>
          <input
            type="text"
            onChange={HandleOnChange}
            value={color.colorCode}
            name="colorCode"
            placeholder="Color Code"
            id="colorCode"
          />
          <button type="submit">Add Color</button>
        </form>
      </div>
    </>
  );
};

export default Color;
