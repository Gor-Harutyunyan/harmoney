export type Option = {
  id: number;
  name: string;
  alwaysShow?: boolean;
  show: boolean;
  value: string;
};

export type ChangeOptions = React.Dispatch<React.SetStateAction<Option[]>>;
