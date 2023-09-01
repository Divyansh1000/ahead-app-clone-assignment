import Image from "next/image";

const Navbar = () => {
  return (
    <header className="w-full sticky top-0  z-50   bg-white px-28">
      <nav className="flex justify-between items-center px-20 my-8">
        <a href="/">
          <Image src="/logo.png" alt="logo" width={70} height={90} />
        </a>

        <div className="flex items-center gap-16">
          <a href="#banner1">Emotions</a>
          <a href="#banner2">Manifesto</a>
          <a href="#banner3">Self-awareness test</a>
          <a href="#banner4">Work With Us</a>
        </div>

        <a
          className="bg-black text-white w-32 p-3 rounded-3xl text-center "
          href="http://google.com"
        >
          <button>Download</button>
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
