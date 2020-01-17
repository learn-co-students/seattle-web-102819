import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import RaceBrowser from "./components/RaceBrowser";
import Secret from "./components/Secret";

const INITIAL_STATE = {
  season: {
    Races: [],
    season: ""
  },
  logged_in: false
};

class App extends Component {
  constructor() {
    super();
  }
  state = INITIAL_STATE;

  collectRaces = (year = 2018) => {
    setTimeout(
      () =>
        fetch(`https://ergast.com/api/f1/${year}.json`)
          .then(response => response.json())
          .then(data => this.setState({ season: data.MRData.RaceTable })),
      1200
    );
  };

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Route
              path="/secret"
              render={() => <Secret logged_in={this.state.logged_in} />}
            />
            <Route
              exact
              path="/"
              render={props => <Home onGetRaces={this.collectRaces} />}
            />
            <Route
              path="/races"
              render={() => (
                <RaceBrowser
                  onResetList={() =>
                    this.setState({ season: INITIAL_STATE.season })
                  }
                  season={this.state.season}
                  logged_in={this.state.logged_in}
                />
              )}
            />
            <br />
            <>
            <a className="btn btn-warning" onClick={() => this.setState({logged_in: !this.state.logged_in})}>Log In</a>
            {this.state.logged_in?"You are logged in":null}
            </>
            <Link to="/secret">Secret</Link>
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
