import React from 'react';
import { connect } from 'react-redux'
import { getProfileData } from './../ducks/reducers/resultsReducer'
import DisplayProfile from './displayProfile'
import CreateProfile from './createProfile'

class Home extends React.Component {
  state= {

  }


  render() {
    const {
      profileData,
    } = this.props
    return (
      <div>
        <CreateProfile />
        <DisplayProfile profileData={profileData} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  profileData: state.resultsReducer.profileData,
})

export default (connect(mapStateToProps, { getProfileData })(Home))

