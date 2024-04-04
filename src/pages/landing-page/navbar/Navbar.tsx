import styled from "styled-components";
import { Button, Logo } from "../../../design-system";
import HamburgerButton from "../components/HamburgerButton";
import LayoutWrapper from "../components/LayoutWrapper";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginModal from "../components/LoginModal";

const NavWrapper = styled(LayoutWrapper)``;

const Navigation = styled.nav<{ $isActive: boolean }>`
    display: ${(props) => (props.$isActive ? "none" : "flex")};
    align-items: center;
    justify-content: space-between;
    padding: var(--space-24) 0;

    @media (min-width: 850px) {
        display: flex;
    }
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

const MobileNavWrapper = styled.div`
    display: block;
    height: 100vh;
    width: 100vw;
    background: linear-gradient(
        to bottom,
        var(--dodger-blue-12),
        var(--dodger-blue-25)
    );
    z-index: 1;
    position: fixed;
    top: 0;
    left: 0;
    overflow: auto;

    @media (min-width: 850px) {
        display: none;
    }
`;

const MobileNavHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--space-24) 2rem var(--space-24) 2rem;
    margin-bottom: var(--space-50);
`;

const MobileNav = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const MobileUnorderedList = styled.ul`
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: var(--space-28);
    margin-bottom: var(--space-50);
`;

const MobileCtaWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--space-10);
`;

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    const closeModal = () => {
        setShow(false);
    };

    return (
        <NavWrapper id="home">
            <Navigation $isActive={isActive}>
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
                    <SignUpButton
                        size="md"
                        shape="circle"
                        onClick={() => {
                            navigate("admin/sign-up");
                        }}
                    >
                        Sign Up
                    </SignUpButton>
                    <LoginButton
                        color="primary"
                        size="md"
                        shape="circle"
                        onClick={() => {
                            setShow(true);
                        }}
                    >
                        Login
                    </LoginButton>
                </CtaWrapper>
                <HamburgerButton
                    isActive={isActive}
                    setIsActive={setIsActive}
                />
            </Navigation>
            {isActive && (
                <MobileNavWrapper>
                    <MobileNavHeader>
                        <Logo layout="horizontal" size="sm" />
                        <HamburgerButton
                            isActive={isActive}
                            setIsActive={setIsActive}
                        />
                    </MobileNavHeader>
                    <MobileNav>
                        <MobileUnorderedList>
                            <List>
                                <Link
                                    href="#price-plan"
                                    onClick={() => {
                                        setIsActive(false);
                                    }}
                                >
                                    Prices
                                </Link>
                            </List>
                            <List>
                                <Link
                                    href="#testimonials"
                                    onClick={() => {
                                        setIsActive(false);
                                    }}
                                >
                                    Testimonials
                                </Link>
                            </List>
                            <List>
                                <Link
                                    href="#contact"
                                    onClick={() => {
                                        setIsActive(false);
                                    }}
                                >
                                    Contact
                                </Link>
                            </List>
                        </MobileUnorderedList>
                        <MobileCtaWrapper>
                            <SignUpButton
                                size="md"
                                shape="circle"
                                onClick={() => {
                                    navigate("admin/sign-up");
                                    setIsActive(false);
                                }}
                            >
                                Sign Up
                            </SignUpButton>
                            <LoginButton
                                color="primary"
                                size="md"
                                shape="circle"
                                onClick={() => {
                                    setShow(true);
                                    setIsActive(false);
                                }}
                            >
                                Login
                            </LoginButton>
                        </MobileCtaWrapper>
                    </MobileNav>
                </MobileNavWrapper>
            )}
            <LoginModal show={show} closeModal={closeModal} />
        </NavWrapper>
    );
};

export default Navbar;
