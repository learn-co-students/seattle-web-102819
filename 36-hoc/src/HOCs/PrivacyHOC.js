import React from 'react'
import {Redirect} from 'react-router-dom'

const PrivacyHOC = WrappedComponent => {
    return class PrivacyHOC extends React.Component {

        authorized = () => {
            return this.props.logged_in;
        }

        render() {
            return this.authorized() ? (
              <WrappedComponent {...this.props} />
            ) : (
              <Redirect to="/" />
            );
        }
    }
}

export default PrivacyHOC
