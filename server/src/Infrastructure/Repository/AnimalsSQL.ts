import { AnimalsE, AnimalsWithImageI, ImageE } from "../Entity/AnimalsE";
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
}