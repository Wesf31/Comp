import React from 'react';
import { connect } from 'react-redux'
import { getProfileData } from './../ducks/reducers/resultsReducer'
import DisplayProfile from './displayProfile'

class Home extends React.Component {
  state= {

  }


  render() {
    const {
      profileData,
    } = this.props
    console.log(profileData[0])
    return (
      <div>
        <DisplayProfile profileData={profileData[0]} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  profileData: state.resultsReducer.profileData,
})

export default (connect(mapStateToProps, { getProfileData })(Home))

