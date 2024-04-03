import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import "font-awesome/css/font-awesome.min.css"; // Add this line
import "react-responsive-carousel/lib/styles/carousel.min.css";

import reportWebVitals from "./reportWebVitals";
import B from "./Component/B";
import A from "./Component/A";
import C from "./Component/C";
import { Provider } from "react-redux";
import store from "./redux/store";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Food from "./components/Food";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Blog from "./components/Blog";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Provider store={store}>
      <App>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="b" element={<B />} />
          <Route path="a" element={<A />} />
          <Route path="c" element={<C />} />
          <Route path="/food" element={<Food />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/blog" element={<Blog/>} />

          </Routes>
      </App>
    </Provider>
    ,
  </Router>
);

reportWebVitals();
