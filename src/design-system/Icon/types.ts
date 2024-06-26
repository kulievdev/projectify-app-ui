export type IconName =
    | "tasks"
    | "support"
    | "stories"
    | "settings"
    | "projects"
    | "members"
    | "log-out"
    | "chevron-right"
    | "flag"
    | "arrow-left"
    | "password-eye"
    | "password-eye-off"
    | "check"
    | "three-dots"
    | "edit"
    | "delete"
    | "chevron-down"
    | "calendar"
    | "check-sharp"
    | "minus-sharp"
    | "minus"
    | "x"
    | "info-in-circle-filled"
    | "check-in-circle-filled"
    | "info-in-circle-sharp-filled"
    | "check-in-circle-sharp-filled"
    | "check-in-circle-sharp-filled"
    | "check-in-circle"
    | "x-in-circle"
    | "archive"
    | "arrow-left"
    | "pause-in-circle"
    | "play-in-circle";

export type IconProps = {
    iconName: IconName | string;
    className?: string;
    onClick?: () => void;
};
