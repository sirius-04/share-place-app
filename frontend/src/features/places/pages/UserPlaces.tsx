import type { Place } from "../../../types/place";
import PlaceList from "../components/PlaceList";
import { useParams } from "react-router-dom";

const DUMMY_PLACES: Place[] = [
  {
    id: 'p1',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAEw5KbTxsihCb6pf-n6vxURwAjXszUph1NtTBmAgXc43adVUWZtCNjw5V05-tinTOQJ-F9THziIn0pvQ3UDey-jX3SsrM_8WFKdOnyUIyjyGjrlIMDx9g7z0mmEnTtx3pYkhbZyXQ=w270-h312-n-k-no',
    address: '20 W 34th St, New York, NY 10001',
    coordinates: {
      latitude: 40.7484405,
      longitude: -73.9878584
    },
    creatorId: 'u1'
  },
  {
    id: 'p2',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAEw5KbTxsihCb6pf-n6vxURwAjXszUph1NtTBmAgXc43adVUWZtCNjw5V05-tinTOQJ-F9THziIn0pvQ3UDey-jX3SsrM_8WFKdOnyUIyjyGjrlIMDx9g7z0mmEnTtx3pYkhbZyXQ=w270-h312-n-k-no',
    address: '20 W 34th St, New York, NY 10001',
    coordinates: {
      latitude: 40.7484405,
      longitude: -73.9878584
    },
    creatorId: 'u2'
  }
];

export default function UserPlaces() {
  const { userId } = useParams();
  const userPlaces = DUMMY_PLACES.filter(p => p.creatorId === userId);

  return (
    <div className="flex justify-center">
      <PlaceList places={userPlaces} />
    </div>
  );
}