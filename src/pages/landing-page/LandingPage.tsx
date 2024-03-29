import styled from "styled-components";
import Header from "./header/Header";
import Hero from "./hero/Hero";
import Companies from "./companies/Companies";

const LandingPageWrapper = styled.div`
    padding: 0 37.5rem;
`;

const LandingPage = () => {
    return (
        <LandingPageWrapper>
            <Header />
            <Hero />
            <Companies />
        </LandingPageWrapper>
    );
};

export default LandingPage;
