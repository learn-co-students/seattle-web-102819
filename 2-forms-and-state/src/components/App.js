import React from "react";
import FriendBrowser from "./FriendBrowser";
import FriendForm from "./FriendForm";
import { Button } from "react-bootstrap";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: [
        { name: "Harry Potter", age: 25, favFood: "Pizza" },
        { name: "Taylor", age: 18, favFood: "Ice Cream" }
      ]
    };
  }

  addFriend = friend => {
    this.setState(prevState => {
      return { friends: [...prevState.friends, friend] };
    });
  };

  render() {
    return (
      <div className="container">
        <Button>My Bootstrap Button</Button>
        <FriendForm onAddFriend={this.addFriend} />
        <FriendBrowser friends={this.state.friends} />
      </div>
    );
  }
}

export default App;
