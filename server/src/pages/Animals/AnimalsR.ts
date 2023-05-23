export namespace AnimalsR {
    
    export namespace getAnimalById {
        export const route = '/animals/get-one-by-id';

        export interface RequestI {
            id: number;
        }

        export interface ResponseI {
            name?: string;
            description?: string;
            image?: string;
        }
    }


    export namespace getAnimalsOfSpecifiedKingdom {
        export const route = '/animals/get-kingdom';

        export interface RequestI {
            kingdom: number;
        }

        export interface ResponseI {
            id?: number;
            name?: string;
            price?: number;
            image?: string;
        }
    }

    export namespace getAnimalsOfSpecifiedSpecies {
        export const route = '/animals/get-species';

        export interface RequestI {
            species: number;
        }

        export interface ResponseI {
            id?: number;
            name?: string;
            price?: number;
            image?: string;
        }
    }

    export namespace getAllAnimals {
        export const route = '/animals/get-all';

        export interface ResponseI {
            id?: number;
            name?: string;
            price?: number;
            image?: string;
        }
    }
}