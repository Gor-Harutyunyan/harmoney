import { Dropdown } from "antd";
import FilterOptions from "./FIlterOptions";
import { FilterText, View, ViewFilterWrapper, ViewsWrapper } from "./style";

type Props = {
  selectedViewOption: string;
  setSelectedViewOption: React.Dispatch<React.SetStateAction<string>>;
  extraFilters: Set<string>;
  setExtraFilters: React.Dispatch<React.SetStateAction<Set<string>>>;
};

const VIEW_OPTIONS = [
  { id: 0, name: "Default View", value: "default" },
  { id: 1, name: "Monthly View", value: "monthly" },
  { id: 2, name: "Quarterly View", value: "quarterly" },
  { id: 3, name: "Yearly View", value: "yearly" },
];

const ViewFilter = ({
  selectedViewOption,
  setSelectedViewOption,
  extraFilters,
  setExtraFilters,
}: Props) => {
  return (
    <ViewFilterWrapper>
      <ViewsWrapper>
        {VIEW_OPTIONS.map((option) => (
          <View
            key={option.id}
            selected={selectedViewOption === option.value}
            onClick={() => setSelectedViewOption(option.value)}
          >
            {option.name}
          </View>
        ))}
      </ViewsWrapper>
      <Dropdown
        overlay={
          <FilterOptions
            extraFilters={extraFilters}
            setExtraFilters={setExtraFilters}
          />
        }
        placement="bottomLeft"
      >
        <FilterText>Filter</FilterText>
      </Dropdown>
    </ViewFilterWrapper>
  );
};

export default ViewFilter;
