import styled from "styled-components";
import { Icon } from "../../../design-system";
import Layout from "../components/Layout";

const customers = ["google", "airbnb", "creative", "shopify", "amazon"];

const CompaniesSection = styled(Layout)``;

const CompaniesSectionContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--space-36) 0;
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
        <CompaniesSection>
            <CompaniesSectionContainer>
                {customers.map((customerName, idx) => (
                    <CompanyIcon key={idx} iconName={customerName} />
                ))}
            </CompaniesSectionContainer>
        </CompaniesSection>
    );
};

export default Companies;
