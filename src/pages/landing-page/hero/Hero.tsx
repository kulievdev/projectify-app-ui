import styled from "styled-components";
import { Badge, Button, Typography } from "../../../design-system";
import heroImg from "../images/hero-image.png";
import membersImg from "../images/members.png";
import googleImg from "../images/googleSeo.png";
import LayoutWrapper from "../components/LayoutWrapper";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = styled(LayoutWrapper)``;

const HeroSectionContainer = styled.div`
    padding-top: var(--space-10);
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 600px) {
        padding-top: var(--space-40);
    }

    @media (min-width: 1000px) {
        padding-top: var(--space-100);
    }
`;

const HeroContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: var(--space-50);
`;

const HeroHeader = styled(Typography)`
    @media (max-width: 1115px) {
        font-size: var(--space-48);
        line-height: var(--space-48);
    }

    @media (max-width: 770px) {
        font-size: var(--space-36);
    }

    @media (max-width: 590px) {
        font-size: var(--space-30);
    }

    @media (max-width: 495px) {
        font-size: var(--space-24);
    }

    @media (max-width: 405px) {
        font-size: var(--space-20);
    }
`;

const HeroText = styled(Typography)`
    color: var(--jaguar-500);
    margin-bottom: var(--space-30);
    width: 90%;

    @media (max-width: 1115px) {
        font-size: var(--space-16);
        line-height: var(--space-18);
    }

    @media (max-width: 770px) {
        font-size: var(--space-14);
        line-height: var(--space-16);
    }

    @media (max-width: 495px) {
        font-size: var(--space-12);
        line-height: var(--space-14);
    }

    @media (max-width: 405px) {
        font-size: var(--space-10);
    }

    @media (min-width: 700px) {
        width: 70%;
    }
`;

const HeroImageWrapper = styled.div`
    position: relative;
`;

const HeroMainImage = styled.img`
    width: 100%;
`;

const OrangeBadge = styled(Badge)`
    position: absolute;
    top: 20%;
    left: 5%;

    @media (min-width: 1275px) {
        left: -2%;
    }
`;
const HeroMembersImage = styled.img`
    position: absolute;
    bottom: 10%;
    left: 10%;
    width: 20%;
    height: auto;

    @media (min-width: 1275px) {
        left: -10%;
    }
`;

const GreenBadge = styled(Badge)`
    position: absolute;
    top: 20%;
    right: 5%;

    @media (min-width: 1275px) {
        right: -2%;
    }
`;
const HeroGoogleImage = styled.img`
    position: absolute;
    bottom: 10%;
    right: 3%;
    width: 20%;
    max-width: 100%;
    height: auto;

    @media (min-width: 1275px) {
        right: -10%;
    }
`;

const Hero = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    const closeModal = () => {
        setShow(false);
    };

    return (
        <HeroSection id="hero">
            <HeroSectionContainer>
                <HeroContent>
                    <HeroHeader variant="h1" weight="semibold" align="center">
                        Unleash the Power of Projectify
                    </HeroHeader>
                    <HeroText
                        variant="paragraphMD"
                        weight="medium"
                        align="center"
                    >
                        Projectify is your all-in-one solution, crafted to
                        simplify your project management journey and supercharge
                        your success.
                    </HeroText>
                    <Button
                        color="primary"
                        size="lg"
                        shape="rounded"
                        onClick={() => {
                            setShow(true);
                        }}
                    >
                        Try a Demo
                    </Button>
                </HeroContent>
                <HeroImageWrapper>
                    <OrangeBadge
                        color="orange"
                        shape="rounded"
                        variant="contained"
                        label="Mar 7"
                        iconName="flag"
                    />
                    <HeroMembersImage src={membersImg} alt="Members Image" />
                    <GreenBadge
                        color="green"
                        shape="rounded"
                        variant="contained"
                        label="Completed"
                        iconName="calendar"
                    />
                    <HeroGoogleImage src={googleImg} alt="Google Image" />
                    <HeroMainImage src={heroImg} alt="Landing Page Image" />
                </HeroImageWrapper>
            </HeroSectionContainer>
        </HeroSection>
    );
};

export default Hero;
