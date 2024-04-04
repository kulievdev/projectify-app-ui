import React from "react";
import "./SideBarNav.css";
import { Logo } from "../Logo";

type SideBarNavProps = {
    children: React.ReactNode;
};

const SideBarNav: React.FC<SideBarNavProps> = ({ children }) => {
    return (
        <nav className="side-bar">
            <div className="side-bar__logo-wrapper">
                <Logo size="sm" layout="horizontal" />
            </div>
            {children}
        </nav>
    );
};

export { SideBarNav };
