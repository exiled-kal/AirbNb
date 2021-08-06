import Image from "next/image";

function SmallCard({ img, location, distance }) {
  return (
    <div>
      <div className="relative"></div>
        <Image src={img} layout="fill" />
      </div.relative>
    </div>
  );
}

export default SmallCard;
