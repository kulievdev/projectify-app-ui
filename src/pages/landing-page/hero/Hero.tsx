import styled from "styled-components";
import { Badge, Button, Typography } from "../../../design-system";
import heroImg from "../images/hero-image.png";
import membersImg from "../images/members.png";
import googleImg from "../images/google.png";

const HeroSection = styled.section``;

const HeroSectionContainer = styled.div`
    padding-top: var(--space-90);
    padding-bottom: var(--space-90);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const HeroContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: var(--space-50);
`;

const HeroText = styled(Typography)`
    color: var(--jaguar-500);
    margin-bottom: var(--space-30);
    padding: 0 22rem;
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
    left: -2%;
`;
const HeroMembersImage = styled.img`
    position: absolute;
    bottom: 10%;
    left: -10%;
    width: 20%;
    height: auto;
`;

const GreenBadge = styled(Badge)`
    position: absolute;
    top: 20%;
    right: -2%;
`;
const HeroGoogleImage = styled.img`
    position: absolute;
    bottom: 10%;
    right: -10%;
    width: 20%;
    max-width: 100%;
    height: auto;
`;

const Hero = () => {
    return (
        <HeroSection>
            <HeroSectionContainer>
                <HeroContent>
                    <Typography variant="h1" weight="semibold" align="center">
                        Unleash the Power of Projectify
                    </Typography>
                    <HeroText
                        variant="paragraphMD"
                        weight="medium"
                        align="center"
                    >
                        Projectify is your all-in-one solution, crafted to
                        simplify your project management journey and supercharge
                        your success.
                    </HeroText>
                    <Button color="primary" size="lg" shape="rounded">
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
