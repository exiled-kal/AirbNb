import Image from "next/image";

function LargeCard({ img, title, description, buttonText }) {
  return (
    <section>
      <div>
        <Image src={img} layout='/>
      </div>
      <div></div>
    </section>
  );
}

export default LargeCard;
