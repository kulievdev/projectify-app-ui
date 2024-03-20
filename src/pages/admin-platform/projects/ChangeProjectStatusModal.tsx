import toast from "react-hot-toast";
import { adminProjectService } from "../../../api/admin/adminProjects";
import { useStore } from "../../../hooks";
import { Actions, ChangeProjectStatusAction } from "../../../store";
import { ProjectStatus } from "../../../types";
import { ConfirmationModal } from "../../components";

type ChangeProjectStatusModalProps = {
    show: boolean;
    projectId: string;
    closeModal: () => void;
    changeStatusTo: ProjectStatus;
};

const generateMessages = (status: ProjectStatus) => {
    const messages = {
        confirmation: "",
        success: ""
    };

    const statusToVerb = {
        ONHOLD: "paused",
        ARCHIVED: "archieved",
        ACTIVE: "actived",
        COMPLETED: "completed"
    };

    messages.confirmation = `Are you sure you want to change the project status to ${status}`;
    messages.success = `Project has been successfully ${statusToVerb[status]} `;

    return messages;
};

const ChangeProjectStatusModal: React.FC<ChangeProjectStatusModalProps> = ({
    show,
    projectId,
    closeModal,
    changeStatusTo
}) => {
    const { dispatch } = useStore();

    const changeProjectStatus = () => {
        adminProjectService
            .changeStatus(projectId, changeStatusTo)
            .then((_) => {
                const action: ChangeProjectStatusAction = {
                    type: Actions.CHANGE_PROJECT_STATUS,
                    payload: {
                        id: projectId,
                        status: changeStatusTo
                    }
                };
                dispatch(action);
                closeModal();
                toast.success(generateMessages(changeStatusTo).success);
            })
            .catch((e) => {
                closeModal();
                const err = e as Error;
                toast.error(err.message);
            });
    };
    return (
        <ConfirmationModal
            confirmationMessage={generateMessages(changeStatusTo).confirmation}
            show={show}
            cancel={closeModal}
            onConfirm={changeProjectStatus}
        />
    );
};

export { ChangeProjectStatusModal };
