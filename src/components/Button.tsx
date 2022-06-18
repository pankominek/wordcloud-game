interface ButtonProperties
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

function Button({ text, type }: ButtonProperties) {
  return (
    <button
      type={type}
      className="mx-auto bg-transparent hover:bg-blue-300 text-blue-500 hover:text-white py-2 px-10 border border-blue-300 hover:border-transparent rounded"
    >
      {text}
    </button>
  );
}

export default Button;
