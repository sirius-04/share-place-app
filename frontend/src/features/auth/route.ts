import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

export const authRoute = {
  path: "auth",
  children: [
    { path: "sign-in", Component: SignInPage },
    { path: "sign-up", Component: SignUpPage },
  ],
};
