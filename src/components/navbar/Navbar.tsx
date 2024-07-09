// all the imports here
import { Button } from "../ui/button";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
} from "../ui/menubar";

const Navbar = () => {
    return (
        <Menubar className="justify-between items-center bg-gradient-to-r from-yellow-500 to-red-500 py-8">
            <div>
                <MenubarMenu>
                    <MenubarTrigger className="text-3xl">
                        SPORT GOODS
                    </MenubarTrigger>
                </MenubarMenu>
            </div>
            <div className="flex justify-center items-center gap-x-5">
                <MenubarMenu>
                    <MenubarTrigger className="hover:bg-orange-500">
                        <Button className="text-xl bg-orange-600 px-10 hover:bg-orange-500 focus:bg-orange-800">
                            Home
                        </Button>
                    </MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger className="hover:bg-orange-500">
                        <Button className="text-xl bg-orange-600 px-10 hover:bg-orange-500 focus:bg-orange-800">
                            All Products
                        </Button>
                    </MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger className="hover:bg-orange-500">
                        <Button className="text-xl bg-orange-600 px-10 hover:bg-orange-500 focus:bg-orange-800">
                            About Us
                        </Button>
                    </MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger className="hover:bg-orange-500">
                        <Button className="text-xl bg-orange-600 px-10 hover:bg-orange-500 focus:bg-orange-800">
                            Contact Us
                        </Button>
                    </MenubarTrigger>
                </MenubarMenu>

                <MenubarMenu>
                    <MenubarTrigger className="hover:bg-orange-500">
                        <Button className="text-xl bg-orange-600 px-10 hover:bg-orange-500 focus:bg-orange-800">
                            Profile
                        </Button>
                    </MenubarTrigger>
                    <MenubarContent>
                        <MenubarSeparator />
                        <MenubarItem>About</MenubarItem>
                        <MenubarItem>Cart</MenubarItem>
                        <MenubarItem>Confirm Orders</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
            </div>
        </Menubar>
    );
};

export default Navbar;
