export interface ILeaderUserBox {
  username: string;
  avatar: string;
  amount: number;
  type: 'duckets' | 'credits' | 'diamonds' | 'achievement_score';
}
