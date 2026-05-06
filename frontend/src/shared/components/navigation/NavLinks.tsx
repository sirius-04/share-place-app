import { NavLink } from "react-router-dom";

export default function NavLinks() {
  return (
    <ul className="m-0 p-0 w-full h-full flex justify-center items-center">
      <li className="m-[.5rem]">
        <NavLink className="text-white hover:text-slate-300" to="/" end>
          ALL USERS
        </NavLink>
      </li>
      <li className="m-[.5rem]">
        <NavLink className="text-white hover:text-slate-300" to="/places/u1">
          MY PLACES
        </NavLink>
      </li>
      <li className="m-[.5rem]">
        <NavLink className="text-white hover:text-slate-300" to="/places/new">
          NEW PLACE
        </NavLink>
      </li>
      <li className="m-[.5rem]">
        <NavLink className="text-white hover:text-slate-300" to="/auth">
          AUTHENTICATE
        </NavLink>
      </li>
    </ul>
  );
}
