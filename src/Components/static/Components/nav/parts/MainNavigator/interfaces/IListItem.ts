export interface IListItem {
  name: string;
  menuName: string;
  title: string;
  Update?: (val: 'y' | 'n') => void;
  Click?: () => void;
  Link?: string;
}
