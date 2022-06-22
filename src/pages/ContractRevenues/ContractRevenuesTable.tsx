import { Dropdown } from "antd";
import type { ColumnsType } from "antd/lib/table";
import { useMemo } from "react";
import Dots from "../../icons/Dots";
import { Option } from "../../interfaces/viewOptions";
import { StyledTable } from "./style";

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
    title: "Company Name",
    dataIndex: "companyName",
    key: "companyName",
    sorter: (a, b) => a.companyName - b.companyName,
    width: 100,
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
    sorter: (a, b) => a.category - b.category,
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
    title: "Status",
    dataIndex: "status",
    key: "status",
    width: 44,
    sorter: (a, b) => a.status - b.status,
    // fixed: "right",
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

const ContractRevenuesTable = ({
  viewOptions,
  data,
}: {
  viewOptions: Option[];
  data: any;
}) => {
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
