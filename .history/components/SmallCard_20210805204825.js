import Image from "next/image";

function SmallCard({ img, location, distance }) {
  return (
    <div>
      <div className="relative h-16 w-16 ">
        <Image src={img} layout="fill" className="rounded-lg"/>
      </div>
      
    </div>
  );
}

export default SmallCard;
