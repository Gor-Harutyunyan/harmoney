import { Divider } from "antd";
import Eye from "../../icons/Eye";
import EyeClosed from "../../icons/EyeClosed";
import ViewOptionIcon from "../../icons/ViewOption";
import { ChangeOptions, Option } from "../../interfaces/viewOptions";
import {
  ViewOptionsWrapper,
  ViewOptionsHeading,
  DefaultView,
  OptionsSection,
  OptionsSectionHeading,
  OptionsSectionHeadingLeft,
  OptionsSectionHeadingRight,
  OptionsSectionOptions,
  ViewOption,
  ViewOptionLeft,
} from "./style";

type Props = {
  viewOptions: Option[];
  setViewOptions: ChangeOptions;
};

const ViewOptions = ({ viewOptions, setViewOptions }: Props) => {
  const handleOptionClick = (option: Option) => {
    setViewOptions((prevOptions: Option[]) => {
      const optionsCopy = [...prevOptions];
      const clickedOptionIndex = optionsCopy.findIndex(
        (prev) => prev.id === option.id
      );

      const clickedOption = optionsCopy[clickedOptionIndex];

      if (!clickedOption.alwaysShow) {
        const newOption = {
          ...clickedOption,
          show: !clickedOption.show,
        };

        optionsCopy.splice(clickedOptionIndex, 1, newOption);
      }

      return optionsCopy;
    });
  };

  const handleAllClick = (showAll: boolean) => {
    setViewOptions((prevOptions) =>
      prevOptions.map((option) => {
        const optionCopy = { ...option };
        if (!optionCopy.alwaysShow) {
          optionCopy.show = showAll;
        }

        return optionCopy;
      })
    );
  };

  return (
    <ViewOptionsWrapper>
      <ViewOptionsHeading>View Option</ViewOptionsHeading>
      <DefaultView>Default View</DefaultView>
      <Divider style={{ color: "#F5F5F5", marginBottom: "16px" }} />
      <OptionsSection>
        <OptionsSectionHeading>
          <OptionsSectionHeadingLeft>Shown</OptionsSectionHeadingLeft>
          <OptionsSectionHeadingRight onClick={() => handleAllClick(false)}>
            Hide All
          </OptionsSectionHeadingRight>
        </OptionsSectionHeading>
        <OptionsSectionOptions>
          {viewOptions.map((option) => {
            return (
              option.show && (
                <ViewOption
                  onClick={() => handleOptionClick(option)}
                  key={option.id}
                >
                  <ViewOptionLeft>
                    <ViewOptionIcon />
                    {option.name}
                  </ViewOptionLeft>
                  {!option.alwaysShow && <Eye />}
                </ViewOption>
              )
            );
          })}
        </OptionsSectionOptions>
      </OptionsSection>
      <Divider style={{ color: "#F5F5F5", margin: "8px 0 16px" }} />
      <OptionsSection>
        <OptionsSectionHeading>
          <OptionsSectionHeadingLeft>Hidden</OptionsSectionHeadingLeft>
          <OptionsSectionHeadingRight onClick={() => handleAllClick(true)}>
            Show All
          </OptionsSectionHeadingRight>
        </OptionsSectionHeading>
        <OptionsSectionOptions>
          {viewOptions.map((option) => {
            return (
              !option.show && (
                <ViewOption
                  onClick={() => handleOptionClick(option)}
                  key={option.id}
                >
                  <ViewOptionLeft>
                    <ViewOptionIcon />
                    {option.name}
                  </ViewOptionLeft>
                  {!option.alwaysShow && <EyeClosed />}
                </ViewOption>
              )
            );
          })}
        </OptionsSectionOptions>
      </OptionsSection>
    </ViewOptionsWrapper>
  );
};

export default ViewOptions;
