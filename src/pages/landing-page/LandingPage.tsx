import styled from "styled-components";
import Header from "./header/Header";

const LandingPageWrapper = styled.div`
    padding: 0 37.5rem;
`;

const LandingPage = () => {
    return (
        <LandingPageWrapper>
            <Header />
        </LandingPageWrapper>
    );
};

export default LandingPage;
