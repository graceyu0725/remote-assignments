import React from "react";
import {BrowserRouter, HashRouter} from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <HashRouter>
      <Header />
      <Main />
      <Footer />
    </HashRouter>
  );
}

export default App;
