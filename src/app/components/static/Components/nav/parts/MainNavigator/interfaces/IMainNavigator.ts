export interface IMainNavigator {
  loggedIn: boolean;
  showHome: (val: 'y' | 'n') => void;
  showCommunity: (val: 'y' | 'n') => void;
}
