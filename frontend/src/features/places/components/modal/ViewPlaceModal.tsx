import InfoModal from "@/shared/components/ui/modal/InfoModal";
import MapView from "@/shared/components/google-maps/MapView";
import type { Place } from "@/shared/types/place";

interface ViewPlaceModalProps {
  Trigger: React.ReactElement,
  title?: string,
  description?: string,
  place: Place,
};

export default function ViewPlaceModal({ Trigger, title, description, place }: ViewPlaceModalProps) {
  const finalTitle = title ?? place.title;
  const finalDescription = description ?? place.description;
  const coordinates = {
    lat: place.coordinates.latitude,
    lng: place.coordinates.longitude,
  };

  return (
    <InfoModal
      title={finalTitle}
      description={finalDescription}
      Trigger={Trigger}
    >
      <div className="w-full h-[15rem]">
        <MapView
          coordinates={coordinates}
        />
      </div>
    </InfoModal>
  );
}
