import "./App.css";
import React, { Component } from "react";
import Main from "./components/MainComponent";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { ConfigureStore } from "./redux/configureStore";

const store = ConfigureStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>

    );
    /* return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} />
      </div>
    ); */
  }
}

export default App;
