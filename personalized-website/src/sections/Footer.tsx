const footerlinks = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/shay-van-pelt-273592301/",
  },
  {
    title: "GitHub",
    href: "https://github.com/ShayVanPelt",
  },
];

export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-white/10 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className="border-t border-white/25 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/50">
            Designed & Built by Shay Van Pelt.
          </div>
          <div>
            <nav className="flex flex-col md:flex-row items-center gap-8">
              {footerlinks.map((link) => (
                <a
                  href={link.href}
                  key={link.title}
                  className="inline-flex items-center gap-1.5 text-white hover:text-lime-400 hover:scale-105 transition-all"
                  target="_blank"
                >
                  <span className="font-semibold">{link.title}</span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};
