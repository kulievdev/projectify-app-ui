import styled from "styled-components";
import { Button, Logo, Typography } from "../../../design-system";

const HeaderWrapper = styled.header``;

const NavWrapper = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--space-24) 0;
`;

const UnorderedList = styled.ul`
    display: flex;
    gap: var(--space-28);
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
    display: flex;
    gap: var(--space-10);
`;

const SignUpButton = styled(Button)`
    background-color: transparent;
    border: 0.2rem solid var(--primary-500);
    color: var(--primary-500);
    padding: var(--space-10) var(--space-20);
`;

const LoginButton = styled(Button)`
    padding: var(--space-10) var(--space-20);
`;

const Header = () => {
    return (
        <HeaderWrapper>
            <NavWrapper>
                <Logo layout="horizontal" size="sm" />
                <UnorderedList>
                    <List>
                        <Link href="#about">About</Link>
                    </List>
                    <List>
                        <Link href="#testimonials">Testimonials</Link>
                    </List>
                    <List>
                        <Link href="#contact">Contact</Link>
                    </List>
                </UnorderedList>
                <CtaWrapper>
                    <SignUpButton size="sm" shape="circle">
                        Sign up
                    </SignUpButton>
                    <LoginButton color="primary" size="sm" shape="circle">
                        Login
                    </LoginButton>
                </CtaWrapper>
            </NavWrapper>
        </HeaderWrapper>
    );
};

export default Header;
