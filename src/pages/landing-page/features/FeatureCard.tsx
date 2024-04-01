import styled from "styled-components";
import { Icon, Typography } from "../../../design-system";

type FeatureCardProps = {
    iconName: string;
    featureTitle: string;
    featureDescription: string;
    cardBackgroundColor: string;
    iconWrapperBackgroundColor: string;
    iconWrapperBorderColor: string;
};

const FeatureCardWrapper = styled.div<{ $cardBackgroundColor: string }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: var(--space-40) var(--space-8) var(--space-8) var(--space-8);
    border: none;
    border-radius: var(--space-40);

    background-color: ${(props) => props.$cardBackgroundColor};
`;

const FeatureCardIconWrapper = styled.div<{
    $iconWrapperBackgroundColor: string;
    $iconWrapperBorderColor: string;
}>`
    width: 10.8rem;
    height: 10.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--space-30) var(--space-34);
    margin-bottom: var(--space-50);
    border: 0.1rem solid ${(props) => props.$iconWrapperBorderColor};
    border-radius: var(--space-32);

    background-color: ${(props) => props.$iconWrapperBackgroundColor};
`;

const FeatureIcon = styled(Icon)`
    width: var(--space-50);
    height: var(--space-50);
`;

const FeatureCardContentWrapper = styled.div`
    padding: var(--space-24);
    border: none;
    border-radius: var(--space-32);
    background-color: var(--white);
`;

const FeatureTitle = styled(Typography)`
    margin-bottom: var(--space-8);
`;

const FeatureText = styled(Typography)`
    color: var(--jaguar-500);
`;

const FeatureCard: React.FC<FeatureCardProps> = ({
    iconName,
    featureTitle,
    featureDescription,
    cardBackgroundColor,
    iconWrapperBackgroundColor,
    iconWrapperBorderColor
}) => {
    return (
        <FeatureCardWrapper $cardBackgroundColor={cardBackgroundColor}>
            <FeatureCardIconWrapper
                $iconWrapperBackgroundColor={iconWrapperBackgroundColor}
                $iconWrapperBorderColor={iconWrapperBorderColor}
            >
                <FeatureIcon iconName={iconName} />
            </FeatureCardIconWrapper>
            <FeatureCardContentWrapper>
                <FeatureTitle variant="paragraphLG" weight="bold">
                    {featureTitle}
                </FeatureTitle>
                <FeatureText variant="paragraphSM" weight="medium">
                    {featureDescription}
                </FeatureText>
            </FeatureCardContentWrapper>
        </FeatureCardWrapper>
    );
};

export default FeatureCard;
