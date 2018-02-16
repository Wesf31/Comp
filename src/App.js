import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import router from './router/router'
import { getProfileData } from './ducks/reducers/resultsReducer'
import NavBar from './components/NavBar'


class App extends Component {
  static propTypes = {
  }

  componentDidMount() {
    const {
      profileDataLoaded, getProfileData,
    } = this.props
    if (!profileDataLoaded) {
      getProfileData()
    }
  }

  render() {
    return (
      <div>
        <NavBar />
        { router }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profilesLoaded: state.resultsReducer.profileDataLoaded,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getProfileData,
}, dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
