import React from 'react'
import Navigation from './Navigation'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/styles'
import {Grid} from '@material-ui/core'

const useStyles = makeStyles({
    root: {
      width:500,
      margin:'0 auto',
      marginTop:'200px'
    },
    media: {
      height: 140,
    },
  });

const LostVillege = (props) =>{

    const classes = useStyles();

    return (
         <Card className={classes.root}>
          <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/village.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lost Village....
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            This is Lost Village. We should repair this villege by studying english..
            are you ready to study?
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Grid container justify="space-evenly">
            <Grid item>
                <Button size="small" color="primary">
                    study
                </Button>
            </Grid>
            <Grid item>
                <Button size="small" color="primary">
                    home
                </Button>
            </Grid>
        </Grid>
      </CardActions>
    </Card>
    )
}

export default LostVillege