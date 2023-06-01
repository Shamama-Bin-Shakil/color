import React from "react";
import Index from "./Page/Index";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./Page/Login";
import Color from "./Page/Color";
import Sign from "./Page/Sign";
import Profile from "./Page/Profile";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/color" element={<Color />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};

export default App;
