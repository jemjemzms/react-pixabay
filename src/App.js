import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import NavBar from "./components/nabvar/NavBar";
import Search from "./components/search/Search";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <NavBar />
          <div className="container">
            <Search />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
