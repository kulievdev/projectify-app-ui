import styled from "styled-components";
import { Typography } from "../../../design-system";

const FooterSection = styled.footer`
    border: 0.1rem solid var(--jaguar-100);

    padding: 0 2rem;

    @media (min-width: 1275px) {
        padding: 0 15rem;
    }

    @media (min-width: 1720px) {
        padding: 0 37.5rem;
    }
`;

const FooterContainer = styled.div`
    padding: var(--space-24) 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: 850px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
`;

const CopyrightText = styled(Typography)`
    color: var(--jaguar-500);
    margin-bottom: var(--space-14);

    @media (max-width: 451px) {
        font-size: var(--space-14);
    }

    @media (min-width: 850px) {
        margin-bottom: 0;
    }
`;

const NavWrapper = styled.nav``;

const UnorderedList = styled.ul`
    display: flex;
    gap: var(--space-28);

    @media (min-width: 450px) {
        gap: var(--space-48);
    }
`;

const List = styled.li`
    cursor: pointer;
    list-style-type: none;
    color: var(--primary-500);
    font-size: var(--space-14);
    line-height: var(--space-24);
    font-weight: 500;

    @media (min-width: 450px) {
        font-size: var(--space-16);
    }
`;

const Link = styled.a``;

const Footer = () => {
    return (
        <FooterSection id="footer">
            <FooterContainer>
                <CopyrightText variant="paragraphSM">
                    ©Projectify 2024 - All Rights Reserved.
                </CopyrightText>
                <NavWrapper>
                    <UnorderedList>
                        <List>
                            <Link>Careers</Link>
                        </List>
                        <List>
                            <Link>FAQ</Link>
                        </List>
                        <List>
                            <Link>Sitemap</Link>
                        </List>
                        <List>
                            <Link>Privacy Policy</Link>
                        </List>
                    </UnorderedList>
                </NavWrapper>
            </FooterContainer>
        </FooterSection>
    );
};

export default Footer;
