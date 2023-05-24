export interface AnimalsWithImageI {
    name?: string;
    description?: string;
    image?: string;
}

export interface KingdomAnuimalsWithSpecies {

    aAnimals?: {
        id?: number;
        name?: string;
        price?: number;
        image?: string;
    }

    aSpecies?: {
        id?: number;
        name?: string;
    }
}

export interface catalogueCardI{
    id?: number;
    name?: string;
    price?: number;
    image?: string;
}

export interface SpeciesI {
    id?: number;
    name?: string;
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