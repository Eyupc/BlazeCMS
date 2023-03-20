export interface IRegisterOption {
  title: string;
  description: string;
  getOption: (arg: "M" | "F") => void;
}
