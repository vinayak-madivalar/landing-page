import { LuTwitter } from "react-icons/lu";
import { FaTelegram } from "react-icons/fa";
import { FaRedditAlien } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#051422] mt-10 py-16 z-10" id="footer">
      <div className="flex flex-col md:flex-row md:justify-around items-center ">
        <div>
          <img src="/logo1.png" alt="company logo" width={120} />
        </div>
        <div>
          <ul className="flex flex-col lg:flex-row justify-center items-center gap-16 font-semibold ">
            <li className="hover:text-[#f9d423]">
              <a href="#aboutus">About Us</a>
            </li>
            <li className="hover:text-[#f9d423]">
              <a href="#">Roadmap</a>
            </li>
            <li className="hover:text-[#f9d423]">
              <a href="#faqs">FAQs</a>
            </li>
            <li className="hover:text-[#f9d423]">
              <a href="#footer">Contact US</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="font-firaCode text-2xl font-extrabold">
            Contact <span className="text-[#f9d423]">Us</span>
          </h3>
          <div className="flex gap-8">
            <FaTelegram size={25} />
            <FaRedditAlien size={25} />
            <LuTwitter size={25} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
