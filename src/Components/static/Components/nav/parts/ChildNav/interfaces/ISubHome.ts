export interface ISubHome {
  homeActive: 'y' | 'n';
  showSub: (val: 'y' | 'n') => void;
  username: string;
  avatar: string;
}
