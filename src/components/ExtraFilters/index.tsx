import Categories from "../../icons/Categories";
import Clock from "../../icons/Clock";
import PartnerCompanies from "../../icons/PartnerCompanies";
import RevenueRange from "../../icons/RevenueRange";
import Date from "../../icons/Date";
import { ExtraFiltersWrapper } from "./style";
import ExtraFilter from "./ExtraFilter";

const FILTER_OPTIONS = [
  {
    id: 0,
    name: "Category",
    icon: <Categories />,
    value: "category",
    type: "select",
  },
  {
    id: 1,
    name: "Company Name",
    icon: <PartnerCompanies />,
    value: "companyName",
    type: "select",
  },
  {
    id: 2,
    name: "Status",
    icon: <PartnerCompanies />,
    value: "status",
    type: "select",
  },
  {
    id: 3,
    name: "Total Revenue Range",
    icon: <RevenueRange />,
    value: "totalRevRange",
    type: "range",
  },
  {
    id: 4,
    name: "Creation Date",
    icon: <Clock />,
    value: "creationDate",
    type: "date",
  },
  {
    id: 5,
    name: "Start Date",
    icon: <Date />,
    value: "startDate",
    type: "date",
  },
  {
    id: 6,
    name: "End Date",
    icon: <Date />,
    value: "endDate",
    type: "date",
  },
];

const ExtraFilters = ({
  extraFilterOptions,
  extraFiltersToShow,
  extraFiltersOptionsSelected,
  changeExtraFiltersOptionsSelected,
}: {
  extraFilterOptions: Record<string, Set<unknown>>;
  extraFiltersToShow: Set<string>;
  extraFiltersOptionsSelected: Record<string, Set<unknown>>;
  changeExtraFiltersOptionsSelected: any;
}) => {
  return (
    <ExtraFiltersWrapper>
      {FILTER_OPTIONS.map((option) => {
        return (
          extraFiltersToShow.has(option.value) && (
            <ExtraFilter
              option={option}
              key={option.id}
              dropdownOptions={extraFilterOptions[option.value] || []}
              selectedOptions={extraFiltersOptionsSelected[option.value]}
              changeExtraFiltersOptionsSelected={
                changeExtraFiltersOptionsSelected
              }
            />
          )
        );
      })}
    </ExtraFiltersWrapper>
  );
};

export default ExtraFilters;
