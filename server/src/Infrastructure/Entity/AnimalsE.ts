export interface AnimalsWithImageI {
    name?: string;
    description?: string;
    image?: string;
}

export interface ImageI {
    id?: number;
    image?: string;
}

export class ImageE {
    public static NAME = 'images'
}

export class AnimalsE {
    public static NAME = 'animals';
}