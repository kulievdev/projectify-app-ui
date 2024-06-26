import { FC, ReactNode } from "react";
import styled from "styled-components";
import { Logo, Toaster } from "../../../design-system";

type AuthWrapperProps = {
    imageUrl: string;
    children: ReactNode;
    pageTitle: string;
    switchLayout?: boolean;
};

const Wrapper = styled.main`
    @media (min-width: 1300px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 100vh;
    }
`;

const AuthForm = styled.section<{ $switchLayout?: boolean }>`
    padding: var(--space-20);

    @media (min-width: 600px) {
        padding: var(--space-50);
        grid-row: 1 / 2;
        grid-column: ${(props) => (props.$switchLayout ? "2 / 3" : "1 / 2")};

        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

const AuthContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-50);
    flex-basis: 57rem;
`;

const AuthImageWrapper = styled.section<{ $switchLayout?: boolean }>`
    padding: var(--space-20);

    @media (min-width: 600px) {
        padding: var(--space-50);
        grid-row: 1 / 2;
        grid-column: ${(props) => (props.$switchLayout ? "1 / 2 " : "2 / 3")};
    }
`;

const AuthImage = styled.img`
    height: 100%;
    width: 100%;
    border-radius: var(--space-50);
    object-fit: cover;
    transition: all 1s;

    alt: "Flatiron Building";

    &:hover {
        transform: scale(1.05);
    }
`;

const AuthWrapper: FC<AuthWrapperProps> = ({
    imageUrl,
    pageTitle,
    switchLayout,
    children
}) => {
    return (
        <>
            <Wrapper>
                <AuthForm $switchLayout={switchLayout}>
                    <AuthContent>
                        <Logo
                            layout="vertical"
                            size="lg"
                            customText={pageTitle}
                        />
                        {children}
                    </AuthContent>
                </AuthForm>
                <AuthImageWrapper $switchLayout={switchLayout}>
                    <AuthImage src={imageUrl} />
                </AuthImageWrapper>
            </Wrapper>
            <Toaster />
        </>
    );
};

export { AuthWrapper };
