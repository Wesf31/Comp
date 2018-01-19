import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import router from './router/router'
import { getProfileData } from './ducks/reducers/getProfileReducer'


class App extends Component {
  static propTypes = {
    getProfileData: PropTypes.func.isRequired,
    profileData: PropTypes.array.isRequired,
  }
  // 36I
  componentDidMount() {
    console.log('didmount')
    this.props.getProfileData(this.props.profileData)
  }
  // 36F
  render() {
    return (
      <div>
        { router }
      </div>
    );
  }
}
// basically what i wanted to do was make one axios call and set the state of the store and then just connect to my functional components.
// I highly over estimated my ability.
// take in props as param in connect function 36E
const mapStateToProps = state => ({
  profileData: state.getProfileData.profileData,
})

export default connect(mapStateToProps, { getProfileData })(App)
