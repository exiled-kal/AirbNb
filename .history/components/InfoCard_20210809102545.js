import Image from "next/image";

function InfoCard({ img, title, description, location, star, price, total }) {
  return (
    <div>
      <div className="relative">
        <Image src={img} layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}

export default InfoCard;
