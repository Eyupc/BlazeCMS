export interface IStaffMenu {
  setRank: (num: number) => void;
  currentRank: number;
  ranks: { id: number; rank_name: string }[];
}
