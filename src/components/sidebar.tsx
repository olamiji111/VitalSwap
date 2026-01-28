import React from "react";
import { NAV_LINKS } from "../constants";

const Sidebar = () => {
    return (
        <div>

            <h2 className="text-zinc-400 uppercase text-xs font-semibold mb-4">
                Main Menu
            </h2>

            {/* Links */}
            <nav className="flex flex-col gap-4">
                {NAV_LINKS.map((item) => (
                    <a
                        key={item.link}
                        href={item.path}
                        className="text-sm text-zinc-500 hover:text-primary-500 transition-colors duration-200"
                    >
                        {item.link}
                    </a>
                ))}
            </nav>
        </div>
    );
};

export default Sidebar;