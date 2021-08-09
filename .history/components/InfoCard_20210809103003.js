import Image from "next/image";
import { HearIcon } from "@heroicons/react/outline";
import {StarIcon} from 

function InfoCard({ img, title, description, location, star, price, total }) {
  return (
    <div>
      <div className="relative h-24 w-40 md:h-52 md:w-90 flex-shrink-0">
        <Image src={img} layout="fill" objectFit="cover" />
      </div>
      <div>
        <div>
          <p>{location}</p>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
