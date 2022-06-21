import Main from "../layouts/Main";

function Summary() {
  const name = "tommy";
  const score = 0 + 1;

  return (
    <Main>
      <h2>Congratulations, {name}!</h2>
      <p>
        Your score:
        <span className="text-blue-500 flex justify-center">
          {`${score}  ${score !== 1 ? "points" : "point"}`}
        </span>
      </p>
    </Main>
  );
}

export default Summary;
