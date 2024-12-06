import AvatarF from "./Avatar";
import BadgeF from "./Badge";
import PopoverF from "./Popover";
import SelectF from "./Select";
import SwitchF from "./Switch";
import TourF from "./Tour";
import { Tooltip } from "antd";

const navLinks = [
    {
        name: <SelectF />,
    },
    {
        name: <SwitchF />,
    },

    ,
];

const Navbar = () => {
    return (
        <nav>
            <div className="relative flex justify-between items-center  container">
                <div className="flex items-center gap-10">
                    <AvatarF />
                    <a
                        href="https://github.com/dashboard"
                        className="text-3xl"
                    >
                        <Tooltip title="github">
                            <h1>Abdullohaziz</h1>
                        </Tooltip>
                    </a>
                    <PopoverF />
                    <BadgeF />
                </div>
                <div className="flex items-center gap-10">
                    <ul className="bottom-0 z-50  flex justify-between ">
                        {navLinks.map((l) => (
                            <li
                                key={l.name}
                                className="block mx-5 my-7 hover:underline"
                            >
                                {" "}
                                {l.name}{" "}
                            </li>
                        ))}
                    </ul>
                    <TourF />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
