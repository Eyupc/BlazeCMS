import { IMain } from "./IMain";

export function Main({ child }: IMain) {
  return (
    <div className="content mt-2 mb-2">
      <div className="section">{child}</div>
    </div>
  );
}
