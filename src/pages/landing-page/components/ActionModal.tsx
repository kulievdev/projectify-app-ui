import styled from "styled-components";
import { Typography, Modal, Button } from "../../../design-system";
import { useNavigate } from "react-router-dom";

type CreateTaskModalProps = {
    title: string;
    adminNav: string;
    teamMemberNav: string;
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

const ActionModal: React.FC<CreateTaskModalProps> = ({
    title,
    adminNav,
    teamMemberNav,
    show,
    closeModal
}) => {
    const navigate = useNavigate();

    return (
        <Modal show={show} position="center">
            <ModalTitle variant="paragraphLG" weight="medium">
                {title} as
            </ModalTitle>
            <Buttons>
                <Button
                    color="primary"
                    size="lg"
                    shape="rounded"
                    variant="outlined"
                    fullWidth
                    onClick={() => {
                        navigate(adminNav);
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
                        navigate(teamMemberNav);
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

export default ActionModal;
