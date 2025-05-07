import { useMediaQuery } from "react-responsive";
import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";
import { Rectangle7 } from "../../assets/images";

const Footer = () => {
  // Define breakpoints
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const getGridColumns = () => {
    if (isMobile) return "grid-cols-1";
    if (isTablet) return "grid-cols-2";
    return "grid-cols-4"; // desktop
  };

  return (
    <footer className="relative bg-[#3E3E3E] text-white py-8 px-6 sm:px-10 lg:px-12 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${Rectangle7})` }}
      />

      {/* Footer content */}
      <div className={`relative z-10 max-w-7xl mx-auto grid gap-6 ${getGridColumns()}`}>
        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-2">
            CORPORATE MAILING ADDRESS
          </h2>
          <div className="text-base md:text-lg">
            <p>1100 Peachtree Street</p>
            <p>Suite 200</p>
            <p>Atlanta GA 30309</p>
            <p>United States</p>
          </div>
        </div>

        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-2">TEXT OR CALL</h2>
          <p className="text-base md:text-lg">(888) 355-4336</p>
        </div>

        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-2">PHONE HOURS</h2>
          <p className="text-base md:text-lg">MONDAY - FRIDAY</p>
          <p className="text-base md:text-lg">10AM UNTIL 5PM EST.</p>
        </div>

        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-2">WEBSITE</h2>
          <p className="text-base md:text-lg break-words">elliebathbedandbaby.com</p>
          <h2 className="text-xl md:text-2xl font-semibold mt-4 mb-2">
            CUSTOMER SUPPORT
          </h2>
          <p className="text-base md:text-lg break-words">
            support@elliebathbedandbaby.com
          </p>

          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              className="text-[#0702FF] bg-white rounded-full p-2 hover:text-blue-400"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              className="text-[#0702FF] bg-white rounded-full p-2 hover:text-pink-500"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              className="text-[#0702FF] bg-white rounded-full p-2 hover:text-blue-600"
            >
              <FaFacebookF size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer bottom links */}
      <div className={`relative z-10 text-base md:text-lg text-white text-center mt-8 ${isMobile ? "flex flex-col gap-2" : "flex justify-center items-center gap-6"}`}>
        <a href="#">Terms of Use</a>
        {!isMobile && <span>|</span>}
        <a href="#">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
