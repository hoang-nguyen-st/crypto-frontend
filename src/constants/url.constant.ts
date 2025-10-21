export const URL = {
  FEED: "/",
  MESSAGES: "/messages",
  CONNECTIONS: "/connections",
  DISCOVER: "/discover",
  PROFILE: "/profile",
  CREATE: "create",
  POST: "post",
  AUTH: "/auth",
  SIGN_IN: "sign-in",
  SIGN_UP: "sign-up",
  FORGOT_PASSWORD: "forgot-password",
  RESET_PASSWORD: "reset-password",
  ADMIN: "/admin",
};

export const CREATE_COMBINATION_TWO_AGRUMENTS = (
  firstValue: string,
  secondValue: string
) => `/${firstValue}/${secondValue}`;
