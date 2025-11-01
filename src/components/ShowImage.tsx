import Image from "next/image";

interface IShowImageProps {
  image: string;
}

export const ShowImage = ({ image }: IShowImageProps) => {
  return (
    <Image
      src={image}
      alt="Video background"
      className="h-full w-full object-cover object-top opacity-50"
      fetchPriority="high"
      priority
      width={1920}
      height={1080}
    />
  );
};
