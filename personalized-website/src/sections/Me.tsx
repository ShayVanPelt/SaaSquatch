import { HiDownload } from "react-icons/hi";

export const Me = () => {
  return (
    <div id="me" className="py-14 md:py-20 lg:py-24">
      <div className="container">
        <div className=" mx-auto text-center">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-center mt-2 tracking-wide">
            Why me?
          </h1>
          <p className="mt-4 text-center md:text-lg lg:text-xl text-white/80">
            As a fourth-year Software Engineering student at the University of
            Victoria, I bring solid front-end development experience to the
            table. I have used React in numerous school group projects and
            recently built a portfolio website using Next.js and TailwindCSS
            (shayvanpelt.com)—the same stack this site is built with!
            Admittedly, I reused some components between projects.
          </p>
          <p className="mt-4 text-center md:text-lg lg:text-xl text-white/80">
            Programming has been a passion of mine for over eight years, both in
            and outside of school, and I consistently strive for perfection in
            my work. I am highly detail-oriented and pride myself on my ability
            to collaborate effectively with teammates and co-workers.
            Additionally, I have experience with UX/UI tools like Figma, further
            enhancing my ability to create user-friendly, visually appealing
            designs. I am confident that I can make meaningful contributions to
            your team.
          </p>
        </div>
      </div>
    </div>
  );
};
