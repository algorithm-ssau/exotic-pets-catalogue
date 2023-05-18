import { AnimalsE, AnimalsWithImageI, ImageE, KingdomsE, SpeciesE, catalogueCardI} from "../Entity/AnimalsE";
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
            vAnimal = await this.db<AnimalsWithImageI>({a: AnimalsE.NAME})
                .leftJoin({img: ImageE.NAME}, 'img.id', 'a.images_id')
                .where('a.id', idAnimal)
                .select('a.name', 'a.description', 'img.image')
                .first();
        } catch (e) {
            console.log('getAnimalById sql ERROR', e);
        }

        return vAnimal;
    }

    public async getAnimalsOfSpecifiedKingdom(sKingdom: string): Promise<catalogueCardI> {
        let vAnimal: catalogueCardI = {};

        try {
            vAnimal = await this.db<catalogueCardI>({king: KingdomsE.NAME})
            .leftJoin({spc: SpeciesE.NAME}, 'spc.kingdoms_id', 'king.id')
            .leftJoin({anima: AnimalsE.NAME}, 'anima.species_id', 'spc.id')
            .leftJoin({img: ImageE.NAME}, 'img.id', 'anima.images_id')
            .where('king.name', sKingdom)
            .select('anima.id', 'anima.name', 'anima.price','img.image');

        } catch (e) {
            console.log('getAnimalsOfSpecifiedKingdom sql ERROR', e);
        }

        return vAnimal;
    }
}