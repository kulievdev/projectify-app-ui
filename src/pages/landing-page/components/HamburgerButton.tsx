import React from "react";
import styled from "styled-components";

type HamburgerButtonProps = {
    isActive: boolean;
    setIsActive: (value: boolean) => void;
};

const HamburgerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-4);
    border: none;
    background-color: transparent;
    cursor: pointer;
    transition: transform 0.9s ease;

    &.active .stick-long:nth-child(1) {
        transform: rotate(45deg) translate(0.5rem, 0.5rem);
    }

    &.active .stick-short {
        opacity: 0;
    }

    &.active .stick-long:nth-child(3) {
        transform: rotate(-45deg) translate(0.5rem, -0.5rem);
    }

    @media (min-width: 850px) {
        display: none;
    }
`;

const Stick = styled.div<{ $long: boolean }>`
    width: ${(props) => (props.$long ? "var(--space-30)" : "var(--space-20)")};
    height: 0.3rem;
    border: none;
    border-radius: var(--space-8);
    background-color: var(--primary-500);
    transition: transform 0.9s ease;
`;

const HamburgerButton: React.FC<HamburgerButtonProps> = ({
    isActive,
    setIsActive
}) => {
    const handleClick = () => {
        setIsActive(!isActive);
    };

    return (
        <HamburgerWrapper
            onClick={handleClick}
            className={isActive ? "active" : ""}
        >
            <Stick className="stick-long" $long={true} />
            <Stick className="stick-short" $long={false} />
            <Stick className="stick-long" $long={true} />
        </HamburgerWrapper>
    );
};

export default HamburgerButton;
