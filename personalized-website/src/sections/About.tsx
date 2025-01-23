import { HiDownload } from "react-icons/hi";

export const Welcome = () => {
  return (
    <div id="home" className="py-32 md:py-48 lg:py-60">
      <div className="container">
        <div className="max-w-lg mx-auto text-center">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-center mt-2 tracking-wide">
            Welcome, impact.com Team!
          </h1>
          <p className="mt-4 text-center md:text-md lg:text-lg text-white/80">
            I'm Shay Van Pelt, and I'm thrilled to apply for the Frontend
            Software Engineer Co-op role for Summer 2025."
          </p>
        </div>
      </div>
    </div>
  );
};
