import { useCallback } from "react";
import Categories from "../../icons/Categories";
import Clock from "../../icons/Clock";
import Date from "../../icons/Date";
import PartnerCompanies from "../../icons/PartnerCompanies";
import RevenueRange from "../../icons/RevenueRange";
import { FilterOption, FilterOptionsWrapper, FilterOptionName } from "./style";

const FILTER_OPTIONS = [
  { id: 0, name: "Category", icon: <Categories />, value: "category" },
  {
    id: 1,
    name: "Partner Companies",
    icon: <PartnerCompanies />,
    value: "partnerCompanies",
  },
  {
    id: 2,
    name: "Status",
    icon: <PartnerCompanies />,
    value: "status",
  },
  {
    id: 3,
    name: "Total Revenue Range",
    icon: <RevenueRange />,
    value: "totalRevRange",
  },
  {
    id: 4,
    name: "Creation Date",
    icon: <Clock />,
    value: "creationDate",
  },
  {
    id: 5,
    name: "Start Date",
    icon: <Date />,
    value: "startDate",
  },
  {
    id: 6,
    name: "End Date",
    icon: <Date />,
    value: "endDate",
  },
];

type Props = {
  extraFilters: Set<string>;
  setExtraFilters: React.Dispatch<React.SetStateAction<Set<string>>>;
};

const FilterOptions = ({ extraFilters, setExtraFilters }: Props) => {
  const changeExtraFilters = useCallback(
    (value: string) => {
      setExtraFilters((prevFilters) => {
        const copy = new Set(prevFilters);
        if (copy.has(value)) {
          copy.delete(value);
        } else {
          copy.add(value);
        }

        return copy;
      });
    },
    [setExtraFilters]
  );
  console.log(extraFilters, "sadkskldal");

  return (
    <FilterOptionsWrapper>
      {FILTER_OPTIONS.map((option) => (
        <FilterOption
          selected={extraFilters.has(option.value)}
          onClick={() => changeExtraFilters(option.value)}
          key={option.id}
        >
          {option.icon}
          <FilterOptionName>{option.name}</FilterOptionName>
        </FilterOption>
      ))}
    </FilterOptionsWrapper>
  );
};

export default FilterOptions;
