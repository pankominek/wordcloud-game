import { useProfileState } from "../context/ProfileContext";

function Summary() {
  const profileState = useProfileState();
  const displayScore =
    profileState.profile.score > 0 ? profileState.profile.score : 0;

  return (
    <>
      <h2 className="font-medium text-2xl">
        Congratulations, {profileState.profile.name}!
      </h2>
      <p className="font-medium text-2xl">
        Your score:
        <span className="text-blue-300 flex justify-center">
          {`${displayScore} ${displayScore !== 1 ? "points" : "point"}`}
        </span>
      </p>
    </>
  );
}

export default Summary;
