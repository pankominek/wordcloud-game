import { InputProperties } from "../types";

function InputField({ label, placeholder, error, register }: InputProperties) {
  return (
    <fieldset>
      <input
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
          error?.type === "required" ? "border-red-500 mb-1" : "mb-5"
        }`}
        placeholder={placeholder}
        {...register(label, { required: "This input is required." })}
      />
      {error?.message && (
        <p className="text-red-500 text-xs italic">{error?.message}</p>
      )}
    </fieldset>
  );
}

export default InputField;
