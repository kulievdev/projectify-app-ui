import styled from "styled-components";
import Layout from "../components/Layout";
import { Icon, Logo, Typography } from "../../../design-system";
import officeLocation from "../images/office-map.png";

const ContactSection = styled(Layout)``;

const ContactSectionContainer = styled.div`
    padding-top: var(--space-100);
    display: flex;
    gap: var(--space-30);
`;

const BrandWrapper = styled.div`
    width: calc(100% - 37rem);
    display: flex;
    flex-direction: column;
    gap: var(--space-30);
`;

const BrandText = styled(Typography)`
    width: calc(100% - 17rem);
`;

const SocialsWrapper = styled.div`
    width: calc(100% - 37rem);

    display: flex;
    flex-direction: column;
    gap: var(--space-30);
`;

const ContactWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: var(--space-12);
`;

const ContactIcon = styled(Icon)`
    width: var(--space-20);
    height: var(--space-20);
`;

const Link = styled.a`
    color: var(--jaguar-900);
    font-size: var(--space-16);
    line-height: var(--space-20);
`;

const SocialMediaWrapper = styled.div`
    display: flex;
    gap: var(--space-20);
`;

const SocialIcon = styled(Icon)`
    width: var(--space-32);
    height: var(--space-32);
`;

const ImageWrapper = styled.div`
    width: calc(100% - 37rem);
`;

const Image = styled.img`
    width: 100%;
`;

const Contact = () => {
    return (
        <ContactSection>
            <ContactSectionContainer>
                <BrandWrapper>
                    <Logo size="sm" layout="horizontal" />
                    <BrandText variant="paragraphSM" weight="bold">
                        Unleashing Success One Project at a Time!
                    </BrandText>
                </BrandWrapper>
                <SocialsWrapper>
                    <ContactWrapper>
                        <ContactIcon iconName="phone" />
                        <Link href="tel:++1 (555) 555-11234">
                            +1 (555) 555-11234
                        </Link>
                    </ContactWrapper>
                    <ContactWrapper>
                        <ContactIcon iconName="email-purple" />
                        <Link href="mailto:info@projectify.com">
                            info@projectify.com
                        </Link>
                    </ContactWrapper>
                    <ContactWrapper>
                        <ContactIcon iconName="location" />
                        <Link href="https://www.google.com/maps/dir/40.721471,-73.7644025/205+Allen+St,+New+York,+NY+10002/@40.7356654,-74.0472305,11z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x89c2598474c10bcf:0xd62d514f22a03f04!2m2!1d-73.9890753!2d40.7227487?entry=ttu">
                            205 Allen St, New York, NY 10002, USA
                        </Link>
                    </ContactWrapper>
                    <SocialMediaWrapper>
                        <SocialIcon iconName="facebook" />
                        <SocialIcon iconName="twitter" />
                        <SocialIcon iconName="instagram" />
                    </SocialMediaWrapper>
                </SocialsWrapper>
                <ImageWrapper>
                    <Image
                        src={officeLocation}
                        alt="Office Location Screenshot"
                    />
                </ImageWrapper>
            </ContactSectionContainer>
        </ContactSection>
    );
};

export default Contact;
