import React from 'react';
import { connect } from 'react-redux'
import { getProfileData } from './../ducks/reducers/getProfileReducer'

class Home extends React.Component {
  state= {

  }


  render() {
    return (
      <div>
          hi
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    profileData: state.getProfileReducer.profileData,

  }
}

export default (connect(mapStateToProps, { getProfileData })(Home))

