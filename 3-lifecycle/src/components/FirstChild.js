import React, { PureComponent } from "react";

class FirstChild extends PureComponent {
  constructor() {
    super();
    this.state = { num: 0 };
    console.log("%cFIRST CHILD CONTRUCTED", "color:orange;");
  }

  componentWillMount() {
    console.log("%cFIRST CHILD WILL MOUNT", "color:orange;");
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextState.num < 10
    // return (
    //   nextProps.myValue % 10 === 0 && nextProps.myValue != this.props.myValue
    // );
  // }

  // componentDidUpdate() {
  //   console.log("%cFIRST CHILD UPDATED", "color:red;");
  //   this.setState(prevState => {
  //     return { num: prevState.num + 1 };
  //   });
  // }

  componentWillReceiveProps(props) {
    console.log(props)
    this.setState({num: props.myValue})
  }

  componentDidMount() {
    console.log("%cFIRST CHILD DID MOUNT", "color:orange;");
  }

  render() {
    console.log("%cFIRST CHILD RENDERED", "color:orange;");
    return (
      <div>
        <h2>FIRST CHILD</h2>
        <h3>{this.props.myValue}</h3>
      </div>
    );
  }
}

export default FirstChild;
