import { FieldError, UseFormRegister, Path } from "react-hook-form";

export interface GameData {
  question: string;
  all_words: string[];
  good_words: string[];
}

export interface IFormValues {
  nickname: string;
}

export type InputProperties = {
  label: Path<IFormValues>;
  placeholder: string;
  register: UseFormRegister<IFormValues>;
  error: FieldError | undefined;
};
