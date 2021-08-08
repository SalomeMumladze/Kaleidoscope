import React from 'react';
import { makeStyles } from '@material-ui/styles';
import CardMedia from '@material-ui/core/CardMedia';

const CustomizedCard = (props) => {
  const classes = useStyles();
  const { img } = props;

  return (
    <div className={classes.root}>

      <CardMedia
        className={classes.media}
        component="img"
        alt="member"
        image={img}
      />
      <main className={classes.shadow}></main>

    </div>
  );

}

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
  media: {
    maxHeight: 535,
  },
  shadow: {
    display: 'none',
    height: '103%',
    width: '80%',
    background: '#0652A8',
    position: 'absolute',
    top: '52%',
    transform: 'translate(-50%,-50%)',
    left: '50%',
    zIndex: '-1',
    borderRadius: '10px',
    [theme.breakpoints.down('sm')]: {
      display: 'none!important'
    }
  }
}));

export default CustomizedCard;
