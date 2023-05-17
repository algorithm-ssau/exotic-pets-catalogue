export default interface IProduct {
    id: number;
    name: string;
    price: number;
    isFavourite?: boolean;
    isInCart?: boolean;
}