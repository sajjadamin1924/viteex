import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";
import { Rectangle7 } from "../../assets/images";

const Footer = () => {
  return (
    <footer className="relative bg-[#3E3E3E] text-white py-8 px-12 overflow-hidden">
      <div
        className="absolute inset-0  bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${Rectangle7})` }}
      />

      {/* Footer content */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-4  gap-6">
        <div>
          <h2 className="text-[25px] font-semibold mb-2">
            CORPORATE MAILING ADDRESS
          </h2>
          <div
            className="text-xl font-[400px]"
          >
            <p>1100 Peachtree Street</p>
            <p>Suite 200</p>
            <p>Atlanta GA 30309</p>
            <p>United States</p>
          </div>
        </div>

        <div>
          <h2 className="text-[25px] font-semibold mb-2">TEXT OR CALL</h2>
          <p className="text-xl font-[400px]">(888) 355-4336</p>
        </div>

        <div>
          <h2 className="text-[25px] font-semibold mb-2">PHONE HOURS</h2>
          <p className="text-xl font-[400px]">MONDAY - FRIDAY</p>
          <p className="text-xl font-[400px]">10AM UNTIL 5PM EST.</p>
        </div>

        <div>
          <h2 className="text-[22px] font-semibold mb-2">WEBSITE</h2>
          <p className="text-xl font-[400px] break-words">elliebathbedandbaby.com</p>
          <h2 className="text-[22px] font-semibold mt-4 mb-2">
            CUSTOMER SUPPORT
          </h2>
          <p className="text-xl font-[400] break-words">support@elliebathbedandbaby.com</p>


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

      <div className="relative z-10 text-xl font-[400px] text-white text-center mt-8 space-x-6">
        <a href="#">Terms of Use</a>
        <a href="#">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
