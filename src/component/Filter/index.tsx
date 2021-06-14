import React, { memo } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import "./styles.scss";

interface Props {
  label: string;
  inputLabel: string;
  data?: any[];
}

// Costumize dropdown select from material UI
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      width: 160,
    },
  })
);

const Filter = ({ label, inputLabel }: Props) => {
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as string);
  };

  return (
    <div className="container-row">
      <p className="regular-text">{label}</p>
      <FormControl
        variant="outlined"
        className={classes.formControl}
        size="small"
      >
        <InputLabel color="secondary">{inputLabel}</InputLabel>
        <Select
          color={"secondary"}
          value={age}
          onChange={handleChange}
          label={inputLabel}
          style={{ borderRadius: 20, height: 40 }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Parent 1</MenuItem>
          <MenuItem value={20}>Parent 2</MenuItem>
          <MenuItem value={30}>Parent 3</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default memo(Filter);
