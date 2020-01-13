import React, { Component } from "react";
import Food from "./Food";

class Plate extends Component {
  displayFood = () => {
    //DISPLAY FOOD HERE
    return this.props.food.map((food, index) => {
      return (
        <Food food={food} key={food.id} onSelectFood={this.props.onSelectFood} />
      );
    });
  };
  render() {
    return (
      <div className="container jumbotron">
        <h4>PLATE CONTENTS</h4>
        <div className="row">{this.displayFood()}</div>
      </div>
    );
  }
}

export default Plate;
