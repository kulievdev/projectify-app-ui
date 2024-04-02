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
    width: 11.5rem;
    height: var(--space-36);
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
