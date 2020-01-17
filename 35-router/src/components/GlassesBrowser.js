import React from "react";
import Glasses from "./Glasses";
import {Route} from 'react-router-dom'
import Details from './Details'

class GlassesBrowser extends React.Component {

  componentDidMount() {
  }
  
  renderGlasses = () => {
    return this.props.glasses.map((glasses) => {
      return <Glasses glasses={glasses} key={glasses.id} />;
    });
  };
  render() {
    console.log(this.props.glasses[0])
    return (
      <>
        <div className="container">
          <div className="row">{this.renderGlasses()}</div>
        </div>
        <Route
          path="/glasses/:id"
          render={props => <Details {...props} glasses={this.props.glasses} />}
        />
      </>
    );
  }
}

export default GlassesBrowser;
