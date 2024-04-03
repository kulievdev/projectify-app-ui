import React from "react";
import styled from "styled-components";

type LayoutProps = {
    children: React.ReactNode;
};

const LayoutWrapper = styled.section`
    padding: 0 2rem;

    @media (min-width: 1275px) {
        padding: 0 15rem;
    }

    @media (min-width: 1720px) {
        padding: 0 37.5rem;
    }
`;

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return <LayoutWrapper>{children}</LayoutWrapper>;
};

export default Layout;
