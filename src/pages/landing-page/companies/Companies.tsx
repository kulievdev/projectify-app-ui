import styled from "styled-components";
import { Icon } from "../../../design-system";
import LayoutWrapper from "../components/LayoutWrapper";

const customers = ["google", "airbnb", "creative", "shopify", "amazon"];

const CompaniesSection = styled(LayoutWrapper)``;

const CompaniesSectionContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--space-10) 0;

    @media (min-width: 600px) {
        padding: var(--space-20) 0;
    }

    @media (min-width: 1000px) {
        padding: var(--space-30) 0;
    }
`;

const CompanyIcon = styled(Icon)`
    width: 4rem;
    height: var(--space-16);

    @media (min-width: 500px) {
        width: 6rem;
        height: var(--space-20);
    }

    @media (min-width: 701px) {
        width: 9rem;
        height: var(--space-30);
    }

    @media (min-width: 1000px) {
        width: 11.5rem;
        height: var(--space-36);
    }
`;

const Companies = () => {
    return (
        <CompaniesSection id="companies">
            <CompaniesSectionContainer>
                {customers.map((customerName, idx) => (
                    <CompanyIcon key={idx} iconName={customerName} />
                ))}
            </CompaniesSectionContainer>
        </CompaniesSection>
    );
};

export default Companies;
