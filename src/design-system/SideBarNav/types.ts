import { IconName } from "../Icon";

type SideBarNavLink = {
    linkText: string;
    linkTo: string;
    iconName: IconName;
};

export type SideBarNavLinksGroup = {
    title: string;
    links: SideBarNavLink[];
};

export type SideBarNavLinksProps = {
    links: SideBarNavLinksGroup[];
    logOut: () => void;
};
