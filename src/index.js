/** @format */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./Header";
import FavouriteLocations from "./FavouriteLocations";
import Content from "./Content";
import TopLocations from "./TopLocations";
import Footer from "./Footer";
import Modal from "./Modal";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="container">
      <Header />
      <FavouriteLocations />
      <Content defaultCity="New York" />
      <TopLocations />
      <Footer />
    </div>
    <Modal />
  </StrictMode>
);
