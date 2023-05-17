export default interface IProduct {
    id: number;
    image: string;
    name: string;
    price: number;
    isFavourite?: boolean;
    isInCart?: boolean;
}