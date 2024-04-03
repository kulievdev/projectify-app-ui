import styled from "styled-components";
import { Button, Icon, Typography } from "../../../design-system";

type PlanProps = {
    type: string;
    subtitle: string;
    iconName: string;
    checkColor: string;
    title: string;
    price: string;
    projects: string;
    users: string;
    storage: string;
    extras: string[];
};

const PlanCardWrapper = styled.div<{ $type: string }>`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: var(--space-30);
    border: 0.1rem solid var(--jaguar-100);
    border-radius: var(--space-40);

    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.08);

    background-color: ${(props) =>
        props.$type === "primary" ? "var(--primary-500)" : "var(--white)"};
`;

const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: var(--space-30);
`;

const Subtitle = styled(Typography)<{ $type: string }>`
    text-transform: uppercase;
    margin-bottom: var(--space-24);
    color: ${(props) => (props.$type === "primary" ? "var(--white)" : "")};
`;

const IconWrapper = styled.div<{ $type: string }>`
    padding: var(--space-20);
    border-radius: var(--space-24);
    margin-bottom: var(--space-24);

    background-color: ${(props) =>
        props.$type === "primary" ? "var(--sunglow-400)" : "var(--primary-50)"};
    border: 0.1rem solid
        ${(props) =>
            props.$type === "primary"
                ? "var(--sunglow-400)"
                : "var(--primary-100)"};

    @media (min-width: 700px) {
        padding: var(--space-28);
        border-radius: var(--space-32);
    }
`;

const PlanIcon = styled(Icon)`
    width: var(--space-30);
    height: var(--space-30);

    @media (min-width: 700px) {
        width: var(--space-50);
        height: var(--space-50);
    }
`;

const Title = styled(Typography)<{ $type: string }>`
    color: ${(props) => (props.$type === "primary" ? "var(--white)" : "")};

    @media (max-width: 701px) {
        font-size: var(--space-24);
    }
`;

const PriceWrapper = styled.div`
    display: flex;
    gap: var(--space-8);
`;

const PriceText = styled(Typography)<{ $type: string }>`
    color: ${(props) => (props.$type === "primary" ? "var(--white)" : "")};
`;

const PriceSpan = styled(Typography)<{ $type: string }>`
    color: ${(props) =>
        props.$type === "primary" ? "var(--white)" : "var(--jaguar-500)"};
`;

const ServicesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--space-12);

    margin-bottom: var(--space-30);
`;

const Service = styled.div`
    display: flex;
    gap: var(--space-8);
`;

const ServiceText = styled(Typography)<{ $type: string }>`
    color: ${(props) => (props.$type === "primary" ? "var(--white)" : "")};
`;

const SpanText = styled.span<{ $type: string }>`
    font-size: var(--space-16);
    line-height: var(--space-24);
    font-weight: 700;

    color: ${(props) => (props.$type === "primary" ? "var(--white)" : "")};
`;

const CtaButton = styled(Button)<{ $type: string }>`
    margin-top: auto;
    background-color: ${(props) =>
        props.$type === "primary" ? "var(--white)" : ""};
    color: ${(props) =>
        props.$type === "primary" ? "var(--primary-500)" : ""};

    &:hover,
    &:focus {
        background-color: ${(props) =>
            props.$type === "primary" ? "var(--sunglow-500)" : ""};
        color: ${(props) => (props.$type === "primary" ? "var(--white)" : "")};
    }
`;

const Plan: React.FC<PlanProps> = ({
    type,
    subtitle,
    iconName,
    checkColor,
    title,
    price,
    projects,
    users,
    storage,
    extras
}) => {
    return (
        <PlanCardWrapper $type={type}>
            <HeaderWrapper>
                <Subtitle $type={type} variant="subtitleLG" weight="semibold">
                    {subtitle}
                </Subtitle>
                <IconWrapper $type={type}>
                    <PlanIcon iconName={iconName} />
                </IconWrapper>
                <Title $type={type} variant="h4" weight="semibold">
                    {title}
                </Title>
                <PriceWrapper>
                    <PriceText $type={type} variant="paragraphLG" weight="bold">
                        {price}
                    </PriceText>
                    <PriceSpan
                        $type={type}
                        variant="paragraphSM"
                        weight="medium"
                    >
                        /month
                    </PriceSpan>
                </PriceWrapper>
            </HeaderWrapper>
            <ServicesWrapper>
                <Service>
                    <Icon iconName={checkColor} />
                    <ServiceText
                        $type={type}
                        variant="paragraphSM"
                        weight="medium"
                    >
                        Projects: <SpanText $type={type}>{projects}</SpanText>
                    </ServiceText>
                </Service>
                <Service>
                    <Icon iconName={checkColor} />
                    <ServiceText
                        $type={type}
                        variant="paragraphSM"
                        weight="medium"
                    >
                        Users: <SpanText $type={type}>{users}</SpanText>
                    </ServiceText>
                </Service>
                <Service>
                    <Icon iconName={checkColor} />
                    <ServiceText
                        $type={type}
                        variant="paragraphSM"
                        weight="medium"
                    >
                        Storage: <SpanText $type={type}>{storage}</SpanText>
                    </ServiceText>
                </Service>
                {extras.map((extraService, idx) => (
                    <Service key={idx}>
                        <Icon iconName={checkColor} />
                        <ServiceText
                            $type={type}
                            variant="paragraphSM"
                            weight="medium"
                        >
                            {extraService}
                        </ServiceText>
                    </Service>
                ))}
            </ServicesWrapper>
            <CtaButton
                $type={type}
                fullWidth={true}
                size="lg"
                shape="circle"
                color="primary"
            >
                Try free for 15 days
            </CtaButton>
        </PlanCardWrapper>
    );
};

export default Plan;
