export interface IRegisterInput {
  title: string;
  description: string;
  type: 'username' | 'email';
  Change: (args: string) => void;
}
