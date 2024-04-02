import styled from "styled-components";
import Header from "./header/Header";
import Hero from "./hero/Hero";
import Companies from "./companies/Companies";
import Features from "./features/Features";
import PricePlans from "./price-plan/PricePlans";
import RequestDemo from "./request-demo/RequestDemo";
import Contact from "./contact/Contact";

const LandingPageWrapper = styled.div`
    padding: 0 15rem;

    @media (min-width: 1620px) {
        padding: 0 37.5rem;
    }
`;

const LandingPage = () => {
    return (
        <>
            <Header />
            <Hero />
            <Companies />
            <Features />
            <PricePlans />
            <RequestDemo />
            <Contact />
        </>
    );
};

export default LandingPage;
