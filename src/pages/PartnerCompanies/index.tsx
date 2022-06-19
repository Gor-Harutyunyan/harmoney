import TableFilters from "../../components/TableFilters";
import PartnerCompaniesTable from "./PartnerCompaniesTable";
import {
  PartnerCompaniesMain,
  PartnerCompaniesPagination,
  PartnerCompaniesWrapper,
  StyledHr,
} from "./style";

const PartnerCompanies = () => {
  return (
    <PartnerCompaniesWrapper>
      <PartnerCompaniesMain>
        {/* <TableFilters /> */}
        <StyledHr />
        <PartnerCompaniesTable />
      </PartnerCompaniesMain>
      <PartnerCompaniesPagination>Pagination</PartnerCompaniesPagination>
    </PartnerCompaniesWrapper>
  );
};

export default PartnerCompanies;
