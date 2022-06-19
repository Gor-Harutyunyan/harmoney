import { Route, Routes } from "react-router-dom";
import ContractCost from "../ContractCost";
import ContractRevenues from "../ContractRevenues";
import ContractProfitability from "../ContractProfitability";
import Dashboard from "../Dashboard";
import Home from "../Home";
import PartnerCompanies from "../PartnerCompanies";

const Pages = () => {
  return (
    <div
      style={{
        padding: "34px 36px",
        flex: "1",
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="contract-revenues" element={<ContractRevenues />} />
        <Route path="contract-costs" element={<ContractCost />} />
        <Route
          path="contract-profitability"
          element={<ContractProfitability />}
        />
        <Route path="client-base" element={<PartnerCompanies />} />
        <Route path="settings" element={<div>Settings</div>} />
      </Routes>
    </div>
  );
};

export default Pages;
