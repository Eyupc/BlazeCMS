import { memo } from "react";
import { IMain } from "./IMain";

export const Main = memo(({ child }: IMain) => {
  return (
    <div className="content mt-2 mb-2">
      <div className="section">{child}</div>
    </div>
  );
});
