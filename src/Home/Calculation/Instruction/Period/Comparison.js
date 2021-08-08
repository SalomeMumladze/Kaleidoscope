import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { MenuItem, FormControl, Select } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: 417,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Comparison() {
  const classes = useStyles();
  const [comp, setcomp] = React.useState("");

  const handleChange = (event) => {
    setcomp(event.target.value);
  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <Select
          value={comp}
          onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}
        >
          <MenuItem value="">
            <em>წინა წლის შესაბამის თვესთან შედარებით</em>
          </MenuItem>
          <MenuItem value="year">წინა თვესთან შედარებით</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
