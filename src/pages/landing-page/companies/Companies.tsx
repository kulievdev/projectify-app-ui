import styled from "styled-components";
import { Icon } from "../../../design-system";

const customers = ["google", "airbnb", "creative", "shopify", "amazon"];

const CompaniesSection = styled.section``;

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
                {customers.map((customerName) => (
                    <CompanyIcon iconName={customerName} />
                ))}
            </CompaniesSectionContainer>
        </CompaniesSection>
    );
};

export default Companies;
