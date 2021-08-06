import Image from "next/image";

function LargeCard({ img, title, description, buttonText }) {
  return (
    <section>
      <div>
        <Image src={img} layout="fill" objectFit="cover" />
      </div>
      <div></div>
    </section>
  );
}

export default LargeCard;
