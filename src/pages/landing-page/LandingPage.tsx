import styled from "styled-components";
import Header from "./header/Header";
import Hero from "./hero/Hero";
import Companies from "./companies/Companies";
import Features from "./features/Features";

const LandingPageWrapper = styled.div`
    padding: 0 37.5rem;
`;

const LandingPage = () => {
    return (
        <LandingPageWrapper>
            <Header />
            <Hero />
            <Companies />
            <Features />
        </LandingPageWrapper>
    );
};

export default LandingPage;
