import { Map, Marker } from "@vis.gl/react-google-maps"

type MapViewProps = {
  style?: React.CSSProperties,
  coordinates: {
    lat: number,
    lng: number,
  },
  zoom?: number,
  gestureHandling?: string,
  disableDefaultUI?: boolean,
}

export default function MapView({
  style = { width: '100%', height: '100%', paddingTop: '20px' },
  coordinates,
  zoom = 16,
  gestureHandling = 'greedy',
  disableDefaultUI = false,
}: MapViewProps) {
  return (
    <Map
      style={style}
      defaultCenter={coordinates}
      defaultZoom={zoom}
      gestureHandling={gestureHandling}
      disableDefaultUI={disableDefaultUI}
    >
      <Marker position={coordinates} />
    </Map>
  );
}
