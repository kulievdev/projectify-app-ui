import styled from "styled-components";
import { Button, Logo } from "../../../design-system";
import HamburgerButton from "../components/HamburgerButton";
import LayoutWrapper from "../components/LayoutWrapper";

const HeaderWrapper = styled(LayoutWrapper)``;

const NavWrapper = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--space-24) 0;
`;

const UnorderedList = styled.ul`
    display: none;
    gap: var(--space-28);

    @media (min-width: 850px) {
        display: flex;
    }
`;

const List = styled.li`
    list-style-type: none;
`;

const Link = styled.a`
    color: var(--jaguar-900);
    font-size: var(--font-size-16);
    line-height: var(--line-height-24);
    font-weight: var(--font-weight-500);
`;

const CtaWrapper = styled.div`
    display: none;
    gap: var(--space-10);

    @media (min-width: 850px) {
        display: flex;
    }
`;

const SignUpButton = styled(Button)`
    width: 12rem;
    background-color: transparent;
    border: 0.2rem solid var(--primary-500);
    color: var(--primary-500);
    padding: var(--space-10) var(--space-20);
`;

const LoginButton = styled(Button)`
    width: 12rem;
    padding: var(--space-10) var(--space-20);
`;

const Header = () => {
    return (
        <HeaderWrapper id="home">
            <NavWrapper>
                <Logo layout="horizontal" size="sm" />
                <UnorderedList>
                    <List>
                        <Link href="#price-plan">Prices</Link>
                    </List>
                    <List>
                        <Link href="#testimonials">Testimonials</Link>
                    </List>
                    <List>
                        <Link href="#contact">Contact</Link>
                    </List>
                </UnorderedList>
                <CtaWrapper>
                    <SignUpButton size="md" shape="circle">
                        Sign up
                    </SignUpButton>
                    <LoginButton color="primary" size="md" shape="circle">
                        Login
                    </LoginButton>
                </CtaWrapper>
                <HamburgerButton />
            </NavWrapper>
        </HeaderWrapper>
    );
};

export default Header;
