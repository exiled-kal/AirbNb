import Image from "next/image";

function MediumCard({ img, title }) {
  return (
    <div>
      <div className="relative h-">
        <Image src={img} layout="fill" />
      </div>
    </div>
  );
}

export default MediumCard;
