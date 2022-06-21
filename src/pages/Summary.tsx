function Summary() {
  const name = "tommy";
  const score = 0 + 1;

  return (
    <>
      <h2>Congratulations, {name}!</h2>
      <p>
        Your score:
        <span className="text-blue-500 flex justify-center">
          {`${score}  ${score !== 1 ? "points" : "point"}`}
        </span>
      </p>
    </>
  );
}

export default Summary;
