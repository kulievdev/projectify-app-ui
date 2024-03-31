import styled from "styled-components";
import { Typography } from "../../../design-system";

const FeaturesSection = styled.section``;

const FeaturesSectionContainer = styled.div`
    padding-top: var(--space-100);
`;

const HeaderWrapper = styled.div`
    margin-bottom: var(--space-50);
    text-align: center;
`;

const Text = styled(Typography)`
    color: var(--jaguar-500);
`;

const FeaturesWrapper = styled.div``;

const Features = () => {
    return (
        <FeaturesSection>
            <FeaturesSectionContainer>
                <HeaderWrapper>
                    <Typography variant="h5" weight="bold">
                        Get the best for your team
                    </Typography>
                    <Text variant="paragraphSM" weight="medium">
                        Our solution provides simple yet effective project
                        management
                    </Text>
                </HeaderWrapper>
            </FeaturesSectionContainer>
        </FeaturesSection>
    );
};

export default Features;
