import Image from "next/image";

function Header() {
  return (
    <header>
      <div>
        <Image src="https://links.papareact.com/qd3" 
        layout="fill"
        objectFit="contain" />
      </div>
      <div></div>
      <div></div>
    </header>
  );
}

export default Header;
