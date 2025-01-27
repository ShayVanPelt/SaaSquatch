import Link from "next/link";

export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-20">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <Link
          href="#home"
          className="nav-item hover:text-lime-400 hover:scale-105"
        >
          Welcome
        </Link>
        <Link
          href="#why"
          className="nav-item hover:text-lime-400 hover:scale-105"
        >
          Why Impact?
        </Link>
        <Link
          href="#me"
          className="nav-item hover:text-lime-400 hover:scale-105"
        >
          Why Me?
        </Link>
        <Link
          href="#thankyou"
          className="nav-item hover:text-lime-400 hover:scale-105"
        >
          Thank you!
        </Link>
        <Link
          href="#contact"
          className="nav-item hover:text-lime-400 hover:scale-105"
        >
          Contact
        </Link>
      </nav>
    </div>
  );
};
