import Image from "next/image";

function SmallCard({ img, location, distance }) {
  return (
    <div>
      <div className="relative h">
        <Image src={img} layout="fill" />
      </div>
    </div>
  );
}

export default SmallCard;
