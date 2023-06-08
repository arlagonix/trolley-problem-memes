import classes from "./index.module.css";
// import useEventListener from "../../hooks/useEventListener";
// import { useRef, useState } from "react";
import clsx from "clsx";
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

interface HeaderProps {
  filterValues: string[];
  currentFilter: string;
  setCurrentFilter: React.Dispatch<React.SetStateAction<string>>;
}

const Header = ({
  filterValues,
  currentFilter,
  setCurrentFilter,
}: HeaderProps) => {
  // I just don't want to delete this code
  // Spent quite some time on that...

  // const [didScrollUp, setDidScrollUp] = useState(false);
  // const previousScrollY = useRef(window.scrollY);

  // inspired by https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp
  // useEventListener("scroll", () => {
  //   setDidScrollUp(window.scrollY > previousScrollY.current);
  //   previousScrollY.current = window.scrollY;
  // });

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
