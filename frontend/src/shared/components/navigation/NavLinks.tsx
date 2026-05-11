import { useAuth } from "@/features/auth/context/useAuth";
import { NavLink } from "react-router-dom";

export default function NavLinks() {
  const { isLoggedIn, logout } = useAuth();

  return (
    <ul className="m-0 p-0 w-full h-full flex justify-center items-center">
      <li className="m-[.5rem]">
        <NavLink className="text-white hover:text-slate-300" to="/" end>
          ALL USERS
        </NavLink>
      </li>

      {isLoggedIn && (
        <li className="m-[.5rem]">
          <NavLink className="text-white hover:text-slate-300" to="/places/u1">
            MY PLACES
          </NavLink>
        </li>        
      )}

      {isLoggedIn && (
        <li className="m-[.5rem]">
          <NavLink className="text-white hover:text-slate-300" to="/places/new">
            NEW PLACE
          </NavLink>
        </li>        
      )}

      {!isLoggedIn ? (
        <li className="m-[.5rem]">
          <NavLink className="text-white hover:text-slate-300" to="/auth/sign-in">
            AUTHENTICATE
          </NavLink>
        </li>        
      ) : (
        <li className="m-[.5rem]">
          <button className="text-red-300 cursor-pointer" onClick={logout}>
            LOGOUT
          </button>
        </li>   
      )}
    </ul>
  );
}
