import styled from "styled-components";
import { Button, Typography } from "../../../design-system";
import currentFeatures from "./currentFeatures";
import FeatureCard from "./FeatureCard";
import Layout from "../components/Layout";

const FeaturesSection = styled(Layout)``;

const FeaturesSectionContainer = styled.div`
    padding-top: var(--space-100);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const HeaderWrapper = styled.div`
    text-align: center;
    margin-bottom: var(--space-50);
`;

const Text = styled(Typography)`
    color: var(--jaguar-500);
`;

const FeaturesWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: var(--space-30);
    margin-bottom: var(--space-50);
`;

const DemoButton = styled(Button)`
    width: 27rem;
`;

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
                <FeaturesWrapper>
                    {currentFeatures.map((feature) => (
                        <FeatureCard
                            featureTitle={feature.title}
                            featureDescription={feature.description}
                            iconName={feature.iconName}
                            cardBackgroundColor={feature.cardBackgroundColor}
                            iconWrapperBackgroundColor={
                                feature.iconWrapperBackgroundColor
                            }
                            iconWrapperBorderColor={
                                feature.iconWrapperBorderColor
                            }
                        />
                    ))}
                </FeaturesWrapper>
                <DemoButton color="primary" shape="circle" size="lg">
                    Try a Demo
                </DemoButton>
            </FeaturesSectionContainer>
        </FeaturesSection>
    );
};

export default Features;
