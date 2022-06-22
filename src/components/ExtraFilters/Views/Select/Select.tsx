import { useCallback } from "react";
import { FilterOption, FilterOptionsWrapper, FilterOptionName } from "./style";

const FilterOptions = ({
  options,
  name,
  selectedOptions,
  changeExtraFiltersOptionsSelected,
  value,
}: {
  options: any;
  name: string;
  selectedOptions: Set<unknown>;
  changeExtraFiltersOptionsSelected: any;
  value: string;
}) => {
  const changeExtraFilters = useCallback(
    (newValue: string) => {
      changeExtraFiltersOptionsSelected((prevValue: any) => {
        const copy = { ...prevValue };
        const options = new Set(copy[value]);

        if (options.has(newValue)) {
          options.delete(newValue);
        } else {
          options.add(newValue);
        }

        return { ...copy, [value]: options };
      });
    },
    [value, changeExtraFiltersOptionsSelected]
  );
  console.log(selectedOptions, "selectedOptions");

  return (
    <FilterOptionsWrapper>
      {[...options].map((option: any, id: number) => (
        <FilterOption
          selected={selectedOptions?.has(option)}
          onClick={() => changeExtraFilters(option)}
          key={id}
        >
          {option?.icon}
          <FilterOptionName>{option}</FilterOptionName>
        </FilterOption>
      ))}
    </FilterOptionsWrapper>
  );
};

export default FilterOptions;
