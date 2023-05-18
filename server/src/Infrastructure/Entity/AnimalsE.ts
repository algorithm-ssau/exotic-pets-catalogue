export interface AnimalsWithImageI {
    name?: string;
    description?: string;
    image?: string;
}

export interface catalogueCardI{
    id?: number;
    name?: string;
    price?: number;
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

export class KingdomsE {
    public static NAME = 'kingdoms'
}

export class SpeciesE {
    public static NAME = 'species'
}