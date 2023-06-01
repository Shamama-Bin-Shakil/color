import React, { useContext, useEffect } from "react";
import Header from "../Components/Header";
import ColorContext from "../context/ColorContext";
import swal from "sweetalert";

const Index = () => {
  const context = useContext(ColorContext);
  const { color, getColor, loading } = context;
  useEffect(() => {
    getColor();
    // eslint-disable-next-line
  }, []);

  const itemFunction = (value) => {
    const code = value;
    swal({ title: `Copied`}).then((value) => {
      if (value) {
        navigator.clipboard.writeText(code);
      }
    });
  };

  return (
    <>
      <Header />
      <div className="container">
        {loading === true && (
          <div className="loading-body">
            <img src={"spinner.gif"} alt="spinner" />
          </div>
        )}
        <div className="main-color-layout">
          {color.map((element) => {
            return (
              <div
                className="item"
                key={element._id}
                onClick={() => itemFunction(element.color_name)}
              >
                <div
                  className="color"
                  style={{ backgroundColor: element.color_name }}
                ></div>
                <div className="detail">
                  <span className="color-code" id="color-code">
                    {element.color_name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Index;
