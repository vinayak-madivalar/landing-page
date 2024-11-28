import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <nav className="flex justify-around items-center py-8 z-10">
      <div className="flex gap-2 items-center">
        <img src="/logo.png" alt="company logo" width={50} />
        <img src="/name.png" alt="company name" width={100} />
      </div>
      <div className="z-10 hidden lg:block">
        <ul className="flex justify-center items-center gap-16 font-semibold ">
          <li className="hover:text-[#f9d423]">
            <a href="#home">Home</a>
          </li>
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
      <div className="hidden lg:block">
        <Button variant="custom" size="lg">
          Connect Wallet
        </Button>
      </div>
    </nav>
  );
};

export default Header;
