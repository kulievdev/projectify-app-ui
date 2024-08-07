import { App } from "../App";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from "react-router-dom";
import {
    AdminForgotPassword,
    AdminLogin,
    AdminResetPassword,
    AdminSignUp,
    AdminPlatform,
    AdminProjects,
    TeamMemberCreatePassword,
    TeamMemberLogin,
    TeamMemberPlatform,
    TeamMemberResetPassword,
    TeamMemberForgotPassword,
    AdminUser
} from "../pages";
import { UserRole } from "../types";
import { Auth } from "./Auth";
import { ProtectedRoute } from "./ProtectedRoute";
import { AdminPersonalTasks } from "../pages/admin-platform/personal-tasks/AdminPersonalTasks";
import { AdminTeamMembers } from "../pages/admin-platform/team-members/AdminTeamMembers";
import { TeamMemberPersonalTasks } from "../pages/team-member-platform/personal-tasks/TeamMemberPersonalTasks";
import { SettingsPage, SupportPage } from "../pages/components";
import { TeamMemberUser } from "../pages/team-member-platform/user/TeamMemberUser";
import { AdminDemoLogin } from "../pages/admin-auth/login/AdminDemoLogin";
import { TeamMemberDemoLogin } from "../pages/team-member-auth/login/TeamMemberDemoLogin";
import { AdminAccountActivation } from "../pages/admin-auth/activate-account/AccountActivation";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<App />} />
            <Route
                path="admin/sign-up"
                element={
                    <Auth
                        component={<AdminSignUp />}
                        userType={UserRole.admin}
                    />
                }
            />
            <Route
                path="admin/activate-account"
                element={
                    <Auth
                        userType={UserRole.admin}
                        component={<AdminAccountActivation />}
                    />
                }
            />
            <Route
                path="admin/login"
                element={
                    <Auth
                        component={<AdminLogin />}
                        userType={UserRole.admin}
                    />
                }
            />
            <Route
                path="admin/demo-login"
                element={
                    <Auth
                        component={<AdminDemoLogin />}
                        userType={UserRole.admin}
                    />
                }
            />
            <Route
                path="admin/forgot-password"
                element={
                    <Auth
                        component={<AdminForgotPassword />}
                        userType={UserRole.admin}
                    />
                }
            />
            <Route
                path="admin/reset-password"
                element={
                    <Auth
                        component={<AdminResetPassword />}
                        userType={UserRole.admin}
                    />
                }
            />
            <Route
                path="admin/platform"
                element={
                    <ProtectedRoute
                        component={<AdminPlatform />}
                        userType={UserRole.admin}
                    />
                }
            >
                <Route path="me" element={<AdminUser />} />
                <Route path="projects" element={<AdminProjects />} />
                <Route path="stories" element={<h1>Stories</h1>} />
                <Route path="personal-tasks" element={<AdminPersonalTasks />} />
                <Route path="team-members" element={<AdminTeamMembers />} />
                <Route
                    path="settings"
                    element={<SettingsPage role="admin" />}
                />
                <Route path="support" element={<SupportPage />} />
            </Route>

            <Route
                path="team-member/login"
                element={
                    <Auth
                        component={<TeamMemberLogin />}
                        userType={UserRole.teamMember}
                    />
                }
            />
            <Route
                path="team-member/demo-login"
                element={
                    <Auth
                        component={<TeamMemberDemoLogin />}
                        userType={UserRole.teamMember}
                    />
                }
            />
            <Route
                path="team-member/forgot-password"
                element={
                    <Auth
                        component={<TeamMemberForgotPassword />}
                        userType={UserRole.teamMember}
                    />
                }
            />
            <Route
                path="team-member/reset-password"
                element={
                    <Auth
                        component={<TeamMemberResetPassword />}
                        userType={UserRole.teamMember}
                    />
                }
            />
            <Route
                path="team-member/create-password"
                element={
                    <Auth
                        component={<TeamMemberCreatePassword />}
                        userType={UserRole.teamMember}
                    />
                }
            />
            <Route
                path="team-member/platform"
                element={
                    <ProtectedRoute
                        component={<TeamMemberPlatform />}
                        userType={UserRole.teamMember}
                    />
                }
            >
                <Route path="me" element={<TeamMemberUser />} />
                <Route path="projects" element={<h1>Projects</h1>} />
                <Route path="stories" element={<h1>Stories</h1>} />
                <Route
                    path="personal-tasks"
                    element={<TeamMemberPersonalTasks />}
                />
                <Route
                    path="settings"
                    element={<SettingsPage role="team-member" />}
                />
                <Route path="support" element={<SupportPage />} />
            </Route>
        </>
    )
);
