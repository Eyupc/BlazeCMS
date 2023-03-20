import { ChangeEvent, memo, useState } from "react";
import { IRegisterOption } from "../interfaces/IRegisterOption";

export const RegisterOption = memo(
  ({ title, description, getOption }: IRegisterOption) => {
    console.log("test");
    return (
      <>
        <b>{title}</b>
        <em>{description}</em>
        <div className="birthday">
          <select
            name="day"
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              getOption(e.target.value as "M" | "F")
            }
            className="register-i birthday-select"
          >
            <option value="M">Erkek</option>
            <option value="F">Kiz</option>é
          </select>
        </div>
      </>
    );
  }
);
