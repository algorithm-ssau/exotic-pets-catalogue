import { AnimalsE, AnimalsWithImageI, ImageE, KingdomsE, SpeciesE, catalogueCardI, AnimalsPlusSpecies, SpeciesI } from "../Entity/AnimalsE";
import config from "../../../config";
import knex, { Knex } from "knex";

export class AnimalsSQL {
    db: Knex;

    constructor() {
        this.db = knex(config)
    }

    public async getAnimalById(idAnimal: number): Promise<AnimalsWithImageI> {
        let vAnimal: AnimalsWithImageI = {};

        try {
            vAnimal = await this.db<AnimalsWithImageI>({ a: AnimalsE.NAME })
                .leftJoin({ img: ImageE.NAME }, 'img.id', 'a.images_id')
                .where('a.id', idAnimal)
                .select('a.name', 'a.description', 'img.image')
                .first();
        } catch (e) {
            console.log('getAnimalById sql ERROR', e);
        }

        return vAnimal;
    }

    public async getAnimalsOfSpecifiedKingdom(nKingdom: number): Promise<AnimalsPlusSpecies> {
        let vKingplusSpec: AnimalsPlusSpecies = {};

        try {

            vKingplusSpec = {

                aAnimals: await this.db<catalogueCardI>({ king: KingdomsE.NAME })
                    .leftJoin({ spc: SpeciesE.NAME }, 'spc.kingdoms_id', 'king.id')
                    .leftJoin({ anima: AnimalsE.NAME }, 'anima.species_id', 'spc.id')
                    .leftJoin({ img: ImageE.NAME }, 'img.id', 'anima.images_id')
                    .where('king.id', nKingdom)
                    .select('anima.id', 'anima.name', 'anima.price', 'img.image'),

                aSpecies: await this.db<SpeciesI>({ spc: SpeciesE.NAME })
                    .where('spc.kingdoms_id', nKingdom)
                    .select('spc.id', 'spc.name')
            }

        } catch (e) {
            console.log('getAnimalsOfSpecifiedKingdom_With_Species sql ERROR', e);
        }

        return vKingplusSpec;
    }

    public async getAnimalsOfSpecifiedSpecies(nSpecies: number): Promise<catalogueCardI> {
        let vAnimal: catalogueCardI = {};

        try {
            vAnimal = await this.db<catalogueCardI>({ spc: SpeciesE.NAME })
                .leftJoin({ anima: AnimalsE.NAME }, 'anima.species_id', 'spc.id')
                .leftJoin({ img: ImageE.NAME }, 'img.id', 'anima.images_id')
                .where('spc.id', nSpecies)
                .select('anima.id', 'anima.name', 'anima.price', 'img.image');

        } catch (e) {
            console.log('getAnimalsOfSpecifiedSpecies sql ERROR', e);
        }

        return vAnimal;
    }

    public async getAllAnimals(): Promise<AnimalsPlusSpecies> {
        let vAnimalPlusSpec: AnimalsPlusSpecies = {};

        try {
            vAnimalPlusSpec = {

                aAnimals: await this.db<catalogueCardI>({ anima: AnimalsE.NAME })
                    .leftJoin({ img: ImageE.NAME }, 'img.id', 'anima.images_id')
                    .select('anima.id', 'anima.name', 'anima.price', 'img.image'),

                aSpecies: await this.db<SpeciesI>({ spc: SpeciesE.NAME })
                    .select('spc.id', 'spc.name')
            }

        } catch (e) {
            console.log('getAllAnimals sql ERROR', e);
        }

        return vAnimalPlusSpec;
    }

    public async searchAnimals(sTerm: string): Promise<catalogueCardI> {
        let vAnimal: catalogueCardI = {};

        try {
            vAnimal = await this.db<catalogueCardI>({ anima: AnimalsE.NAME })
                .leftJoin({ img: ImageE.NAME }, 'img.id', 'anima.images_id')
                .where('anima.name'.toLowerCase(), 'like', `%${sTerm}%`.toLowerCase())
                .select('anima.id', 'anima.name', 'anima.price', 'img.image');

        } catch (e) {
            console.log('getAnimalsOfSpecifiedSpecies sql ERROR', e);
        }

        return vAnimal;
    }
}