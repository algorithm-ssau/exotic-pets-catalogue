export default interface IButton {
    className: string;
    isLink?: boolean;
    act: string;
    onClick?: () => void;
}