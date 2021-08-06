import Image from "next/image";

function Header() {
  return (
    <header>
      <div>
        <Image src="https://links.papareact.com/qd3" 
        layout="fill"
        objectFit="contain"
        objectPosition />
      </div>
      <div></div>
      <div></div>
    </header>
  );
}

export default Header;
