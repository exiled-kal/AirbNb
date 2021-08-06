import Image from "next/image";

function SmallCard({ img, location, distance }) {
  return (
    <div>
      <div>
        <Image src={img} />
      </div>
    </div>
  );
}

export default SmallCard;
