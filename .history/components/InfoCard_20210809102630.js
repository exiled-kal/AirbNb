import Image from "next/image";

function InfoCard({ img, title, description, location, star, price, total }) {
  return (
    <div>
      <div className="relative h-24 w-40 md:h-52 md:w-90 fle">
        <Image src={img} layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}

export default InfoCard;
