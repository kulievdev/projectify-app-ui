import styled from "styled-components";
import Header from "./header/Header";
import Hero from "./hero/Hero";
import Companies from "./companies/Companies";
import Features from "./features/Features";
import PricePlans from "./price-plan/PricePlans";

const LandingPageWrapper = styled.div`
    padding: 0 15rem;

    @media (min-width: 1920px) {
        padding: 0 37.5rem;
    }
`;

const LandingPage = () => {
    return (
        <LandingPageWrapper>
            <Header />
            <Hero />
            <Companies />
            <Features />
            <PricePlans />
        </LandingPageWrapper>
    );
};

export default LandingPage;
