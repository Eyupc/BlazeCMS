export interface IInputPassword {
  title: string;
  description?: string;
  name: string;
  onUpdate: (pass: string) => void;
}
