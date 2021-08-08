import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';



const IconButton = (props) => {
  const { icon, svg, onClick, } = props;
  const classes = useStyles({
    background: props.background,
    width: props.width,
    widthMd: props.widthMd,
    hover: props.hover,
    svgColor: props.svgColor,
    svgHover: props.svgHover,
    transform: props.transform,
    imgSize: props.imgSize,
  });


  return (
    <Button className={classes.button} onClick={onClick}>
      {icon ? <img src={icon} alt='icon' /> :
        svg
      }
    </Button>
  );
}

const useStyles = makeStyles((theme) => ({
  button: {
    background: props => props.background || 'rgba(17, 128, 229, 0.5)',
    height: props => props.width || '40px',
    width: props => props.width || '40px',
    minWidth: 40,
    '& svg': {
      transform: props => props.transform || null,
      height: props => props.imgSize || null,
      width: props => props.imgSize || null,
      '& path': {
        fill: props => theme.colors[props.svgColor || 'black'],
      },
    },
    '&:hover': {
      background: props => theme.colors[props.hover || props.background] || 'rgba(255,255,255,.16)',
      opacity: .9,
      '& svg path': {
        fill: props => theme.colors[props.svgHover] || null,
      }
    },
    [theme.breakpoints.down('md')]: {
      width: props => props.widthMd || props.width || '40px',
      height: props => props.widthMd || props.width || '40px',
    }
  },

}));

export default IconButton;
