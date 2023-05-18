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
}