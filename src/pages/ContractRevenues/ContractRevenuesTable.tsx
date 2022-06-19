import { Dropdown } from "antd";
import type { ColumnsType } from "antd/lib/table";
import { useMemo } from "react";
import Dots from "../../icons/Dots";
import { Option } from "../../interfaces/viewOptions";
import { StyledTable } from "./style";

type DataType = {
  key: number;
  name: string;
  number: number;
  partnerCompany: string;
  type: string;
  totalRevenue: number;
  creationDate: string;
  startDate: string;
  endDate: string;
  id: number;
};

const columns: ColumnsType<Record<string, any>> = [
  {
    title: "ID",
    width: 50,
    dataIndex: "id",
    key: "id",
    fixed: "left",
    sorter: (a, b) => a.id - b.id,
    render: (id) => <span style={{ color: "#0D62EE" }}>{id}</span>,
  },
  {
    title: "Name",
    width: 90,
    dataIndex: "name",
    key: "name",
    fixed: "left",
    sorter: (a, b) => a.name - b.name,
  },
  {
    title: "Number",
    dataIndex: "number",
    key: "nummber",
    sorter: (a, b) => a.number - b.number,
    width: 100,
  },
  {
    title: "Partner Company",
    dataIndex: "partnerCompany",
    key: "partnerCompany",
    sorter: (a, b) => a.partnerCompany - b.partnerCompany,
    width: 100,
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
    sorter: (a, b) => a.type - b.type,
    width: 100,
  },
  {
    title: "Total Revenue",
    dataIndex: "totalRevenue",
    key: "totalRevenue",
    sorter: (a, b) => a.totalRevenue - b.totalRevenue,
    width: 100,
  },
  {
    title: "Creation Date",
    dataIndex: "creationDate",
    key: "creationDate",
    sorter: (a, b) => a.creationDate - b.creationDate,
    width: 70,
  },
  {
    title: "Start Date",
    dataIndex: "startDate",
    key: "startDate",
    sorter: (a, b) => a.startDate - b.startDate,
    width: 70,
  },
  {
    title: "End Date",
    dataIndex: "endDate",
    key: "endDate",
    sorter: (a, b) => a.endDate - b.endDate,
    width: 70,
  },
  {
    title: "",
    dataIndex: "action",
    key: "action",
    width: 44,
    render: () => (
      <Dropdown overlay={<div>asads</div>}>
        <span
          style={{ padding: "18px 14px", color: "#949CB0", cursor: "pointer" }}
        >
          <Dots />
        </span>
      </Dropdown>
    ),
    // fixed: "right",
  },
];

const data: DataType[] = [];
for (let i = 0; i < 10; i++) {
  data.push({
    key: i,
    name: `Name ${i}`,
    number: i,
    partnerCompany: "Securiteam",
    type: "Hourly rate",
    totalRevenue: i * 1000,
    creationDate: "25. 05. 2022",
    startDate: "25. 05. 2022",
    endDate: "25. 05. 2022",
    id: i,
  });
}

const ContractRevenuesTable = ({ viewOptions }: { viewOptions: Option[] }) => {
  const filteredColumns = useMemo(() => {
    return columns.filter((column: any) =>
      viewOptions.find(
        (option) =>
          (option.value === column.dataIndex && option.show) ||
          column.dataIndex === "action"
      )
    );
  }, [viewOptions]);

  return (
    <StyledTable
      columns={filteredColumns}
      dataSource={data}
      scroll={{ x: 1600, y: 514 }}
      pagination={false}
      bordered
      rowSelection={{ type: "checkbox" }}
    />
  );
};

export default ContractRevenuesTable;

// 100vh - 56px - 32px - 52px - 36px - 90px - 68px - 93px
// calc("100vh - 56px - 32px - 52px - 36px - 90px - 68px - 93px")
