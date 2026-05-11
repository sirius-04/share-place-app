import type { Place } from "../../../shared/types/place";
import PlaceList from "../components/PlaceList";
import Card from "@/shared/components/ui/Card";
import { Button } from "@/components/ui/button";
import empireStateBuildingImg from "/empireStateBuilding.jpg";
import { useParams, Link } from "react-router-dom";

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
      {userPlaces.length > 0 ? (
        <PlaceList places={userPlaces} />
      ) : (
        <Card className="flex flex-col justify-center items-center p-3">
            <h2 className="mb-2">No places found. Maybe create one?</h2>
            <Link to='/places/new'><Button>Share place</Button></Link>
        </Card>
      )}
    </div>
  );
}