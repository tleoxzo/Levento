export const getUserIdFromLocalStorage = (): string | null => {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("userId");
};


export const setUserIdFromLocalStorage = (userId: string) => {
  if (typeof window === "undefined") return null;
  localStorage.setItem("userId", userId);
};
