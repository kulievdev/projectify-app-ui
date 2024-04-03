import styled from "styled-components";

const HamburgerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--space-4);

    @media (min-width: 850px) {
        display: none;
    }
`;

const StickLong = styled.div`
    width: var(--space-30);
    height: 0.3rem;
    border: none;
    border-radius: var(--space-8);
    background-color: var(--primary-500);
`;

const StickShort = styled.div`
    width: var(--space-20);
    height: 0.3rem;
    border: none;
    border-radius: var(--space-8);
    background-color: var(--primary-500);
`;

const HamburgerButton = () => {
    return (
        <HamburgerWrapper>
            <StickLong />
            <StickShort />
            <StickLong />
        </HamburgerWrapper>
    );
};

export default HamburgerButton;
