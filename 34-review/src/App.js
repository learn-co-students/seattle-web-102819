import React, { Component } from "react";
import "./App.css";
import Buffet from "./components/Buffet";
import Plate from "./components/Plate";
import FOOD_ITEMS from "./FOOD.js";

class App extends Component {
  state = {
    buffetFood: FOOD_ITEMS.food, //this resolves to an array of objects with "name" and "image" props
    plateFood: []
  };

  addFood = food => {
    console.log("food added")
    this.setState(prevState => {
      return {
        // plateFood: prevState.plateFood.push(food)
        plateFood: [...prevState.plateFood, {...food, id: Math.random()}]
      };
    })
  }

  eatFood = food => {
    console.log(food)
    this.setState(prevState => {
      return {
        plateFood: prevState.plateFood.filter(plateFood => plateFood!=food)
      }
    })
  }

  render() {
    return (
      <div className="App">
        <h3>Welcome to the All-You-Can-Eat Buffet</h3>
        <Buffet onSelectFood={this.addFood} food={this.state.buffetFood} />
        <Plate food={this.state.plateFood} onSelectFood={this.eatFood} />
      </div>
    );
  }
}

export default App;

// let arr = [1,2,3,4]
// let copyArr = []

// arr.forEach(element => {
//   copyArr.push(element)
// });

// copyArr=[5, ...arr]
