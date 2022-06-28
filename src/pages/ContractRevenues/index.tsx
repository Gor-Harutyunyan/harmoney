import { Pagination } from "antd";
import { useCallback, useMemo, useState } from "react";
import ExtraFilters from "../../components/ExtraFilters";
import TableFilters from "../../components/TableFilters";
import ViewFilter from "../../components/ViewFIlter";
import { Option } from "../../interfaces/viewOptions";
import ContractRevenuesTable from "./ContractRevenuesTable";
import {
  ContractRevenuesMain,
  ContractRevenuesPagination,
  ContractRevenuesWrapper,
} from "./style";

type DataType = {
  key: number;
  name: string;
  number: number;
  companyName: string;
  category: string;
  totalRevenue: number;
  creationDate: string;
  startDate: string;
  endDate: string;
  id: number;
  status: string;
};

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
    name: "Company Name",
    show: true,
    value: "companyName",
  },
  {
    id: 4,
    name: "Contract Category",
    show: true,
    value: "category",
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
  {
    id: 9,
    name: "Status",
    show: true,
    value: "status",
  },
];

const ContractRevenues = () => {
  const [current, setCurrent] = useState(1);
  const [viewOptions, setViewOptions] = useState(VIEW_OPTIONS);
  const [selectedViewOption, setSelectedViewOption] = useState("default");
  const [extraFiltersToShow, setExtraFiltersToShow] = useState(new Set(""));
  const [extraFiltersOptionsSelected, setExtraFiltersOptionsSelected] =
    useState<Record<string, any>>({
      category: new Set(),
      companyName: new Set(),
      status: new Set(),
      totalRevRange: {
        min: 0,
        max: null,
      },
    });

  const tableData = useMemo(() => {
    const data: DataType[] = [];
    for (let i = 0; i < 10; i++) {
      data.push({
        key: i,
        name: `Name ${i}`,
        number: i,
        companyName: Math.random() > 0.5 ? "Google" : " Securiteam",
        category: Math.random() > 0.5 ? "Other" : "Hourly rate",
        totalRevenue: i * 1000,
        creationDate: "25. 05. 2022",
        startDate: "25. 05. 2022",
        endDate: "25. 05. 2022",
        id: i,
        status: Math.random() > 0.5 ? "active" : "expired",
      });
    }

    return data;
  }, []);

  const extraFiltersOptions = useMemo(() => {
    const category = new Set();
    const companyName = new Set();
    const status = new Set();

    const totalRevenues = tableData.map((item) => item.totalRevenue);
    const revenueRanges = {
      min: Math.min(...totalRevenues),
      max: Math.max(...totalRevenues),
    };

    tableData.forEach((item) => {
      category.add(item.category);
      companyName.add(item.companyName);
      status.add(item.status);
    });

    return {
      category,
      companyName,
      status,
      totalRevRange: revenueRanges,
    };
  }, [tableData]);

  const filteredTableData = useMemo(() => {
    const categorySize = extraFiltersOptionsSelected.category?.size;
    const companyNameSize = extraFiltersOptionsSelected.companyName?.size;
    const statusSize = extraFiltersOptionsSelected.status?.size;
    const totalRangeSelected =
      extraFiltersOptionsSelected.totalRevRange.min !== null &&
      extraFiltersOptionsSelected.totalRevRange.max !== null;

    if (
      !!categorySize ||
      !!companyNameSize ||
      !!statusSize ||
      totalRangeSelected
    ) {
      return tableData.filter((item) => {
        return (
          (categorySize
            ? extraFiltersOptionsSelected.category.has(item.category)
            : true) &&
          (companyNameSize
            ? extraFiltersOptionsSelected.companyName.has(item.companyName)
            : true) &&
          (statusSize
            ? extraFiltersOptionsSelected.status.has(item.status)
            : true) &&
          (totalRangeSelected
            ? extraFiltersOptionsSelected.totalRevRange.min <
                item.totalRevenue &&
              extraFiltersOptionsSelected.totalRevRange.max > item.totalRevenue
            : true)
        );
      });
    }

    return tableData;
  }, [extraFiltersOptionsSelected, tableData]);

  const onChange = (page: number) => {
    console.log(page);
    setCurrent(page);
  };

  const changeViewOptions = useCallback((value: any) => {
    setViewOptions(value);
  }, []);

  const changeExtraFilters = useCallback((value: any) => {
    setExtraFiltersToShow(value);
  }, []);

  const changeSelectedViewOption = useCallback((value: any) => {
    setSelectedViewOption(value);
  }, []);

  const changeExtraFiltersOptionsSelected = useCallback((value: any) => {
    setExtraFiltersOptionsSelected(value);
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
          extraFilters={extraFiltersToShow}
          setExtraFilters={changeExtraFilters}
        />
        <ExtraFilters
          extraFilterOptions={extraFiltersOptions}
          extraFiltersToShow={extraFiltersToShow}
          extraFiltersOptionsSelected={extraFiltersOptionsSelected}
          changeExtraFiltersOptionsSelected={changeExtraFiltersOptionsSelected}
        />
        {/* <StyledHr /> */}
        <ContractRevenuesTable
          viewOptions={viewOptions}
          data={filteredTableData}
        />
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
