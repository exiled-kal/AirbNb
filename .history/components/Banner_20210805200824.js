import Image from "next/image";

function Banner() {
  return (
    <div className="relative h-">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
}

export default Banner;
