interface AvatarProps {
  image: string,
  alt: string,
};

export default function Avatar({ image, alt }: AvatarProps) {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <img src={image} alt={alt} className="d-block rounded-full w-full h-full object-cover" />
    </div>
  );
}