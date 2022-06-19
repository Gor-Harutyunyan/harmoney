import type { ColumnsType } from "antd/lib/table";
import React from "react";
import { StyledTable } from "./style";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
  id: number;
}

const columns: ColumnsType<Record<string, any>> = [
  {
    title: "ID",
    width: 100,
    dataIndex: "ids",
    key: "id",
    sorter: (a, b) => a.id - b.id,
    fixed: "left",
  },
  {
    title: "Name",
    width: 100,
    dataIndex: "names",
    key: "name",
    fixed: "left",
  },
  {
    title: "Country",
    dataIndex: "country",
    key: "country",
    width: 150,
  },
  {
    title: "State (Region)",
    dataIndex: "state",
    key: "state",
    width: 150,
  },
  {
    title: "Contact Person",
    dataIndex: "contactPerson",
    key: "contactPerson",
    width: 150,
  },
  {
    title: "Phone Number",
    dataIndex: "phoneNumber",
    key: "phoneNumber",
    width: 150,
  },
  {
    title: "Industry",
    dataIndex: "industry",
    key: "industry",
    width: 150,
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    width: 150,
  },
];

const data: DataType[] = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
    id: i,
  });
}

const PartnerCompaniesTable: React.FC = () => (
  <StyledTable
    columns={columns}
    dataSource={data}
    // scroll={{ x: "auto", y: 450 }}
    pagination={false}
    bordered
  />
);

export default PartnerCompaniesTable;
