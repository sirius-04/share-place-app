import UsersList from "../components/UsersList";
import type { User } from "../../../types/user";

const DUMMY_USERS: User[] = [
    { id: 'u1', name: 'Sirius', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaWsXo5F85kRoO71djabY5zrLTeWKDnR9l7w&s', placesCount: 3 },
    { id: 'u2', name: 'Dumbledore', image: 'https://mayangateway.com/wp-content/uploads/2021/04/san-blass-island-panama-central-america.jpg', placesCount: 6 },
    { id: 'u3', name: 'Snape', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS-r17BM-Yus-RJi6tgl7-H_mL_5cxavfvZA&s', placesCount: 1 },
  ];

export default function Users() {
  return (
    <div className="flex justify-center">
      <UsersList users={DUMMY_USERS} />
    </div>
  );
}
