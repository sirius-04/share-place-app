import type { User } from "../../../types/user";
import Avatar from "../../../shared/components/ui/Avatar";
import Card from "../../../shared/components/ui/Card";
import { Link } from "react-router-dom";

type UserItemProps = {
  user: User,
}

export default function UserItem({ user }: UserItemProps) {
  return (
    <li className="w-[calc(45%-2rem)] min-w-[17.5rem]">
      <Card className="m-2 bg-olive-200">
        <Link to={`/${user.id}/places`} className="flex items-center w-full h-full p-1 no-underline">
          <div className="w-[4rem] h-[4rem] mr-[1rem]">
            <Avatar image={user.image} alt={user.name}  />
          </div>

          <div className="text-[1.5rem] ml-[.5rem]">
            <h2>{user.name}</h2>
            <h3 className="m-0">{user.placesCount} {user.placesCount > 1 ? 'Places' : 'Place'}</h3>
          </div>        
        </Link>
      </Card>
    </li>
  );
}
