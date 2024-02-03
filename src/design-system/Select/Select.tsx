import { Option, OptionValue, SelectProps } from "./types";
import { useEffect, useRef, useState } from "react";
import { Label } from "../Label";
import { Button } from "../Button";
import "./Select.css";
import { trimWhiteSpaces } from "../utils";
import { Icon } from "../Icon";

const sizeClassNames = {
    md: "select-medium",
    lg: "select-large"
};

const shapeClassNames = {
    rounded: "select-rounded",
    circle: "select-circle"
};

const handleOutsideClick = (
    event: Event,
    ref: React.RefObject<HTMLDivElement>,
    setShow: (arg: boolean) => void
) => {
    if (
        ref &&
        ref.current &&
        event.target instanceof Node &&
        !ref.current.contains(event.target)
    ) {
        setShow(false);
    }
};

const Select: React.FC<SelectProps> = (props) => {
    const {
        options,
        value,
        onSelect,
        label,
        headerPlaceholder,
        size,
        shape,
        disabled,
        error,
        hintMessage,
        searchable,
        className
    } = props;

    const [expanded, setExpanded] = useState<boolean>(false);

    const selectRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (expanded) {
            document.addEventListener("mousedown", (e) =>
                handleOutsideClick(e, selectRef, setExpanded)
            );
        }

        return () => {
            document.removeEventListener("mousedown", (e) =>
                handleOutsideClick(e, selectRef, setExpanded)
            );
        };
    }, [expanded]);

    const onClickHeader = () => {
        setExpanded((prevValue) => !prevValue);
    };

    const sizeClassName = size ? sizeClassNames[size] : "";
    const shapeClassName = shape ? shapeClassNames[shape] : "";
    const finalClassName = trimWhiteSpaces(
        `select ${sizeClassName} ${shapeClassName} ${className || ""}`
    );

    const onSelectItem = (value: Option) => {
        onSelect(value);
        setExpanded(false);
    };

    const getOptionLabel = (value: OptionValue) => {
        const option = options.find((option) => option.value === value);

        return option?.label;
    };

    const finalHeaderPlaceholder = value
        ? getOptionLabel(value)
        : headerPlaceholder;

    return (
        <div className={finalClassName} ref={selectRef}>
            {label && <Label>{label}</Label>}
            <Button
                size={size}
                shape={shape}
                variant="outlined"
                color="secondary"
                onClick={onClickHeader}
                className="select__header"
                disabled={disabled}
                fullWidth
            >
                {finalHeaderPlaceholder}
                <Icon
                    iconName="chevron-down"
                    className={`select__icon ${
                        expanded ? "select__icon--expanded" : ""
                    }`}
                />{" "}
            </Button>
            {expanded && (
                <ul className="select__body">
                    {options.map((option) => {
                        return (
                            <li
                                key={option.value}
                                className={trimWhiteSpaces(
                                    `select__item ${
                                        value === option.value
                                            ? "select__item--selected"
                                            : ""
                                    }`
                                )}
                                onClick={() => onSelectItem(option)}
                            >
                                {option.label}
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};

export { Select };
