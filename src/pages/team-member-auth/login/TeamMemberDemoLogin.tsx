import { useState } from "react";
import { Button, Input, Label } from "../../../design-system";
import { AuthWrapper } from "../../components";
import office from "../../../assets/images/office.jpg";
import styled from "styled-components";
import { useFocus } from "../../../hooks/useFocus";
import { teamMemberService } from "../../../api";
import toast from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import { PasswordInputWithEye } from "../../components/PasswordInputWithEye";

const Form = styled.form`
    width: 100%;
    display: grid;
    gap: var(--space-30);
`;

const PasswordLabelWrapper = styled.div`
    display: grid;

    grid-template-columns: 1fr 1fr;
    align-items: center;

    .password-label {
        grid-column: 1 / 2;
    }

    .forgot-password-link {
        grid-column: 2 / 3;
        font-size: var(--font-size-16);
        line-height: var(--line-height-24);
        color: var(--primary-500);
        font-weight: var(--font-weight-500);
        text-align: right;
        margin-bottom: var(--space-6);
    }

    .login__input-password {
        grid-column: 1 / 3;
    }
`;

const TeamMemberDemoLogin = () => {
    const [email, setEmail] = useState<string>(
        "projectify.tm_demo@protonmail.com"
    );
    const [password, setPassword] = useState<string>("team-member-secret123");
    const [isFormSubmitting, setIsFormSubmitting] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);

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

    const saveAuthToken = (token: string) => {
        setItem("authToken", token);
    };

    const login = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            setIsFormSubmitting(true);

            const { token } = await teamMemberService.signIn({
                email,
                password
            });

            saveAuthToken(token);

            setIsFormSubmitting(false);

            setEmail("");
            setPassword("");

            navigate("../team-member/platform/personal-tasks");
        } catch (error) {
            if (error instanceof Error) {
                setIsFormSubmitting(false);
                setIsError(true);
                toast.error(error.message);
            }
        }
    };

    return (
        <AuthWrapper imageUrl={office} pageTitle="Login" switchLayout>
            <Form onSubmit={login} noValidate>
                <Input
                    labelText="Email"
                    type="email"
                    value={email}
                    onChange={handleOnChangeEmail}
                    shape="rounded"
                    size="lg"
                    disabled={isFormSubmitting}
                    required={true}
                    inputRef={focusRef}
                />
                <PasswordLabelWrapper>
                    <Label className="password-label">Password</Label>
                    <Link
                        to={"/team-member/forgot-password"}
                        className="forgot-password-link"
                    >
                        Forgot password?
                    </Link>
                    <PasswordInputWithEye
                        isFormSubmitting={isFormSubmitting}
                        password={password}
                        handleOnChangePassword={handleOnChangePassword}
                        inputClassName="login__input-password"
                    />
                </PasswordLabelWrapper>

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
    );
};

export { TeamMemberDemoLogin };
