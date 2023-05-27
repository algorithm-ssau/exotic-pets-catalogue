export default interface IProduct {
    id: number;
    image: string;
    name: string;
    price: number;
    description?: string;
    isFavourite?: boolean;
    isInCart?: boolean;
}