import { TiHomeOutline } from "react-icons/ti";
import { IoMdTime } from "react-icons/io";
import { TfiStatsUp } from "react-icons/tfi";
import { NavLink } from "react-router";



const Navber = () => {
    return (
        <div className="navbar bg-white border-gray-100 px-10 py-4 shadow-sm">
            <div className="flex-1">
                <a className=" font-bold text-2xl cursor-pointer"><span className="text-[#1F2937]">Keen</span><span className="text-[#244D3F]">Keeper</span></a>
            </div>

            <div className="flex-none flex items-center gap-6 ">
                <ul className="flex items-center gap-4">
                    <li className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium">
                        <NavLink to={"/"} className={({ isActive }) => `flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${isActive ? "bg-[#244D3F] text-[#FFFFFF]" : ""}`}>
                            <TiHomeOutline />
                            <span>Home</span>

                        </NavLink>
                    </li>

                    <li>
                        <NavLink to={"/timeline"} className={({ isActive }) => `flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${isActive ? "bg-[#244D3F] text-[#FFFFFF]" : ""}`}>

                            <IoMdTime />
                            <span>Timeline</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/stats"} className={({ isActive }) => `flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${isActive ? "bg-[#244D3F] text-[#FFFFFF]" : ""}`}>

                            <TfiStatsUp />
                            <span>Stats</span>
                        </NavLink>
                    </li>

                </ul>

            </div>
        </div>
    );
};

export default Navber;