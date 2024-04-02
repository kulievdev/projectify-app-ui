import styled from "styled-components";
import { Button, Icon, Typography } from "../../../design-system";
import paperPlane from "../images/paperPlane.png";

const RequestDemoSection = styled.section`
    padding-top: var(--space-100);
    background: linear-gradient(to right, #6826f7, #bb9cfb);
`;

const RequestDemoContainer = styled.div`
    text-align: center;
    padding: 0 15rem;

    @media (min-width: 1620px) {
        padding: 0 37.5rem;
    }
`;

const Header = styled(Typography)`
    color: var(--white);
    margin-bottom: var(--space-50);
`;

const ContentWrapper = styled.div`
    display: flex;
    gap: var(--space-34);
`;

const ImageWrapper = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Image = styled.img`
    width: 100%;
`;

const Form = styled.form`
    width: 50%;
    display: flex;
    flex-direction: column;

    > *:not(:nth-child(3)) {
        margin-bottom: var(--space-20);
    }

    > *:nth-child(3) {
        margin-bottom: var(--space-30);
    }
`;

const InputWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`;

const Input = styled.input`
    width: 100%;
    padding: var(--space-16) var(--space-48);
    border: 0.15rem solid var(--jaguar-200);
    border-radius: var(--space-16);
`;

const InputIcon = styled(Icon)`
    position: absolute;
    left: var(--space-14);
    width: var(--space-24);
    height: var(--space-24);
`;

const RequestButton = styled(Button)`
    color: var(--black);
    background-color: var(--sunglow-300);
`;

const RequestDemo = () => {
    return (
        <RequestDemoSection>
            <RequestDemoContainer>
                <Header variant="h5" weight="bold">
                    Ready to get your hands on Projectify?!
                </Header>
                <ContentWrapper>
                    <ImageWrapper>
                        <Image src={paperPlane} alt="PaperPlane Image" />
                    </ImageWrapper>
                    <Form>
                        <InputWrapper>
                            <InputIcon iconName="email" />
                            <Input
                                style={{ color: "red" }}
                                placeholder="Name"
                                type="text"
                            ></Input>
                        </InputWrapper>
                        <InputWrapper>
                            <InputIcon iconName="email" />
                            <Input placeholder="Email" type="email"></Input>
                        </InputWrapper>
                        <InputWrapper>
                            <InputIcon iconName="company" />
                            <Input placeholder="Company" type="text"></Input>
                        </InputWrapper>
                        <RequestButton
                            fullWidth={true}
                            shape="circle"
                            size="lg"
                        >
                            Request a Demo
                        </RequestButton>
                    </Form>
                </ContentWrapper>
            </RequestDemoContainer>
        </RequestDemoSection>
    );
};

export default RequestDemo;
