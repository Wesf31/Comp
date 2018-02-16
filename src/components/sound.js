import React from 'react';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import './sound.mp3'

class AlertDialog extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Button onClick={this.handleClickOpen}>Click to listen!</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Sound</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Push the play button and here something dope!
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Back
            </Button>
            <audio controls>
              <source src="http://res.cloudinary.com/dhowdfbmx/video/upload/v1518779772/cartoon_slide_whistle_descend_3_lohqae.mp3" />
            </audio>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default AlertDialog;