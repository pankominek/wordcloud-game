import { FieldError, UseFormRegister, Path } from "react-hook-form";

export interface IFormValues {
  nickname: string;
}

export type InputProperties = {
  label: Path<IFormValues>;
  placeholder: string;
  register: UseFormRegister<IFormValues>;
  error: FieldError | undefined;
};
