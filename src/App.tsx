import Gallery from "./components/Gallery";
import Header from "./components/Header";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import useFilterValues from "./hooks/useFilterValues";
import { useEffect } from "react";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

interface AppProps {
  hideLoader: () => void;
}

function App({ hideLoader }: AppProps) {
  const { filterValues, currentFilter, setCurrentFilter } = useFilterValues();
  useEffect(hideLoader, [hideLoader]);
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header
        filterValues={filterValues}
        currentFilter={currentFilter}
        setCurrentFilter={setCurrentFilter}
      />
      <Gallery currentFilter={currentFilter} />
    </ThemeProvider>
  );
}

export default App;
