import "./App.css";

import React, { Component } from "react";
import Main from "./components/MainComponent";
import { DISHES } from "./shared/dishes";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
    };
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
