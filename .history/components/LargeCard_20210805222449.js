import Image from "next/image";

function LargeCard({ img, title, description, buttonText }) {
  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image
          className="rounded-2xl"
          src={img}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="absolute top-32 left-12">
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="bg-black text-white rounded-md">
          {buttonText}
        </button>
      </div>
    </section>
  );
}

export default LargeCard;
