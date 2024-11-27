import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { LuTwitter } from "react-icons/lu";
import { FaTelegram } from "react-icons/fa";
import { FaRedditAlien } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#051422] mt-10 py-16 z-10">
      <div className="flex justify-around items-center ">
        <div>
          <img src="/logo1.png" alt="company logo" width={120} />
        </div>
        <div>
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>About Us</MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Roadmap</MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>FAQs</MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Contact Us</MenubarTrigger>
            </MenubarMenu>
          </Menubar>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-firaCode text-xl font-extrabold">
            Contact <span className="text-[#f9d423]">Us</span>
          </h3>
          <div className="flex gap-6">
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
