import { useState } from "react";
import { Button, Input, Toaster } from "../../../design-system";
import { AuthWrapper } from "../../components";
import teamWork from "../../../assets/images/team-work.jpg";
import styled from "styled-components";
import { useFocus } from "../../../custom-hooks/useFocus";
import { teamMember } from "../../../api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../../../custom-hooks/useLocalStorage";

const Form = styled.form`
    width: 100%;
    display: grid;
    gap: var(--space-20);
`;

const TeamMemberLogin = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isFormSubmitting, setIsFormSubmitting] = useState<boolean>(false);
    const navigate = useNavigate();
    const isFormSubmittable = email && password;
    const { setItem } = useLocalStorage();
    const focusRef = useFocus();

    const handleOnChangeEmail = (value: string) => {
        setEmail(value);
    };

    const handleOnChangePassword = (value: string) => {
        setPassword(value);
    };

    const login = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            setIsFormSubmitting(true);

            const response = await teamMember.signIn({
                email,
                password
            });

            setItem("authToken", response.token);

            setIsFormSubmitting(false);

            setEmail("");
            setPassword("");

            setTimeout(() => {
                navigate("../team-member/platform");
            }, 1000);
        } catch (error) {
            if (error instanceof Error) {
                setIsFormSubmitting(false);

                toast.error(error.message);
            }
        }
    };

    return (
        <>
            <AuthWrapper imageUrl={teamWork} pageTitle="Login" switchLayout>
                <Form onSubmit={login} noValidate>
                    <Input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleOnChangeEmail}
                        shape="rounded"
                        size="lg"
                        disabled={isFormSubmitting}
                        required={true}
                        inputRef={focusRef}
                    />
                    <Input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={handleOnChangePassword}
                        shape="rounded"
                        size="lg"
                        disabled={isFormSubmitting}
                        required={true}
                    />

                    <Button
                        color="primary"
                        size="lg"
                        shape="rounded"
                        disabled={isFormSubmitting || !isFormSubmittable}
                    >
                        Login
                    </Button>
                </Form>
            </AuthWrapper>
            <Toaster />
        </>
    );
};

export { TeamMemberLogin };
