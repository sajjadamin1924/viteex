
import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";

const Footer =() => {
  return (
    <footer className="bg-[#3E3E3D] text-white py-12 px-4">
      <div className="max-w-7xl  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
        
        <div>
          <h2 className="text-lg font-semibold mb-2">CORPATE MAILING ADDRESS</h2>
          <p>1100 Peachtree Street</p>
          <p>Suite 200</p>
          <p>Atlanta GA 30309</p>
          <p>United States</p>
        </div>

        
        <div>
          <h2 className="text-lg font-semibold mb-2">TEXT OR CALL</h2>
          <p>(888) 355-4336</p>
        </div>

        
        <div>
          <h2 className="text-lg font-semibold mb-2">PHONE HOURS</h2>
          <p>MONDAY - FRIDAY</p>
          <p>10AM UNTIL 5PM EST.</p>
        </div>

        {/* Website & Support */}
        <div>
          <h2 className="text-lg font-semibold mb-2">WEBSITE</h2>
          <p>elliebathbedandbaby.com</p>
          <h2 className="text-lg font-semibold mt-4 mb-2">CUSTOMER SUPPORT</h2>
          <p>support@elliebathbedandbaby.com</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-[#0702FF] bg-white rounded-full p-2 hover:text-blue-400"><FaTwitter size={20} /></a>
            <a href="#" className="text-[#0702FF] bg-white rounded-full p-2 hover:text-pink-500"><FaInstagram size={20} /></a>
            <a href="#" className="text-[#0702FF] bg-white rounded-full p-2 hover:text-blue-600"><FaFacebookF size={20} /></a>
          </div>
        </div>
        
      </div>
      <div className="text-sm text-white text-center space-x-6">
        <a href="#">Terms of Use</a>
        <a href="#">Privacy Policy</a>
      </div>

      
    </footer>
  );
}
export default Footer;
