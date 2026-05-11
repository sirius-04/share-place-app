import type { Place } from "../../../shared/types/place";
import Card from "../../../shared/components/ui/Card";
import PlaceItem from "./PlaceItem";

interface PlaceListProps {
  places: Place[],
};

export default function PlaceList({ places }: PlaceListProps) {
  return (
    (places && places.length <= 0) ? (
      <Card className="w-[40rem] text-center bg-olive-200">
        <h2>No places found.</h2>
        <button>Share Place</button>
      </Card>
    ) : (
      <ul className="p-0 w-[90%] max-w-[40rem]">
        {places.map(place => (
          <PlaceItem key={place.id} place={place} />
        ))}
      </ul>
    )
  );
}
