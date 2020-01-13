import React, { Component } from "react";
import Food from "./Food";

class Buffet extends Component {
  //this.props.addFoodToPlate = function prop from App

  displayBuffet = () => {
    //DISPLAY FOOD HERE
    return this.props.food.map((food, index) => {
      return (
        <Food food={food} key={index} onSelectFood={this.props.onSelectFood} />
      );
    })
  };

  render() {
    return (
      <div className="container jumbotron">
        <h4>BUFFET CONTENTS</h4>
        <div className="row">{this.displayBuffet()}</div>
      </div>
    );
  }
}

export default Buffet;
