import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Button from "./ex1/Button.jsx";
import Auth from "./ex2/Auth.jsx";
import Names from "./ex3/Names.jsx";
// import './index.css'
// import Button from "./warmup/Button.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Button loading={true} /> */}
    {/* <Button /> */}
    {/* <Auth /> */}
    <Names />
  </React.StrictMode>
);
