import React from 'react'
import Friend from './Friend'

class FriendBrowser extends React.Component {
    render() {
        return <div>
        {
          this.props.friends.map((friend, index) => {
            return <Friend key={index} friend={friend} number={index}/>;
          })
        }
        </div>

    }
}

export default FriendBrowser