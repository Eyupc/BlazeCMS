export interface ILeaderboardsComponent {
  cr_topList: { username: string; avatar: string; amount: number }[];
  di_topList: { username: string; avatar: string; amount: number }[];
  du_topList: { username: string; avatar: string; amount: number }[];
  as_topList: { username: string; avatar: string; amount: number }[];
}
