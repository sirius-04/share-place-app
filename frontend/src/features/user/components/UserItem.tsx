import type { User } from "../../../shared/types/user";
import Avatar from "../../../shared/components/ui/Avatar";
import Card from "../../../shared/components/ui/Card";
import { Link } from "react-router-dom";

type UserItemProps = {
  user: User,
}

export default function UserItem({ user }: UserItemProps) {
  return (
    <li className="w-[calc(60%-2rem)] min-w-[17.5rem]">
      <Card className="m-2 bg-neutral-200">
        <Link to={`/${user.id}/places`} className="flex items-center w-full h-full p-1 no-underline">
          <div className="w-[4rem] h-[4rem] mr-[1rem]">
            <Avatar image={user.image} alt={user.name}  />
          </div>

          <div className="ml-[1rem]">
            <h2 className="text-[1.5rem]">{user.name}</h2>
            <h3 className="text-[.8rem] text-gray-500 m-0 italic">{user.placesCount} {user.placesCount > 1 ? 'Places' : 'Place'}</h3>
          </div>        
        </Link>
      </Card>
    </li>
  );
}
