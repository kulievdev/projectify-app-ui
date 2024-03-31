import styled from "styled-components";
import { Icon, Typography } from "../../../design-system";

type FeatureCardProps = {
    iconName: string;
    featureTitle: string;
    featureDescription: string;
    backgroundColor: string;
};

const FeatureCardWrapper = styled.div<{ $backgroundColor: string }>`
    background-color: ${(props) => props.$backgroundColor};
`;

const FeatureCardIconWrapper = styled.div<{ $backgroundColor: string }>`
    background-color: ${(props) => props.$backgroundColor};
    margin-bottom: var(--space-50);
`;

const FeatureCardContentWrapper = styled.div``;

const FeatureText = styled(Typography)`
    color: var(--jaguar-500);
`;

const FeatureCard: React.FC<FeatureCardProps> = ({
    iconName,
    featureTitle,
    featureDescription,
    backgroundColor
}) => {
    return (
        <FeatureCardWrapper $backgroundColor={backgroundColor}>
            <FeatureCardIconWrapper $backgroundColor={backgroundColor}>
                <Icon iconName={iconName} />
            </FeatureCardIconWrapper>
            <FeatureCardContentWrapper>
                <Typography variant="paragraphLG" weight="bold">
                    {featureTitle}
                </Typography>
                <FeatureText variant="paragraphSM" weight="medium">
                    {featureDescription}
                </FeatureText>
            </FeatureCardContentWrapper>
        </FeatureCardWrapper>
    );
};

export default FeatureCard;
