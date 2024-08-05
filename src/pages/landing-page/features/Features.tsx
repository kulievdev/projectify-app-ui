import styled from "styled-components";
import { Button, Typography } from "../../../design-system";
import currentFeatures from "./currentFeatures";
import FeatureCard from "./FeatureCard";
import LayoutWrapper from "../components/LayoutWrapper";
import ActionModal from "../components/ActionModal";
import { useState } from "react";

const FeaturesSection = styled(LayoutWrapper)``;

const FeaturesSectionContainer = styled.div`
    padding-top: var(--space-40);
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 600px) {
        padding: var(--space-72) 0;
    }

    @media (min-width: 1000px) {
        padding-top: var(--space-100);
    }
`;

const HeaderWrapper = styled.div`
    text-align: center;
    margin-bottom: var(--space-50);
`;

const Header = styled(Typography)`
    @media (max-width: 700px) {
        font-size: var(--space-24);
    }
`;

const HeaderDescription = styled(Typography)`
    color: var(--jaguar-500);

    @media (max-width: 700px) {
        font-size: var(--space-12);
    }
`;

const FeaturesWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: var(--space-30);
    margin-bottom: var(--space-50);

    @media (min-width: 650px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media (min-width: 1000px) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
`;

const DemoButton = styled(Button)`
    width: 27rem;
`;

const Features = () => {
    const [show, setShow] = useState(false);

    const closeModal = () => {
        setShow(false);
    };

    return (
        <FeaturesSection id="features">
            <FeaturesSectionContainer>
                <HeaderWrapper>
                    <Header variant="h5" weight="bold">
                        Get the best for your team
                    </Header>
                    <HeaderDescription variant="paragraphSM" weight="medium">
                        Our solution provides simple yet effective project
                        management
                    </HeaderDescription>
                </HeaderWrapper>
                <FeaturesWrapper>
                    {currentFeatures.map((feature, idx) => (
                        <FeatureCard
                            key={idx}
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
                <DemoButton
                    color="primary"
                    shape="circle"
                    size="lg"
                    onClick={() => {
                        setShow(true);
                    }}
                >
                    Try a Demo
                </DemoButton>
                <ActionModal
                    title="Demo"
                    adminNav="admin/demo-login"
                    teamMemberNav="team-member/demo-login"
                    show={show}
                    closeModal={closeModal}
                />
            </FeaturesSectionContainer>
        </FeaturesSection>
    );
};

export default Features;
