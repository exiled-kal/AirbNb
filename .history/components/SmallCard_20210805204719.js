import Image from "next/image";

function SmallCard({ img, location, distance }) {
  return (
    <div>
      <div className="relative h-16 w -16">
        <Image src={img} layout="fill" />
      </div>
    </div>
  );
}

export default SmallCard;
