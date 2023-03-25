export interface ILeaderboardsBox {
  title: string;
  type: 'duckets' | 'credits' | 'diamonds' | 'achievement_score';
  data: { username: string; avatar: string; amount: number }[];
}
