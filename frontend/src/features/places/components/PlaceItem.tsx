import type { Place } from "../../../shared/types/place";
import Card from "../../../shared/components/ui/Card";
import ViewPlaceModal from "./modal/ViewPlaceModal";
import EditPlaceModal from "./modal/EditPlaceModal";

type PlaceItemProps = {
  place: Place,
};

export default function PlaceItem({ place }: PlaceItemProps) {
  return (
    <>
      <li className="my-[1rem] mx-0">
        <Card className="p-0">
          <div className="w-[100%] h-[12.5rem] mr-[1.5rem]">
            <img src={place.image} alt={place.title} className="w-full h-full object-cover" />
          </div>

          <div className="text-center p-[1rem]">
            <h2 className="font-bold text-xl">{place.title}</h2>
            <h3 className="mb-[1rem] font-semibold">{place.address}</h3>
            <p className="mb-[.5rem] text-sm italic">{`"${place.description}"`}</p>
          </div>

          <div className="p-[1rem] text-center border-t border-gray-400">
            <ViewPlaceModal
              Trigger={
                <button className="mx-2 px-4 py-1.5 text-xs font-medium tracking-widest text-slate-500 rounded hover:text-slate-800 hover:bg-slate-100 transition-colors duration-150">
                  VIEW ON MAP
                </button>
              }
              place={place}
            />

            <EditPlaceModal
              Trigger={
                <button className="mx-2 px-4 py-1.5 text-xs font-medium tracking-widest text-slate-500 rounded hover:text-slate-800 hover:bg-slate-100 transition-colors duration-150">
                  EDIT
                </button>
              }
              place={place}
            />

            <button className="mx-2 px-4 py-1.5 text-xs font-medium tracking-widest text-slate-500 rounded hover:text-red-600 hover:bg-red-50 transition-colors duration-150">
              DELETE
            </button>
          </div>
        </Card>
      </li>
    </>
  );
}
