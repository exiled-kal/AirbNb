import Image from "next/image";

function InfoCard({ img, title, description, location, star, price, total }) {
  return (
    <div>
      <div>
        <Image src={img} layout="fill" />
      </div>
    </div>
  );
}

export default InfoCard;
