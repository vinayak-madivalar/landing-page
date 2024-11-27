import { Button } from "@/components/ui/button";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";

const Header = () => {
  return (
    <nav className="flex justify-around items-center py-8">
      <div className="flex gap-2 items-center">
        <img src="/logo.png" alt="company logo" width={50} />
        <img src="/name.png" alt="company name" width={100} />
      </div>
      <div>
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>Home</MenubarTrigger>
          </MenubarMenu>
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
      <div>
        <Button variant="custom" size="lg">
          Connect Wallet
        </Button>
      </div>
    </nav>
  );
};

export default Header;
