import classes from "./index.module.css";
import clsx from "clsx";
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

interface HeaderProps {
  /** Values displayed in the dropdown menu */
  filterValues: string[];
  /** The currently chosen value */
  currentFilter: string;
  /** Setter for a new value */
  setCurrentFilter: React.Dispatch<React.SetStateAction<string>>;
}

const Header = ({
  filterValues,
  currentFilter,
  setCurrentFilter,
}: HeaderProps) => {
  const handleChange = (event: SelectChangeEvent) => {
    setCurrentFilter(event.target.value);
  };

  return (
    <>
      <div className={clsx(classes.outerContainer)}>
        <header className={classes.container}>
          <h1 className={classes.header}>Trolley Problem Memes</h1>
          <div>
            <FormControl sx={{ m: 1, minWidth: 80 }} size="small">
              <Select
                id="filter"
                value={currentFilter}
                onChange={handleChange}
                autoWidth
                defaultValue={filterValues[0]}
              >
                {filterValues.map((item) => (
                  <MenuItem value={item} key={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
