import styled from "styled-components";
import { Icon, Logo, Typography } from "../../../design-system";
import officeLocation from "../images/office-map.png";
import LayoutWrapper from "../components/LayoutWrapper";

const ContactSection = styled(LayoutWrapper)``;

const ContactSectionContainer = styled.div`
    padding: var(--space-100) 0;
    display: flex;
    flex-direction: column;
    gap: var(--space-50);

    @media (min-width: 700px) {
        flex-direction: row;
    }
`;

const BrandWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--space-18);

    @media (min-width: 550px) {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 0;
    }

    @media (min-width: 700px) {
        flex-direction: column;
        align-items: unset;
        justify-content: unset;
        gap: var(--space-30);
        width: calc(100% - 37rem);
    }
`;

const BrandText = styled(Typography)`
    @media (min-width: 700px) {
        width: 70%;
    }
`;

const SocialsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--space-30);

    @media (min-width: 700px) {
        width: calc(100% - 37rem);
    }
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
    cursor: pointer;
    width: var(--space-32);
    height: var(--space-32);
`;

const ImageWrapper = styled.div`
    @media (min-width: 700px) {
        width: calc(100% - 37rem);
    }
`;

const Image = styled.img`
    width: 100%;
`;

const Contact = () => {
    return (
        <ContactSection id="contact">
            <ContactSectionContainer>
                <BrandWrapper>
                    <Link href="#home">
                        <Logo size="sm" layout="horizontal" />
                    </Link>
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
                        <Link href="https://www.google.com/search?q=205+Allen+St%2C+New+York%2C+NY+10002%2C+USA&rlz=1C5CHFA_enUS964US964&oq=205+Allen+St%2C+New+York%2C+NY+10002%2C+USA&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg70gEHMzg5ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8">
                            205 Allen St, New York, NY 10002, USA
                        </Link>
                    </ContactWrapper>
                    <SocialMediaWrapper>
                        <Link href="https://www.facebook.com/">
                            <SocialIcon iconName="facebook" />
                        </Link>
                        <Link href="https://twitter.com/">
                            <SocialIcon iconName="twitter" />
                        </Link>
                        <Link href="https://www.instagram.com/">
                            <SocialIcon iconName="instagram" />
                        </Link>
                    </SocialMediaWrapper>
                </SocialsWrapper>
                <ImageWrapper>
                    <Link href="https://www.google.com/maps/dir/40.721471,-73.7644025/205+Allen+St,+New+York,+NY+10002/@40.7379299,-74.0472305,11z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x89c2598474c10bcf:0xd62d514f22a03f04!2m2!1d-73.9890753!2d40.7227487?entry=ttu">
                        <Image
                            src={officeLocation}
                            alt="Office Location Screenshot"
                        />
                    </Link>
                </ImageWrapper>
            </ContactSectionContainer>
        </ContactSection>
    );
};

export default Contact;
