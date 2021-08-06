import Image from "next/image";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[40">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
}

export default Banner;
