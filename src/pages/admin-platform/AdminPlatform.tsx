import { Outlet, useNavigate } from "react-router-dom";
import { SideBarNav, SideBarNavLinks, Toaster } from "../../design-system";
import { AppLayout, AppPage, SideBarUser } from "../components";
import { Actions } from "../../store/actions";
import { useLocalStorage, useStore } from "../../hooks";
import { adminLinks } from "./adminLinks";

const AdminPlatform = () => {
    const {
        state: { user },
        dispatch
    } = useStore();

    const navigate = useNavigate();
    const { removeItem } = useLocalStorage();

    const logOut = () => {
        removeItem("authToken");
        removeItem("userRole");
        dispatch({ type: Actions.RESET_STATE });
        navigate("/admin/login");
    };

    return (
        <>
            <AppLayout>
                <SideBarNav>
                    <SideBarUser
                        details={{
                            firstName: user?.firstName || "",
                            lastName: user?.lastName || "",
                            imageUrl: "",
                            email: user?.email || ""
                        }}
                        onClick={() => navigate("me")}
                    />
                    <SideBarNavLinks links={adminLinks} logOut={logOut} />
                </SideBarNav>
                <AppPage>
                    <Outlet />
                </AppPage>
            </AppLayout>
            <Toaster />
        </>
    );
};

export { AdminPlatform };
