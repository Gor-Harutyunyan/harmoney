import { Pagination } from "antd";
import { useCallback, useState } from "react";
import TableFilters from "../../components/TableFilters";
import ViewFilter from "../../components/ViewFIlter";
import { Option } from "../../interfaces/viewOptions";
import ContractRevenuesTable from "./ContractRevenuesTable";
import {
  ContractRevenuesMain,
  ContractRevenuesPagination,
  ContractRevenuesWrapper,
} from "./style";

const VIEW_OPTIONS: Option[] = [
  {
    id: 0,
    name: "Contract ID",
    alwaysShow: true,
    show: true,
    value: "id",
  },
  {
    id: 1,
    name: "Contract Name",
    show: true,
    value: "name",
  },
  {
    id: 2,
    name: "Contract Number",
    alwaysShow: true,
    show: true,
    value: "number",
  },
  {
    id: 3,
    name: "Contract Partner Company",
    show: true,
    value: "partnerCompany",
  },
  {
    id: 4,
    name: "Contract Type",
    show: true,
    value: "type",
  },
  {
    id: 5,
    name: "Contract Total Revenue",
    alwaysShow: true,
    show: true,
    value: "totalRevenue",
  },
  {
    id: 6,
    name: "Contract Creation date",
    show: true,
    value: "creationDate",
  },
  {
    id: 7,
    name: "Contract Start Date",
    show: false,
    value: "startDate",
  },
  {
    id: 8,
    name: "Contract End Date",
    show: false,
    value: "endDate",
  },
];

const ContractRevenues = () => {
  const [current, setCurrent] = useState(1);
  const [viewOptions, setViewOptions] = useState(VIEW_OPTIONS);
  const [selectedViewOption, setSelectedViewOption] = useState("default");
  const [extraFilters, setExtraFilters] = useState(new Set(""));

  const onChange = (page: number) => {
    console.log(page);
    setCurrent(page);
  };

  const changeViewOptions = useCallback((value: any) => {
    setViewOptions(value);
  }, []);

  const changeExtraFilters = useCallback((value: any) => {
    setExtraFilters(value);
  }, []);

  const changeSelectedViewOption = useCallback((value: any) => {
    setSelectedViewOption(value);
  }, []);

  return (
    <ContractRevenuesWrapper>
      <ContractRevenuesMain>
        <TableFilters
          viewOptions={viewOptions}
          setViewOptions={changeViewOptions}
        />
        <ViewFilter
          selectedViewOption={selectedViewOption}
          setSelectedViewOption={changeSelectedViewOption}
          extraFilters={extraFilters}
          setExtraFilters={changeExtraFilters}
        />
        {/* <StyledHr /> */}
        <ContractRevenuesTable viewOptions={viewOptions} />
      </ContractRevenuesMain>
      <ContractRevenuesPagination>
        {/* <div>1-10 of 120 pages</div>
        <div>The page you are on</div> */}
        <Pagination current={current} onChange={onChange} total={50} />
      </ContractRevenuesPagination>
    </ContractRevenuesWrapper>
  );
};

export default ContractRevenues;
