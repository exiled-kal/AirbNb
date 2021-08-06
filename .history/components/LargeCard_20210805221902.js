import Image from "next/image";

function LargeCard({ img, title, description, buttonText }) {
  return (
    <section>
      <divcla>
        <Image src={img} layout="fill" objectFit="cover" />
      </divcla>
      <div></div>
    </section>
  );
}

export default LargeCard;
