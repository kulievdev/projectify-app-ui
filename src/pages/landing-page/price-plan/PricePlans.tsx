import styled from "styled-components";
import { Switch, Typography } from "../../../design-system";
import currentPlans from "./currentPlans";
import Plan from "./Plan";
import { useState } from "react";
import LayoutWrapper from "../components/LayoutWrapper";

const PricePlanSection = styled(LayoutWrapper)``;

const PricePlanSectionContainer = styled.div`
    padding: 7rem 0 var(--space-80) 0;

    @media (min-width: 1000px) {
        padding: 10rem 0 var(--space-80) 0;
    }
`;

const HeaderWrapper = styled.div`
    text-align: center;
    margin-bottom: var(--space-50);
`;

const Subtitle = styled(Typography)`
    margin-bottom: var(--space-10);
`;

const Title = styled(Typography)`
    margin-bottom: var(--space-6);
`;

const SpanText = styled.span`
    color: var(--primary-500);
`;

const Description = styled(Typography)`
    color: var(--jaguar-500);
    margin-bottom: var(--space-30);
`;

const ToggleWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-24);
`;

const ToggleTextLeft = styled(Typography)`
    color: var(--jaguar-400);
`;

const PricePlansWrapper = styled.div`
    display: grid;
    gap: var(--space-30);

    @media (min-width: 600px) {
        display: flex;
        flex-wrap: wrap;
    }
`;

const PricePlans = () => {
    const [monthly, setMonthly] = useState(true);

    return (
        <PricePlanSection id="price-plan">
            <PricePlanSectionContainer>
                <HeaderWrapper>
                    <Subtitle variant="subtitleLG" weight="semibold">
                        Join Projectify
                    </Subtitle>
                    <Title variant="h5" weight="bold">
                        Find the <SpanText>Right Plan</SpanText>
                    </Title>
                    <Description variant="paragraphSM" weight="medium">
                        Flexible options for startups and big teams
                    </Description>
                    <ToggleWrapper>
                        <ToggleTextLeft variant="paragraphSM" weight="medium">
                            Billed yearly
                        </ToggleTextLeft>
                        <Switch
                            checked={monthly}
                            shape="circle"
                            onSwitch={() => {
                                setMonthly(!monthly);
                            }}
                        />
                        <Typography variant="paragraphSM" weight="medium">
                            Billed Monthly
                        </Typography>
                    </ToggleWrapper>
                </HeaderWrapper>
                <PricePlansWrapper>
                    {currentPlans.map((plan, idx) => (
                        <Plan
                            key={idx}
                            type={plan.type}
                            subtitle={plan.subtitle}
                            iconName={plan.iconName}
                            checkColor={plan.checkColor}
                            title={plan.title}
                            priceMonthly={plan.priceMonthly}
                            priceYearly={plan.priceYearly}
                            isMonthly={monthly}
                            projects={plan.projects}
                            users={plan.users}
                            storage={plan.storage}
                            extras={plan.extras}
                        />
                    ))}
                </PricePlansWrapper>
            </PricePlanSectionContainer>
        </PricePlanSection>
    );
};

export default PricePlans;
