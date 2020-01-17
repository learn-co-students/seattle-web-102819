import React from "react";
import { Link } from "react-router-dom";

class Glasses extends React.Component {
  render() {
    const { image, style, maker, id } = this.props.glasses;
    return (
      <>
        <div className="col col-md-3">
          <div className="card">
            <img className="card-img-top" src={image} />
            <div className="card-body">
              <h3>{style}</h3>
              <h4>{maker}</h4>
              <Link to={`/glasses/${id}`}>
                <button className="btn btn-warning">Details</button>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Glasses;
