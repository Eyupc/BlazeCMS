export interface ILeaderboardsBox {
  title: string;
  type: string;
  data: { username: string; avatar: string; amount: number }[];
}
