import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { InputLabel, MenuItem, FormControl, Select } from "@material-ui/core";

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

export default function Month() {
  const classes = useStyles();
  const [month, setmonth] = React.useState("");

  const handleChange = (event) => {
    setmonth(event.target.value);
  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <Select
          value={month}
          onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}
        >
          <MenuItem value="">
            <em>იანვარი</em>
          </MenuItem>
          <MenuItem value={20}>თებერვალი</MenuItem>
          <MenuItem value={30}>მარტი</MenuItem>
          <MenuItem value={10}>აპრილი</MenuItem>
          <MenuItem value={20}>მაისი</MenuItem>
          <MenuItem value={30}>ივნისი</MenuItem>
          <MenuItem value={10}>ივლისი</MenuItem>
          <MenuItem value={20}>აგვისტო</MenuItem>
          <MenuItem value={30}>სექტემბერი</MenuItem>
          <MenuItem value={10}>ოქტომბერი</MenuItem>
          <MenuItem value={20}>ნომბერი</MenuItem>
          <MenuItem value={30}>დეკემბერი</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
