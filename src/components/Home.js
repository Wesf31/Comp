import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { FormGroup, FormControlLabel } from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';
import green from 'material-ui/colors/green';
import Button from 'material-ui/Button';
import withStyles from 'material-ui/styles/withStyles';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import { getProfileData } from './../ducks/reducers/resultsReducer'
import DisplayProfile from './displayProfile'
import CreateProfile from './createProfile'


class Home extends React.Component {
  state= {
    dog: false,
    cat: false,
    name: 'dog',
    search: '',
  }

  handleChange = name => (event) => {
    this.setState({
      [name]: event.target.checked,
      name: [name],
    });
    console.log(this.state.name)
  };

  searchHandler = (e) => {
    this.setState({ search: e.target.value })
  }

  render() {
    const {
      profileData, classes, history,
    } = this.props
    return (
      <div>
        <CreateProfile />
        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.dog}
                onChange={this.handleChange('dog')}
                value="checkedA"
              />
          }
            label="Dogo"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.cat}
                onChange={this.handleChange('cat')}
                value="checkedB"
                color="primary"
              />
          }
            label="Not Dogo"
          />
          <Button className={classes.button} onClick={() => { history.push(`/${this.state.name}`) }} data-something="here I am">
        See picture of animal picked
          </Button>
          <TextField className="search" type="text" label="Search" onChange={e => this.searchHandler(e)} value={this.state.search} />
          <Button className={classes.button} onClick={() => { axios.get('/api/search') }} data-something="here I am">
        Search by name
          </Button>
        </FormGroup>
        <DisplayProfile profileData={profileData} />
      </div>
    )
  }
}
const styles = theme => ({
  checked: {
    color: green[500],
  },
  button: {
    margin: theme.spacing.unit,
  },
})
const mapStateToProps = state => ({
  profileData: state.resultsReducer.profileData,
})

export default withRouter((connect(mapStateToProps, { getProfileData })(withStyles(styles)(Home))))

