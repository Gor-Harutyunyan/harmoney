import { Dropdown } from "antd";
import Export from "../../icons/Export";
import Menu from "../../icons/Menu";
import Plus from "../../icons/Plus";
import SearchIcon from "../../icons/Search";
import { ChangeOptions, Option } from "../../interfaces/viewOptions";
import StyledButton from "../StyledButton";
import ViewOptions from "../ViewOptions";
import { Search, TableFiltersWrapper, FlexWrapper } from "./style";

type Props = {
  viewOptions: Option[];
  setViewOptions: ChangeOptions;
};

const TableFilters = ({ viewOptions, setViewOptions }: Props) => {
  return (
    <TableFiltersWrapper>
      <Search placeholder="Search..." prefix={<SearchIcon color="#828A96" />} />
      <FlexWrapper>
        <StyledButton>
          <>
            <Plus color="#949CB0" />
            Add Contract
          </>
        </StyledButton>
        <StyledButton>
          <>
            <Export color="#949CB0" />
            Export
          </>
        </StyledButton>
        <Dropdown
          trigger={["click"]}
          overlay={
            <ViewOptions
              viewOptions={viewOptions}
              setViewOptions={setViewOptions}
            />
          }
          placement="bottom"
          arrow={{ pointAtCenter: true }}
        >
          <span>
            <StyledButton>
              <>
                <Menu color="#949CB0" />
              </>
            </StyledButton>
          </span>
        </Dropdown>
      </FlexWrapper>
    </TableFiltersWrapper>
  );
};

export default TableFilters;
