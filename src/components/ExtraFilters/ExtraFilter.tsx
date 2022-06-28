import { Dropdown } from "antd";
import { ReactElement, useState } from "react";
import ArrowDown from "../../icons/ArrowDown";
import { ExtraFilterIcon, ExtraFilterName, ExtraFilterWrapper } from "./style";
import StyledRange from "./Views/Range";
import FilterOptions from "./Views/Select/Select";

const VIEWS: Record<
  string,
  ({
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
  }) => JSX.Element
> = {
  select: FilterOptions,
  range: StyledRange,
  date: FilterOptions,
};

const getView = (type: string, props: any, rest: any) => {
  const View = VIEWS[type];

  return <View options={props} {...rest} />;
};

const ExtraFilter = ({
  option,
  dropdownOptions,
  selectedOptions,
  changeExtraFiltersOptionsSelected,
}: {
  option: {
    id: number;
    name: string;
    icon: JSX.Element;
    value: string;
    type: string;
  };
  dropdownOptions: any;
  selectedOptions: Set<unknown>;
  changeExtraFiltersOptionsSelected: any;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Dropdown
      onVisibleChange={setOpen}
      trigger={["click"]}
      overlay={getView(option.type, dropdownOptions, {
        name: option.name,
        selectedOptions,
        changeExtraFiltersOptionsSelected,
        value: option.value,
      })}
    >
      <ExtraFilterWrapper>
        <ExtraFilterIcon>{option.icon}</ExtraFilterIcon>
        <ExtraFilterName>{option.name}</ExtraFilterName>
        <ArrowDown color={open ? "#282F3F" : "#828a96"} />
      </ExtraFilterWrapper>
    </Dropdown>
  );
};

export default ExtraFilter;
