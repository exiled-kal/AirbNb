import Image from "next/image";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

function InfoCard({ img, title, description, location, star, price, total }) {
  return (
    <div>
      <div className="relative h-24 w-40 md:h-52 md:w-90 flex-shrink-0">
        <Image src={img} layout="fill" objectFit="cover" />
      </div>
      <div>
        <div className="flex">
          <p>{location}</p>
          <HearIcon className="h-7 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
