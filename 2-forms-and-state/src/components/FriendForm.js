import React from "react";

const INITIAL_STATE = {
  name: "",
  age: 0,
  favFood: ""
};

class FriendForm extends React.Component {
  state = INITIAL_STATE;

  handleInputChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
  };

  handleSubmitForm = event => {
    event.preventDefault();
    this.props.onAddFriend(this.state);
    this.setState({ INITIAL_STATE });
  };

  render() {
    return (
      <div className="jumbotron">
        <form onSubmit={this.handleSubmitForm}>
          <label htmlFor="name">New Friend Name</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
          <label htmlFor="age">New Friend Age</label>
          <input
            type="number"
            name="age"
            value={this.state.age}
            onChange={this.handleInputChange}
          />
          <label htmlFor="favFood">New Friend Food</label>
          <input
            type="text"
            name="favFood"
            value={this.state.favFood}
            onChange={this.handleInputChange}
          />
          \<button>Submit</button>
        </form>
      </div>
    );
  }
}

export default FriendForm;
