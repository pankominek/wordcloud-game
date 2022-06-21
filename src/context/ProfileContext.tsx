import { useState, createContext, ReactNode, useContext } from "react";

interface UserProfile {
  name: string;
  score: number;
}

interface ProfileState {
  profile: UserProfile;
  addNameToProfile: (name: string) => void;
  addScoreToProfile: (score: number) => void;
}

export const ProfileStateContext = createContext<ProfileState | null>(null);

export const ProfileStateContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [userProfile, setUserProfile] = useState<UserProfile>({
    name: "",
    score: 0,
  });

  return (
    <ProfileStateContext.Provider
      value={{
        profile: userProfile,
        addNameToProfile: (name) => {
          setUserProfile({ name, score: 0 });
        },
        addScoreToProfile: (score) => {
          setUserProfile((prev) => ({ ...prev, score }));
        },
      }}
    >
      {children}
    </ProfileStateContext.Provider>
  );
};

export const useProfileState = () => {
  const profileState = useContext(ProfileStateContext);
  if (!profileState) {
    throw new Error("You forgot ProfileStateContextProvider");
  }
  return profileState;
};
