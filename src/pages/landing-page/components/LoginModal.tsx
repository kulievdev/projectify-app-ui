import styled from "styled-components";
import { Typography, Modal, Button } from "../../../design-system";
import { useNavigate } from "react-router-dom";

type CreateTaskModalProps = {
    show: boolean;
    closeModal: () => void;
};

const ModalTitle = styled(Typography)`
    text-align: center;
    margin-bottom: var(--space-24);
`;

const Buttons = styled.div`
    display: flex;
    gap: var(--space-30);
    margin-bottom: var(--space-30);
`;

const LoginModal: React.FC<CreateTaskModalProps> = ({ show, closeModal }) => {
    const navigate = useNavigate();

    return (
        <Modal show={show} position="center">
            <ModalTitle variant="paragraphLG" weight="medium">
                Login as
            </ModalTitle>
            <Buttons>
                <Button
                    color="primary"
                    size="lg"
                    shape="rounded"
                    variant="outlined"
                    fullWidth
                    onClick={() => {
                        navigate("admin/login");
                    }}
                >
                    Admin
                </Button>
                <Button
                    color="primary"
                    size="lg"
                    shape="rounded"
                    variant="outlined"
                    fullWidth
                    onClick={() => {
                        navigate("team-member/login");
                    }}
                >
                    Team Member
                </Button>
            </Buttons>
            <Button
                color="secondary"
                size="lg"
                shape="rounded"
                variant="outlined"
                fullWidth
                onClick={closeModal}
            >
                Cancel
            </Button>
        </Modal>
    );
};

export default LoginModal;
