import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { IFormValues } from "../types";
import { useProfileState } from "../context/ProfileContext";
import Button from "../components/Button";
import InputField from "../components/InputField";

function Welcome() {
  const profileState = useProfileState();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    profileState.addNameToProfile(data.nickname);
    navigate("/game");
  };

  return (
    <>
      <h1 className="text-3xl lg:text-6xl mb-5">Wordcloud game</h1>
      {profileState.profile.name}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col lg:w-full"
      >
        <InputField
          label="nickname"
          placeholder="Enter your nickname here..."
          register={register}
          error={errors["nickname"]}
        />
        <Button type="submit" text="play" />
      </form>
    </>
  );
}

export default Welcome;
