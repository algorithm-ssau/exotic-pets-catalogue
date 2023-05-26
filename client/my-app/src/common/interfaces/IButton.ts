export default interface IButton {
    className: string;
    isLink?: boolean;
    act: string;
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: () => void;
    isDisabled?: boolean;
}