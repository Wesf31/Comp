import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';


function Animal(props) {
  const { classes } = props;
  console.log(props.match.params.animal)
  return (
    <div>
      { props.match.params.animal === 'dog' ?
        <div>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image="http://res.cloudinary.com/dhowdfbmx/image/upload/v1518990275/dog_bmrbz6.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography variant="headline" component="h2">
            Dog
              </Typography>
              <Typography component="p">
            Dogs are dope and everyone should love them.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
            Share
              </Button>
              <Button size="small" color="primary">
            Learn More
              </Button>
            </CardActions>
          </Card>
        </div>
        :
        <div>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image="http://res.cloudinary.com/dhowdfbmx/image/upload/v1518990269/cat_hgzenb.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography variant="headline" component="h2">
            Cat
              </Typography>
              <Typography component="p">
            Cats are gross and no one should like them
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
            Share
              </Button>
              <Button size="small" color="primary">
            Learn More
              </Button>
            </CardActions>
          </Card>
        </div>
        }
    </div>
  );
}

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
};

Animal.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Animal))