import { HiDownload } from "react-icons/hi";

export const ThankYou = () => {
  return (
    <div id="thankyou" className="py-14 md:py-20 lg:py-24">
      <div className="container">
        <div className=" mx-auto text-center">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-center mt-2 tracking-wide">
            Thank You!
          </h1>
          <p className="mt-4 text-center md:text-lg lg:text-xl text-white/80">
            Thank you for considering my application. Please let me know if
            there’s anything else I can provide, such as references. I look
            forward to discussing how I can support your goals while continuing
            to learn from the best in the industry.
          </p>
          <p className="mt-4 text-center md:text-lg lg:text-xl text-white/80">
            Warm regards,
          </p>
          <p className="mt-4 text-center md:text-lg lg:text-xl text-white/80">
            Shay Van Pelt
          </p>
        </div>
      </div>
    </div>
  );
};
