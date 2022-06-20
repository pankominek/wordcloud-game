import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { GameData } from "../types";
import Button from "./Button";
import CheckStatus from "./CheckStatus";

interface StateCheckbox {
  [key: string]: Boolean;
}

function GameBoard(props: { data: GameData }): JSX.Element {
  const {
    register,
    handleSubmit,
    getFieldState,
    formState: { isSubmitted, dirtyFields, isDirty },
  } = useForm({
    defaultValues: props.data.all_words.reduce(
      (accumulatedObject, key) => ({
        ...accumulatedObject,
        [key]: false,
      }),
      {} as StateCheckbox
    ),
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <form
      className="flex flex-col items-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <fieldset
        disabled={isSubmitted}
        className="border border-black my-4 p-2 rounded flex flex-wrap justify-around"
      >
        {props.data.all_words.map((item) => (
          <div key={item} className="flex flex-col p-7 mx-10 text-center">
            {isSubmitted && getFieldState(item).isDirty && (
              <CheckStatus status={props.data.good_words.includes(item)} />
            )}
            <input
              id={item}
              {...register(item)}
              type="checkbox"
              className="hidden peer"
            />
            <label
              htmlFor={item}
              className={
                isSubmitted && getFieldState(item).isDirty
                  ? `font-normal cursor-default ${
                      props.data.good_words &&
                      props.data.good_words.includes(item)
                        ? "peer-checked:text-green-500"
                        : "peer-checked:text-red-500"
                    }`
                  : "font-bold cursor-pointer peer-checked:text-gray-500"
              }
            >
              {item}
            </label>
          </div>
        ))}
      </fieldset>
      {isSubmitted ? (
        <Link to="/summary">
          <Button type="button" text="finish game" />
        </Link>
      ) : (
        <Button type="submit" text="check answers" />
      )}
    </form>
  );
}

export default GameBoard;
