import Image from "next/image";

function InfoCard({ img, title, description, location, star, price, total }) {
  return (
    <div>
      <div>
        <Image src={image} />
      </div>
    </div>
  );
}

export default InfoCard;
