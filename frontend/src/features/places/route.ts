import NewPlace from "./pages/NewPlace";
import UserPlaces from "./pages/UserPlaces";

export const placesRoute = {
  path: 'places',
  children: [
    { path: 'new', Component: NewPlace },
    { path: ':userId', Component: UserPlaces },
  ],
}
