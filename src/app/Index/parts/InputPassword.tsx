import { memo } from "react";
import { IInput } from "../interfaces/IInput";

export const InputPassword = memo(({ Change }: IInput) => {
  return (
    <div className="login-password">
      <div className="passico"></div>
      <input
        type="password"
        name="password"
        id="password"
        onChange={(e) => Change(e.currentTarget.value)}
        className="login-i"
        placeholder="Parola"
        required
      />
    </div>
  );
});
