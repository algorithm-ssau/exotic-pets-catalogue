export default interface IProduct {
    description: string;
    id: number;
    image: string;
    name: string;
    price: number;
    isFavourite?: boolean;
    isInCart?: boolean;
}