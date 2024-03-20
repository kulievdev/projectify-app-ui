import { useEffect } from "react";
import { Modal } from "../../../design-system";
import { useStore } from "../../../hooks";
import { Actions, PopulateProjectContributorsAction } from "../../../store";
import toast from "react-hot-toast";
import { adminProjectService } from "../../../api/admin/adminProjects";

type Props = {
    projectId: string;
    show: boolean;
    closeModal: () => void;
};

const ManageContributorsModal: React.FC<Props> = ({
    projectId,
    show,
    closeModal
}) => {
    const { state, dispatch } = useStore();

    useEffect(() => {
        if (projectId) {
            adminProjectService
                .getContributors(projectId)
                .then(({ data }) => {
                    const action: PopulateProjectContributorsAction = {
                        type: Actions.POPULATE_PROJECT_CONTRIBUTORS,
                        payload: {
                            id: projectId,
                            data: data
                        }
                    };
                    dispatch(action);
                })
                .catch((e) => {
                    const err = e as Error;
                    toast.error(err.message);
                });
        }
    }, [projectId]);
    return (
        <Modal show={show} position="right">
            Hi
        </Modal>
    );
};

export { ManageContributorsModal };