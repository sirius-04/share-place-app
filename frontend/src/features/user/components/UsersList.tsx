import type { User } from "../../../types/user";
import UserItem from "./UserItem";
import Card from "../../../shared/components/ui/Card";

type UsersListProps = {
  users: User[],
};

export default function UsersList({ users }: UsersListProps) {
  return (
    (users && users.length <= 0) ? (
      <Card className="w-[40rem] text-center bg-olive-200">
        <h2>No users found.</h2>
      </Card>
    ) : (
      <ul className="w-[90%] max-w-[50rem] flex flex-col items-center">
        {users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </ul>
    )
  );
}
