import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { setProfileData } from './../ducks/reducers/resultsReducer'
import UpdateProfile from './updateProfile'


const Results = ({
  profileData, classes, setProfileData, match,
}) => {
  const deleteProfile = (userName) => {
    axios.delete(`/api/deleteProfile/${userName}`).then((res) => {
      setProfileData(res.data)
      console.log(match)
    })
  }

  const displayCard = profileData && profileData.map((card, index) => (
    <div key={index} >
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={card.profilepic}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography variant="headline" component="h2">
            {card.profilename}
          </Typography>
          <Button onClick={() => deleteProfile(card.profilename)} color="primary">
              Delete
          </Button>
          <UpdateProfile profilename={card.profilename} />
        </CardContent>
      </Card>
    </div>
  ))

  return (
    <div>
      {displayCard}
    </div>
  )
}

const mapStateToProps = state => ({

})

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
};

Results.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(connect(mapStateToProps, { setProfileData })(withStyles(styles)(Results)))