import React from "react";

const db = async () => {
  const response = await fetch("http://localhost:8080/api/color/api_key", {
    method: "get",
    headers: { "Content-Type": "application/json" },
  });
  const result = await response.json();
  console.log(result);
};
db();

const App = () => {
  return (
    <>
      <h1>welcome to vscode</h1>
    </>
  );
};

export default App;
