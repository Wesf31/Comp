import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle,
} from 'material-ui/Dialog';
import { setProfileData } from './../ducks/reducers/resultsReducer'


class UpDateProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      newName: '',
    }
  }

handleClickOpen = () => {
  this.setState({ open: true });
};

handleClose = () => {
  this.setState({ open: false });
};

handleClick = (e) => {
  e.preventDefault()
  let {
    newName,
  } = this.state
  let {
    profilename,
  } = this.props
  console.log(newName, profilename)
  axios.put('/api/updateProfile', { newName, profilename })
    .then((res) => {
      this.setState({
        open: false,
        newName: '',
      })
      this.props.setProfileData(res.data)
    })
}


render() {
  return (
    <div>
      <Button onClick={this.handleClickOpen}>Edit Name</Button>
      <Dialog
        open={this.state.open}
        onClose={this.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="New Name"
            value={this.state.newName}
            onChange={e => this.setState({ newName: e.target.value })}
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
              Cancel
          </Button>
          <Button onClick={this.handleClick} color="primary">
              Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
}
const mapStateToProps = state => ({

})

const styles = {

}

export default connect(mapStateToProps, { setProfileData })(UpDateProfile)