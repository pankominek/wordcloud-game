import { useForm, SubmitHandler } from "react-hook-form";
import { IFormValues } from "../types";
import Main from "../layouts/Main";
import Button from "../components/Button";
import InputField from "../components/InputField";

function Welcome() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = (data) => console.log(data);

  return (
    <Main>
      <h1 className="text-3xl text-center mb-5">Wordcloud game</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <InputField
          label="nickname"
          placeholder="Enter your nickname here..."
          register={register}
          error={errors["nickname"]}
        />
        <Button type="submit" text="play" />
      </form>
    </Main>
  );
}

export default Welcome;
