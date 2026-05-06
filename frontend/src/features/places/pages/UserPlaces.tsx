import type { Place } from "../../../shared/types/place";
import PlaceList from "../components/PlaceList";
import empireStateBuildingImg from "/empireStateBuilding.jpg";
import { useParams } from "react-router-dom";

const DUMMY_PLACES: Place[] = [
  {
    id: 'p1',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    image: empireStateBuildingImg,
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
    image: empireStateBuildingImg,
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