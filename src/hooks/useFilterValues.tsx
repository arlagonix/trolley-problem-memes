import { useState } from "react";
import { yearsList } from "../images";

const filterValues = ["All", ...yearsList];
export type filterValuesType = (typeof filterValues)[number];

const useFilterValues = () => {
  const [currentFilter, setCurrentFilter] = useState<filterValuesType>(
    filterValues[0]
  );

  return { filterValues, currentFilter, setCurrentFilter };
};

export default useFilterValues;
