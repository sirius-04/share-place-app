import MainHeader from "./MainHeader";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";

export default function MainNavigation() {
  return (
    <MainHeader>
      <h1 className="text-white font-bold">
        <Link to="/">YourPlaces</Link>
      </h1>

      <nav>
        <NavLinks />
      </nav>
    </MainHeader>
  );
}
