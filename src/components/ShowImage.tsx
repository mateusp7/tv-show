
import Image from "next/image";
import getShow from "../services/getShow";

export const ShowImage = async () => {
  const { show } = await getShow();

  return (
    <Image
      src={show?.Images.Background}
      alt="Video background"
      className="h-full w-full object-cover object-center opacity-40"
      fetchPriority="high"
      priority
      fill
    />
  );
};
