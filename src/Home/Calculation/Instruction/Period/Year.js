import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: 200,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Year() {
  const classes = useStyles();
  const [year, setyear] = React.useState("");

  const handleChange = (event) => {
    setyear(event.target.value);
  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <Select
          value={year}
          onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}
        >
          <MenuItem value="">
            <em>2021</em>
          </MenuItem>
          <MenuItem value={10}>2020</MenuItem>
          <MenuItem value={20}>2019</MenuItem>
          <MenuItem value={30}>2018</MenuItem>
          <MenuItem value={10}>2017</MenuItem>
          <MenuItem value={20}>2016</MenuItem>
          <MenuItem value={30}>2015</MenuItem>
          <MenuItem value={10}>2014</MenuItem>
          <MenuItem value={20}>2013</MenuItem>
          <MenuItem value={30}>2012</MenuItem>
          <MenuItem value={10}>2011</MenuItem>
          <MenuItem value={20}>2010</MenuItem>
          <MenuItem value={30}>2009</MenuItem>
          <MenuItem value={10}>2008</MenuItem>
          <MenuItem value={20}>2007</MenuItem>
          <MenuItem value={30}>2006</MenuItem>
          <MenuItem value={10}>2005</MenuItem>
          <MenuItem value={20}>2004</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
