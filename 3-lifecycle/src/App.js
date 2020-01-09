import React, { Component } from "react";
import "./App.css";
import Market from "./components/Market";
import FirstChild from "./components/FirstChild";

class App extends Component {
  constructor() {
    console.log("%cAPP CONSTRUCTED", "color:blue;");
    super();
    this.state = {
      account: 25.0,
      stocks: 0.0,
      tradingOpen: false,
      timer: 0
    };
  }

  componentWillMount() {
    console.log("%cAPP WILL MOUNT", "color:blue;");
  }

  // componentDidMount() {
  //   console.log("%cAPP DID MOUNT", "color:blue;");
  //   setInterval(() => {
  //   this.runTimer()
  //   }, 1000);
    
  // }

  buyStock = () => {
    if (this.state.account >= 5) {
      this.setState(prevState => {
        return {
          account: prevState.account - 5,
          stocks: prevState.stocks + 5
        };
      });
    }
  };

  sellStock = () => {
    if (this.state.stocks >= 5) {
      this.setState(prevState => {
        return {
          account: prevState.account + 5,
          stocks: prevState.stocks - 5
        };
      });
    }
  };

  openTrading = () => {
    this.setState({ tradingOpen: !this.state.tradingOpen });
  };

  //runTimer is defined as a single action, that represents a single
  //update to the timer, rather than the update cycle - this was my intial mistake
  runTimer = () => {
    this.setState(prevState => {
      return { timer: prevState.timer + 1 };
    });
  };

  render() {
    console.log("%cAPP RENDERED", "color:blue;");
    return (
      <div className="container app">
        <h1>Stock Tracker</h1>
        <h2>TIMER: {this.state.timer}</h2>
        <FirstChild myValue={this.state.account} />
        <div>
          <h4>
            My account contains{" "}
            <span className="method-name">${this.state.account}</span>
          </h4>

          <h4>
            My stocks are worth{" "}
            <span className="method-name">${this.state.stocks}</span>
          </h4>
          <button className="btn btn-info" onClick={this.buyStock}>
            Buy Stocks ($5)
          </button>
          <br />
          <button className="btn btn-danger" onClick={this.sellStock}>
            Sell Stocks ($5)
          </button>
          <hr />
          <button className="btn btn-warning" onClick={this.openTrading}>
            Open/Close Markets
          </button>
        </div>
        <hr />
        {this.state.tradingOpen ? (
          <Market
            onRunTimer={this.runTimer}
            parentState={this.state}
            onMarketUpdates={this.computeStockChange}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
