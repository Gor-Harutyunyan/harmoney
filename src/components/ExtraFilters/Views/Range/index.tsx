import { Slider } from "antd";
import { useCallback } from "react";
import { RangeWrapper, RangeTitle } from "./style";

const StyledRange = ({
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
  const changeExtraFilters: any = useCallback(
    (newValue: string) => {
      changeExtraFiltersOptionsSelected((prevValue: any) => {
        const copy = { ...prevValue };
        const options = copy[value];
        options.min = newValue[0];
        options.max = newValue[1];

        return { ...copy, [value]: options };
      });
    },
    [value, changeExtraFiltersOptionsSelected]
  );

  return (
    <RangeWrapper>
      <RangeTitle>
        <span>Revenue Range</span>${options.min} - ${options.max}
      </RangeTitle>
      <Slider
        min={options.min}
        max={options.max}
        range
        step={10}
        onAfterChange={changeExtraFilters}
      />
    </RangeWrapper>
  );
};

export default StyledRange;
