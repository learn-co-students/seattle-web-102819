import React, { Component } from "react";
import {Link} from 'react-router-dom';
import LoaderHOC from '../HOCs/LoaderHOC'
import PrivacyHOC from '../HOCs/PrivacyHOC'

class RaceBrowser extends Component {
  generateRaces = raceArray => {
    return raceArray.map(race => {
      return <li>{race.raceName}</li>;
    });
  };

  render() {
    const { Races, season } = this.props.season;
    return (
      <>
        <Link className="btn btn-danger"to="/" onClick={this.props.onResetList}>Back</Link>
        <h2>List of races for {season}</h2>
        <ul>{this.generateRaces(Races)}</ul>
      </>
    );
  }
}

export default PrivacyHOC(LoaderHOC(RaceBrowser))