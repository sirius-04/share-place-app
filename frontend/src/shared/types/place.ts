export type Place = {
  id: string,
  title: string,
  description: string,
  address: string,
  image: string,
  coordinates: {
    longitude: number,
    latitude: number,
  },
  creatorId: string,
};
