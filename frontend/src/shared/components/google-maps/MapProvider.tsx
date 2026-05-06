import { APIProvider } from "@vis.gl/react-google-maps";

type MapProviderProps = {
  children: React.ReactNode,
}

export default function MapProvider({ children }: MapProviderProps) {
  const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_DEMO_API_KEY;

  return (
    <APIProvider apiKey={googleMapsApiKey}>
      {children}
    </APIProvider>
  );
}