import Image from "next/image";

function Header() {
  return (
    <header>
      <div className="relative flex items-center h-10">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      <div></div>
      <div></div>
    </header>
  );
}

export default Header;
