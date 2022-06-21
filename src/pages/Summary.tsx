import { useProfileState } from "../context/ProfileContext";

function Summary() {
  const profileState = useProfileState();

  return (
    <>
      <h2>Congratulations, {profileState.profile.name}!</h2>
      <p>
        Your score:
        <span className="text-blue-500 flex justify-center">
          {`${profileState.profile.score}  ${
            profileState.profile.score !== 1 ? "points" : "point"
          }`}
        </span>
      </p>
    </>
  );
}

export default Summary;
