import React, {Component} from 'react'
import { Link } from 'react-router-dom' 

class Homepage extends Component {
render() {
    return (<> 
        <Link to="/glasses" className="btn btn-info">Glasses</Link>
        <Link to="/manager" className="btn btn-info">Manager</Link>
    </>)
}
}

export default Homepage